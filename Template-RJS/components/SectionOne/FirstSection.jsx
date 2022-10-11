import React from 'react';
import Button from './../Button/Botao'
import { ArticleContainer, ArticleParagraph, ArticleTitle, ButtonContainer, IconsContainer, Images, ImgContainer, Phone1Image, Phone2Image, SectionContainer } from './FirstSectionCss';
import LogitechIcon from './../../src/assets/Elements/logitech.svg'
import AmazonIcon from './../../src/assets/Elements/amazon.svg'
import FacebookIcon from './../../src/assets/Elements/facebook.svg'
import GoogleIcon from './../../src/assets/Elements/google.svg'

const FirstSection = () => {
    return (
        <SectionContainer>
            <ImgContainer>
                <Phone1Image src="../../src/assets/Phone.png" alt="Iphone 1"></Phone1Image>
                <Phone2Image src="../../src/assets/Phone-1.png" alt="Iphone 2"></Phone2Image>
            </ImgContainer>

            <ArticleContainer>
                <ArticleTitle>Headline of Modern and Digital Lending Platform Seconds</ArticleTitle>
                <ArticleParagraph>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process</ArticleParagraph>
                
                <ButtonContainer>
                    <Button Width={"144px"} Height={"56px"} BorderRadius={"13px"}>Get Started</Button>
                    <Button Width={"144px"} Height={"56px"} Color={"black"} BackgroundC={"white"} BorderRadius={"13px"} Border={"1px solid black"}>Learn More</Button>
                </ButtonContainer>

                <IconsContainer>
                    <Images src={LogitechIcon} Width={"126px"} Height={"37px"}></Images>
                    <Images src={AmazonIcon} Width={"161px"} Height={"32px"}></Images>
                    <Images src={FacebookIcon} Width={"142px"} Height={"28px"}></Images>
                    <Images src={GoogleIcon} Width={"132px"} Height={"43px"}></Images>
                </IconsContainer>

            </ArticleContainer>
        </SectionContainer>
    )
}

export default FirstSection