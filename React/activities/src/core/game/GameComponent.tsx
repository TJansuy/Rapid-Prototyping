import React from 'react';
import { Stage, Sprite, Container, Text } from '@pixi/react';

export default function GameComponent() {

    return (
        <>
            <div>Hello Component!</div>
            <Stage>
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