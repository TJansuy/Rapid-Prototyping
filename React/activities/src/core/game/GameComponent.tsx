import React, { useCallback, useEffect, useState } from 'react';
import { Stage, Sprite, Container, Text, useTick, useApp } from '@pixi/react';
import * as PIXI from 'pixi.js'
import '@pixi/events';
import Keyboard from './keyboardInput';
import Mouse from './mouseInput';
import Assets from './assetLoader';

const MoveSpeed = 5;

const Player = () => {

    const [currentX, setX] = useState(400);
    const [currentY, setY] = useState(270);
    const [sprite, setSprite] = useState('');
    const [reference, setReference] = useState<PIXI.Sprite>();
    
    const getReference = useCallback((sprite: PIXI.Sprite) => {
        console.log("Player Sprite:", sprite); // Obtain the PIXI.Sprite object
        setReference(sprite);
    }, []);

    useEffect(() => {
        setSprite(Assets.get('player'));
    }, []);

    useTick((delta) => {
        let prevX = currentX, x = currentX;
        let prevY = currentY, y = currentY;

        if (Keyboard.up)    {y = (y - delta * MoveSpeed)};
        if (Keyboard.down)  {y = (y + delta * MoveSpeed)};
        if (Keyboard.left)  {x = (x - delta * MoveSpeed)};
        if (Keyboard.right) {x = (x + delta * MoveSpeed)};

        if (reference) {
            if      (x > prevX) {reference.scale.x =  1;}
            else if (x < prevX) {reference.scale.x = -1;}

            if      (y > prevY) {reference.scale.y =  1;} 
            else if (y < prevY) {reference.scale.y = -1;}
        }
        setX(x);
        setY(y);
    });

    return (<>
            {sprite && 
                <Sprite
                source={sprite}
                ref={getReference}
                x={currentX}
                y={currentY}
                anchor={{ x: 0.5, y: 0.5 }} />
            }
        </>
    );
}

export default function GameComponent() {
    const [ width , setWidth ] = useState<number>(visualViewport!.width);
    const [ height, setHeight] = useState<number>(visualViewport!.height);

    useEffect(() => {
        visualViewport!.onresize = () => {
            setWidth(visualViewport!.width);
            setHeight(visualViewport!.height);
        }
    }, [width, height])

    useEffect(() => {
        Keyboard.init();
        return () => {Keyboard.del()};
    }, []); // Set dependencies such that this only triggers once on render.

    return (
        <>
            <Stage 
                width={width} height={visualViewport?.height}> 
                
                <Container x={0} y={0} sortableChildren
                    eventMode={'static'}>

                    <Text text="Hello World" eventMode={'static'} onpointerdown={Mouse.debugClick}
                        style={new PIXI.TextStyle({fontSize: 50, fill: '#ffffff'})}/>
                    
                    <Player />
                </Container>
            </Stage>
        </>
    );
}