import { _decorator, Collider2D, Component, Node, RigidBody2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BulletEnemyController')
export class BulletEnemyController extends Component {
    @property({type: Collider2D})
    public bulletCollider: Collider2D;

    @property({type: RigidBody2D})
    public bulletRb: RigidBody2D;

    public speed: number = 300;

    public moveLeft: boolean = true;
    public initPosX: number;

    protected start(): void {
        
    }

    protected update(dt: number): void {
        if (this.moveLeft) {
            this.moveBulletLeft(dt);
        }
        else {
            this.moveBulletRight(dt);
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


