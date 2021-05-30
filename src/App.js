import './App.css';
import Navbar from './Component/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section2 from './Component/Section2/Section2';
import Section5 from './Component/Section5/Section5';
import Section6 from './Component/Section6/Secction6';
import Footer from './Component/Footer/Footer';
import Section1 from './Component/Section1/Section1';
import Section3 from './Component/Section3/Section3';
import Section4 from './Component/Section4/Section4';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Section1/>
       <Section2/>
       <Section3/>
       <Section4/>
       <Section5/>
       <Section6/>
       <Footer/>
    </div>
  );
}

export default App;
