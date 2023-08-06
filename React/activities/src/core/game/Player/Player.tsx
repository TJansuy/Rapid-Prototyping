import React, { useCallback, useEffect, useState } from 'react';
import { Sprite, useTick } from '@pixi/react';

import * as PIXI from 'pixi.js';
import Assets from '../assetLoader';
import { checkMovement } from './move';

export default function Player() {

    const [sprite, setSprite] = useState('');
    const [reference, setReference] = useState<PIXI.Sprite>();
    
    const getReference = useCallback((sprite: PIXI.Sprite) => {
        console.log("Player Sprite:", sprite); // Obtain the PIXI.Sprite object
        sprite.position.x = 400;
        sprite.position.y = 270;
        setReference(sprite);
    }, []);

    useEffect(() => {
        setSprite(Assets.get('player'));
    }, []);

    useTick((delta) => {
        if (reference) {
            checkMovement(reference, delta);
        }
    });

    return (<>
            {sprite && 
                <Sprite
                source={sprite}
                ref={getReference}
                anchor={{ x: 0.5, y: 0.5 }} />
            }
        </>
    );
}