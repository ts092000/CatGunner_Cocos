import { _decorator, AnimationClip, Component, Node, Animation, RigidBody2D, Collider2D, Sprite, SpriteFrame, ProgressBar, Label } from 'cc';
import { Constants } from '../DataGame/Constants';
const { ccclass, property } = _decorator;

@ccclass('EnemyController')
export class EnemyController extends Component {
    @property({type:[Node]})
    public animEnemyNode: Node[] = [];

    @property({type:[Animation]})
    public animEnemyArr: Animation[] = [];

    @property({type:[AnimationClip]})
    public animClipEnemyArr: AnimationClip[] = [];

    @property({type:RigidBody2D})
    public rigidEnemy: RigidBody2D;

    @property({type:Collider2D})
    public colliderEnemy: Collider2D;

    @property({type: Sprite})
    public enemySprite: Sprite;

    @property({type:[SpriteFrame]})
    public enemySFArr: SpriteFrame[] = [];

    @property({type: ProgressBar})
    public enemyProgressBarHp: ProgressBar;

    @property({type: Node})
    public enemyNodeHp: Node;

    @property({type: Node})
    public enemyNodeLevelLabel: Node;

    @property({type: Label})
    public enemyLevelLabel: Label;

    public speed = 150;
    public hp: number = 0;
    public maxHp: number = 0;
    public speedChase = 0.75;
    public moveLeft: boolean = true;
    public hit: boolean = true;
    public outHit: boolean = true;
    public dead: boolean = false;
    public canShoot: boolean = false;
    public isShooting: boolean = true;
    public isOutShooting: boolean = true;
    public isReady: boolean = false;
    public isReadyShoot: boolean = false;

    protected start(): void {
        // this.scheduleOnce(function(){
        //     this.playIdleMove();
        // }, 1)
    }

    protected update(dt: number): void {
        if (this.moveLeft) {
            this.moveEnemyLeft(dt);
        }
        else {
            this.moveEnemyRight(dt)
        }
    }

    private playIdleMove(): void {
        this.animEnemyNode[0].active = true;
        this.animEnemyArr[0].play();
    }

    public moveEnemyLeft(deltaTime: number) {
        var posX = this.node.position.x;
        var posY = this.node.position.y;

        posX -= this.speed * deltaTime;

        this.node.setPosition(posX, posY, 0.0);
        this.colliderEnemy.apply();
    }

    public moveEnemyRight(deltaTime: number) {
        var posX = this.node.position.x;
        var posY = this.node.position.y;

        posX += this.speed * deltaTime;

        this.node.setPosition(posX, posY, 0.0);
        this.colliderEnemy.apply();
    }
}


