# 🚀 Guía Rápida - Landing Page ProWi

## Inicio Rápido

### Opción 1: Abrir directamente (más simple)
1. Haz doble clic en `abrir.bat`
2. O abre `index.html` con tu navegador favorito

### Opción 2: Con servidor local (recomendado para presentaciones)
```bash
# Opción A: Python (si lo tienes instalado)
python -m http.server 8000

# Opción B: Node.js
npx http-server

# Luego abre: http://localhost:8000
```

## 📋 Checklist para Presentación al Cliente

### Antes de la reunión
- [ ] Verifica que todos los archivos estén presentes
- [ ] Prueba la landing page en tu navegador
- [ ] Revisa que todas las animaciones funcionen
- [ ] Prueba el menú móvil (redimensiona la ventana)
- [ ] Verifica los links de descarga de PDFs
- [ ] Prepara ejemplos específicos para tu cliente

### Durante la presentación

#### 1. Hero Section (Inicio)
- Destaca los **3 stats principales**: 100% Automático, <100ms, 0 Errores
- Muestra la tarjeta animada con ejemplo de promoción
- Explica el valor del cálculo automático

#### 2. ¿Qué es ProWi?
- Enfatiza la **Inteligencia Artificial Simbólica**
- Muestra el diagrama de flujo simple
- Resalta que NO requiere intervención del cajero

#### 3. Características
- Recorre las 6 tarjetas principales
- Adapta según el negocio del cliente:
  - ¿Tienen categorías de productos? → Menciona esa característica
  - ¿Tienen múltiples sucursales? → Destaca las promociones por ubicación
  - ¿Tienen programa VIP? → Habla de las categorías de clientes

#### 4. Tipos de Descuentos
- **Empieza con ejemplos simples**: Monto fijo y porcentual
- Muestra cómo el sistema **elige automáticamente** el mejor descuento
- Explica el "Precio fijo" para packs

#### 5. Ejemplos Interactivos ⭐ (LA ESTRELLA)
Usa los tabs para mostrar diferentes escenarios:

**Ejemplo 1** - Descuento al Menor Precio
- Cliente compra 3 productos
- Sistema identifica el más barato automáticamente
- Aplica el 50% de descuento
- **Muestra la tabla de cálculo en tiempo real**

**Ejemplo 2** - Precio Fijo del Pack
- Pack completo a $180.000 vs $230.000 normal
- Ahorro claro: $50.000
- Perfecto para estrategia de bundles

**Ejemplo 3** - Monto Fijo al Lote
- Descuento fijo de $20.000
- Fácil de entender para el cliente final
- Bueno para combos predefinidos

**Ejemplo 4** - Producto Gratis
- Psicológicamente atractivo
- "GRATIS" vende más que "descuento"
- Ideal para add-ons digitales

#### 6. Beneficios
Enfatiza según el dolor del cliente:
- ¿Pierden ventas por olvidos? → "Aplicación Automática"
- ¿Tienen errores en caja? → "Cero Errores"
- ¿Quieren más ventas? → "Incremento en Ventas"
- ¿Clientes se quejan? → "Mejor Experiencia"

#### 7. Requisitos Técnicos
- Muestra que es **flexible**
- Funciona con catálogo básico
- Las características avanzadas son **opcionales**
- Menciona la integración sencilla (WebSocket/API)

#### 8. Roadmap
- Muestra que **ya está funcionando** (Motor de Promociones)
- Próximas features: Medios de pago, Fidelización, Cupones
- Demuestra visión a largo plazo

#### 9. CTA Final
- Ofrece **demo personalizada**
- Descarga de documentación
- Siguiente paso claro

## 🎯 Tips de Presentación

### Adapta el Mensaje

**Para Retail Pequeño/Mediano:**
- Enfoca en simplicidad y automatización
- "Se acabaron los errores en promociones"
- "Tu equipo no necesita recordar todas las ofertas"

