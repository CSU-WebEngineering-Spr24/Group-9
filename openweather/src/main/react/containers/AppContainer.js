import React from 'react';
import Nav from '../components/nav/Nav';
import { Outlet } from 'react-router-dom';

const AppContainer = () => {

    return (<>
        <Nav />
        <Outlet />
    </>)
}

export default AppContainer
