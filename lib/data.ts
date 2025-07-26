import { Instrument } from "@/data/instruments";
import "server-only";

export interface InstrumentType {
  id: string;
  name: string;
  name_complete: string;
  descripcion: string;
  id_property: string;
}

export interface InstrumentBrand {
  id: string;
  name: string;
}

export async function getInstruments(): Promise<Instrument[]> {
  const res = await fetch(
    "https://n8n-proyect.onrender.com/webhook/cln/instrumentos",
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getInstrumentsTypes(): Promise<InstrumentType[]> {
  const res = await fetch(
    "https://n8n-proyect.onrender.com/webhook/cln/instrumentos/tipos",
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getInstrumentsBrand(): Promise<InstrumentBrand[]> {
  const res = await fetch(
    "https://n8n-proyect.onrender.com/webhook/cln/instrumentos/marcas",
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
