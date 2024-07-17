import { Box } from '@mui/material';
import { Header } from './components/Header/Header';
import ModelBox from './components/ModelBox/ModelBox';
import { NavBar } from './components/NavBar/NavBar';
import { ControlPanel } from './components/ControlPanel/ControlPanel';
import { Footer } from './components/Footer/Footer';
import { ChangeColorProvider } from './context/ColorContext';

function App() {
  return (
    <ChangeColorProvider>
      <Box sx={{ width: '100vw', height: '100vh', padding: '0 25px 0' }}>
        <ModelBox />
        <Header />
        <NavBar />
        <ControlPanel />
        <Footer />
      </Box>
    </ChangeColorProvider>
  );
}

export default App;
