import { _decorator, Animation, Collider2D, Component, Node, RigidBody2D, Sprite, SpriteFrame, v3, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BulletBossController')
export class BulletBossController extends Component {
    @property({type: Collider2D})
    public bossBulletCollider: Collider2D;

    @property({type: RigidBody2D})
    public bossBulletRb: RigidBody2D;

    @property({type: Animation})
    public bulletExplodeAnim: Animation;

    @property({type: Sprite})
    public bulletBossSprite: Sprite;

    @property({type: SpriteFrame})
    public bulletBossSF: SpriteFrame;

    protected start(): void {
        
    }

    protected update(dt: number): void {

    }

    public shootBullet(playerPosX: number, playerPosY: number): void {
        //move bullet
        let force = 15;
        var changePoEnemy = v3(playerPosX, playerPosY, 0)
        const direction = changePoEnemy.clone().subtract(this.node.position);
        
        const velocity = direction.normalize().multiplyScalar(force); // speed

        this.bossBulletRb.linearVelocity = new Vec2(velocity.x, velocity.y)
    }
}


