import { Instrument } from "@/data/instruments";
import "server-only";

export type { Instrument };

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
