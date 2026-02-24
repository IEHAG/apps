console.log('auth.js: Loading start');

// Configuración de Supabase
var supabaseUrl = 'https://aipryeelikrxvrmxrjwg.supabase.co';
var supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpcHJ5ZWVsaWtyeHZybXhyandnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMDEzNjIsImV4cCI6MjA3Mjc3NzM2Mn0.VtmNrmhaCRf9aiDiJTBzF6Gs-Jwo5NW8AIBmDdFDWKk';

// Credenciales por defecto para uso offline
var DEFAULT_CREDENTIALS = {
  email: 'appsdocentes@iehectorabadgomez.edu.co',
  password: 'Master2025'
};

var supabase;
var isSupabaseAvailable = false;

// Funciones de utilidad y lógica (Declaradas antes para que el hoisting funcione correctamente)

function initializeSupabase() {
  try {
    if (typeof window.supabase !== 'undefined' && window.supabase) {
      supabase = window.supabase.createClient(supabaseUrl, supabaseKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: false,
          storage: sessionStorage
        }
      });
      isSupabaseAvailable = true;
      console.log('Supabase Initialized');
      return true;
    } else {
      console.warn('Supabase SDK not loaded');
      return false;
    }
  } catch (error) {
    console.warn('Supabase init error', error);
    return false;
  }
}

function getAuthErrorMessage(error) {
  var messages = {
    'Invalid login credentials': 'Credenciales incorrectas.',
    'Email not confirmed': 'Email no confirmado.',
    'Too many requests': 'Demasiados intentos.',
    'Network request failed': 'Error de conexión.'
  };
  return messages[error.message] || error.message || 'Error desconocido';
}

async function loginUser(email, password) {
  try {
    if (!isSupabaseAvailable || !supabase) initializeSupabase();
    if (!isSupabaseAvailable || !supabase) return await localLogin(email, password);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password: password });
      if (error) return await localLogin(email, password);
      return data;
    } catch (e) {
      return await localLogin(email, password);
    }
  } catch (error) {
    console.error('loginUser error', error);
    throw error;
  }
}

async function localLogin(email, password) {
  var emailTrimmed = email.trim().toLowerCase();
  var allowedDomain = '@iehectorabadgomez.edu.co';
  if (!emailTrimmed.endsWith(allowedDomain)) {
    throw new Error('Dominio no permitido');
  }
  if (!password || password.trim() === '') {
    throw new Error('Contraseña vacía');
  }
  var username = emailTrimmed.split('@')[0];
  var localSession = {
    user: {
      id: 'local-user-' + Date.now(),
      email: emailTrimmed,
      user_metadata: {
        full_name: username.charAt(0).toUpperCase() + username.slice(1) + ' - Docente'
      }
    },
    access_token: 'local-token-' + Date.now(),
    refresh_token: 'local-refresh-' + Date.now()
  };
  sessionStorage.setItem('local_auth_session', JSON.stringify(localSession));
  return localSession;
}

async function logoutUser(redirect) {
  if (redirect === undefined) redirect = true;
  try {
    sessionStorage.removeItem('local_auth_session');
    if (isSupabaseAvailable && supabase) {
      await supabase.auth.signOut();
    }
    if (redirect) window.location.href = 'login.html';
  } catch (error) {
    if (redirect) window.location.href = 'login.html';
  }
}

async function checkSession() {
  try {
    var localSession = sessionStorage.getItem('local_auth_session');
    if (localSession) return JSON.parse(localSession);
    if (isSupabaseAvailable && supabase) {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    }
    return null;
  } catch (error) {
    return null;
  }
}

async function registerUser(email, password) {
  if (!isSupabaseAvailable || !supabase) throw new Error('Offline mode: registration unavailable');
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw new Error(getAuthErrorMessage(error));
  return data;
}

async function recoverPassword(email) {
  if (!isSupabaseAvailable || !supabase) throw new Error('Offline mode: recovery unavailable');
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + '/reset-password.html'
  });
  if (error) throw new Error(getAuthErrorMessage(error));
  return data;
}

async function handleAuthState() {
  var currentPath = window.location.pathname;
  var publicPages = ['login.html', 'register.html', 'reset-password.html'];
  var isPublicPage = false;
  for (var i = 0; i < publicPages.length; i++) {
    if (currentPath.indexOf(publicPages[i]) !== -1) {
      isPublicPage = true;
      break;
    }
  }
  
  var session = await checkSession();

  if (!session && !isPublicPage) {
    window.location.href = 'login.html';
    return;
  }
  if (session && currentPath.indexOf('login.html') !== -1) {
    window.location.href = 'index.html';
    return;
  }
  if (session && !isPublicPage) {
    var protectedContent = document.getElementById('protectedContent');
    if (protectedContent) protectedContent.classList.remove('d-none');
    var logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', function() { logoutUser(); });
  }
}

// Exportar funciones (Asignación directa para evitar recursión)
window.auth = {
  loginUser: loginUser,
  logoutUser: logoutUser,
  checkSession: checkSession,
  registerUser: registerUser,
  recoverPassword: recoverPassword,
  getSupabase: function() { return supabase; }
};

window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.checkSession = checkSession;
window.registerUser = registerUser;
window.recoverPassword = recoverPassword;

console.log('auth.js: Exports complete');

// Iniciar
initializeSupabase();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', handleAuthState);
} else {
  handleAuthState();
}

console.log('auth.js: Load end');
