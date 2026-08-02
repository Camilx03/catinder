import { useState } from "react";
import { useGato } from "./hooks/useGato";
import TarjetaGato from "./components/TarjetaGato";
import Contador from "./components/Contador";
import Favoritos from "./components/Favoritos";
import "./App.css";

// Componente principal: aquí vive el estado y se coordina todo.
// Los componentes hijos solo pintan; las decisiones se toman aquí.
function App() {
  // El hook nos da el gato actual y una función para pedir otro
  const { gato, cargando, error, traerNuevoGato } = useGato();

  // Estado de los votos y de la lista de favoritos
  const [meGusta, setMeGusta] = useState(0);
  const [noMeGusta, setNoMeGusta] = useState(0);
  const [favoritos, setFavoritos] = useState([]);

  // Se ejecuta cuando el usuario pulsa uno de los dos botones.
  // "leGusta" es true si dio a ❤, false si dio a ✖.
  function manejarVoto(leGusta) {
    if (leGusta) {
      setMeGusta((n) => n + 1);
      // Añadimos el gato actual a la lista de favoritos
      setFavoritos((lista) => [...lista, gato]);
    } else {
      setNoMeGusta((n) => n + 1);
    }
    // En cualquier caso, pedimos un gato nuevo para seguir votando
    traerNuevoGato();
  }

  return (
    <div className="app">
      <header className="cabecera">
        <h1>🐱 Catinder</h1>
        <p>¿Te gusta este gato? Tú decides.</p>
      </header>

      <Contador meGusta={meGusta} noMeGusta={noMeGusta} />

      <TarjetaGato
        gato={gato}
        cargando={cargando}
        error={error}
        alVotar={manejarVoto}
      />

      <Favoritos favoritos={favoritos} />

      <footer className="pie">
        <p>
          Hecho con React y{" "}
          <a href="https://thecatapi.com" target="_blank" rel="noreferrer">
            TheCatAPI
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;