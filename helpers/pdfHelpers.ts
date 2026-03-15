import { pdfToPng } from "pdf-to-png-converter";

const convertPdfToPng = async (pdfPath: string, numOfPages: number) => {
  const pagesToProcess = Array.from({ length: numOfPages }, (_, i) => i + 1);

  const pages = await pdfToPng(pdfPath, {
    pagesToProcess,
    returnPageContent: true,
    disableFontFace: true,
    useSystemFonts: false,
    viewportScale: 2
  });

  return pages.map(p => p.content); // return PNG buffers
};

export const pdfHelpers = {
  convertPdfToPng,
};