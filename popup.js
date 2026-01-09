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
let currentLang = 'en';

// Translations
const translations = {
  en: {
    appName: 'DevClip',
    settings: 'Settings',
    tagsLabel: 'Tags (optional)',
    tagsPlaceholder: 'javascript, tutorial, react',
    notesLabel: 'Notes (optional)',
    notesPlaceholder: 'Add your notes here...',
    saveBtn: 'Save to Notion',
    saving: 'Saving...',
    settingsTitle: 'Settings',
    apiTokenLabel: 'Notion API Token',
    databaseIdLabel: 'Database ID',
    getTokenFrom: 'Get your token from',
    databaseIdHelp: 'Copy from your Notion database URL',
    saveSettingsBtn: 'Save Settings',
    testConnectionBtn: 'Test Connection',
    testing: 'Testing...',
    quickSetupGuide: 'Quick Setup Guide',
    setupStep1: 'Go to Notion Integrations',
    setupStep2: 'Create a new integration and copy the token',
    setupStep3: 'Open your Notion database and click "..." → "Add connections"',
    setupStep4: 'Select your integration',
    setupStep5: 'Copy the database ID from the URL',
    saveSuccess: '✓ Saved to Notion successfully!',
    saveFailed: 'Failed to save',
    connectionSuccess: '✓ Connection successful!',
    connectionFailed: 'Connection failed',
    settingsSaved: 'Settings saved successfully!',
    fillAllFields: 'Please fill in all fields',
    configureFirst: 'Please configure your Notion API settings first',
    privacyTitle: 'Your Privacy is Protected',
    privacyMessage: 'Your API token is stored locally on your device only. We never collect, transmit, or access your credentials.'
  },
  'zh-CN': {
    appName: 'DevClip',
    settings: '设置',
    tagsLabel: '标签（可选）',
    tagsPlaceholder: 'javascript, 教程, react',
    notesLabel: '笔记（可选）',
    notesPlaceholder: '在这里添加你的笔记...',
    saveBtn: '保存到 Notion',
    saving: '保存中...',
    settingsTitle: '设置',
    apiTokenLabel: 'Notion API 令牌',
    databaseIdLabel: '数据库 ID',
    getTokenFrom: '从这里获取令牌',
    databaseIdHelp: '从 Notion 数据库 URL 复制',
    saveSettingsBtn: '保存设置',
    testConnectionBtn: '测试连接',
    testing: '测试中...',
    quickSetupGuide: '快速设置指南',
    setupStep1: '访问 Notion Integrations',
    setupStep2: '创建新的集成并复制令牌',
    setupStep3: '打开 Notion 数据库，点击 "..." → "添加连接"',
    setupStep4: '选择你的集成',
    setupStep5: '从 URL 复制数据库 ID',
    saveSuccess: '✓ 成功保存到 Notion！',
    saveFailed: '保存失败',
    connectionSuccess: '✓ 连接成功！',
    connectionFailed: '连接失败',
    settingsSaved: '设置保存成功！',
    fillAllFields: '请填写所有字段',
    configureFirst: '请先配置 Notion API 设置',
    privacyTitle: '您的隐私受到保护',
    privacyMessage: '您的 API 令牌仅存储在您的设备本地。我们绝不会收集、传输或访问您的凭据。'
  },
  'zh-TW': {
    appName: 'DevClip',
    settings: '設定',
    tagsLabel: '標籤（可選）',
    tagsPlaceholder: 'javascript, 教學, react',
    notesLabel: '筆記（可選）',
    notesPlaceholder: '在這裡新增你的筆記...',
    saveBtn: '儲存到 Notion',
    saving: '儲存中...',
    settingsTitle: '設定',
    apiTokenLabel: 'Notion API 令牌',
    databaseIdLabel: '資料庫 ID',
    getTokenFrom: '從這裡取得令牌',
    databaseIdHelp: '從 Notion 資料庫 URL 複製',
    saveSettingsBtn: '儲存設定',
    testConnectionBtn: '測試連線',
    testing: '測試中...',
    quickSetupGuide: '快速設定指南',
    setupStep1: '造訪 Notion Integrations',
    setupStep2: '建立新的整合並複製令牌',
    setupStep3: '開啟 Notion 資料庫，點選 "..." → "新增連線"',
    setupStep4: '選擇你的整合',
    setupStep5: '從 URL 複製資料庫 ID',
    saveSuccess: '✓ 成功儲存到 Notion！',
    saveFailed: '儲存失敗',
    connectionSuccess: '✓ 連線成功！',
    connectionFailed: '連線失敗',
    settingsSaved: '設定儲存成功！',
    fillAllFields: '請填寫所有欄位',
    configureFirst: '請先設定 Notion API 設定',
    privacyTitle: '您的隱私受到保護',
    privacyMessage: '您的 API 令牌僅儲存在您的裝置本機。我們絕不會收集、傳輸或存取您的憑證。'
  },
  ja: {
    appName: 'DevClip',
    settings: '設定',
    tagsLabel: 'タグ（任意）',
    tagsPlaceholder: 'javascript, チュートリアル, react',
    notesLabel: 'メモ（任意）',
    notesPlaceholder: 'ここにメモを追加...',
    saveBtn: 'Notion に保存',
    saving: '保存中...',
    settingsTitle: '設定',
    apiTokenLabel: 'Notion API トークン',
    databaseIdLabel: 'データベース ID',
    getTokenFrom: 'トークンを取得',
    databaseIdHelp: 'Notion データベース URL からコピー',
    saveSettingsBtn: '設定を保存',
    testConnectionBtn: '接続テスト',
    testing: 'テスト中...',
    quickSetupGuide: 'クイックセットアップガイド',
    setupStep1: 'Notion Integrations にアクセス',
    setupStep2: '新しいインテグレーションを作成してトークンをコピー',
    setupStep3: 'Notion データベースを開き、"..." → "接続を追加" をクリック',
    setupStep4: 'インテグレーションを選択',
    setupStep5: 'URL からデータベース ID をコピー',
    saveSuccess: '✓ Notion に保存しました！',
    saveFailed: '保存に失敗しました',
    connectionSuccess: '✓ 接続成功！',
    connectionFailed: '接続に失敗しました',
    settingsSaved: '設定を保存しました！',
    fillAllFields: 'すべてのフィールドを入力してください',
    configureFirst: '最初に Notion API 設定を構成してください',
    privacyTitle: 'プライバシーは保護されています',
    privacyMessage: 'API トークンはお使いのデバイスにのみローカルに保存されます。当社はお客様の認証情報を収集、送信、またはアクセスすることはありません。'
  },
  ko: {
    appName: 'DevClip',
    settings: '설정',
    tagsLabel: '태그 (선택사항)',
    tagsPlaceholder: 'javascript, 튜토리얼, react',
    notesLabel: '메모 (선택사항)',
    notesPlaceholder: '여기에 메모를 추가하세요...',
    saveBtn: 'Notion에 저장',
    saving: '저장 중...',
    settingsTitle: '설정',
    apiTokenLabel: 'Notion API 토큰',
    databaseIdLabel: '데이터베이스 ID',
    getTokenFrom: '토큰 가져오기',
    databaseIdHelp: 'Notion 데이터베이스 URL에서 복사',
    saveSettingsBtn: '설정 저장',
    testConnectionBtn: '연결 테스트',
    testing: '테스트 중...',
    quickSetupGuide: '빠른 설정 가이드',
    setupStep1: 'Notion Integrations 방문',
    setupStep2: '새 통합을 만들고 토큰 복사',
    setupStep3: 'Notion 데이터베이스를 열고 "..." → "연결 추가" 클릭',
    setupStep4: '통합 선택',
    setupStep5: 'URL에서 데이터베이스 ID 복사',
    saveSuccess: '✓ Notion에 저장되었습니다!',
    saveFailed: '저장 실패',
    connectionSuccess: '✓ 연결 성공!',
    connectionFailed: '연결 실패',
    settingsSaved: '설정이 저장되었습니다!',
    fillAllFields: '모든 필드를 입력하세요',
    configureFirst: '먼저 Notion API 설정을 구성하세요',
    privacyTitle: '개인정보 보호',
    privacyMessage: 'API 토큰은 기기에만 로컬로 저장됩니다. 당사는 귀하의 자격 증명을 수집, 전송 또는 액세스하지 않습니다.'
  },
  es: {
    appName: 'DevClip',
    settings: 'Configuración',
    tagsLabel: 'Etiquetas (opcional)',
    tagsPlaceholder: 'javascript, tutorial, react',
    notesLabel: 'Notas (opcional)',
    notesPlaceholder: 'Añade tus notas aquí...',
    saveBtn: 'Guardar en Notion',
    saving: 'Guardando...',
    settingsTitle: 'Configuración',
    apiTokenLabel: 'Token API de Notion',
    databaseIdLabel: 'ID de base de datos',
    getTokenFrom: 'Obtén tu token de',
    databaseIdHelp: 'Copia desde la URL de tu base de datos de Notion',
    saveSettingsBtn: 'Guardar configuración',
    testConnectionBtn: 'Probar conexión',
    testing: 'Probando...',
    quickSetupGuide: 'Guía de configuración rápida',
    setupStep1: 'Ve a Notion Integrations',
    setupStep2: 'Crea una nueva integración y copia el token',
    setupStep3: 'Abre tu base de datos de Notion y haz clic en "..." → "Añadir conexiones"',
    setupStep4: 'Selecciona tu integración',
    setupStep5: 'Copia el ID de la base de datos desde la URL',
    saveSuccess: '✓ ¡Guardado en Notion exitosamente!',
    saveFailed: 'Error al guardar',
    connectionSuccess: '✓ ¡Conexión exitosa!',
    connectionFailed: 'Conexión fallida',
    settingsSaved: '¡Configuración guardada exitosamente!',
    fillAllFields: 'Por favor completa todos los campos',
    configureFirst: 'Por favor configura primero tu API de Notion',
    privacyTitle: 'Tu privacidad está protegida',
    privacyMessage: 'Tu token API se almacena localmente solo en tu dispositivo. Nunca recopilamos, transmitimos ni accedemos a tus credenciales.'
  },
  pt: {
    appName: 'DevClip',
    settings: 'Configurações',
    tagsLabel: 'Tags (opcional)',
    tagsPlaceholder: 'javascript, tutorial, react',
    notesLabel: 'Notas (opcional)',
    notesPlaceholder: 'Adicione suas notas aqui...',
    saveBtn: 'Salvar no Notion',
    saving: 'Salvando...',
    settingsTitle: 'Configurações',
    apiTokenLabel: 'Token API do Notion',
    databaseIdLabel: 'ID do banco de dados',
    getTokenFrom: 'Obtenha seu token de',
    databaseIdHelp: 'Copie da URL do seu banco de dados do Notion',
    saveSettingsBtn: 'Salvar configurações',
    testConnectionBtn: 'Testar conexão',
    testing: 'Testando...',
    quickSetupGuide: 'Guia de configuração rápida',
    setupStep1: 'Vá para Notion Integrations',
    setupStep2: 'Crie uma nova integração e copie o token',
    setupStep3: 'Abra seu banco de dados do Notion e clique em "..." → "Adicionar conexões"',
    setupStep4: 'Selecione sua integração',
    setupStep5: 'Copie o ID do banco de dados da URL',
    saveSuccess: '✓ Salvo no Notion com sucesso!',
    saveFailed: 'Falha ao salvar',
    connectionSuccess: '✓ Conexão bem-sucedida!',
    connectionFailed: 'Conexão falhou',
    settingsSaved: 'Configurações salvas com sucesso!',
    fillAllFields: 'Por favor preencha todos os campos',
    configureFirst: 'Por favor configure primeiro suas configurações da API do Notion',
    privacyTitle: 'Sua privacidade está protegida',
    privacyMessage: 'Seu token API é armazenado localmente apenas no seu dispositivo. Nunca coletamos, transmitimos ou acessamos suas credenciais.'
  },
  hi: {
    appName: 'DevClip',
    settings: 'सेटिंग्स',
    tagsLabel: 'टैग (वैकल्पिक)',
    tagsPlaceholder: 'javascript, ट्यूटोरियल, react',
    notesLabel: 'नोट्स (वैकल्पिक)',
    notesPlaceholder: 'यहाँ अपने नोट्स जोड़ें...',
    saveBtn: 'Notion में सहेजें',
    saving: 'सहेजा जा रहा है...',
    settingsTitle: 'सेटिंग्स',
    apiTokenLabel: 'Notion API टोकन',
    databaseIdLabel: 'डेटाबेस ID',
    getTokenFrom: 'अपना टोकन यहाँ से प्राप्त करें',
    databaseIdHelp: 'अपने Notion डेटाबेस URL से कॉपी करें',
    saveSettingsBtn: 'सेटिंग्स सहेजें',
    testConnectionBtn: 'कनेक्शन टेस्ट करें',
    testing: 'टेस्ट हो रहा है...',
    quickSetupGuide: 'त्वरित सेटअप गाइड',
    setupStep1: 'Notion Integrations पर जाएं',
    setupStep2: 'एक नया इंटीग्रेशन बनाएं और टोकन कॉपी करें',
    setupStep3: 'अपना Notion डेटाबेस खोलें और "..." → "कनेक्शन जोड़ें" पर क्लिक करें',
    setupStep4: 'अपना इंटीग्रेशन चुनें',
    setupStep5: 'URL से डेटाबेस ID कॉपी करें',
    saveSuccess: '✓ Notion में सफलतापूर्वक सहेजा गया!',
    saveFailed: 'सहेजना विफल रहा',
    connectionSuccess: '✓ कनेक्शन सफल!',
    connectionFailed: 'कनेक्शन विफल',
    settingsSaved: 'सेटिंग्स सफलतापूर्वक सहेजी गईं!',
    fillAllFields: 'कृपया सभी फ़ील्ड भरें',
    configureFirst: 'कृपया पहले अपनी Notion API सेटिंग्स कॉन्फ़िगर करें',
    privacyTitle: 'आपकी गोपनीयता सुरक्षित है',
    privacyMessage: 'आपका API टोकन केवल आपके डिवाइस पर स्थानीय रूप से संग्रहीत है। हम कभी भी आपकी साख एकत्र, प्रसारित या एक्सेस नहीं करते हैं।'
  },
  ar: {
    appName: 'DevClip',
    settings: 'الإعدادات',
    tagsLabel: 'العلامات (اختياري)',
    tagsPlaceholder: 'javascript, درس, react',
    notesLabel: 'ملاحظات (اختياري)',
    notesPlaceholder: 'أضف ملاحظاتك هنا...',
    saveBtn: 'حفظ في Notion',
    saving: 'جاري الحفظ...',
    settingsTitle: 'الإعدادات',
    apiTokenLabel: 'رمز API الخاص بـ Notion',
    databaseIdLabel: 'معرف قاعدة البيانات',
    getTokenFrom: 'احصل على الرمز من',
    databaseIdHelp: 'انسخ من عنوان URL لقاعدة بيانات Notion',
    saveSettingsBtn: 'حفظ الإعدادات',
    testConnectionBtn: 'اختبار الاتصال',
    testing: 'جاري الاختبار...',
    quickSetupGuide: 'دليل الإعداد السريع',
    setupStep1: 'انتقل إلى Notion Integrations',
    setupStep2: 'أنشئ تكاملاً جديداً وانسخ الرمز',
    setupStep3: 'افتح قاعدة بيانات Notion وانقر على "..." ← "إضافة اتصالات"',
    setupStep4: 'حدد التكامل الخاص بك',
    setupStep5: 'انسخ معرف قاعدة البيانات من عنوان URL',
    saveSuccess: '✓ تم الحفظ في Notion بنجاح!',
    saveFailed: 'فشل الحفظ',
    connectionSuccess: '✓ نجح الاتصال!',
    connectionFailed: 'فشل الاتصال',
    settingsSaved: 'تم حفظ الإعدادات بنجاح!',
    fillAllFields: 'يرجى ملء جميع الحقول',
    configureFirst: 'يرجى تكوين إعدادات Notion API أولاً',
    privacyTitle: 'خصوصيتك محمية',
    privacyMessage: 'يتم تخزين رمز API الخاص بك محليًا على جهازك فقط. نحن لا نجمع أو ننقل أو نصل إلى بيانات اعتمادك أبدًا.'
  }
};

