import * as PIXI from 'pixi.js';
import Keyboard from "../keyboardInput";
import '../../../constants';
import { MoveSpeed } from '../../../constants';


const checkMovement = (reference: PIXI.Sprite, delta: number) => {
    const prevX = reference.position.x;
    const prevY = reference.position.y;

    if (Keyboard.up)    {reference.position.y -= delta * MoveSpeed};
    if (Keyboard.down)  {reference.position.y += delta * MoveSpeed};
    if (Keyboard.left)  {reference.position.x -= delta * MoveSpeed};
    if (Keyboard.right) {reference.position.x += delta * MoveSpeed};

    if      (reference.position.x > prevX) {reference.scale.x =  1;}
    else if (reference.position.x < prevX) {reference.scale.x = -1;}

    if      (reference.position.y > prevY) {reference.scale.y =  1;} 
    else if (reference.position.y  < prevY) {reference.scale.y = -1;}

}

export {checkMovement}