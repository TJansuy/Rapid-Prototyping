import React, { useState } from 'react';
import { Stage, Sprite, Container, Text, useTick } from '@pixi/react';
import Keyboard from './keyboardInput';

const MoveSpeed = 5;

const Player = () => {
    const [currentX, setX] = useState(400);
    const [currentY, setY] = useState(270);
    useTick((delta) => {
        let x = currentX, y = currentY;
        if (Keyboard.up)    {y = (y - delta * MoveSpeed)};
        if (Keyboard.down)  {y = (y + delta * MoveSpeed)};
        if (Keyboard.left)  {x = (x - delta * MoveSpeed)};
        if (Keyboard.right) {x = (x + delta * MoveSpeed)};
        setX(x);
        setY(y);
    })

    return (<Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={currentX}
        y={currentY}
        anchor={{ x: 0.5, y: 0.5 }}
    />);
}

export default function GameComponent() {

    return (
        <>
            <div>Hello Component!</div>
            <Stage 
            width={600} height={600} 
            onMount={Keyboard.init} onUnmount={Keyboard.del}> 
                <Player />
                
                <Container x={400} y={330}>
                    <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} />
                </Container>
            </Stage>
        </>
    );
}