// Get translation
function t(key) {
  return translations[currentLang]?.[key] || translations.en[key] || key;
}

// Initialize
async function init() {
  await loadLanguage();
  await loadConfig();
  await loadCurrentPage();
  bindEvents();
  checkSetup();
  applyTranslations();
}

// Load language preference
async function loadLanguage() {
  const result = await chrome.storage.local.get(['language']);
  currentLang = result.language || detectBrowserLanguage();
  document.getElementById('langSelect').value = currentLang;
  document.documentElement.lang = currentLang;
  document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
}

// Detect browser language
function detectBrowserLanguage() {
  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith('zh-TW') || lang.startsWith('zh-HK')) return 'zh-TW';
  if (lang.startsWith('zh')) return 'zh-CN';
  if (lang.startsWith('ja')) return 'ja';
  if (lang.startsWith('ko')) return 'ko';
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('pt')) return 'pt';
  if (lang.startsWith('hi')) return 'hi';
  if (lang.startsWith('ar')) return 'ar';
  return 'en';
}

// Apply translations
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
  
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.title = t(key);
  });
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
    showStatus(t('configureFirst'), 'info');
    document.getElementById('saveBtn').disabled = true;
  } else {
    document.getElementById('saveBtn').disabled = false;
  }
}

// Bind events
function bindEvents() {
  // Language selector
  document.getElementById('langSelect').addEventListener('change', async (e) => {
    currentLang = e.target.value;
    await chrome.storage.local.set({ language: currentLang });
    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    applyTranslations();
  });
  
  // Navigation
  document.getElementById('settingsBtn').addEventListener('click', showSettings);
  document.getElementById('backBtn').addEventListener('click', showMain);
  
  // Save to Notion
  document.getElementById('saveBtn').addEventListener('click', saveToNotion);
  
  // Settings
  document.getElementById('saveSettingsBtn').addEventListener('click', saveSettings);
  document.getElementById('testConnectionBtn').addEventListener('click', testConnection);
  
  // Toggle password visibility
  document.getElementById('toggleToken').addEventListener('click', () => {
    const input = document.getElementById('apiToken');
    const btn = document.getElementById('toggleToken');
    if (input.type === 'password') {
      input.type = 'text';
      btn.textContent = '🙈';
    } else {
      input.type = 'password';
      btn.textContent = '👁️';
    }
  });
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
    showSettingsStatus(t('fillAllFields'), 'error');
    return;
  }
  
  await chrome.storage.local.set({
    notionApiToken: apiToken,
    notionDatabaseId: databaseId
  });
  
  config.apiToken = apiToken;
  config.databaseId = databaseId;
  
  showSettingsStatus(t('settingsSaved'), 'success');
  
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
    showSettingsStatus(t('fillAllFields'), 'error');
    return;
  }
  
  const btn = document.getElementById('testConnectionBtn');
  const btnText = btn.querySelector('span:last-child');
  const originalText = btnText.textContent;
  btnText.textContent = t('testing');
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
      showSettingsStatus(t('connectionSuccess'), 'success');
    } else {
      const error = await response.json();
      showSettingsStatus(`${t('connectionFailed')}: ${error.message || 'Invalid credentials'}`, 'error');
    }
  } catch (error) {
    showSettingsStatus(`${t('connectionFailed')}: ${error.message}`, 'error');
  } finally {
    btnText.textContent = originalText;
    btn.disabled = false;
  }
}

// Save to Notion
async function saveToNotion() {
  const tags = document.getElementById('tags').value.trim();
  const notes = document.getElementById('notes').value.trim();
  
  const btn = document.getElementById('saveBtn');
  const btnText = document.getElementById('saveBtnText');
  const originalText = btnText.textContent;
  
  btn.disabled = true;
  btnText.textContent = t('saving');
  
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
      showStatus(t('saveSuccess'), 'success');
      
      // Clear form
      document.getElementById('tags').value = '';
      document.getElementById('notes').value = '';
      
      // Close popup after 1.5 seconds
      setTimeout(() => window.close(), 1500);
    } else {
      const error = await response.json();
      showStatus(`${t('saveFailed')}: ${error.message || 'Unknown error'}`, 'error');
    }
  } catch (error) {
    showStatus(`${t('saveFailed')}: ${error.message}`, 'error');
  } finally {
    btn.disabled = false;
    btnText.textContent = originalText;
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
