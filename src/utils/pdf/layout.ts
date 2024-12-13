import { jsPDF } from 'jspdf';
import { PDF_CONSTANTS } from './constants';
import { PDFSection } from './types';

export const addLogo = async (doc: jsPDF): Promise<number> => {
  const logoUrl = '/assets/logo.png';
  const img = new Image();
  
  return new Promise((resolve) => {
    img.onload = () => {
      const imgWidth = 40;
      const imgHeight = (img.height * imgWidth) / img.width;
      const pageWidth = doc.internal.pageSize.width;
      const x = (pageWidth - imgWidth) / 2;
      
      doc.addImage(img, 'PNG', x, 10, imgWidth, imgHeight);
      resolve(imgHeight + 20); // Return the new Y position after logo
    };
    img.src = logoUrl;
  });
};

export const addHeader = (doc: jsPDF, text: string, y: number): number => {
  const pageWidth = doc.internal.pageSize.width;
  doc.setFontSize(PDF_CONSTANTS.FONT_SIZES.TITLE);
  doc.text(text, pageWidth / 2, y, { align: 'center' });
  return y + PDF_CONSTANTS.LAYOUT.LINE_HEIGHT * 2;
};

export const addSection = (
  doc: jsPDF, 
  section: PDFSection, 
  y: number
): number => {
  const margin = PDF_CONSTANTS.LAYOUT.MARGIN;
  const pageWidth = doc.internal.pageSize.width;
  
  // Add section title
  doc.setFontSize(PDF_CONSTANTS.FONT_SIZES.HEADING);
  if (section.type === 'highlight') {
    doc.setTextColor(PDF_CONSTANTS.COLORS.PRIMARY);
  }
  doc.text(section.title, margin, y);
  doc.setTextColor(PDF_CONSTANTS.COLORS.TEXT); // Reset text color
  y += PDF_CONSTANTS.LAYOUT.LINE_HEIGHT;
  
  // Add section content
  doc.setFontSize(PDF_CONSTANTS.FONT_SIZES.BODY);
  const lines = doc.splitTextToSize(
    section.content, 
    pageWidth - (2 * margin)
  );
  doc.text(lines, margin, y);
  
  return y + (lines.length * PDF_CONSTANTS.LAYOUT.LINE_HEIGHT) + 5;
};