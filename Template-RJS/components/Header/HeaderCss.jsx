import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 30px;
    font-family: Urbanist, sans-serif;
    align-items: center;
    width: 100%;
    height: 80px;
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 125px;
    height: 40px;
`

export const MenuContainer = styled.nav`
    width: 388px;
    height: 26px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const MenuLista = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const MenuLI = styled.li`
    color: black;
    font-size: 16px;
`

export const SpanDefault = styled.span`
    margin-left: 16px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 155px;
    height: 40px;
`