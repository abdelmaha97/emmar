import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Send, ThumbsUp, Reply } from 'lucide-react';
import toast from 'react-hot-toast';

interface Comment {
  id: string;
  user: string;
  text: string;
  date: Date;
  likes: number;
  replies: Comment[];
}

interface CommentSectionProps {
  newsId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ newsId }) => {
  const { t } = useLanguage();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      user: 'Ahmed Hassan',
      text: 'This is very informative news. Thanks for sharing!',
      date: new Date('2024-03-15'),
      likes: 5,
      replies: [
        {
          id: '1-1',
          user: 'Sarah Ahmed',
          text: 'I agree, very helpful information.',
          date: new Date('2024-03-15'),
          likes: 2,
          replies: [],
        },
      ],
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment: Comment = {
      id: String(comments.length + 1),
      user: 'Current User',
      text: comment,
      date: new Date(),
      likes: 0,
      replies: [],
    };

    setComments([newComment, ...comments]);
    setComment('');
    toast.success(t('comments.submitted'));
  };

  const handleLike = (commentId: string) => {
    setComments(prevComments =>
      prevComments.map(c =>
        c.id === commentId ? { ...c, likes: c.likes + 1 } : c
      )
    );
  };

  const CommentItem: React.FC<{ comment: Comment; isReply?: boolean }> = ({ comment, isReply }) => (
    <div className={`${isReply ? 'ml-12' : ''} mb-6`}>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-600 font-bold">
            {comment.user.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold">{comment.user}</span>
              <span className="text-sm text-gray-500">
                {comment.date.toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700">{comment.text}</p>
          </div>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => handleLike(comment.id)}
              className="flex items-center gap-1 text-gray-500 hover:text-primary"
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{comment.likes}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
              <Reply className="w-4 h-4" />
              {t('comments.reply')}
            </button>
          </div>
        </div>
      </div>
      {comment.replies.map(reply => (
        <CommentItem key={reply.id} comment={reply} isReply />
      ))}
    </div>
  );

  return (
    <div>
      <h3 className="text-xl font-bold mb-6">{t('comments.title')}</h3>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600 font-bold">U</span>
          </div>
          <div className="flex-1">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t('comments.placeholder')}
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              rows={3}
            />
            <button
              type="submit"
              className="mt-2 btn-primary flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              {t('comments.submit')}
            </button>
          </div>
        </div>
      </form>

      <div className="space-y-6">
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;