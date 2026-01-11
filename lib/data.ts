import { Instrument } from "@/data/instruments";
import "server-only";

export type { Instrument };

export interface InstrumentType {
  id: string;
  name: string;
  descripcion: string;
  photo: string;
}

export interface InstrumentBrand {
  id: string;
  nombre: string;
}
