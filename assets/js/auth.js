// Sistema de autenticación para ProWi
// Este archivo maneja el login y verificación de acceso a documentación técnica

// Lista de usuarios autorizados (en producción esto debería estar en un backend)
const AUTHORIZED_USERS = {
    // Formato: username: password_hash_simple
    'demo': 'demo2024',
    'prowi-admin': 'ProWi2025!',
    'andespos': 'AndesPOS2025'
};

// Función para verificar si el usuario está autenticado
function isAuthenticated() {
    const authToken = localStorage.getItem('prowi_auth_token');
    const authUser = localStorage.getItem('prowi_auth_user');
    const authExpiry = localStorage.getItem('prowi_auth_expiry');

    if (!authToken || !authUser || !authExpiry) {
        return false;
    }

    // Verificar si el token ha expirado (24 horas)
    const now = new Date().getTime();
    if (now > parseInt(authExpiry)) {
        logout();
        return false;
    }

    return true;
}

// Función para hacer login
function login(username, password) {
    // Verificar credenciales
    if (AUTHORIZED_USERS[username] && AUTHORIZED_USERS[username] === password) {
        // Generar token simple (en producción usar JWT)
        const token = btoa(username + ':' + new Date().getTime());
        const expiry = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 horas

        // Guardar en localStorage
        localStorage.setItem('prowi_auth_token', token);
        localStorage.setItem('prowi_auth_user', username);
        localStorage.setItem('prowi_auth_expiry', expiry);

        return true;
    }

    return false;
}

// Función para hacer logout
function logout() {
    localStorage.removeItem('prowi_auth_token');
    localStorage.removeItem('prowi_auth_user');
    localStorage.removeItem('prowi_auth_expiry');
}

// Función para proteger páginas
function protectPage() {
    if (!isAuthenticated()) {
        // Guardar la página actual para redirigir después del login
        sessionStorage.setItem('prowi_redirect_after_login', window.location.pathname);
        window.location.href = 'login.html';
    }
}

// Manejo del formulario de login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');

        if (login(username, password)) {
            // Login exitoso
            const redirectPath = sessionStorage.getItem('prowi_redirect_after_login');
            sessionStorage.removeItem('prowi_redirect_after_login');

            // Redirigir a la página solicitada o a requisitos.html por defecto
            window.location.href = redirectPath || 'requisitos.html';
        } else {
            // Login fallido
            errorMessage.classList.add('show');
            document.getElementById('password').value = '';

            // Ocultar mensaje después de 3 segundos
            setTimeout(function() {
                errorMessage.classList.remove('show');
            }, 3000);
        }
    });
}

// Función para obtener el nombre del usuario actual
function getCurrentUser() {
    return localStorage.getItem('prowi_auth_user');
}

// Función para crear botón de logout en páginas protegidas
function addLogoutButton() {
    const user = getCurrentUser();
    if (user && document.querySelector('.nav-menu')) {
        const navMenu = document.querySelector('.nav-menu');
        const logoutItem = document.createElement('li');
        logoutItem.innerHTML = `<a href="#" id="logoutBtn" style="color: #ff6b6b;">Cerrar Sesión (${user})</a>`;
        navMenu.appendChild(logoutItem);

        document.getElementById('logoutBtn').addEventListener('click', function(e) {
            e.preventDefault();
            logout();
            window.location.href = 'login.html';
        });
    }
}

// Ejecutar cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Si estamos en una página protegida (requisitos.html)
    if (window.location.pathname.includes('requisitos.html')) {
        protectPage();
        addLogoutButton();
    }

    // Si estamos en login.html y ya estamos autenticados, redirigir
    if (window.location.pathname.includes('login.html') && isAuthenticated()) {
        window.location.href = 'requisitos.html';
    }
});
