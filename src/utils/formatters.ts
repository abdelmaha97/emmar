export const formatCurrency = (amount: number, direction: 'rtl' | 'ltr') => {
  return new Intl.NumberFormat(direction === 'rtl' ? 'ar-SA' : 'en-US', {
    style: 'currency',
    currency: 'SAR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};