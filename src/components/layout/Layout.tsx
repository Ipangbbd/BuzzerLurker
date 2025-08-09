import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import FAB from './FAB'; // Import your FAB component

type LayoutProps = {
  children: React.ReactNode;
  currentPage: 'theory' | 'team';
  onPageChange: (page: 'theory' | 'team') => void;
};

export function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-primary-dark light:bg-white">
      <Header currentPage={currentPage} onPageChange={onPageChange} />
      <main className="flex-grow container mx-auto px-4 md:px-8 py-6 md:py-8 mt-20">
        {children}
      </main>
      <Footer />

      {/* Add your FloatingActionButton here */}
      <FAB />
    </div>
  );
}