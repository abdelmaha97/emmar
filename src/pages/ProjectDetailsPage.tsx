import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ArrowLeft, ArrowRight, Building2, MapPin, Clock, DollarSign,
  BarChart, FileText, AlertTriangle, CheckCircle, Calendar
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { calculateTimeRemaining } from '../utils/timeCalculations';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, dir, language } = useLanguage();
  const BackArrow = dir === 'rtl' ? ArrowRight : ArrowLeft;

  const project = PROJECTS_DATA.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">{t('projects.notFound')}</p>
      </div>
    );
  }

  const { progress } = calculateTimeRemaining(project.endDate);

  // Sample obstacles and solutions data
  const obstaclesAndSolutions = [
    {
      obstacle: {
        ar: 'تأخير في توريد المواد',
        en: 'Material Supply Delays'
      },
      description: {
        ar: 'تأخير في وصول مواد البناء الأساسية من الموردين',
        en: 'Delays in receiving essential construction materials from suppliers'
      },
      solution: {
        ar: 'تم التعاقد مع موردين إضافيين وإنشاء مخزون احتياطي',
        en: 'Contracted additional suppliers and established backup inventory'
      },
      status: 'resolved'
    },
    {
      obstacle: {
        ar: 'تحديات فنية',
        en: 'Technical Challenges'
      },
      description: {
        ar: 'صعوبات في تنفيذ بعض الجوانب الفنية للمشروع',
        en: 'Difficulties in implementing certain technical aspects of the project'
      },
      solution: {
        ar: 'تم استشارة خبراء متخصصين وتعديل خطة التنفيذ',
        en: 'Consulted specialized experts and modified implementation plan'
      },
      status: 'in-progress'
    }
  ];

  // Sample project stages data
  const projectStages = [
    {
      title: {
        ar: 'التخطيط والتصميم',
        en: 'Planning and Design'
      },
      description: {
        ar: 'إعداد المخططات التفصيلية والحصول على الموافقات',
        en: 'Preparing detailed plans and obtaining approvals'
      },
      startDate: '2024-01-01',
      endDate: '2024-02-28',
      status: 'completed',
      progress: 100
    },
    {
      title: {
        ar: 'أعمال الحفر والأساسات',
        en: 'Excavation and Foundation'
      },
      description: {
        ar: 'حفر الموقع وإعداد الأساسات',
        en: 'Site excavation and foundation preparation'
      },
      startDate: '2024-03-01',
      endDate: '2024-04-30',
      status: 'in-progress',
      progress: 60
    },
    {
      title: {
        ar: 'البناء الهيكلي',
        en: 'Structural Construction'
      },
      description: {
        ar: 'بناء الهيكل الأساسي للمشروع',
        en: 'Construction of the main structure'
      },
      startDate: '2024-05-01',
      endDate: '2024-08-31',
      status: 'upcoming',
      progress: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-8"
        >
          <BackArrow className="w-5 h-5" />
          <span>{t('projects.backToList')}</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Images */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title[language]}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Project Description */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                {t('projects.description')}
              </h2>
              <p className="text-gray-600">{project.description[language]}</p>
            </div>

            {/* Performance Report */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BarChart className="w-5 h-5" />
                {t('projects.performanceReport')}
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{t('projects.progress')}</span>
                  <span className="font-bold">{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Obstacles and Solutions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                {t('projects.obstaclesAndSolutions')}
              </h2>
              <div className="space-y-6">
                {obstaclesAndSolutions.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg ${
                      item.status === 'resolved' ? 'bg-green-50' : 'bg-yellow-50'
                    }`}
                  >
                    <h3 className="font-bold text-lg mb-2">{item.obstacle[language]}</h3>
                    <p className="text-gray-600 mb-4">{item.description[language]}</p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">{t('projects.solution')}:</h4>
                      <p className="text-gray-600">{item.solution[language]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Stages */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                {t('projects.stages')}
              </h2>
              <div className="space-y-6">
                {projectStages.map((stage, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg ${
                      stage.status === 'completed' ? 'bg-green-50' :
                      stage.status === 'in-progress' ? 'bg-blue-50' :
                      'bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{stage.title[language]}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        stage.status === 'completed' ? 'bg-green-100 text-green-800' :
                        stage.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {t(`projects.stageStatus.${stage.status}`)}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{stage.description[language]}</p>
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>{new Date(stage.startDate).toLocaleDateString()}</span>
                      <span>{new Date(stage.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all"
                        style={{ width: `${stage.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold mb-4">{t('projects.details')}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Building2 className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-500">{t('projects.owner')}</p>
                    <p>{project.owner[language]}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Building2 className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-500">{t('projects.contractor')}</p>
                    <p>{project.contractor[language]}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-500">{t('projects.location')}</p>
                    <p>{project.location[language]}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-500">{t('projects.budget')}</p>
                    <p>{project.budget.toLocaleString()} SAR</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-500">{t('projects.duration')}</p>
                    <p>{new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;