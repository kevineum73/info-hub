import { ReactNode } from 'react';

interface CategoriesLayoutProps {
  children: ReactNode;
}

export default function CategoriesLayout({ children }: CategoriesLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
} 