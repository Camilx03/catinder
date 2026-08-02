import { useState, useEffect, useCallback } from "react";

// URL de TheCatAPI: pedimos un gato aleatorio en cada llamada
const API_URL = "https://api.thecatapi.com/v1/images/search";

// Hook personalizado que se encarga de traer gatos de la API.
// Lo separo en su propio archivo para no mezclar la lógica de datos
// con la interfaz, y para poder reutilizarlo si hiciera falta.
export function useGato() {
  const [gato, setGato] = useState(null); // el gato actual
  const [cargando, setCargando] = useState(true); // ¿estamos esperando la API?
  const [error, setError] = useState(null); // por si la API falla

  // Función que pide un gato nuevo.
  // useCallback evita que se recree en cada render.
  const traerNuevoGato = useCallback(async () => {
    setCargando(true);
    setError(null);
    try {
      const respuesta = await fetch(API_URL);
      if (!respuesta.ok) throw new Error("No se pudo conectar con TheCatAPI");
      const datos = await respuesta.json();
      // La API devuelve un array con un solo gato dentro
      const nuevoGato = datos[0];

      // Precargamos la imagen antes de mostrarla, así no aparece
      // "a trozos". Cuando termina de cargar, la ponemos en pantalla.
      const img = new Image();
      img.src = nuevoGato.url;
      img.onload = () => {
        setGato(nuevoGato);
        setCargando(false);
      };
      img.onerror = () => {
        setError("La imagen del gato no cargó, probando otro...");
        traerNuevoGato(); // si una imagen falla, pedimos otra
      };
    } catch (err) {
      setError(err.message);
      setCargando(false);
    }
  }, []);

  // Al montar el componente, traemos el primer gato automáticamente
  useEffect(() => {
    traerNuevoGato();
  }, [traerNuevoGato]);

  return { gato, cargando, error, traerNuevoGato };
}