import React, { useEffect, useState } from 'react';
import { Stage, Sprite, Container, Text, useTick, useApp } from '@pixi/react';
import * as PIXI from 'pixi.js'
import '@pixi/events';
import Keyboard from './keyboardInput';
import Mouse from './mouseInput';

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
    
    useEffect(() => {
        Keyboard.init();
        return () => {Keyboard.del()};
    }, []); // Set dependencies such that this only triggers once on render.

    return (
        <>
            <div>Hello Component!</div>
            <Stage 
                width={600} height={600}> 
                <Player />
                
                <Container x={300} y={300} width={200} height={200} anchor={0.5} eventMode={'static'} onpointermove={Mouse.debugMove}>
                    <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} eventMode={'static'} onclick={Mouse.debugClick}
                    style={new PIXI.TextStyle({
                        fontSize: 50,
                        fill: '#ffffff'
                    })}/>
                </Container>
            </Stage>
        </>
    );
}