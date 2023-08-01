import React, { useCallback, useEffect, useState } from 'react';
import { Sprite, useTick } from '@pixi/react';

import * as PIXI from 'pixi.js';
import Assets from '../assetLoader';
import { checkMovement } from './move';

export default function Player() {

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
        if (reference) {
           let {x, y} = checkMovement(reference, delta, currentX, currentY);
            setX(x);
            setY(y);
        }
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