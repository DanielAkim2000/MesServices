import React from 'react';
import { Routes, Route } from "react-router-dom";
import { infoForMe as Infos } from '../components/Section/infoForMe.section';
import { pourquoiChoisir as PQC } from '../components/Section/pourquoiChoisir.section';
import { technologies as Techno } from '../components/Section/technologies.section';
import { coordonnees as Coordonnees } from '../components/Section/coordonnees.section';
import { error as Error } from '../components/Section/error.section';


const SectionRouter = () => {
    return (
        <Routes>
                <Route index element={<Infos />} />
                <Route path='/QuiJesuis' element={<Infos />} />
                <Route path='/PourquoiChoisirMesServices' element={<PQC />} />
                <Route path='/Technologies' element={<Techno />} />
                <Route path='/Coordonnees' element={<Coordonnees />} />

                <Route path='/*' element={<Error />} />
        </Routes>
    );
};

export { SectionRouter };