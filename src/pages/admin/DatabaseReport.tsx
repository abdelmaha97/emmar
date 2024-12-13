import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Download, FileSpreadsheet, FileText, Loader } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../../api/axios';

const DatabaseReport = () => {
  const { t } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const generateReport = async (format: 'pdf' | 'excel') => {
    try {
      setIsGenerating(true);
      const response = await api.post('/admin/generate-report', { format }, { responseType: 'blob' });
      
      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `database_report.${format}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      toast.success(t('admin.reportGenerated'));
    } catch (error) {
      toast.error(t('admin.reportError'));
      console.error('Error generating report:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Database Report Generator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PDF Report */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-red-500" />
            <h2 className="text-xl font-semibold">PDF Report</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Generate a comprehensive PDF report containing detailed database structure and statistics.
          </p>
          <button
            onClick={() => generateReport('pdf')}
            disabled={isGenerating}
            className="w-full btn-primary py-3 flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <Download className="w-5 h-5" />
            )}
            Generate PDF Report
          </button>
        </div>

        {/* Excel Report */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileSpreadsheet className="w-8 h-8 text-green-500" />
            <h2 className="text-xl font-semibold">Excel Report</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Generate a detailed Excel report with multiple sheets for each table and relationships.
          </p>
          <button
            onClick={() => generateReport('excel')}
            disabled={isGenerating}
            className="w-full btn-primary py-3 flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <Download className="w-5 h-5" />
            )}
            Generate Excel Report
          </button>
        </div>
      </div>

      {/* Report Features */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Report Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Table Information</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Table schemas and structures</li>
              <li>Column details and types</li>
              <li>Primary and foreign keys</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Relationships</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Table relationships</li>
              <li>Foreign key mappings</li>
              <li>Dependency diagrams</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Statistics</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Record counts</li>
              <li>Storage usage</li>
              <li>Index information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseReport;