// Galería con los gatos que han gustado.
// Recibe el array de favoritos y lo pinta en forma de cuadrícula.
function Favoritos({ favoritos }) {
  // Si todavía no hay favoritos, mostramos un mensaje en vez de un hueco vacío
  if (favoritos.length === 0) {
    return (
      <div className="favoritos">
        <h2>Tus favoritos</h2>
        <p className="favoritos-vacio">
          Aún no has dado a ningún gato ❤. ¡Empieza a votar!
        </p>
      </div>
    );
  }

  return (
    <div className="favoritos">
      <h2>Tus favoritos ({favoritos.length})</h2>
      <div className="favoritos-grid">
        {favoritos.map((gato) => (
          // Usamos el id del gato como key, que es único y lo da la API
          <img
            key={gato.id}
            src={gato.url}
            alt="Gato favorito"
            className="favoritos-miniatura"
          />
        ))}
      </div>
    </div>
  );
}

export default Favoritos;