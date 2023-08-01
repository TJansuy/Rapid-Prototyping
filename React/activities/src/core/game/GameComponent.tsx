import React, { createContext, useEffect, useState } from 'react';
import { Stage, Container, Text, useApp } from '@pixi/react';
import * as PIXI from 'pixi.js'
import '@pixi/events';
import Keyboard from './keyboardInput';
import Mouse from './mouseInput';

import Player from './Player/Player'
import { FrameRate } from '../../constants';
import JoystickWrapper from './JoyStick';

export const ViewportContext = createContext({width: 0, height: 0});

export default function GameComponent() {
    const [ width , setWidth ] = useState<number>(visualViewport!.width);
    const [ height, setHeight] = useState<number>(visualViewport!.height);

    const app = useApp();

    useEffect(() => {
        if (app) {
            app.ticker.maxFPS = FrameRate;
        }
    }, [app]);

    useEffect(() => {
        visualViewport!.onresize = () => {
            setWidth(visualViewport!.width);
            setHeight(visualViewport!.height);
        }
    }, [width, height]);

    useEffect(() => {
        Keyboard.init();
        return () => {Keyboard.del()};
    }, []); // Set dependencies such that this only triggers once on render.

    return (
        <>
            <ViewportContext.Provider value={{width:width, height:height}}>
                <Stage 
                    width={width} height={visualViewport?.height} options={{backgroundColor: 'white'}}> 
                    
                    <Container x={0} y={0} sortableChildren
                        eventMode={'static'}>

                        <Text text="Hello World" eventMode={'static'} onpointerdown={Mouse.debugClick}
                            style={new PIXI.TextStyle({fontSize: 50, fill: '#000000'})}/>
                        
                        <Player />
                        <JoystickWrapper />
                    </Container>
                </Stage>
            </ViewportContext.Provider>
        </>
    );
}