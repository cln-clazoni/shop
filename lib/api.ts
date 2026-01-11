import { Instrument, InstrumentBrand, InstrumentType } from "@/lib/data";
  
export const API_BASE_URL = "https://shop-backend-xaai.onrender.com" + "/api";

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

export const getInstruments = async (type?: string, brand?: string, limit?: number) => {
  let instruments = await fetchData<Instrument[]>("/instrumentos");
  if (type) {
    instruments = instruments.filter(instrument => instrument.type === type);
  }
  if (brand) {
    instruments = instruments.filter(instrument => instrument.brand === brand);
  }
  if (limit) {
    instruments = instruments.slice(0, limit);
  }
  return instruments;
};

export const getInstrumentById = async (id: string) => {
  const instruments = await fetchData<Instrument[]>("/instrumentos");
  return instruments.find(instrument => instrument.id === id);
};

export const getInstrumentTypes = async (limit?: number) => {
  let types = await fetchData<InstrumentType[]>("/tipos");
  if (limit) {
    types = types.slice(0, limit);
  }
  return types;
};

export const getInstrumentBrands = async (limit?: number) => {
  let brands = await fetchData<InstrumentBrand[]>("/marcas");
  if (limit) {
    brands = brands.slice(0, limit);
  }
  return brands;
};

export const getSimilarInstruments = async (typeId: string, excludeId: string, limit: number = 3) => {
  let instruments = await fetchData<Instrument[]>("/instrumentos");
  instruments = instruments.filter(instrument => instrument.type === typeId && instrument.id !== excludeId);
  return instruments.slice(0, limit);
};
