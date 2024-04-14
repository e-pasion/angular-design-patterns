

interface OldJoystick {
    connectToPort():void;
    readInputs():number;
}

class OldJoystickImpl implements OldJoystick{
    connectToPort(): void {
        console.log('Connecting to port');
    }
    readInputs(): number {
        console.log('Reading old joystick');
        return Math.floor(Math.random()*256);
    }
    
}

interface USBJoystick {
    connectToUSB():void;
    readData():number;
}

class USBJoystickImpl implements USBJoystick{
    connectToUSB(): void {
        console.log('Connecting to USB');
    }
    readData(): number {
        console.log('Reading USB');
        return Math.floor(Math.random()*256);    }
    
}

class JoystickAdapter implements USBJoystick {
    constructor(private oldJoystickImp:OldJoystickImpl){}


    connectToUSB(): void {
        this.oldJoystickImp.connectToPort()
    }
    readData(): number {
        return this.oldJoystickImp.readInputs();
    }

}

const OldJoystick = new OldJoystickImpl()
const OldJoystickWithAdapter= new JoystickAdapter(OldJoystick);
OldJoystickWithAdapter.connectToUSB();