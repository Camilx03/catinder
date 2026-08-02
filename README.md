# 🐱 Catinder

Una app estilo Tinder pero para gatos: puntúa gatos aleatorios con ❤ o ✖, guarda tus favoritos en una galería y lleva la cuenta de tus votos.

Proyecto hecho con **React + Vite**, consumiendo la API pública de [TheCatAPI](https://thecatapi.com).

## 🔗 Demo en vivo

👉 [Ver Catinder desplegado](https://catinder-kappa.vercel.app)

<!-- Sustituye el enlace de arriba por tu URL de Vercel cuando lo despliegues -->

## 📸 Capturas

<!-- Añade aquí una captura o un GIF de la app funcionando.
     Arrastra la imagen a este archivo desde la web de GitHub y se subirá sola. -->

## ✨ Funcionalidades

- Muestra gatos aleatorios traídos de TheCatAPI
- Votación con dos botones (me gusta / no me gusta)
- Galería de favoritos que se va llenando con los gatos que te gustan
- Contador de votos en tiempo real
- Precarga de imágenes para que no aparezcan a trozos
- Diseño propio en CSS, sin librerías externas

## 🛠️ Tecnologías

- React
- Vite
- CSS puro
- Fetch API + TheCatAPI

## 🚀 Cómo ejecutarlo en local

```bash
# Clona el repositorio
git clone https://github.com/Camilx03/catinder.git
cd catinder

# Instala las dependencias
npm install

# Arranca el servidor de desarrollo
npm run dev
```

Luego abre en el navegador la URL que aparece en la terminal (normalmente `http://localhost:5173`).

## 📂 Estructura del proyecto

```
src/
├── componentes/
│   ├── TarjetaGato.jsx   → tarjeta con el gato y los botones de votar
│   ├── Contador.jsx      → marcador de votos
│   └── Favoritos.jsx     → galería de gatos que han gustado
├── hooks/
│   └── useGato.js        → lógica para traer gatos de la API
├── App.jsx               → componente principal que coordina todo
└── App.css               → estilos
```

---

Hecho por [Camilo](https://github.com/Camilx03) 🐈