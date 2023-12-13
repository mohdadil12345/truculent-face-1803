import './App.scss';
import AllRoutes from './components/AllRoutes';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <AllRoutes/>
      <Footer />
      
    </div>
  );
}

export default App;
