# ProWi - Landing Page Comercial

Landing page dinámica e interactiva para ProWi, el Motor de Promociones con Inteligencia Artificial.

## 🌐 URLs del Proyecto

- **Sitio Web Público:** https://prowi.vercel.app
- **Sitio Interno (Info & Documentación):** https://prowi-landing-ppt-v61x.vercel.app/

## 📋 Descripción

Esta landing page está diseñada para presentar ProWi de manera atractiva y profesional, destacando sus características principales, beneficios y casos de uso mediante ejemplos interactivos.

**Propuesta de Valor:** ProWi elimina el trabajo manual de crear combos en el POS. Se integra a tu punto de venta actual para aplicar promociones automáticamente sin crear productos falsos ni rebajar stock manualmente.

## ✨ Características

### Diseño Moderno
- **Responsive**: Adaptable a todos los dispositivos (desktop, tablet, móvil)
- **Animaciones suaves**: Efectos al hacer scroll y transiciones fluidas
- **Paleta de colores de marca**: #4A494B (gris oscuro), #F66C5E (coral), #F7F7F7 (blanco)
- **Tipografía**: Nunito Sans

### Secciones Incluidas

1. **Hero Section**
   - Nueva propuesta de valor: "Basta de Perder Tiempo con Combos Manuales"
   - Enfoque en el dolor del cliente (crear combos manualmente)
   - Estadísticas: 2 min crear promoción, 100% automático, 0 errores
   - Tarjeta de ejemplo animada (Combo Desayuno)
   - Call-to-action prominente

2. **El Problema (NUEVO)**
   - Comparación visual ANTES vs DESPUÉS
   - Destaca el trabajo manual actual (crear productos falsos, rebajar stock)
   - Muestra la solución con ProWi (portal web, integración automática)

3. **¿Qué es ProWi?**
   - Clarifica que ProWi NO es un POS, se integra al POS actual
   - Portal web para crear promociones en 2 minutos
   - Diagrama de flujo: Crear Regla → Se Integra → Se Aplica Sola

4. **Características**
   - Grid de 6 características principales
   - Enfocadas en la integración con el POS actual
   - Iconos visuales y hover effects

5. **Ejemplos Interactivos (RENOVADOS)**
   - **Combo Desayuno**: Café + Sandwich + Jugo (50% en el más barato)
   - **Pack Fiesta**: Botillería - Pisco + Bebidas + Hielo a precio fijo $10.990
   - **Promo Care**: Productos de belleza capilar Dove (4 productos, $1.500 descuento)
   - **Happy Hour**: 2x1 en tragos L-J 18:00-20:00 (Piscolas)
   - Botones con nombres comerciales + tipo de regla
   - Diseño optimizado para caber en una pantalla
   - Responsive para móviles

6. **Beneficios**
   - 6 beneficios clave enfocados en ahorro de tiempo y eliminar errores
   - Cards con animaciones

7. **Integraciones**
   - Sistema de login para proteger información técnica (NUEVO)
   - AndesPOS integrado
   - Link a requisitos técnicos

8. **Sistema de Login (NUEVO)**
   - Protege documentación técnica y roadmap
   - Credenciales: demo/demo2024, prowi-admin/ProWi2025!, andespos/AndesPOS2025
   - Sesiones de 24 horas
   - Archivos: `login.html` y `assets/js/auth.js`

9. **Requisitos Técnicos (Protegido con Login)**
   - Lista detallada de requisitos del POS
   - Diagrama de secuencia de integración
   - Roadmap actualizado Q1-Q4 2026

10. **Roadmap (Protegido con Login)**
    - Q1 2026: Analíticas Avanzadas
    - Q2 2026: Cupones de Descuento
    - Q3 2026: Descuentos por Medio de Pago
    - Q4 2026: Sistema de Fidelización

11. **CTA Final**
    - Botones de acción
    - Links a documentación protegida

12. **Footer**
    - Links de navegación
    - Información de contacto

### Funcionalidades JavaScript

- ✅ Menú móvil hamburguesa
- ✅ Navegación smooth scroll
- ✅ Cambio de ejemplos con tabs
- ✅ Animaciones al hacer scroll (Intersection Observer)
- ✅ Efecto de partículas en el hero
- ✅ Efecto ripple en botones
- ✅ Navbar con shadow dinámico
- ✅ Animación de timeline
- ✅ Easter egg en consola
- ✅ Modo debug (Ctrl+Shift+D)
- ✅ **Sistema de autenticación con localStorage (NUEVO)**
- ✅ **Protección de páginas sensibles (NUEVO)**
- ✅ **Gestión de sesiones de 24 horas (NUEVO)**

