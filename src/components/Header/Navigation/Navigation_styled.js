import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const SNavigation = styled.nav`
height: 30px;
width:30%;
display:flex;
justify-content:space-around;
`;


export const SNavLink = styled(Link)`
font-weight: 300;
font-size: 20px;
color: gold;
text-decoration:none;
justify-content:space-between;

&:hover {
    text-decoration: underline gold 3px;
}
;`