import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CreatePandaPage from './pages/CreatePandaPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import PandaListPage from './pages/PandaListPage';
import UpdatePandaPage from './pages/UpdatePandaPage';

export enum Path {
  Home = '/',
  PandalList = '/pandas',
  Panda = '/panda/:id',
  PandaCreation = '/panda/creation',
  Error = '/error',
}

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
    <BrowserRouter>
      <header>
        <Link to={Path.Home}>Accueil</Link>
        <Link to={Path.PandalList}>Liste des pandas</Link>
      </header>
      <div className='layout-page'>
        <Routes>
          <Route path={Path.PandalList} element={<PandaListPage />} />
          <Route path={Path.Panda} element={<UpdatePandaPage />} />
          <Route path={Path.PandaCreation} element={<CreatePandaPage />} />
          <Route path={Path.Error} element={<ErrorPage />} />
          <Route path={Path.Home} element={<HomePage />} />
        </Routes>
      </div>
      <footer>Application officiel de PandaLand</footer>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
