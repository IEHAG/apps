// Configuración de Supabase
const supabaseUrl = 'https://aipryeelikrxvrmxrjwg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpcHJ5ZWVsaWtyeHZybXhyandnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMDEzNjIsImV4cCI6MjA3Mjc3NzM2Mn0.VtmNrmhaCRf9aiDiJTBzF6Gs-Jwo5NW8AIBmDdFDWKk';

// Credenciales por defecto para uso offline
const DEFAULT_CREDENTIALS = {
  email: 'appsdocentes@iehectorabadgomez.edu.co',
  password: 'Master2025'
};

let supabase;
let isSupabaseAvailable = false;

// Intentar inicializar Supabase
try {
  if (window.supabase) {
    supabase = window.supabase.createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: true,         // ⛔ No guarda sesión entre cierres
        autoRefreshToken: false,       // ⛔ No renueva token automáticamente
        storage: sessionStorage        // ✅ Sesión temporal
      }
    });
    isSupabaseAvailable = true;
    console.log('✅ Supabase inicializado correctamente');
  } else {
    console.warn('⚠️ Supabase SDK no está cargado. Usando autenticación local.');
  }
} catch (error) {
  console.warn('⚠️ Error al inicializar Supabase. Usando autenticación local:', error);
}

// Función para traducir errores
function getAuthErrorMessage(error) {
  const messages = {
    'Invalid login credentials': 'Credenciales incorrectas. Por favor verifique su email y contraseña.',
    'Email not confirmed': 'Su email no ha sido confirmado. Por favor revise su bandeja de entrada.',
    'Too many requests': 'Demasiados intentos fallidos. Por favor intente más tarde.',
    'Network request failed': 'Error de conexión. Por favor verifique su conexión a internet.'
  };
  return messages[error.message] || error.message || 'Error desconocido al iniciar sesión';
}

// Funciones de autenticación
async function loginUser(email, password) {
  try {
    // Si Supabase no está disponible, usar autenticación local
    if (!isSupabaseAvailable || !supabase) {
      return await localLogin(email, password);
    }

    // Intentar autenticación con Supabase
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (error) throw new Error(getAuthErrorMessage(error));
      return data;
    } catch (supabaseError) {
      console.warn('⚠️ Error con Supabase, intentando autenticación local:', supabaseError);
      return await localLogin(email, password);
    }
  } catch (error) {
    console.error('Error en loginUser:', error);
    throw error;
  }
}

// Función de autenticación local
async function localLogin(email, password) {
  // Verificar credenciales por defecto
  if (email.trim() === DEFAULT_CREDENTIALS.email && password === DEFAULT_CREDENTIALS.password) {
    // Crear sesión local
    const localSession = {
      user: {
        id: 'local-user',
        email: DEFAULT_CREDENTIALS.email,
        user_metadata: {
          full_name: 'Docente Víctor Cañola'
        }
      },
      access_token: 'local-token-' + Date.now(),
      refresh_token: 'local-refresh-' + Date.now()
    };
    
    // Guardar en sessionStorage
    sessionStorage.setItem('local_auth_session', JSON.stringify(localSession));
    console.log('✅ Autenticación local exitosa');
    return localSession;
  } else {
    throw new Error('Credenciales incorrectas. Use: appsdocentes@iehectorabadgomez.edu.co / Master2025');
  }
}

async function logoutUser(redirect = true) {
  try {
    // Limpiar sesión local
    sessionStorage.removeItem('local_auth_session');
    
    // Intentar cerrar sesión en Supabase si está disponible
    if (isSupabaseAvailable && supabase) {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) console.warn('Error al cerrar sesión en Supabase:', error);
      } catch (error) {
        console.warn('Error al cerrar sesión en Supabase:', error);
      }
    }
    
    if (redirect) {
      window.location.href = 'login.html';
    }
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    // Aún así redirigir a login
    if (redirect) {
      window.location.href = 'login.html';
    }
  }
}

async function checkSession() {
  try {
    // Verificar sesión local primero
    const localSession = sessionStorage.getItem('local_auth_session');
    if (localSession) {
      try {
        const parsed = JSON.parse(localSession);
        console.log('✅ Sesión local encontrada');
        return parsed;
      } catch (error) {
        sessionStorage.removeItem('local_auth_session');
      }
    }
    
    // Intentar verificar sesión en Supabase si está disponible
    if (isSupabaseAvailable && supabase) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          console.log('✅ Sesión de Supabase encontrada');
          return session;
        }
      } catch (error) {
        console.warn('Error al verificar sesión en Supabase:', error);
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error al verificar sesión:', error);
    return null;
  }
}

async function registerUser(email, password) {
  try {
    if (!isSupabaseAvailable || !supabase) {
      throw new Error('El registro solo está disponible cuando Supabase está conectado. Para usar la aplicación offline, use las credenciales por defecto.');
    }
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw new Error(getAuthErrorMessage(error));
    return data;
  } catch (error) {
    console.error('Error en registerUser:', error.message);
    throw error;
  }
}

async function recoverPassword(email) {
  try {
    if (!isSupabaseAvailable || !supabase) {
      throw new Error('La recuperación de contraseña solo está disponible cuando Supabase está conectado. Use las credenciales por defecto: appsdocentes@iehectorabadgomez.edu.co / Master2025');
    }
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/reset-password.html'
    });
    if (error) throw new Error(getAuthErrorMessage(error));
    return data;
  } catch (error) {
    console.error('Error en recoverPassword:', error.message);
    throw error;
  }
}

// Manejar la sesión actual
async function handleAuthState() {
  const currentPath = window.location.pathname;
  const publicPages = ['login.html', 'register.html', 'reset-password.html'];
  const isPublicPage = publicPages.some(page => currentPath.includes(page));
  const session = await checkSession();

  if (!session && !isPublicPage) {
    console.log('🔐 No hay sesión. Redirigiendo a login...');
    window.location.href = 'login.html';
    return;
  }

  if (session && currentPath.includes('login.html')) {
    console.log('🧭 Usuario con sesión intentando ir a login → redirigiendo a index');
    window.location.href = 'index.html';
    return;
  }

  if (session && !isPublicPage) {
    try {
      let user;
      // Obtener usuario según el tipo de sesión
      if (session.user && session.user.id === 'local-user') {
        // Sesión local
        user = session.user;
        console.log('👤 Usuario autenticado (local):', user);
      } else if (isSupabaseAvailable && supabase) {
        // Sesión de Supabase
        const { data: { user: supabaseUser } } = await supabase.auth.getUser();
        user = supabaseUser;
        console.log('👤 Usuario autenticado (Supabase):', user);
      }

      const protectedContent = document.getElementById('protectedContent');
      if (protectedContent) protectedContent.classList.remove('d-none');

      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) logoutBtn.addEventListener('click', () => logoutUser());
    } catch (error) {
      console.error('Error al obtener usuario:', error);
    }
  }

  console.log('✅ Página permitida sin redirección:', currentPath);
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  handleAuthState();
});

// Exportar funciones globalmente para usarlas desde HTML
window.auth = {
  loginUser,
  logoutUser,
  checkSession,
  registerUser,
  recoverPassword,
  supabase
};

console.log('✅ auth.js cargado correctamente con sesión temporal.');
