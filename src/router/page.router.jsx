import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { layout as Layout } from '../components/Layout/layout';
import { TarifMain,AccueilMain,MeContacterMain,MesProjetsMain } from '../components/Main';
import { error as Error } from '../components/Section'; 
const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<AccueilMain />} />
                <Route path='/Accueil/*' element={<AccueilMain />} />
                <Route path='/MesProjets' element={<MesProjetsMain />} />
                <Route path='/Tarif' element={<TarifMain />} />
                <Route path='/MeContacter' element={<MeContacterMain />} />

                <Route path='/*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export { PageRouter };