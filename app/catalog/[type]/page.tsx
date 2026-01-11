import { fetchData, getInstrumentTypes } from "@/lib/api";
import type { Instrument, InstrumentType } from "@/lib/data";
import CategoryClientPage from "./CategoryClientPage";

interface CategoryPageProps {
  params: {
    type: string;
  };
}

export async function generateStaticParams() {
  const res = await fetchData<InstrumentType[]>("/tipos");
  return res.map((category) => ({ type: category.id }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return <CategoryClientPage type={params.type} />;
}
