import React from 'react';
import styled from 'styled-components'

export const SectionContainer = styled.div`
    width: 100vw;
    height: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const ImgContainer = styled.div`
    posisiton: relative;
`

export const Phone1Image = styled.img`
    position: absolute;
    width: 308px;
    height: 619px;
    z-index: 2;
    top: 18%;
    left: 14%;
`

export const Phone2Image = styled.img`
    position: absolute;
    width: 278px;
    height: 557px;
    z-index: 1;
    top: 22%;
    left: 20%;
`


export const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 635px;
    height: 429;
`

export const ArticleTitle = styled.span`
    color: black;
    font-size: 64px;
    font-weight: bold;
    font-family: Urbanist, sans-serif;
`

export const ArticleParagraph = styled.span`
    color: 767676;
    font-size: 20px;
    font-family: Urbanist, sans-serif;
    margin-top: 24px;
    margin-bottom: 55px;
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 301px;
    height: 56px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 148px;
`

export const IconsContainer = styled.div`
    width: 630px;
    height: 43px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Images = styled.img`
    width: ${props => props.Width};
    height: ${props => props.Height};
    fill: grey;
`