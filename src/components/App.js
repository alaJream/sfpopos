import { Outlet } from 'react-router-dom'
import './App.css';
import Title from './components/Title/Title';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