## 📁 Estructura del Proyecto

```
PROWI/
├── index.html              # Página principal (landing comercial)
├── login.html              # Página de login (NUEVO)
├── requisitos.html         # Documentación técnica protegida (NUEVO)
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos principales
│   ├── js/
│   │   ├── script.js       # JavaScript interactivo
│   │   └── auth.js         # Sistema de autenticación (NUEVO)
│   └── images/             # Carpeta para imágenes
├── docs/
│   ├── Manual_ProWi.pdf    # Manual de usos
│   ├── Requisitos_POS_ProWi.pdf  # Requisitos técnicos
│   ├── API_Engine_Promociones.pdf  # Documentación API
│   └── Presentacion_Mantendedor_Promociones.pdf  # Presentación panel admin
└── README.md               # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Abrir directamente
1. Navega a la carpeta del proyecto
2. Abre `index.html` en tu navegador favorito

### Opción 2: Servidor local (recomendado)
```bash
# Usando Python 3
cd PROWI
python -m http.server 8000

# Usando Node.js con http-server
npx http-server

# Luego abre http://localhost:8000 en tu navegador
```

## 🔐 Sistema de Autenticación

### Credenciales de Acceso
Para acceder a la documentación técnica y roadmap:

| Usuario | Contraseña | Propósito |
|---------|------------|-----------|
| `demo` | `demo2024` | Demo general |
| `prowi-admin` | `ProWi2025!` | Administración ProWi |
| `andespos` | `AndesPOS2025` | Cliente AndesPOS |

### Gestionar Usuarios
Para agregar o modificar usuarios, edita `assets/js/auth.js`:

```javascript
const AUTHORIZED_USERS = {
    'nuevo-usuario': 'contraseña123',
    // ...más usuarios
};
```

### Características de Seguridad
- Sesiones de 24 horas en localStorage
- Redirección automática si no está autenticado
- Botón de logout en páginas protegidas
- Validación de credenciales antes de dar acceso

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `assets/css/styles.css`:
```css
:root {
    --color-dark: #4A494B;      /* Gris oscuro */
    --color-coral: #F66C5E;     /* Coral/Rojo */
    --color-light: #F7F7F7;     /* Blanco/Gris claro */
}
```

### Agregar Nuevos Ejemplos
1. Agrega un nuevo botón en la sección `.example-selector`
2. Crea un nuevo `.example-panel` con el mismo ID
3. El JavaScript manejará automáticamente el cambio

### Modificar Contenido
Todo el contenido está en `index.html` organizado por secciones con comentarios claros.

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔧 Tecnologías Utilizadas

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript Vanilla (ES6+)
- Google Fonts (Nunito Sans)
- Intersection Observer API
- No frameworks - 100% código nativo

## 📊 Rendimiento

- ✅ Sin dependencias externas (excepto fuentes)
- ✅ Carga rápida
- ✅ Animaciones optimizadas con CSS
- ✅ Lazy loading preparado
- ✅ Accesibilidad (ARIA, keyboard navigation)

## 🎯 Mejoras Futuras

- [ ] Agregar formulario de contacto funcional
- [ ] Integrar con backend para demos
- [ ] Agregar más animaciones de scroll
- [ ] Modo oscuro
- [ ] Galería de casos de éxito
- [ ] Blog/Noticias
- [ ] Chatbot de ayuda

## 📞 Contacto

Para más información sobre ProWi:
- Email: contacto@prowi.com
- Documentación: Ver carpeta `docs/`

## 📝 Notas de Desarrollo

### Navegadores Compatibles
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

### Características de Accesibilidad
- Navegación por teclado
- Focus trap en menú móvil
- ARIA labels donde sea necesario
- Contraste de colores WCAG AA

### Tips de Uso
- Presiona `Ctrl+Shift+D` para modo debug
- Escribe `prowiDebug.enableDebugMode()` en consola para depuración
- Revisa la consola para mensajes útiles

## 🏆 Créditos

Desarrollado para ProWi - Motor de Promociones con IA
Diseño basado en el Manual de Usos ProWi

---

**¡Listo para usar!** 🚀

Abre `index.html` en tu navegador y comienza a presentar ProWi de manera impactante.
