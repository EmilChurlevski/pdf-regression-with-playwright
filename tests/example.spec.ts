import { expect, test } from "@playwright/test";
import * as path from "node:path";
import { pdfHelpers } from "../helpers/pdfHelpers";

test("compare shoe size chart pdf", async () => {
  const pdfName = "shoe-size-chart"; // the name of the PDF.
  const numPages = 8; // how many pages does the PDF have?
  /**
   * Here the path is hardcoded
   * In a real world scenario the path will be the download path of the newly generated PDF.
   */
  const pdfPath = path.resolve(`./tests/pdfs/${pdfName}.pdf`);
  // converts all PDF pages to PNGs.
  const pages = await pdfHelpers.convertPdfToPng(pdfPath, numPages);

  for (const [index, pageBuffer] of pages.entries()) {
    const baseline = `${pdfName}-page-${index + 1}.png`; // the name of the baseline or expected PNG.

    expect(pageBuffer).toMatchSnapshot(baseline);
  }
});

test("compare dummy file pdf", async () => {
  const pdfName = "dummyFile";
  const numPages = 10;
  const pdfPath = path.resolve(`./tests/pdfs/${pdfName}.pdf`);
  const pages = await pdfHelpers.convertPdfToPng(pdfPath, numPages);

  for (const [index, pageBuffer] of pages.entries()) {
    const baseline = `${pdfName}-page-${index + 1}.png`;

    expect(pageBuffer).toMatchSnapshot(baseline);
  }
});
