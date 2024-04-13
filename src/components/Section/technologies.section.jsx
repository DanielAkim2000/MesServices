import React from 'react';
import { separator as Separator } from '../Outils/style.outil';
import reactLogo  from '../../icons/reactjs.png';
import expressLogo from '../../icons/express.png';
import nodeLogo from '../../icons/node.png';

//Composant pour afficher les infos sur les technologies
const TechnoInfo = (props) => {
    return (
        <div className="row">
            <Separator width={'50%'} color={props.color} />
            <div className='row'>
                <h3 style={{color:props.color}} className='text-center'>{props.name}</h3>
            </div>
            <Separator width={'50%'} color={props.color} />
            <div className="row">
                <img src={ props.logo} className='col-4 m-auto' alt="React Logo non chargé" />
                <p className='col-8 m-auto text-justify'>
                {props.text}
                </p>
            </div>
        </div>
    );
};

const technologies = () => {
    return (
        <section className='animated-div border border-2 border-black rounded w-100  mt-1 mb-1 p-4'>
            <TechnoInfo name='NodeJs' logo = { nodeLogo } color={'#008000'} text={
                `Dans le paysage dynamique du développement web, choisir la bonne technologie est essentiel pour garantir des performances optimales et une expérience utilisateur exceptionnelle. 
                C'est là qu'intervient Node.js. En optant pour Node.js pour votre site web, vous bénéficiez d'une plateforme JavaScript côté serveur rapide, évolutive et polyvalente, conçue pour gérer des applications web en temps réel avec une efficacité remarquable. 
                Node.js offre une architecture asynchrone et non bloquante, ce qui permet de traiter efficacement de multiples requêtes simultanées et de construire des applications web rapides et réactives. Avec son vaste écosystème de modules complémentaires et sa communauté active de développeurs, Node.js offre une solution puissante et flexible pour répondre à tous vos besoins en matière de développement web. 
                Que vous construisiez une application web simple ou une application complexe, Node.js vous offre la souplesse et la performance nécessaires pour réussir.`
            } />
            <TechnoInfo name='ExpressJs' logo={ expressLogo } color={'#ffdd00'} text = {
                `Dans le paysage dynamique du développement web, choisir la bonne technologie est essentiel pour garantir des performances optimales et une expérience utilisateur exceptionnelle. 
                C'est là qu'intervient Express.js. En optant pour Express.js pour votre site web, vous bénéficiez d'un framework Node.js minimaliste mais puissant, conçu pour créer des applications web rapides et efficaces. Express offre une architecture flexible et modulaire, ce qui vous permet de construire des API RESTful robustes et des applications web de grande envergure avec une facilité déconcertante. 
                Avec son écosystème riche en modules complémentaires et sa vaste communauté de développeurs, Express vous offre une solution fiable et évolutive pour répondre à tous vos besoins en matière de développement web. 
                Que vous construisiez une application web simple ou une application complexe, Express.js vous offre la souplesse et la puissance nécessaires pour réussir.`
            } />
            <TechnoInfo name={'ReactJs'} logo={reactLogo} color={'#0dcaf0'} text = {
                `Dans le monde numérique d'aujourd'hui, la rapidité, la réactivité et la convivialité sont des éléments essentiels pour capter et retenir l'attention de vos visiteurs. 
                C'est pourquoi choisir ReactJS pour votre site web est une décision judicieuse. 
                Grâce à sa conception basée sur des composants, ReactJS permet de créer des interfaces utilisateur dynamiques et interactives, offrant une expérience utilisateur fluide et agréable. De plus, sa virtual DOM (Document Object Model) optimise les performances, assurant des chargements de page rapides et une navigation sans accroc, même sur des sites complexes. 
                Avec ReactJS, vous pouvez développer un site web moderne, évolutif et facile à maintenir, tout en offrant à vos utilisateurs une expérience inoubliable. 
                Donnez vie à vos idées et engagez votre audience dès aujourd'hui avec ReactJS.`
            } />
        </section>
    );
};

export { technologies };