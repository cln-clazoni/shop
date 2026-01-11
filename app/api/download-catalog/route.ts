import { API_BASE_URL } from "@/lib/api";

export async function GET() {
  // For demonstration purposes, we'll provide a link to a sample PDF
  // In a real application, this would generate a PDF with all catalog items
  
  // This could be a static PDF file in the public folder or a dynamically generated one
  const pdfUrl = `${API_BASE_URL}/catalogo-pdf`;
  
  // Redirect to the PDF URL
  return new Response(null, {
    status: 302,
    headers: {
      Location: pdfUrl,
      "Content-Type": "application/pdf"
    },
  });
}