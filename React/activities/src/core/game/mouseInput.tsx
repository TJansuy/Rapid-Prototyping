import { FederatedPointerEvent } from "pixi.js"; 
import '@pixi/events';

class Mouse {
    static debugMove = (e:FederatedPointerEvent) => {
        console.log(e);
        console.log("Mouse at", e.global);
    };

    static debugClick = (e:FederatedPointerEvent) => {
        console.log(e);
        console.log("Click at", e.global)
    }
};

export default Mouse;