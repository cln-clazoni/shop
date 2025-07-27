import { getInstrumentTypes } from "@/lib/api";
import type { InstrumentType } from "@/lib/data";
import CategoryClientPage from "./CategoryClientPage";

interface CategoryPageProps {
  params: {
    type: string;
  };
}

export async function generateStaticParams() {
  try {
    const types: InstrumentType[] = await getInstrumentTypes();
    return types.map((category) => ({ type: category.id_property }));
  } catch (error) {
    console.error("Failed to generate static params for categories", error);
    return [];
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return <CategoryClientPage type={params.type} />;
}
