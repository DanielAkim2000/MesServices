import React from 'react';
import { header as Header } from './header.layout';
import { Outlet } from 'react-router-dom';
import { Footer } from './footer.layout';
const layout = () => {
    return (
        <div className='d-flex flex-column'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export { layout };