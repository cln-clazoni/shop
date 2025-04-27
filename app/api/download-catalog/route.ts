export async function GET() {
  // For demonstration purposes, we'll provide a link to a sample PDF
  // In a real application, this would generate a PDF with all catalog items
  
  // This could be a static PDF file in the public folder or a dynamically generated one
  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  
  // Redirect to the PDF URL
  return new Response(null, {
    status: 302,
    headers: {
      Location: pdfUrl,
      "Content-Type": "application/pdf"
    },
  });
}