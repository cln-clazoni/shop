import { getInstruments } from "@/lib/api";
import type { Instrument } from "@/lib/data";
import InstrumentClientPage from "./InstrumentClientPage";

interface InstrumentPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  try {
    const instruments: Instrument[] = await getInstruments();
    return instruments.map((instrument: Instrument) => ({ id: instrument.id }));
  } catch (error) {
    console.error("Failed to generate static params for instruments", error);
    return [];
  }
}

export default function InstrumentPage({ params }: InstrumentPageProps) {
  return <InstrumentClientPage id={params.id} />;
}
