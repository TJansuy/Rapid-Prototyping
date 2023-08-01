import { useApp } from "@pixi/react";
import { Direction, Joystick, JoystickChangeEvent, JoystickSettings } from "pixi-virtual-joystick";
import { useContext, useEffect, useState } from "react";
import Keyboard from "./keyboardInput";
import { ViewportContext } from "./GameComponent";
import { JoystickDeadzone } from "../../constants";

export default function JoystickWrapper() {
    const app = useApp();
    const { width, height } = useContext(ViewportContext);

    const [ joystick, setJoystick ] = useState<Joystick>();

    const options: JoystickSettings = {
        onChange: (data: JoystickChangeEvent) => {
            if (data.power < JoystickDeadzone) {
                Keyboard.reset();
            } else {
                switch (data.direction) {
                    case Direction.TOP_LEFT:
                    case Direction.LEFT:
                    case Direction.BOTTOM_LEFT:
                        Keyboard.reset();
                        Keyboard.left = true;
                        break;
                    case Direction.TOP_RIGHT:
                    case Direction.RIGHT:
                    case Direction.BOTTOM_RIGHT:
                        Keyboard.reset();
                        Keyboard.right = true;
                        break;
                    case Direction.TOP:
                        Keyboard.reset();
                        Keyboard.up = true;
                        break;
                    case Direction.BOTTOM:
                        Keyboard.reset();
                        Keyboard.down = true;
                        break;
                }
            }
        },
        onEnd: () => {
            Keyboard.reset();
        }
    };

    useEffect(() => {
        if (app && !joystick) {
            const created = new Joystick(options);
            console.log("Joystick",created);
            setJoystick(created);
            app.stage.addChild(created);
        }
    }, [app, joystick, options]);

    useEffect(() => {
        if (joystick) {
            console.log("Joystick repositioned x:", width, "y:", height, joystick)
            joystick.position.set(300, 300);
        }
    }, [width, height, joystick]);

    return (<></>);
}