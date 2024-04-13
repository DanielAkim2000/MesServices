import React from 'react';
import { sidebar as SideBar } from '../Layout/sidebar.layout';
import { SectionRouter } from '../../router';

const AccueilMain = () => {
    return (
        <main className='container w-100 m-2 main position-relative'>
            <SideBar />
            <div id='section' className='col-9'>
                <SectionRouter />
            </div>
        </main>
    );
};

export { AccueilMain };