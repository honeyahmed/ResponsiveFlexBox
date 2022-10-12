import React from 'react';
import Aside from './Aside';
import MainContent from './MainContent';

const Main = () => {
    return (
        <div className='mainContainer'>
            <Aside/>
            <MainContent/>
        </div>
    );
}

export default Main;
