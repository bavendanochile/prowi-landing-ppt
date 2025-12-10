# ProWi - Landing Page Comercial

Landing page dinámica e interactiva para ProWi, el Motor de Promociones con Inteligencia Artificial.

## 📋 Descripción

Esta landing page está diseñada para presentar ProWi de manera atractiva y profesional, destacando sus características principales, beneficios y casos de uso mediante ejemplos interactivos.

## ✨ Características

### Diseño Moderno
- **Responsive**: Adaptable a todos los dispositivos (desktop, tablet, móvil)
- **Animaciones suaves**: Efectos al hacer scroll y transiciones fluidas
- **Paleta de colores de marca**: #4A494B (gris oscuro), #F66C5E (coral), #F7F7F7 (blanco)
- **Tipografía**: Nunito Sans

### Secciones Incluidas

1. **Hero Section**
   - Título impactante con estadísticas
   - Tarjeta de ejemplo animada
   - Call-to-action prominente

2. **¿Qué es ProWi?**
   - Descripción del producto
   - Características clave
   - Diagrama de flujo del proceso

3. **Características**
   - Grid de 6 características principales
   - Iconos visuales
   - Hover effects

4. **Tipos de Descuentos**
   - 4 tipos de descuentos explicados
   - Ejemplos visuales
   - Estado de desarrollo (Próximamente)

5. **Ejemplos Interactivos**
   - 4 casos de uso con cálculos detallados
   - Tabs para cambiar entre ejemplos
   - Tablas comparativas

6. **Beneficios**
   - 6 beneficios clave
   - Cards con animaciones

7. **Requisitos Técnicos**
   - Lista de requisitos del POS
   - Diagrama de integración

8. **Roadmap**
   - Timeline de desarrollo
   - Estado de cada feature

9. **CTA Final**
   - Botones de acción
   - Links a documentación

10. **Footer**
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

## 📁 Estructura del Proyecto

```
PROWI/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos principales
│   ├── js/
│   │   └── script.js       # JavaScript interactivo
│   └── images/             # Carpeta para imágenes
├── docs/
│   ├── Manual_ProWi.pdf    # Manual de usos
│   └── Requisitos_POS_ProWi.pdf  # Requisitos técnicos
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
