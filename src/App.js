import './App.css';
import { Route, Routes} from 'react-router-dom';
import Cozinhas from './Components/Cozinhas';
import Estofos from './Components/Estofos';
import Quartos from './Components/Quartos';
import MDecorativos from './Components/MDecorativos';
import Salas from './Components/Salas';
import Home from "./Components/Home";
import { NavLink } from 'react-router-dom';
import logoLoja from "./Images/logoLoja.png"

function App() {
  return (

    <div className="App">
      <div id='menuFrontShowCaseBox'>
        <Routes>
        <Route path='/Home' element={<Home/>}/>
          <Route path='/Cozinhas' element={<Cozinhas/>}/>
          <Route path='/Estofos' element={<Estofos/>}/>
          <Route path='/Quartos' element={<Quartos/>}/>
          <Route path='/MDecorativos' element={<MDecorativos/>}/>
          <Route path='/Salas' element={<Salas/>}/>
        </Routes>
      
        <nav id='menu'>
                <li id='companyLogo'>
                  <NavLink className="navLinkLogo" to="/Home">
                    <img src={logoLoja} width={200} height={150} alt='logoLoja'></img>
                  </NavLink>
                </li>
          
                <li className='linkbox'>
                  <NavLink className="navLink" to="/Cozinhas">
                    Cozinhas
                  </NavLink>
                </li>

                <li className='linkbox'><NavLink className="navLink" to="/Estofos">Estofos</NavLink></li>
                <li className='linkbox'><NavLink className="navLink" to="/Quartos">Quartos</NavLink></li>
                <li className='linkbox'><NavLink className="navLink" to="/Salas">Salas</NavLink></li>
                <li className='linkbox'><NavLink className="navLink" to="/MDecorativos">Móveis Decorativos</NavLink></li>
        </nav>
      </div>
    </div>
  );
}

export default App;
