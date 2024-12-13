import { jsPDF } from 'jspdf';
import { Auction } from '../../types';
import { formatCurrency } from '../formatters';
import { PDF_CONSTANTS } from './constants';

export const generateAuctionPDF = async (auction: Auction, language: 'ar' | 'en') => {
  // Create PDF with proper text direction
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  try {
    // Set RTL for Arabic and use standard font
    if (language === 'ar') {
      doc.setR2L(true);
    }
    doc.setFont('helvetica');

    // Add logo
    const logoWidth = 40;
    const pageWidth = doc.internal.pageSize.width;
    const x = (pageWidth - logoWidth) / 2;
    doc.addImage('/assets/logo.png', 'PNG', x, 10, logoWidth, 20);

    let currentY = 40;

    // Add title
    doc.setFontSize(PDF_CONSTANTS.FONT_SIZES.TITLE);
    doc.text(auction.title[language], pageWidth / 2, currentY, { align: 'center' });
    currentY += 20;

    // Add auction details
    doc.setFontSize(PDF_CONSTANTS.FONT_SIZES.BODY);
    const margin = PDF_CONSTANTS.LAYOUT.MARGIN;

    const details = [
      { label: language === 'ar' ? 'رقم المزاد' : 'Auction Number', value: auction.number },
      { label: language === 'ar' ? 'الجهة' : 'Entity', value: auction.entity[language] },
      { label: language === 'ar' ? 'المنطقة' : 'Region', value: auction.region[language] },
      { 
        label: language === 'ar' ? 'السعر الابتدائي' : 'Starting Price', 
        value: formatCurrency(auction.startingPrice, language === 'ar' ? 'rtl' : 'ltr')
      },
      {
        label: language === 'ar' ? 'رسوم الاشتراك' : 'Subscription Fee',
        value: formatCurrency(auction.subscriptionPrice, language === 'ar' ? 'rtl' : 'ltr')
      }
    ];

    details.forEach(({ label, value }) => {
      doc.text(`${label}: ${value}`, margin, currentY);
      currentY += 10;
    });

    // Add description
    currentY += 10;
    doc.setFontSize(PDF_CONSTANTS.FONT_SIZES.HEADING);
    doc.text(language === 'ar' ? 'الوصف' : 'Description', margin, currentY);
    currentY += 10;

    doc.setFontSize(PDF_CONSTANTS.FONT_SIZES.BODY);
    const description = doc.splitTextToSize(
      auction.description[language], 
      pageWidth - (2 * margin)
    );
    doc.text(description, margin, currentY);

    // Add footer
    const footer = language === 'ar' 
      ? `تم إنشاء هذا المستند في ${new Date().toLocaleDateString('ar')}` 
      : `Document generated on ${new Date().toLocaleDateString()}`;

    doc.setFontSize(PDF_CONSTANTS.FONT_SIZES.FOOTER);
    doc.text(
      footer,
      pageWidth / 2,
      doc.internal.pageSize.height - margin,
      { align: 'center' }
    );

    // Save the PDF
    doc.save(`auction-${auction.number}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};