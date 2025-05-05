import { _decorator, Component, director, Node, sp, Animation } from 'cc';
import { Constants } from '../DataGame/Constants';
const { ccclass, property } = _decorator;

@ccclass('SplashController')
export class SplashController extends Component {
    @property({type: sp.Skeleton})
    private SASpine: sp.Skeleton;

    @property({type: Animation})
    private SAReveal: Animation;
    
    protected start(): void {
        this.SASpine.setCompleteListener(this.onAnimationComplete);
        this.scheduleOnce(function(){
            this.SAReveal.play();
        }, 5.5)
    }
    
    public onAnimationComplete(track: any): void {
        if (track.animation.name === 'Option 1') {
            director.loadScene(Constants.LOADING_SCENE);
        }
    }
}


