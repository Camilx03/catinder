// Tarjeta que muestra el gato actual y los botones para votar.
// Recibe todo por props: no tiene estado propio, solo pinta y avisa
// al componente padre cuando el usuario pulsa un botón.
function TarjetaGato({ gato, cargando, error, alVotar }) {
  return (
    <div className="tarjeta">
      {/* Zona de la imagen: cambia según si carga, falla o hay gato */}
      <div className="tarjeta-imagen">
        {cargando && <p className="mensaje">Buscando un gatete... 🐱</p>}
        {error && <p className="mensaje error">{error}</p>}
        {!cargando && gato && (
          <img src={gato.url} alt="Un gato aleatorio esperando tu voto" />
        )}
      </div>

      {/* Botones de votar. Los desactivamos mientras carga para
          que no se pueda votar dos veces al mismo gato por error. */}
      <div className="tarjeta-botones">
        <button
          className="boton boton-no"
          onClick={() => alVotar(false)}
          disabled={cargando}
          aria-label="No me gusta"
        >
          ✖
        </button>
        <button
          className="boton boton-si"
          onClick={() => alVotar(true)}
          disabled={cargando}
          aria-label="Me gusta"
        >
          ❤
        </button>
      </div>
    </div>
  );
}

export default TarjetaGato;