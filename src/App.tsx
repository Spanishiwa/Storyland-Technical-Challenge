import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomeView from './components/HomeView';
import PolicyholdersView from './components/PolicyholdersView';
import TableDemoView from './components/TableDemoView';
import RedirectView from './components/RedirectView';
import YouCanDoItView from './components/YouCanDoItView';
import Layout from './components/Layout';
import { useState } from 'react';
import Modal from './components/Modal';
import Instructions from './components/Instructions';
import { PolicyholdersContextProvider } from './components/Contexts/PolicyholdersContext';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <Layout onFooterClick={() => setIsModalOpen(true)}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route
            path="/policyholders"
            element={
              <PolicyholdersContextProvider>
                <PolicyholdersView />
              </PolicyholdersContextProvider>
            }
          />
          <Route path="/table" element={<TableDemoView />} />
          <Route path="/you-can-do-it" element={<YouCanDoItView />} />
          <Route path="*" element={<RedirectView />} />
        </Routes>
      </Layout>
      <Modal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        title="Storyland React Technical Challenge"
      >
        <Instructions />
      </Modal>
    </BrowserRouter>
  );
}

export default App;
