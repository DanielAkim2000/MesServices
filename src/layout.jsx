import React from 'react';
import { header as Header }  from './components/Layout/header.components';
import { sidebar as SideBar } from './components/Layout/sidebar.components';
import { Outlet } from 'react-router-dom';
const layout = () => {
    return (
        <div className='d-flex flex-column'>
            <Header />
            <main className='d-flex flex-row'>
                <SideBar />
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export { layout };