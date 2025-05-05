import { _decorator, Animation, Collider2D, Component, Node, RigidBody2D } from 'cc';
import { Constants } from '../DataGame/Constants';
const { ccclass, property } = _decorator;

@ccclass('BulletController')
export class BulletController extends Component {
    @property({type: Collider2D})
    public bulletCollider: Collider2D;

    @property({type: RigidBody2D})
    public bulletRb: RigidBody2D;

    @property({type: Animation})
    public bulletAnim: Animation;

    public speed: number;

    public moveRight: boolean = true;
    public initPosX: number;
    public type: number;

    protected start(): void {
        
    }

    protected update(dt: number): void {
        if (this.moveRight) {
            this.moveBulletRight(dt);
        }
        else {
            this.moveBulletLeft(dt);
        }
    }

    protected moveBulletRight(deltaTime: number) {
        var posX = this.node.position.x;
        var posY = this.node.position.y;

        posX += this.speed * deltaTime;

        this.node.setPosition(posX, posY, 0.0);
        this.node.setScale(1, 1, 1);
        this.bulletCollider.apply();
    }

    protected moveBulletLeft(deltaTime: number) {
        var posX = this.node.position.x;
        var posY = this.node.position.y;

        posX -= this.speed * deltaTime;

        this.node.setPosition(posX, posY, 0.0);
        this.node.setScale(-1, 1, 1);
        this.bulletCollider.apply();
    }
}


