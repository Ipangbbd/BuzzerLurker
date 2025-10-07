import React, { useState, Suspense } from 'react';
import Loader from './components/layout/Loader';
import { Layout } from './components/layout/Layout';

const TeamPage = React.lazy(() => import('./pages/TeamPage'));
const TheoryPage = React.lazy(() => import('./pages/TheoryPage'));

export default function App() {
  const [currentPage, setCurrentPage] = useState<'theory' | 'team'>('theory');
  const [loading, setLoading] = useState(true);

  // Always show loader on every page load and navigation (for testing)
  const handlePageChange = (page: 'theory' | 'team') => {
    setLoading(true);
    setCurrentPage(page);
  };

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <Layout currentPage={currentPage} onPageChange={handlePageChange}>
          <Suspense fallback={<div>Loading page...</div>}>
            {currentPage === 'theory' ? <TheoryPage /> : <TeamPage />}
          </Suspense>
        </Layout>
      )}
    </>
  );
}