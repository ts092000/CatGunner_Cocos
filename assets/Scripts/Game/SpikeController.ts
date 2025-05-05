import { _decorator, Component, Node, Animation, AnimationClip } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpikeController')
export class SpikeController extends Component {
    @property({type: Animation})
    public spikeAnim: Animation;

    public isPlayNormal: boolean = false;
    public isPlayReverse: boolean = false;

    public isHasSpike: boolean = false;
    
    protected start(): void {
        
    }

    protected update(dt: number): void {
        if (this.isPlayNormal && !this.isPlayReverse) {
            this.isPlayNormal = false;
            this.scheduleOnce(function(){
                this.isPlayReverse = true;
            }, 3)
            this.scheduleOnce(function(){
                this.isHasSpike = true;
            }, 0.53)
            this.spikeAnim.defaultClip = this.spikeAnim.clips[0];
            this.spikeAnim.play();
        } else if (!this.isPlayNormal && this.isPlayReverse) {
            this.isPlayReverse = false;
            this.scheduleOnce(function(){
                this.isPlayNormal = true;
            }, 3)
            this.scheduleOnce(function(){
                this.isHasSpike = false;
            }, 0.53)
            this.spikeAnim.defaultClip = this.spikeAnim.clips[1];
            this.spikeAnim.play();
        }
    }
}


