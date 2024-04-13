import React from 'react';
import logo from '../../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkStyle } from '../Outils/style.outil';


//Header de bootstrap
const NavBootstrap = (props) => {
  return (
    <Navbar className="bg-noir text-white opacity-75 p-2 position-sticky w-100 top-0 z-1">
        <>
            <Navbar.Brand href="#home">
                <img
                    alt={ props.alt }
                    src={ logo }
                    
                    width={ props.width}
                    height={props.width}
                    className="d-inline-block rounded border"
                />{' '}
                <text className='d-inline-block fs-3 text-white  mb-0 align-middle'>EDA Dev</text>
            </Navbar.Brand>
            
            <Navbar.Collapse className="justify-content-end">
                <Nav> 
                    <LinkStyle to='/Accueil' className='m-2'>Accueil</LinkStyle>
                    <LinkStyle to='/MesProjets' className='m-2'>Mes projets</LinkStyle>
                    <LinkStyle to='/Tarif' className='m-2'>Tarif</LinkStyle>
                    <LinkStyle to='/MeContacter' className='m-2'>Me contacter</LinkStyle>
                </Nav>
            </Navbar.Collapse>
        </>
    </Navbar>
  );
}

//Mon Header a moi
const header = () => {
    return (
        <NavBootstrap width={50} />
    );
};

export { header };