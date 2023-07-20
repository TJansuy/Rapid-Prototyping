import React, { useState } from 'react';
import { Stage, Sprite, Container, Text, useTick } from '@pixi/react';
import Keyboard from './keyboardInput';

const MoveSpeed = 5;

const Player = () => {
    const [x, setX] = useState(400);
    const [y, setY] = useState(270);
    useTick((delta) => {
        if (Keyboard.up)    {setY(y - delta * MoveSpeed)};
        if (Keyboard.down)  {setY(y + delta * MoveSpeed)};
        if (Keyboard.left)  {setX(x - delta * MoveSpeed)};
        if (Keyboard.right) {setX(x + delta * MoveSpeed)};
        console.log(x, y);
    })

    return (<Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={x}
        y={y}
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