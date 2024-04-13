import React from 'react';
import emailLogo from '../../icons/email.png';
import mobileLogo from '../../icons/mobile.png';
import instagramLogo from '../../icons/instagram.png';
import facebookLogo from '../../icons/facebook.png';
import { separator as Separator,styledA as StyledA  } from '../Outils/style.outil';

//Definir la taille des icons
const widthIcons = '5%';
//Div pour afficher les coordonnees
const DivCoordonnees = (props) =>{
    return(
        <div>
            <StyledA href={props.href} target='_blank'>
                <img src={ props.logo } className='m-3 d-inline-block' width={widthIcons} alt='Logo non chargé' />
                <p className='d-inline-block w-50 text-success'> { props.text } </p>
            </StyledA>
        </div>
    )
}

//Div des infos email tel insta
const Info = () => {
    return(
        <div className='d-flex flex-column align-items-center justify-content-start mt-2 w-50'>
                <div className='align-items-start'>
                    <DivCoordonnees href={'mailto:emanedanielakim@gmail.com'} logo={emailLogo} text={'Emanedanielakim@gmail.com'} />
                    <DivCoordonnees href={'tel:+33623380659'} logo={ mobileLogo } text={'+33623380659'} />
                    <DivCoordonnees href={'https://www.instagram.com/akim_emane?igsh=d2NueXY3emV3ZTFv&utm_source=qr'} logo={ instagramLogo } text={'Instagram'} />
                    <DivCoordonnees href={'https://www.facebook.com/akimjerking.emane'} logo={ facebookLogo } text={'Facebook'} />
                </div>
        </div>
    );
}

//Div permettant l'affichage de l'Iframe
const Localisation = () => {
    return(
        <div className=' rounded mt-2 col-6'>
                <iframe
                title='Localisation'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43261.09645252075!2d0.6543795000000121!3d47.33741530000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd61722c66071%3A0x4be9ca79fd2a1ec9!2s37300%20Jou%C3%A9-l%C3%A8s-Tours!5e0!3m2!1sfr!2sfr!4v1712708133277!5m2!1sfr!2sfr'
                className='w-100 iframe rounded'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
        </div>
    )
}

//Formulaire numero ou mail
const Formulaire = () => {
    return (
        <div className='d-flex flex-column align-items-center w-75'>
            <form className='d-flex flex-column mt-2'>
                <label htmlFor='email' className='form-label'>Email:</label>
                <input name='email' className='mb-2 form-control' type='email' inputMode='email' />
                <label htmlFor='tel' className='form-label'>Tel:</label>
                <div className='d-inline-flex'>
                    <select className='form-select w-25' name="indicatif" id="indicatif">
                        <option className='' value="+33">+33</option>
                    </select>
                    <input name='tel' className='ms-2 form-control w-75' type='tel' inputMode='number' />
                </div>
                <input className='w-25 btn btn-outline-success mt-2' type="submit" value="Envoyer" />
            </form>
        </div>
        
    )
}

//TextInfo

const TextInfo = () => {
    return (
        <div className='container m-3 w-50 text-center'>
            {/* J'ai du mettre dans une div pour la center */}
            <h5 className='fw-bold mt-2 mb-2 fst-italic text-nowrap col'>Contactez-moi pour des réponses</h5>
            <div className='w-100 d-flex justify-content-center'>
                <Separator width={'80%'} color={'black'} />
            </div>
            <p className='row fst-italic m-auto'>
            Si vous avez des questions spécifiques ou si vous souhaitez obtenir des informations supplémentaires pour mieux comprendre comment je peux vous aider, je vous encourage vivement à me laisser votre numéro de téléphone ou votre adresse e-mail. 
            De mon côté, je m'engage à vous contacter dans les plus brefs délais afin de répondre à toutes vos interrogations et de vous fournir le soutien dont vous avez besoin pour avancer. 
            Votre satisfaction et votre réussite sont mes priorités absolues. 
            En tant que partenaire dans votre projet, je suis là pour vous accompagner à chaque étape de votre parcours.
            Merci de me faire confiance pour réaliser vos objectifs.
            </p>
        </div>
    )
}
//Composant coordoonees
const coordonnees = () => {
    return (
        <section className='animated-div border border-2 border-black rounded w-100  mt-1 mb-1 m-26 p-4'>
            <div className='d-flex flex-row align-items-start fst-italic'>
                <Localisation />
                <TextInfo />
            </div>
            <Separator color={'black'} width={'100%'} />
            <div className='container  text-center'>
                <div className="row">
                <h5 className='fw-bold fst-italic col-6'>Mes coordonnées</h5>
                <h5 className='fw-bold fst-italic col-6'>Laissez vos coordonnées</h5>
                </div>
            </div>
            <Separator color={'black'} width={'100%'} />
            <div className='d-inline-flex fst-italic'>
                <Info />
                <Formulaire />
            </div>
        </section>
        
    );
};

export {coordonnees};