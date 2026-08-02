// Pequeño marcador que muestra cuántos gatos han gustado y cuántos no.
// Recibe los dos números por props y solo se encarga de mostrarlos.
function Contador({ meGusta, noMeGusta }) {
  return (
    <div className="contador">
      <span className="contador-item">
        ❤ {meGusta}
      </span>
      <span className="contador-item">
        ✖ {noMeGusta}
      </span>
    </div>
  );
}

export default Contador;