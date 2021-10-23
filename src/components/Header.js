import React, {useState} from 'react'
import styled from 'styled-components'

function Header() {

    const [sideMenuStatus, setSideMenuStatus] = useState(false)

    return (
        <div>

            <NavBar>

                <LeftMenu>

                    <a href=''>
                        <img src='/images/logo.svg'></img>
                    </a>

                </LeftMenu>

                <MiddleMenu>

                    <a href=''>Model S</a>
                    <a href=''>Model 3</a>
                    <a href=''>Model X</a>
                    <a href=''>Model Y</a>
                    <a href=''>Solar Roof</a>
                    <a href=''>Solar Panels</a>

                </MiddleMenu>

                <RightMenu>

                    <a href=''>Shop</a>
                    <a href=''>Account</a>
                    <li onClcik = {() => setSideMenuStatus(true)}>Menu</li>

                </RightMenu>

                <MobileRightMenu>
                    
                    <li onClcik = {() => setSideMenuStatus(true)}>Menu</li>

                </MobileRightMenu>

                <SideMenu show = {sideMenuStatus}>

                    <CloseX onClcik = {() => setSideMenuStatus(false)}>&#x2715;</CloseX>

                    <li><a href=''>Existing Inventory</a></li>
                    <li><a href=''>Used Inventory</a></li>
                    <li><a href=''>Trade-In</a></li>
                    <li><a href=''>Test Drive</a></li>
                    <li><a href=''>Cybertruck</a></li>
                    <li><a href=''>Roadster</a></li>
                    <li><a href=''>Semi</a></li>
                    <li><a href=''>Chargine</a></li>
                    <li><a href=''>Powerwall</a></li>
                    <li><a href=''>Commercial Energy</a></li>
                    <li><a href=''>Utilities</a></li>
                    <li><a href=''>Find Us</a></li>
                    <li><a href=''>Support</a></li>
                    <li><a href=''>Investor Relations</a></li>

                </SideMenu>

            </NavBar>

        </div>
    )
}

export default Header

const NavBar = styled.div`
    width: 100%;
    height: 60px;
    position: fixed;
    align-items: center;
    padding: 0 0 0 40px;
    display: grid;
    grid-template-columns: 300px 1fr 300px;
    z-index: 10000;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 -10px 0 20px;
    }
`

const LeftMenu = styled.div`
    text-align: left;
`

const MiddleMenu = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: var(--dark-gray);
        padding: 5px 15px;
    }

    a:hover {
        background-color: var(--lite-gray-op);
        border-radius: 20px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    text-align: right;
    display: flex;
    padding: 0 40px;

    a {
        text-decoration: none;
        color: var(--dark-gray);
        padding: 5px 15px;
    }

    a:hover {
        background-color: var(--lite-gray-op);
        border-radius: 20px;
        padding: 5px 15px;
    }

    li {
        list-style: none;
        align-items: center;
        padding: 5px 15px;
        cursor: pointer;
    }

    li:hover {
        background-color: var(--lite-gray-op);
        border-radius: 20px;
        padding: 5px 15px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const MobileRightMenu = styled.div`
    text-align: right;
    display: flex;
    padding: 0 40px;

    li {
        list-style: none;
        align-items: center;
        padding: 5px 15px;
        cursor: pointer;
    }

    li:hover {
        background-color: var(--lite-gray-op);
        border-radius: 20px;
        padding: 5px 15px;
    }


    display: none;

    @media (max-width: 768px) {
        display: unset;
    }
`

const SideMenu = styled.div`
    z-index: 10000000;
    position: fixed;
    background-color: var(--white);
    top: 0;
    bottom: 0;
    right: 0;
    list-style: none;
    width: 300px;
    text-align: left;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16);

    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

    li {
        margin: 25px 0 0 35px;
    }

    li a {
        text-decoration: none;
        padding: 5px 15px;
    }

    li a:hover {
        background-color: var(--lite-gray-op);
        border-radius: 20px;
    }
`

const CloseX = styled.div`
    width: inherit;
    text-align: right;
    padding: 15px 15px 0 0;
    cursor: pointer;
`
