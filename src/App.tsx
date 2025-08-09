import { useState } from 'react';
import Loader from './components/layout/Loader';
import { Layout } from './components/layout/Layout';
import TeamPage from './pages/TeamPage';
import TheoryPage from './pages/TheoryPage';

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
          {currentPage === 'theory' ? <TheoryPage /> : <TeamPage />}
        </Layout>
      )}
    </>
  );
}