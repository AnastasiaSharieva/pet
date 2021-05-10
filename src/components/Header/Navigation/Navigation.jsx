import React from 'react';
import { nav } from '../../../common/nav';

import { SNavigation, SNavLink } from './Navigation_styled';


const Navigation = () => {
    const renderLink = () => {
        return nav.map(({ name, route }) => (
            <SNavigation>
                <SNavLink key={route} to={route}> {name} </SNavLink>
            </SNavigation>
        ));
    };
    return (
        <SNavigation>
            {renderLink()}
        </SNavigation>
    )
}

export default Navigation;