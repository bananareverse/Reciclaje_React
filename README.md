# 🌱 App Ambiental

**App Ambiental** es una aplicación web desarrollada con **React** que promueve la sostenibilidad y el reciclaje. Permite a los usuarios explorar productos reciclados, obtener información detallada y realizar compras de forma sencilla.

---

## 🚀 Características principales

- 🏠 **Página de inicio**: Presenta productos destacados y nuevos.
- 🛍️ **Exploración de productos**: Filtrado por marcas y paginación de productos reciclados.
- 📦 **Detalles del producto**: Información completa con variantes, colores y estado de stock.
- 🛒 **Carrito de compras**: Gestión de productos seleccionados para compra.
- 🔗 **Navegación dinámica**: Fluida gracias a `react-router-dom`.

---

## 🛠️ Tecnologías utilizadas

- **Frontend**: React + TypeScript
- **Enrutamiento**: React Router
- **Estilos**: CSS con clases personalizadas
- **Iconos**: React Icons
- **Gestión de datos**: Hooks personalizados (`useProduct`, `useHomeProducts`, `useFilteredProducts`, etc.)
- **Editor de texto enriquecido**: [TipTap](https://tiptap.dev/) para descripciones avanzadas de productos

---

## 📁 Estructura del proyecto
src/
├── components/
│ └── products/
├── hooks/
├── pages/
├── shared/
├── interface/
├── helpers/
├── assets/


---

## ⚙️ Instalación y configuración

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/app-ambiental.git
   cd app-ambiental
Instala las dependencias:

npm install
Crea un archivo .env en la raíz del proyecto con tus variables de entorno:

env
VITE_SUPABASE_URL=tu-url-de-supabase
VITE_SUPABASE_KEY=tu-clave-publica

Inicia el servidor de desarrollo:
npm run dev

Entidad-relación 
![supabase-schema-avoeofxyamrxgthqxpsl](https://github.com/user-attachments/assets/a3a19554-ea90-4a86-87f7-8f140714b629)


🌐 Rutas principales
Ruta	Descripción
/	Página de inicio
/reciclaje	Exploración de productos reciclados
/reciclaje/:slug	Página de detalles de producto
/nosotros	Información institucional
