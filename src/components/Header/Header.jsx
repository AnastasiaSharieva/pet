import React from 'react';
import Navigation from './Navigation/Navigation';

import { SHeader } from './Header_styled';


const Header = () => {
    return (
        <SHeader>
            <Navigation />
        </SHeader>
    );
}

export default Header;