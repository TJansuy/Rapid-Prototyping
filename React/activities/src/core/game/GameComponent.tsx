import React from 'react';
import { Stage, Sprite, Container, Text } from '@pixi/react';
import Keyboard from './keyboardInput';

export default function GameComponent() {
    
    
    return (
        <>
            <div>Hello Component!</div>
            <Stage 
            width={600} height={600} 
            onMount={Keyboard.init} onUnmount={Keyboard.del}> 
                <Sprite
                    image="https://pixijs.io/pixi-react/img/bunny.png"
                    x={400}
                    y={270}
                    anchor={{ x: 0.5, y: 0.5 }}
                />

                <Container x={400} y={330}>
                    <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} />
                </Container>
            </Stage>
        </>
    );
}