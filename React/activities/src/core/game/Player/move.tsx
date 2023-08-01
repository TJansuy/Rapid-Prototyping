import * as PIXI from 'pixi.js';
import Keyboard from "../keyboardInput";
import '../../../constants';
import { MoveSpeed } from '../../../constants';


const checkMovement = (reference: PIXI.Sprite, delta: number, currentX: number, currentY: number) => {
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
    return {x: x, y: y};
}

export {checkMovement}