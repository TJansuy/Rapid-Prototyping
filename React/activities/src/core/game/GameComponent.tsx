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
                
                <Container x={0} y={0} sortableChildren
                    eventMode={'static'} 
                    onglobalpointermove={Mouse.debugMove}>
                    <Text text="Hello World" eventMode={'static'} onpointerdown={Mouse.debugClick}
                    style={new PIXI.TextStyle({
                        fontSize: 50,
                        fill: '#ffffff'
                    })}/>
                    <Player />
                </Container>
            </Stage>
        </>
    );
}