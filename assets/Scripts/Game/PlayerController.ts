import { _decorator, Component, Node, Animation, AnimationClip, EventKeyboard, input, Input, KeyCode, Vec3, tween, RigidBody2D, Vec2, Camera, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    @property({ type: [AnimationClip] })
    private animPlayerArr: AnimationClip[] = [];

    @property({ type: Animation })
    private animPlayer: Animation;

    @property({ type: RigidBody2D })
    private rigidPlayer: RigidBody2D;

    @property({ type: Node })
    private circleNode: Node;

    @property({ type: Node })
    private pointNode: Node;

    @property({ type: Node })
    private redWall: Node;

    @property({ type: Camera })
    public cameraPlayer: Camera;

    public currentPLayerHp: number;
    public isPlayerDead: boolean = false;
    public isDash: boolean = false;
    public isCanPressDash: boolean = true;

    public dame: number = 1;
    public isMoving: boolean;
    public isPlayAnimIdle: boolean = true;
    public isPlayAnimMove: boolean = true;

    public isStop: boolean = false;

    public moveArr1: number[] = [];
    public moveArr2: number[] = [];

    public get AnimPlayerArr(): AnimationClip[] {
        return this.animPlayerArr
    }

    public set AnimPlayerArr(animPlayerArr: AnimationClip[]) {
        this.animPlayerArr = animPlayerArr;
    }

    protected start(): void {
        this.onKeyboard();
        this.playIdleMove();
    }

    protected update(dt: number): void {
        this.cameraFollow();
        this.playAnimDead();
        if ((this.rigidPlayer.linearVelocity.x != 0 && this.isPlayAnimMove) || (this.rigidPlayer.linearVelocity.y != 0 && this.isPlayAnimMove) && !this.isDash) {
            this.isMoving = true;
            this.isPlayAnimMove = false;
            this.playAnimMove();
        }
        else if (this.rigidPlayer.linearVelocity.x === 0 && this.rigidPlayer.linearVelocity.y === 0 && this.isPlayAnimIdle && !this.isDash) {
            this.isPlayAnimIdle = false;
            this.isMoving = false;
            this.isPlayAnimMove = true;
            this.playIdleMove();
        }

        if (this.moveArr1[this.moveArr1.length - 1] === 0 && !this.isDash && !this.isStop) {
            this.rigidPlayer.linearVelocity = new Vec2(-7.5, this.rigidPlayer.linearVelocity.y);
        }

        if (this.moveArr1[this.moveArr1.length - 1] === 1 && !this.isDash && !this.isStop) {
            this.rigidPlayer.linearVelocity = new Vec2(7.5, this.rigidPlayer.linearVelocity.y);
        }

        if (this.moveArr2[this.moveArr2.length - 1] === 0 && !this.isDash && !this.isStop) {
            this.rigidPlayer.linearVelocity = new Vec2(this.rigidPlayer.linearVelocity.x, 7.5);
        }
        if (this.moveArr2[this.moveArr2.length - 1] === 1 && !this.isDash && !this.isStop) {
            this.rigidPlayer.linearVelocity = new Vec2(this.rigidPlayer.linearVelocity.x, -7.5);
        }

        if (this.moveArr1.length === 0 && this.moveArr2.length === 0 && sys.isMobile && this.isDash) {
            console.log('1')
            this.rigidPlayer.linearVelocity = new Vec2(0, 0);
        }
    }

    public onKeyDown(event?: EventKeyboard): void {
        let index = 0;
        switch (event.keyCode) {
            case KeyCode.KEY_W:
                index = this.moveArr2.findIndex((item) => item === 0);
                if (index === -1) this.moveArr2.push(0);
                break;
            case KeyCode.ARROW_UP:
                index = this.moveArr2.findIndex((item) => item === 0);
                if (index === -1) this.moveArr2.push(0);
                break;
            case KeyCode.KEY_A:
                index = this.moveArr1.findIndex((item) => item === 0);
                if (index === -1) this.moveArr1.push(0);
                break;
            case KeyCode.ARROW_LEFT:
                index = this.moveArr1.findIndex((item) => item === 0);
                if (index === -1) this.moveArr1.push(0);
                break;
            case KeyCode.KEY_S :
                index = this.moveArr2.findIndex((item) => item === 1);
                if (index === -1) this.moveArr2.push(1);
                break;
            case KeyCode.ARROW_DOWN:
                index = this.moveArr2.findIndex((item) => item === 1);
                if (index === -1) this.moveArr2.push(1);
                break;
            case KeyCode.KEY_D:
                index = this.moveArr1.findIndex((item) => item === 1);
                if (index === -1) this.moveArr1.push(1);
                break;
            case KeyCode.ARROW_RIGHT:
                index = this.moveArr1.findIndex((item) => item === 1);
                if (index === -1) this.moveArr1.push(1);
                break;
            case KeyCode.KEY_F:
                this.playAnimDash();
                break;
            case KeyCode.SPACE:
                this.playAnimShooting();
                break;
            default: break;
        }
    }

    public onKeyUp(event?: EventKeyboard): void {
        switch (event.keyCode) {
            case KeyCode.KEY_W:
                this.rigidPlayer.linearVelocity = new Vec2(this.rigidPlayer.linearVelocity.x, 0);
                let index5 = this.moveArr2.findIndex((item) => item === 0);
                this.moveArr2.splice(index5, 1);
                break;
            case KeyCode.ARROW_UP:
                this.rigidPlayer.linearVelocity = new Vec2(this.rigidPlayer.linearVelocity.x, 0);
                let index6 = this.moveArr2.findIndex((item) => item === 0);
                this.moveArr2.splice(index6, 1);
                break;
            case KeyCode.KEY_A:
                this.rigidPlayer.linearVelocity = new Vec2(0, this.rigidPlayer.linearVelocity.y);
                let index1 = this.moveArr1.findIndex((item) => item === 0);
                this.moveArr1.splice(index1, 1);
                break;
            case KeyCode.ARROW_LEFT:
                this.rigidPlayer.linearVelocity = new Vec2(0, this.rigidPlayer.linearVelocity.y);
                let index2 = this.moveArr1.findIndex((item) => item === 0);
                this.moveArr1.splice(index2, 1);
                break;
            case KeyCode.KEY_S:
                this.rigidPlayer.linearVelocity = new Vec2(this.rigidPlayer.linearVelocity.x, 0);
                let index7 = this.moveArr2.findIndex((item) => item === 1);
                this.moveArr2.splice(index7, 1);
                break;
            case KeyCode.ARROW_DOWN:
                this.rigidPlayer.linearVelocity = new Vec2(this.rigidPlayer.linearVelocity.x, 0);
                let index8 = this.moveArr2.findIndex((item) => item === 1);
                this.moveArr2.splice(index8, 1);
                break;
            case KeyCode.KEY_D:
                this.rigidPlayer.linearVelocity = new Vec2(0, this.rigidPlayer.linearVelocity.y);
                let index3 = this.moveArr1.findIndex((item) => item === 1);
                this.moveArr1.splice(index3, 1);
                break;
            case KeyCode.ARROW_RIGHT:
                this.rigidPlayer.linearVelocity = new Vec2(0, this.rigidPlayer.linearVelocity.y);
                let index4 = this.moveArr1.findIndex((item) => item === 1);
                this.moveArr1.splice(index4, 1);
                break;
            case KeyCode.SPACE:
                this.isPlayAnimIdle = true;
                break;
            default:
                break;
        }
    }

    public offKeyboard(): void {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    public onKeyboard(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    public playAnimShooting(): void {
        if (!this.isMoving) {
            this.animPlayer.defaultClip = this.animPlayer.clips[0];
            this.animPlayer.play();
        }
    }

    private playAnimMove(): void {
        this.isPlayAnimIdle = true;
        this.animPlayer.defaultClip = this.animPlayer.clips[1];
        this.animPlayer.play();
    }

    public playIdleMove(): void {
        this.animPlayer.defaultClip = this.animPlayer.clips[2];
        this.animPlayer.play();
    }

    public playAnimDash(): void {
        if (this.isCanPressDash) {
            this.isCanPressDash = false;
            this.isPlayAnimIdle = false;
            this.isPlayAnimMove = false;
            this.isDash = true;
            if (this.isDash) {
                if (this.rigidPlayer.linearVelocity.x > 0) {
                    this.rigidPlayer.linearVelocity = new Vec2(15, this.rigidPlayer.linearVelocity.y);
                }
                else if (this.rigidPlayer.linearVelocity.x < 0) {
                    this.rigidPlayer.linearVelocity = new Vec2(-15, this.rigidPlayer.linearVelocity.y);
                } else if (this.rigidPlayer.linearVelocity.x === 0) {
                    if (this.node.scale.x === 1) {
                        this.rigidPlayer.linearVelocity = new Vec2(15, this.rigidPlayer.linearVelocity.y);
                    } else {
                        this.rigidPlayer.linearVelocity = new Vec2(-15, this.rigidPlayer.linearVelocity.y);
                    }
                }
                this.animPlayer.defaultClip = this.animPlayer.clips[3];
                this.animPlayer.play();
                input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
                // input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
                this.scheduleOnce(function () {
                    this.rigidPlayer.linearVelocity = new Vec2(0, this.rigidPlayer.linearVelocity.y);
                    this.playIdleMove();
                    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
                    this.isPlayAnimIdle = true;
                    this.isPlayAnimMove = true;
                    this.isDash = false;
                    // input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
                }, 0.5)
                this.scheduleOnce(function(){
                    this.isCanPressDash = true;
                }, 5.025)
            }

        }
    }

    private cameraFollow(): void {
        this.circleNode.position = new Vec3(this.node.position.x - 5, this.node.position.y - 25, this.circleNode.position.z);
        this.pointNode.position = new Vec3(this.node.position.x - 5, this.node.position.y + 40, this.circleNode.position.z);
        let targetPos = this.node.getPosition();
        let cameraPos = this.cameraPlayer.node.getPosition();
        if ((targetPos.x > -185 && Math.abs(this.node.position.x - this.redWall.position.x) >= 230) && targetPos.x <= 1470) {
            let newPos = cameraPos.lerp(targetPos, 0.1);
            this.cameraPlayer.node.setPosition(newPos.x, this.cameraPlayer.node.position.y, 1000);
        }
        if (targetPos.y < 100 && targetPos.y > -110) {
            let newPos = cameraPos.lerp(targetPos, 0.1);
            this.cameraPlayer.node.setPosition(this.cameraPlayer.node.position.x, newPos.y, 1000);
        }
    }

    private playAnimDead(): void {
        if (this.currentPLayerHp <= 0 && this.isPlayerDead === false) {
            this.isPlayerDead = true;
            input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
            this.animPlayer.defaultClip = this.animPlayer.clips[4];
            this.animPlayer.play();
            this.scheduleOnce(function () {
                this.pointNode.active = false;
                this.circleNode.active = false;
                this.node.active = false;
            }, 1)
        }
    }
}


