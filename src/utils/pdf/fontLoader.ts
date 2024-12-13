import { jsPDF } from 'jspdf';

// Base64 encoded font data
const TAJAWAL_REGULAR = 'data:font/ttf;base64,...'; // Add base64 font data here
const TAJAWAL_BOLD = 'data:font/ttf;base64,...'; // Add base64 font data here

export const loadFonts = (doc: jsPDF) => {
  doc.addFileToVFS('Tajawal-Regular.ttf', TAJAWAL_REGULAR);
  doc.addFileToVFS('Tajawal-Bold.ttf', TAJAWAL_BOLD);
  
  doc.addFont('Tajawal-Regular.ttf', 'Tajawal', 'normal');
  doc.addFont('Tajawal-Bold.ttf', 'Tajawal', 'bold');
  
  return doc;
};