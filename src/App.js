import logo from './logo.svg';

import Home from './Components/home/Index'

import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <>
   <StyledEngineProvider injectFirst>
     <CssBaseline/>
     <Home/>
    </StyledEngineProvider>
    </>
  );
}

export default App;
