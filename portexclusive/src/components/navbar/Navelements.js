import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
background: black;
height: 100px;
// margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-indez: 10;
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px:
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1200px;
`


export const NavMenu = styled.ul`
display: flex;
align-itmes: center;
list-style: none;
text-align: center;
margin-right: -22px
`

export const NavItem = styled.li`
height: 80px;
margin-left: 6rem;
font-family:'Roboto Mono', monospace;
font-size:1.2rem


`

export const NavLink = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #01bf71
}
&:hover {
    transition: all 0.5s ease-in-out;
    color: orange;
   
}
`