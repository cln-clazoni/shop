import { useState } from "react";
import { Button } from "@/components/ui/button";
import { API_BASE_URL } from "@/lib/api";

export default function DownloadCatalogButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true); // Abrir modal
    try {
      const response = await fetch(`${API_BASE_URL}/catalogo-pdf`);
      if (!response.ok) throw new Error("Error generando PDF");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      // Descargar el PDF
      const link = document.createElement("a");
      link.href = url;
      link.download = `CATALOGO-INSTRUMENTOS-MUSICALES-Y-ACCESORIOS-CLN.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Hubo un error al generar el PDF.");
    } finally {
      setLoading(false); // Cerrar modal
    }
  };

  return (
    <>
      <Button
        size="lg"
        className="bg-black text-white hover:bg-black/80"
        onClick={handleDownload}
      >
        Descargar Catálogo PDF
      </Button>

      {/* Modal de carga */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 flex flex-col items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center w-80">
            <div className="flex justify-center mb-4">
              {/* Reloj de arena */}
              <div className="w-12 h-12 border-4 border-t-black border-b-black border-l-transparent border-r-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-lg font-bold mb-2">Cargando datos...</h2>
            <p>Generando PDF, por favor espere...</p>
            <p>
              Puede durar unos segundos, ya que estás descargando datos con imagenes
              actualizados.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