**Para Cadenas Grandes:**
- Enfoca en escalabilidad y control
- "Gestión centralizada de promociones en todas las sucursales"
- "Estadísticas en tiempo real"

**Para E-commerce:**
- Enfoca en experiencia del cliente
- "Siempre la mejor oferta, automáticamente"
- "Aumenta conversión y ticket promedio"

### Frases Clave

✅ "ProWi calcula en **menos de 100 milisegundos** la mejor promoción"
✅ "**Cero intervención** del cajero - totalmente automático"
✅ "El cliente **siempre** recibe el mejor beneficio disponible"
✅ "**Inteligencia Artificial Simbólica** - no adivina, calcula"
✅ "Se integra con tu POS actual sin cambiar tu flujo de trabajo"

### Manejo de Objeciones

**"Es muy complejo para mi negocio"**
→ Muestra que solo necesita el catálogo de productos para empezar
→ Las demás características son opcionales

**"¿Y si mi POS no es compatible?"**
→ Explica que funciona con API REST o transferencia de archivos
→ Menciona la flexibilidad de integración

**"¿Cuánto tiempo toma implementarlo?"**
→ Explica el proceso de conciliación de datos
→ Muestra el diagrama de integración (simple)

**"¿Necesito cambiar mi sistema actual?"**
→ NO, ProWi se integra con el POS existente
→ No requiere cambios en el hardware

## 📱 Navegación Rápida Durante la Demo

**Atajos de teclado:**
- `Inicio` → Volver arriba
- `Ctrl+Shift+D` → Modo debug (para verificar elementos)
- Click en navegación → Scroll suave a sección

**Orden recomendado de presentación:**
1. Hero (30 seg) → Primera impresión
2. ¿Qué es? (1 min) → Contexto
3. Ejemplos Interactivos (3-4 min) → **CORE** de la demo
4. Beneficios (1-2 min) → Valor para su negocio
5. Requisitos (1 min) → Viabilidad técnica
6. CTA (30 seg) → Próximos pasos

**Tiempo total:** 7-9 minutos + preguntas

## 🔧 Personalización de Último Minuto

### Si necesitas cambiar algo rápido:

**Email de contacto:**
- Busca en `index.html`: `contacto@prowi.com`
- Reemplaza con el email real

**Logos o imágenes:**
- Coloca imágenes en `assets/images/`
- Actualiza referencias en HTML

**Colores:**
- Edita `assets/css/styles.css` líneas 17-19 (variables CSS)

**Contenido:**
- Todo está en `index.html` con comentarios claros
- Busca las secciones por `<!-- Nombre de Sección -->`

## 📊 Métricas de Éxito de la Presentación

Al final de la demo, el cliente debería:
- ✅ Entender que ProWi es **automático**
- ✅ Ver al menos **2 ejemplos** de cálculo de promociones
- ✅ Comprender que **maximiza beneficio** del cliente
- ✅ Saber que funciona con su POS actual
- ✅ Tener claro el **próximo paso** (demo personalizada)

## 🎬 Cierre Efectivo

**Pregunta final:**
*"¿Te gustaría que agendemos una demo personalizada con datos de tu negocio para ver ProWi calculando promociones de tus productos reales?"*

**Opciones de seguimiento:**
1. Demo técnica con datos reales
2. Reunión con equipo técnico para integración
3. Prueba piloto en una sucursal
4. Análisis de ROI específico para su negocio

---

## 📞 Soporte Durante la Presentación

Si algo no funciona:
1. **Refresca la página** (F5)
2. **Abre la consola** (F12) y revisa errores
3. **Usa modo debug** (Ctrl+Shift+D)
4. Como última opción, **muestra los PDFs** en `docs/`

---

## ✨ ¡Éxito en tu presentación!

Recuerda: La landing page es solo la **herramienta de apoyo**. Tu conocimiento del producto y capacidad de adaptarte al cliente son lo más importante.

**¡Buena suerte! 🚀**
