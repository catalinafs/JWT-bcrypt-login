// React
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

// Pages
import Register from './pages/register';
import Encode from './pages/Encode';
import Decode from './pages/Decode';
import NotFound from './pages/NotFound';

// Material UI
import theme from './utils/theme';
import { ThemeProvider } from '@mui/material';

import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={'/'} exact element={<Navigate to='/encode' />} />
          <Route path={'/register'} exact element={<Register />} />
          <Route path={'/encode'} exact element={<Encode />} />
          <Route path={'/decode'} exact element={<Decode />} />
          <Route path={'/NotFound'} exact element={<NotFound />} />
          <Route path={'*'} exact element={<Navigate to='/NotFound' />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;