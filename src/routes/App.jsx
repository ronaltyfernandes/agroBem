import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Home from '../pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-center">
      <div className="mx-auto ">
        <BrowserRouter basename="/agroBem">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1 className="text-xl font-bold">About Us</h1>} />
            <Route path="/contact" element={<h1 className="text-xl font-bold">Contact Us</h1>} />
            <Route
              path="*"
              element={<h1 className="text-xl font-bold text-red-500">Not Found</h1>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
