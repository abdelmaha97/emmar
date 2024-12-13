import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Building2, MapPin, Clock, DollarSign, Eye, Share2 } from 'lucide-react';
import { calculateTimeRemaining } from '../../utils/timeCalculations';
import { Project } from '../../types/project';
import toast from 'react-hot-toast';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { progress, timeLeft } = calculateTimeRemaining(project.endDate);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'ongoing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewDetails = () => {
    navigate(`/projects/${project.id}`);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: project.title[language],
          text: project.description[language],
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success(t('projects.linkCopied'));
      }
    } catch (error) {
      console.error('Share error:', error);
      toast.error(t('projects.shareError'));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <img
          src={project.image}
          alt={project.title[language]}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
            {t(`projects.status.${project.status}`)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">{project.number}</div>
          <h3 className="text-xl font-bold mb-2">{project.title[language]}</h3>
          
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Building2 className="w-4 h-4" />
            <span>{project.owner[language]}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{project.location[language]}</span>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">
            {project.description[language]}
          </p>
        </div>

        {project.status === 'active' && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{timeLeft}</span>
              </div>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary rounded-full h-2 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <DollarSign className="w-4 h-4" />
          <span>{t('projects.budget')}: {project.budget} SAR</span>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={handleViewDetails}
            className="flex-1 btn-primary py-2 flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            {t('projects.viewDetails')}
          </button>
          <button 
            onClick={handleShare}
            className="flex-1 bg-secondary text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 hover:bg-secondary-light active:bg-secondary-dark"
          >
            <Share2 className="w-4 h-4" />
            {t('projects.share')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;