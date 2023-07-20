import { keyboard } from "@testing-library/user-event/dist/keyboard";

class Keyboard {
    public static up: boolean;
    public static down: boolean;
    public static left: boolean;
    public static right: boolean;
    
    public static onKeyDownHandler = (event:KeyboardEvent) => {
        console.log("Keydown", event.code);
        switch(event.code) {
            case 'ArrowUp':
                Keyboard.up = true;
                event.preventDefault();
            break;
            case 'ArrowDown':
                Keyboard.down = true;
                event.preventDefault();
            break;
            case 'ArrowLeft':
                Keyboard.left = true;
                event.preventDefault();
            break;
            case 'ArrowRight':
                Keyboard.right = true;
                event.preventDefault();
            break;
        }
    }

    public static onKeyUpHandler = (event:KeyboardEvent) => {
        console.log("Keyup", event.code);
        switch(event.code) {
            case 'ArrowUp':
                Keyboard.up = false;
                event.preventDefault();
            break;
            case 'ArrowDown':
                Keyboard.down = false;
                event.preventDefault();
            break;
            case 'ArrowLeft':
                Keyboard.left = false;
                event.preventDefault();
            break;
            case 'ArrowRight':
                Keyboard.right = false;
                event.preventDefault();
            break;
        }
    }

    private static reset = () => {
        Keyboard.up = false;
        Keyboard.down = false;
        Keyboard.left = false;
        Keyboard.right = false;
    }

    public static init = () => {
        console.log("Adding Keyboard")
        window.addEventListener("keydown", Keyboard.onKeyDownHandler, true);
        window.addEventListener("keyup", Keyboard.onKeyUpHandler, true);
    }

    public static del = () => {
        console.log("Removing Keyboard")
        window.removeEventListener("keydown", Keyboard.onKeyDownHandler, true);
        window.removeEventListener("keyup", Keyboard.onKeyUpHandler, true);
        Keyboard.reset();
    }
}

export default Keyboard;