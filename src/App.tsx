import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ErrorOccured from './components/ErrorPage';
import PandaList from './components/PandaList';
import PandaModification from './components/PandaModification';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  }
});

const App = () => (
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <div>React application with react-query handler</div>
    <BrowserRouter>
      <Link to="/">Accueil</Link>
      <Link to="/list">Liste des pandas</Link>
      <Routes>
        <Route path="/list" element={<PandaList />} />
        <Route path="/panda/:id" element={<PandaModification />} />
        <Route path="/error" element={<ErrorOccured />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
