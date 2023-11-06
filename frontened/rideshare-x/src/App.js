import './App.scss';
import AllRoutes from './components/AllRoutes';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import Plan from './components/Plan';

function App() {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
      <Footer />
      {/* <Plan/> */}
    </div>
  );
}

export default App;
