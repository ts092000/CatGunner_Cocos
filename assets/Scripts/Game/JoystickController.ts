import { _decorator, Camera, Component, EventTouch, math, Node, Vec2, Vec3 } from 'cc';
import { PlayerController } from './PlayerController';
const { ccclass, property } = _decorator;

@ccclass('JoystickController')
export class JoystickController extends Component {
    @property({type:Node})
    public stick: Node;

    @property({type:Camera})
    public cameraGame: Camera;

    @property({type:Node})
    public playerNode: Node;

    public v3: Vec3 = new Vec3();
    private startPosMouse: Vec3 = new Vec3();
    public maxR: number = 45;
    public playerControllerComponent: any;
    
    protected start(): void {
        // this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

        this.playerControllerComponent = this.playerNode.getComponent(PlayerController);
    }

    private getContainerLocation(event: EventTouch, node: Node): Vec3 {
        let location = this.cameraGame.screenToWorld(new Vec3(event.getLocation().x, event.getLocation().y, 0));
        node.inverseTransformPoint(this.v3, new Vec3(location.x, location.y));
        return this.v3;
    }

    private onTouchStart(event: EventTouch) {
        console.log('start');
        const newPos = this.getContainerLocation(event, this.node)
        let len: number = Math.sqrt(newPos.x * newPos.x + newPos.y * newPos.y);
        if (len > this.maxR) {
            newPos.x = newPos.x * this.maxR / len;
            newPos.y = newPos.y * this.maxR / len;
        }
        this.stick.setPosition(newPos);
        this.checkDirection();
    }
    
    private onTouchMove(event: EventTouch) {
        const newPos = this.getContainerLocation(event, this.node)
        this.stick.setPosition(newPos);
        let len: number = Math.sqrt(newPos.x * newPos.x + newPos.y * newPos.y);
        if (len > this.maxR) {
            newPos.x = newPos.x * this.maxR / len;
            newPos.y = newPos.y * this.maxR / len;
        }
        this.stick.setPosition(newPos);
        this.checkDirection();
    }

    private onTouchEnd(event: EventTouch) {
        this.stick.position = new Vec3(0, 0);
        this.playerControllerComponent.rigidPlayer.linearVelocity = new Vec2(0, 0);
        this.playerControllerComponent.playIdleMove();
    }

    private checkDirection(): void {
        if (this.stick.position.x <= 22.5 && this.stick.position.x > -22.5 && this.stick.position.y > 0 && this.stick.position.y <= 45) {
            this.playerControllerComponent.rigidPlayer.linearVelocity = new Vec2(this.playerControllerComponent.rigidPlayer.linearVelocity.x, 7.5);
        } else if (this.stick.position.x > 0 && this.stick.position.x <= 45 && this.stick.position.y > -22.5 && this.stick.position.y <= 22.5) {
            this.playerControllerComponent.rigidPlayer.linearVelocity = new Vec2(7.5, this.playerControllerComponent.rigidPlayer.linearVelocity.y);
        } else if (this.stick.position.x <= 22.5 && this.stick.position.x > -22.5 && this.stick.position.y < 0 && this.stick.position.y >= -45) {
            this.playerControllerComponent.rigidPlayer.linearVelocity = new Vec2(this.playerControllerComponent.rigidPlayer.linearVelocity.x, -7.5);
        } else if(this.stick.position.x < 0 && this.stick.position.x >= -45 && this.stick.position.y > -22.5 && this.stick.position.y <= 22.5) {
            this.playerControllerComponent.rigidPlayer.linearVelocity = new Vec2(-7.5, this.playerControllerComponent.rigidPlayer.linearVelocity.y);
        }
    }

    protected update(dt: number): void {
        
    }
}


