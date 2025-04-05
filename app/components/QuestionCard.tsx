import React from 'react';
import Link from 'next/link';

interface Tag {
  id: string;
  name: string;
}

interface QuestionCardProps {
  id: string;
  title: string;
  excerpt: string;
  tags: Tag[];
  authorName: string;
  createdAt: string;
  votes: number;
  answerCount: number;
  viewCount: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  id,
  title,
  excerpt,
  tags,
  authorName,
  createdAt,
  votes,
  answerCount,
  viewCount,
}) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="flex items-start">
        {/* Stats */}
        <div className="flex flex-col items-center mr-6 text-xs text-gray-500">
          <div className="flex flex-col items-center mb-2">
            <span className="font-medium text-gray-700">{votes}</span>
            <span>votes</span>
          </div>
          <div className={`flex flex-col items-center p-1 rounded ${answerCount > 0 ? 'bg-green-100 text-green-800' : ''}`}>
            <span className="font-medium">{answerCount}</span>
            <span>answers</span>
          </div>
          <div className="flex flex-col items-center mt-2">
            <span>{viewCount}</span>
            <span>views</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">
            <Link href={`/questions/${id}`} className="text-indigo-600 hover:text-indigo-800">
              {title}
            </Link>
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link
                  key={tag.id}
                  href={`/tags/${tag.name}`}
                  className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md hover:bg-indigo-100"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
            <div className="text-xs text-gray-500">
              <span>asked {createdAt} by </span>
              <Link href={`/users/${authorName}`} className="text-indigo-600">
                {authorName}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard; 