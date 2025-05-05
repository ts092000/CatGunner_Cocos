import { _decorator, Animation, Collider2D, Component, Node, RigidBody2D, Sprite, SpriteFrame, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BossController')
export class BossController extends Component {
    @property({type: RigidBody2D})
    public bossRb: RigidBody2D

    @property({type: Collider2D})
    public bossCollide: Collider2D

    @property({type: UIOpacity})
    public bossOpacity: UIOpacity

    @property({type: Animation})
    public bossAnim: Animation

    @property({type: Sprite})
    public bossSprite: Sprite

    @property({type: SpriteFrame})
    public bossSF: SpriteFrame

    public speedChase: number = 0.5;
    public isAttack: boolean = false;
    public isShoot: boolean = false;
    public isIdle: boolean = false;

    public isCanHit: boolean = true;
    public isDead: boolean = false;

    public hp: number = 30;
    public hpMax: number = 30;
    public bossTurn: number = 0;

    protected start(): void {
        this.playAnim(0);
    }

    protected update(dt: number): void {
        
    }

    public playAnim(type: number): void {
        this.bossAnim.defaultClip = this.bossAnim.clips[type];
        this.bossAnim.play();
    }

    public attackAction(): void {
        this.playAnim(1);
    }

    public shootAction(): void {
        this.playAnim(2);
    }

    public dieAction(): void {
        this.playAnim(3);
    }
}


