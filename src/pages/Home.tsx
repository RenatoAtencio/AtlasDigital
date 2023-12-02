import React from 'react';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home_page'>
      <div className='home_header'>
        <div className='header_logo'>
            <p>logo</p>
        </div>
        <div className='header_navbar'>
            <p>botones</p>
        </div>
      </div>
      <div className='home_main'>
        <div className='main_center_column'>
            <div className='main_title'>
                <p>Atlas digital</p>
            </div>
            <div className='main_searchbar'>
                <p>Barra de busqueda</p>
            </div>
            <div className='main_species_amount'>
                <p>Se tiene registradas x especies</p>
            </div>
        </div>
      </div>
      <div className='home_footer'>
        <div className='footer_user_section'>
            <p>Ingrese</p>
        </div>
        <div className='footer_information_slider'>
            <p>ayudenos</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
