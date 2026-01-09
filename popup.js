// State
let config = {
  apiToken: '',
  databaseId: ''
};
let currentPage = {
  title: '',
  url: '',
  content: ''
};

// Initialize
async function init() {
  await loadConfig();
  await loadCurrentPage();
  bindEvents();
  checkSetup();
}

// Load configuration
async function loadConfig() {
  const result = await chrome.storage.local.get(['notionApiToken', 'notionDatabaseId']);
  config.apiToken = result.notionApiToken || '';
  config.databaseId = result.notionDatabaseId || '';
  
  // Populate settings form
  document.getElementById('apiToken').value = config.apiToken;
  document.getElementById('databaseId').value = config.databaseId;
}

// Load current page info
async function loadCurrentPage() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (tab) {
    currentPage.title = tab.title || 'Untitled';
    currentPage.url = tab.url || '';
    
    // Update UI
    document.getElementById('pageTitle').textContent = currentPage.title;
    document.getElementById('pageUrl').textContent = currentPage.url;
    
    // Extract page content
    try {
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: extractPageContent
      });
      
      if (results && results[0]) {
        currentPage.content = results[0].result;
      }
    } catch (error) {
      console.error('Failed to extract content:', error);
    }
  }
}

// Extract page content (runs in page context)
function extractPageContent() {
  const content = {
    text: '',
    codeBlocks: []
  };
  
  // Get main text content
  const article = document.querySelector('article') || document.querySelector('main') || document.body;
  content.text = article.innerText.substring(0, 2000); // First 2000 chars
  
  // Extract code blocks
  const codeElements = document.querySelectorAll('pre code, pre, code');
  codeElements.forEach((el, index) => {
    if (index < 5 && el.textContent.length > 20) { // Max 5 code blocks
      content.codeBlocks.push({
        language: el.className.replace('language-', '') || 'plain',
        code: el.textContent.trim()
      });
    }
  });
  
  return content;
}

// Check if setup is complete
function checkSetup() {
  if (!config.apiToken || !config.databaseId) {
    showStatus('Please configure your Notion API settings first', 'info');
    document.getElementById('saveBtn').disabled = true;
  } else {
    document.getElementById('saveBtn').disabled = false;
  }
}

// Bind events
function bindEvents() {
  // Navigation
  document.getElementById('settingsBtn').addEventListener('click', showSettings);
  document.getElementById('backBtn').addEventListener('click', showMain);
  
  // Save to Notion
  document.getElementById('saveBtn').addEventListener('click', saveToNotion);
  
  // Settings
  document.getElementById('saveSettingsBtn').addEventListener('click', saveSettings);
  document.getElementById('testConnectionBtn').addEventListener('click', testConnection);
}

// Show settings view
function showSettings() {
  document.getElementById('mainView').classList.remove('active');
  document.getElementById('settingsView').classList.add('active');
}

// Show main view
function showMain() {
  document.getElementById('settingsView').classList.remove('active');
  document.getElementById('mainView').classList.add('active');
}

// Save settings
async function saveSettings() {
  const apiToken = document.getElementById('apiToken').value.trim();
  const databaseId = document.getElementById('databaseId').value.trim();
  
  if (!apiToken || !databaseId) {
    showSettingsStatus('Please fill in all fields', 'error');
    return;
  }
  
  await chrome.storage.local.set({
    notionApiToken: apiToken,
    notionDatabaseId: databaseId
  });
  
  config.apiToken = apiToken;
  config.databaseId = databaseId;
  
  showSettingsStatus('Settings saved successfully!', 'success');
  
  setTimeout(() => {
    showMain();
    checkSetup();
  }, 1000);
}

// Test Notion connection
async function testConnection() {
  const apiToken = document.getElementById('apiToken').value.trim();
  const databaseId = document.getElementById('databaseId').value.trim();
  
  if (!apiToken || !databaseId) {
    showSettingsStatus('Please fill in all fields first', 'error');
    return;
  }
  
  const btn = document.getElementById('testConnectionBtn');
  btn.textContent = 'Testing...';
  btn.disabled = true;
  
  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Notion-Version': '2022-06-28'
      }
    });
    
    if (response.ok) {
      showSettingsStatus('✓ Connection successful!', 'success');
    } else {
      const error = await response.json();
      showSettingsStatus(`Connection failed: ${error.message || 'Invalid credentials'}`, 'error');
    }
  } catch (error) {
    showSettingsStatus(`Connection failed: ${error.message}`, 'error');
  } finally {
    btn.textContent = 'Test Connection';
    btn.disabled = false;
  }
}

// Save to Notion
async function saveToNotion() {
  const tags = document.getElementById('tags').value.trim();
  const notes = document.getElementById('notes').value.trim();
  
  const btn = document.getElementById('saveBtn');
  const btnText = document.getElementById('saveBtnText');
  
  btn.disabled = true;
  btnText.textContent = 'Saving...';
  
  try {
    // Build Notion page content
    const children = [];
    
    // Add URL
    children.push({
      object: 'block',
      type: 'paragraph',
      paragraph: {
        rich_text: [{
          type: 'text',
          text: { content: currentPage.url, link: { url: currentPage.url } }
        }]
      }
    });
    
    // Add notes if provided
    if (notes) {
      children.push({
        object: 'block',
        type: 'heading_2',
        heading_2: {
          rich_text: [{ type: 'text', text: { content: 'Notes' } }]
        }
      });
      children.push({
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [{ type: 'text', text: { content: notes } }]
        }
      });
    }
    
    // Add code blocks if found
    if (currentPage.content.codeBlocks && currentPage.content.codeBlocks.length > 0) {
      children.push({
        object: 'block',
        type: 'heading_2',
        heading_2: {
          rich_text: [{ type: 'text', text: { content: 'Code Snippets' } }]
        }
      });
      
      currentPage.content.codeBlocks.forEach(block => {
        children.push({
          object: 'block',
          type: 'code',
          code: {
            language: block.language || 'plain text',
            rich_text: [{ type: 'text', text: { content: block.code.substring(0, 2000) } }]
          }
        });
      });
    }
    
    // Create page in Notion
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiToken}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: { database_id: config.databaseId },
        properties: {
          title: {
            title: [{ text: { content: currentPage.title } }]
          },
          URL: {
            url: currentPage.url
          },
          Tags: tags ? {
            multi_select: tags.split(',').map(tag => ({ name: tag.trim() }))
          } : undefined
        },
        children: children
      })
    });
    
    if (response.ok) {
      showStatus('✓ Saved to Notion successfully!', 'success');
      
      // Clear form
      document.getElementById('tags').value = '';
      document.getElementById('notes').value = '';
      
      // Close popup after 1.5 seconds
      setTimeout(() => window.close(), 1500);
    } else {
      const error = await response.json();
      showStatus(`Failed to save: ${error.message || 'Unknown error'}`, 'error');
    }
  } catch (error) {
    showStatus(`Error: ${error.message}`, 'error');
  } finally {
    btn.disabled = false;
    btnText.textContent = 'Save to Notion';
  }
}

// Show status message
function showStatus(message, type = 'info') {
  const status = document.getElementById('status');
  status.textContent = message;
  status.className = `status show ${type}`;
  
  setTimeout(() => {
    status.classList.remove('show');
  }, 5000);
}

// Show settings status message
function showSettingsStatus(message, type = 'info') {
  const status = document.getElementById('settingsStatus');
  status.textContent = message;
  status.className = `status show ${type}`;
  
  setTimeout(() => {
    status.classList.remove('show');
  }, 5000);
}

// Initialize on load
init();
