import { Instrument, InstrumentBrand, InstrumentType } from "@/lib/data";

const API_BASE_URL = "https://n8n-proyect.onrender.com/webhook/cln";

/**
 * Función genérica para realizar peticiones fetch y manejar errores comunes.
 * @param endpoint El endpoint de la API al que se va a llamar.
 * @returns La respuesta en formato JSON.
 */
async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!res.ok) {
    if (res.status === 404) {
      // Lanza un error específico para 404 para que pueda ser capturado
      const error = new Error(`Not found: ${endpoint}`);
      (error as any).status = 404;
      throw error;
    }
    throw new Error(`Failed to fetch data from ${endpoint}, status: ${res.status}`);
  }
  return res.json();
}

export const getInstruments = () => fetchData<Instrument[]>("/instrumentos");
export const getInstrumentById = (id: string) => fetchData<Instrument>(`/instrumentos/${id}`);
export const getInstrumentTypes = () => fetchData<InstrumentType[]>("/instrumentos/tipos");
export const getInstrumentBrands = () => fetchData<InstrumentBrand[]>("/instrumentos/marcas");

export const getSimilarInstruments = (typeId: string, excludeId: string, limit: number = 3) =>
  fetchData<Instrument[]>(`/instrumentos?tipo=${typeId}&id_ne=${excludeId}&limit=${limit}`);