import React from 'react';
import Botao  from '../Button/Botao'
import { HeaderContainer, ButtonContainer, LogoContainer, SpanDefault, MenuContainer, MenuLista, MenuLI } from './HeaderCss'

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <img src="../../src/assets/Logotipo.png" alt="Logotipo" />
                <SpanDefault>LOGOTYPE</SpanDefault>
            </LogoContainer>

            <MenuContainer>
                <MenuLista>
                    <MenuLI>Home</MenuLI>
                    <MenuLI>Features</MenuLI>
                    <MenuLI>Pricing</MenuLI>
                    <MenuLI>About Us</MenuLI>
                    <MenuLI>Help</MenuLI>
                </MenuLista>
            </MenuContainer>

            <ButtonContainer>
                <Botao Width="89px" Height="40px" Color="black" BackgroundC="white" BorderRadius={"50px"}>Sign In</Botao>
                <Botao Width="89px" Height="40px" BorderRadius={"50px"}>Sign Up</Botao>
            </ButtonContainer>
        </HeaderContainer>
    )
}

export default Header