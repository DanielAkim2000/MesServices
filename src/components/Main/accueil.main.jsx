import React from 'react';
import { sidebar as SideBar } from '../Layout/sidebar.layout';
import { SectionRouter } from '../../router';

const AccueilMain = () => {
    return (
        <main className='d-flex flex-column justify-content-start  m-2 main position-relative'>
            <SideBar />
            <div id='section' className='w-76 m-26'>
                <SectionRouter />
            </div>
        </main>
    );
};

export { AccueilMain };