import { _decorator, Animation, Collider, Collider2D, Component, Node, Sprite, SpriteFrame, tween, UIOpacity, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HostageController')
export class HostageController extends Component {
    @property({type:Node})
    private circleNode: Node;

    @property({type:UIOpacity})
    private circleUIOpacity: UIOpacity;

    @property({type:[Animation]})
    private animArr: Animation[] = [];

    @property({type:Node})
    private cageNode: Node;

    @property({type:Sprite})
    private cageSprite: Sprite;

    @property({type:Node})
    private popupNode: Node;

    @property({type:Sprite})
    private popupSprite: Sprite;

    @property({type:[SpriteFrame]})
    private popupSf: SpriteFrame[] = [];

    @property({type:Node})
    private gridNode: Node;

    @property({type:Sprite})
    private gridSprite: Sprite;

    @property({type:SpriteFrame})
    private gridSpriteFrame: SpriteFrame;

    @property({type:Node})
    private loadingNode: Node;

    @property({type:Node})
    private victimNode: Node;

    @property({type:Animation})
    private victimAnim: Animation;

    @property({type:[SpriteFrame]})
    private cageSf: SpriteFrame[] = [];

    @property({type:Collider2D})
    public cageCollider: Collider2D

    public isStand: boolean = false;
    public isDone: boolean = false;
    public isDoneChecked: boolean = false;

    protected start(): void {
        
    }

    protected update(dt: number): void {
        
    }

    public playAnim(type: number): void {
        this.animArr[type].play();
    }

    public playAnimVictim(type: number): void {
        this.victimAnim.defaultClip = this.victimAnim.clips[type];
        this.victimAnim.play();
    }

    public unActiveLoading(): void {
        this.loadingNode.active = false;
    }

    public playLoadingAnim(): void {
        this.loadingNode.active = true;
        this.playAnim(4);
    }

    public changePopupSprite(type: number): void {
        this.popupSprite.spriteFrame = this.popupSf[type];
    }

    public checkDone(): void {
        this.animArr[4].on(Animation.EventType.FINISHED, () =>
            this.playVictimAnimWhenSuccess()
        );
    }

    public playVictimAnimWhenSuccess(): void {
        this.isDoneChecked = true;
        this.isDone = true;
        this.playAnim(3);
        this.playAnimVictim(1);
        this.unActiveLoading();
        this.animArr[3].on(Animation.EventType.FINISHED, () =>
            this.playAnimCageAndVicAnim()
        );
    }

    public changeCageSf(type: number): void {
        this.cageSprite.spriteFrame = this.cageSf[type];
    }

    public playAnimCageAndVicAnim(): void {
        this.victimNode.scale = new Vec3(-1 ,1);
        this.popupNode.scale = new Vec3(-1 , 1);
        this.changePopupSprite(1);
        let tween1 = tween(this.victimNode).to(1.25, 
            {position: new Vec3(this.victimNode.position.x - 750, this.victimNode.position.y, this.victimNode.position.z)},{
                easing: "linear"
            })
        this.scheduleOnce(function(){
            this.victimNode.active = false;
        }, 1.25)    
        this.playAnimVictim(2);
        tween1.start();
        this.circleUIOpacity.opacity = 255;
        for (let i = 0; i < 3; i++) {
            this.animArr[i].stop();
        }
        this.changeCageSf(0);
        
        this.gridNode.active = false;
    }

    public setInitPos(): void {
        this.victimNode.setPosition(new Vec3(12.5, -3.5));
        this.gridNode.setPosition(new Vec3(10, -5));
        this.gridNode.active = true;
        this.gridSprite.spriteFrame = this.gridSpriteFrame;
        this.victimNode.active = true;
        this.victimNode.scale = new Vec3(1, 1);
        this.popupNode.scale = new Vec3(1, 1);
    }
}


