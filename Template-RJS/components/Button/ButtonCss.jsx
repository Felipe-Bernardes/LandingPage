import styled from 'styled-components'

export const Button = styled.button`
    width: ${props => props.Width};
    height: ${props => props.Height};
    color: ${props => props.Color || 'white'};
    background-color: ${props => props.BackgroundC || '#5925DC'};
    border-radius: ${props => props.BorderRadius};
    border: ${props => props.Border || 'none'};
    cursor: pointer;
`