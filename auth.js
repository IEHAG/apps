// Configuración de Supabase
const supabaseUrl = 'https://bltyyxfzksybuklfqzgu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsdHl5eGZ6a3N5YnVrbGZxemd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMzgyODUsImV4cCI6MjA2NTkxNDI4NX0.33PL39IJNMHEbjuPkcS5LxtfPB-06quJw1kdhxQH-WY';

let supabase;
if (window.supabase) {
  supabase = window.supabase.createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      storage: localStorage
    }
  });
} else {
  console.error('❌ Supabase SDK no está cargado.');
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
    const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) throw new Error(getAuthErrorMessage(error));
    return data;
  } catch (error) {
    console.error('Error en loginUser:', error);
    throw error;
  }
}

async function logoutUser(redirect = true) {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    if (redirect) {
      window.location.href = 'login.html';
    }
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    throw error;
  }
}

async function checkSession() {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error('Error al verificar sesión:', error);
    return null;
  }
}

async function registerUser(email, password) {
  try {
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

  // 🔐 Si no hay sesión y no estás en página pública → redirigir
  if (!session && !isPublicPage) {
    console.log('🔐 No hay sesión. Redirigiendo a login...');
    window.location.href = 'login.html';
    return;
  }

  // ✅ Si hay sesión y estás en login.html → redirigir al inicio
  if (session && currentPath.includes('login.html')) {
    console.log('🧭 Usuario con sesión intentando ir a login → redirigiendo a index');
    window.location.href = 'index.html';
    return;
  }

  // ✅ Si hay sesión y estás en una página protegida, mostrar contenido
  if (session && !isPublicPage) {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      console.log('👤 Usuario autenticado:', user);

      const protectedContent = document.getElementById('protectedContent');
      if (protectedContent) protectedContent.classList.remove('d-none');

      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) logoutBtn.addEventListener('click', logoutUser);
    } catch (error) {
      console.error('Error al obtener usuario:', error);
    }
  }

  console.log('✅ Página permitida sin redirección:', currentPath);
}
