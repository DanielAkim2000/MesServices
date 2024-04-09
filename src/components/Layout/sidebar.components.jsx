import React from 'react';
import { separator as Separator } from '../Outils/separator.components';
import { LinkStyle } from '../Outils/style.component';

const sidebar = () => {
    return (
        <div className='d-flex text-white flex-column align-items-center justify-content-center p-2 rounded m-2 border bg-noir'>
            <p className='fs-3'>Sections</p>
            <Separator />
            <div className='d-flex flex-column m-2'>
                <LinkStyle to="/QuiJesuis">#Qui suis-je?</LinkStyle>
                <LinkStyle to="/PourquoiChoisirMesServices">#Pourquoi choisir mes services</LinkStyle>
                <LinkStyle to="/Technologies">#Technologies</LinkStyle>
                <LinkStyle to="/Coordonnees">#Mes coordonnées</LinkStyle>
            </div>
        </div>
    );
};

export { sidebar} ;