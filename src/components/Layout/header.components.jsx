import React from 'react';
import logo from '../../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkStyle } from '../Outils/style.component';


//Header de bootstrap
const NavBootstrap = (props) => {
  return (
    <Navbar className="bg-noir text-white p-2">
        <>
            <Navbar.Brand href="#home">
                <img
                    alt={ props.alt }
                    src={ logo }
                    width={ props.width}
                    height={props.width}
                    className="d-inline-block rounded border"
                />{' '}
                <p className='d-inline-block fs-3 text-white'>EDA Dev</p>
            </Navbar.Brand>
            
            <Navbar.Collapse className="justify-content-end">
                <Nav> 
                    <LinkStyle className='m-2'>Accueil</LinkStyle>
                    <LinkStyle className='m-2'>Mes projets</LinkStyle>
                    <LinkStyle className='m-2'>Tarif</LinkStyle>
                    <LinkStyle className='m-2'>Me contacter</LinkStyle>
                </Nav>
            </Navbar.Collapse>
        </>
    </Navbar>
  );
}

//Mon Header a moi
const header = () => {
    return (
        <NavBootstrap width={75} />
    );
};

export { header };