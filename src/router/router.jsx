import React from 'react';
import { Routes, Route } from "react-router-dom";
import { layout as Layout } from '../layout';
import {infoForMe as Infos} from '../components/Outlet/infoForMe.components';
import {pourquoiChoisir as PQC} from '../components/Outlet/pourquoiChoisir.components';
import {technologies as Techno} from '../components/Outlet/technologies.components';
import {coordonnees as Coordonnees } from '../components/Outlet/coordonnees.components';
import {error as Error} from '../components/Outlet/error.components';

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout />} >
                <Route path='/QuiJesuis' element={<Infos />} />
                <Route path='/PourquoiChoisirMesServices' element={<PQC />} />
                <Route path='/Technologies' element={<Techno />} />
                <Route path='/Coordonnees' element={<Coordonnees />} />

                <Route path='/*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default Router;