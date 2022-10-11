import React from 'react';
import { Button } from './ButtonCss'

const Botao = ({children, Width, Height, Color, BackgroundC, BorderRadius, Border}) => {
    return (
                <Button Width={Width} 
                        Height={Height} 
                        Color={Color} 
                        BackgroundC={BackgroundC}
                        BorderRadius={BorderRadius}
                        Border={Border}
                >
                    {children}
                </Button>
    );
}

export default Botao