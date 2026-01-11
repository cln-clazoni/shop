import AdminTable from '@/components/admin/admin-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogoutButton } from '@/components/admin/logout-button';
import { Instrument, InstrumentBrand, InstrumentType } from '@/lib/data';
import { API_BASE_URL } from '@/lib/api';

export default async function AdminPage() {
  const getInstruments = async (): Promise<Instrument[]> => {
    const res = await fetch(
      `${API_BASE_URL}/instrumentos`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  const getInstrumentsTypes = async (): Promise<InstrumentType[]> => {
    const res = await fetch(
      `${API_BASE_URL}/tipos`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  const getInstrumentsBrand = async (): Promise<InstrumentBrand[]> => {
    const res = await fetch(
      `${API_BASE_URL}/marcas`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  const instruments = await getInstruments();
  const types = await getInstrumentsTypes();
  const brands = await getInstrumentsBrand();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Panel de Administración</h1>
        <LogoutButton />
      </header>
      <main>
        <Card className='mb-8'>
          <CardHeader>
            <CardTitle>Datos de la Empresa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Nombre:</strong> Tienda CLN</p>
            <p><strong>Dirección:</strong> Av. Siempre Viva 123, Springfield</p>
            <p><strong>Teléfono:</strong> +1 234 567 890</p>
            <p><strong>Email:</strong> contacto@tiendacln.com</p>
          </CardContent>
        </Card>
        <AdminTable instruments={instruments} types={types} brands={brands} />
      </main>
    </div>
  );
}
