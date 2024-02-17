import React from 'react'
import './Home.css';
import { NavLink } from 'react-router-dom';
import FacebookIcon from "./Images/FacebookIcon.png";
import InstagramIcon from "./Images/InstagramIcon.png"


const Home = () => {
  return (
    <>
      <div id='specialShowCase'>
           <div id='specialPriceTag'>
              <p id='specialPrice'>Conjunto Sala Oak 1200$</p>
           </div>
      </div>
        
      <div id='informationPagePlacement'>
        <NavLink className="navLinkAboutContacts" to="/AboutContacts">
          Sobre Nós / Contactos
        </NavLink>
      </div>

      <div className='icon'>
        <img src={FacebookIcon} width={50} height={50} alt='FacebookIcon'></img>
        <a href='https://www.instagram.com/popular_lojas_cm/'>
          <img src={InstagramIcon} width={50} height={50} alt='InstagramIcon'></img>
        </a>
      </div>

    </>
  )
}

export default Home