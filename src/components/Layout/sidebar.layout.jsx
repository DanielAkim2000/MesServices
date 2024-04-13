import React from 'react';
import pub from '../../videos/pub.MP4';
import { LinkStyle, separator as Separator } from '../Outils/style.outil';

//Pour affichier la liste des lien dans la side barrer sections
const ListLink = () => {
    return(
    <div className='d-flex flex-column mx-2'>
        <LinkStyle className='my-2 p-2 border rounded' to="/Accueil/QuiJesuis"><i>#Qui suis-je?</i></LinkStyle>
        <LinkStyle className='my-2 p-2 border rounded' to="/Accueil/PourquoiChoisirMesServices"><i>#Pourquoi choisir mes services</i></LinkStyle>
        <LinkStyle className='my-2 p-2 border rounded' to="/Accueil/Technologies"><i>#Technologies</i></LinkStyle>
        <LinkStyle className='my-2 p-2 border rounded' to="/Accueil/Coordonnees"><i>#Mes coordonnées</i></LinkStyle>
    </div>
    );
}

//Composant side bar
const sidebar = () => {
    return (
            <div className=' border w-absolute position-fixed mt-1 border-2 border-black opacity-75 d-flex text-white flex-column align-items-center mx-2 p-2 rounded bg-noir sidebar'>
            <Separator width={'70%'} color={'white'} />
            <i className='fs-5'>Sections</i>
            <Separator width={'70%'} color={'white'} />
            <ListLink />
            <Separator width={'70%'} color={'white'} />
            <i className='fs-5'>Pub</i>
            <Separator width={'70%'} color={'white'} />
            <video width={'70%'} className='m-0 p-0' height={'25%'}>
                <source className='rounded' src={ pub } type="video/mp4" />
            </video>
        </div>
    );
};

//Ecoute de l'evenement scroll

window.addEventListener('scroll', function(){
    let sidebar = document.querySelector('.sidebar');
    let main = document.getElementById('section');

    var mainBottom = main.getBoundingClientRect().bottom;
    var sideBottom = sidebar.getBoundingClientRect().bottom;
    //Pour calculer la distance entre le bottom de la sidebar et le bottom de la section
    let distance = mainBottom - sideBottom;
    console.log('distance='+distance+' maindist='+mainBottom+' sidedist='+sideBottom);
    //Verifie la distance entre le bas de la div main et le bas de la div sidebar si la distance est egale a zero
    //Alors ca veut dire que le bas de la side bar a atteint les bas de la section alors on le bloque a cette position absolute et bottom-1 on enleve aussi sa position fixe
    if( distance <= -5 ){
        sidebar.classList.remove('position-fixed');
        sidebar.classList.add('bottom-1');
        sidebar.classList.add('position-absolute');
        // sidebar.classList.add('w-20');
    }
    //Verifie si le bottom de la section et le taille de la fenetre sont egaux ou superieur si c est le cas
    //Ca veut dire que le bas de la page a touche la section ou l a depasse alors la sidebar doit de nouveau etre fixe
    if (mainBottom+5  >= window.innerHeight && sidebar.classList.contains('position-absolute') ) {
        sidebar.classList.remove('position-absolute');
        sidebar.classList.remove('bottom-1');
        sidebar.classList.add('position-fixed');
    }
    console.log(document.documentElement.scrollHeight,window.scrollY,mainBottom,window.innerHeight);
    
})


export { sidebar} ;