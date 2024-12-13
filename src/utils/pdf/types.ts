export interface PDFFont {
  regular: {
    url: string;
    name: string;
  };
  bold: {
    url: string;
    name: string;
  };
}

export interface PDFGenerationOptions {
  language: 'ar' | 'en';
  logoPath: string;
  fonts: PDFFont;
}

export interface PDFSection {
  title: string;
  content: string;
  type?: 'normal' | 'highlight';
}