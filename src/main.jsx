import { StrictMode } from 'react';
import './styles/index.css';
import App from './routes/App';
import ReactDOM from 'react-dom/client';
import 'swiper/css';
import 'swiper/css/navigation';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  throw new Error('Root element not found');
}
