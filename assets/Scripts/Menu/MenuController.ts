import { _decorator, Component, director, find, Node, tween } from 'cc';
import { MenuModel } from './MenuModel';
import { MenuView } from './MenuView';
import { Constants } from '../DataGame/Constants';
import { LoadingController } from '../Loading/LoadingController';
import { StoreAPI } from '../GameCenter/StoreAPI';
import { DataUser } from '../GameCenter/DataUser';
const { ccclass, property } = _decorator;

@ccclass('MenuController')
export class MenuController extends Component {
    @property({type:MenuModel})
    private MenuModel: MenuModel;

    @property({type: MenuView})
    private MenuView: MenuView

    public gameClient: any;
    public matchData: any;
    public userId: string;
    
    protected start(): void {
        if (LoadingController.volumeMusicValue === 0.7) {
            this.MenuModel.MusicBg.volume = 0.7;
            this.MenuModel.MusicOnNode.active = false;
            this.MenuModel.MusicOffNode.active = true;
        }
        else {
            this.MenuModel.MusicBg.volume = 0;
            this.MenuModel.MusicOnNode.active = true;
            this.MenuModel.MusicOffNode.active = false;
        }

        if (LoadingController.volumeSoundValue === 0.7) {
            this.MenuModel.SoundOnNode.active = false;
            this.MenuModel.SoundOffNode.active = true;
            this.MenuModel.SoundMenu.volume = 0.7;
        } 
        else {
            this.MenuModel.SoundOnNode.active = true;
            this.MenuModel.SoundOffNode.active = false;
            this.MenuModel.SoundMenu.volume = 0;
        }
        this.MenuModel.MusicBg.play();
        this.MenuView.CoinLabel.string = `${DataUser.dataUser.data.scoreCount}`;
        this.MenuView.RewardLabel.string = `${DataUser.dataUser.data.rewardCount}`;
    }

    protected update(dt: number): void {
        
    }

    private playGame(): void {
        this.MenuModel.SoundMenu.clip = this.MenuModel.SoundMenuArr[0];
        this.MenuModel.SoundMenu.play();
        this.MenuView.LoadAnimNode.active = true;
        let tweenLoadingAnim = tween(this.MenuView.LoadAnimProgressBar).to(1.5, {progress: 1})
        tweenLoadingAnim.start();
        this.scheduleOnce(function(){
            director.loadScene(Constants.GAME_SCENE);
        }, 1.5)
    }

    private musicOff(): void {
        this.MenuModel.MusicOnNode.active = true;
        this.MenuModel.MusicOffNode.active = false;
        LoadingController.volumeMusicValue = this.MenuModel.MusicBg.volume = 0;
    }

    private musicOn(): void {
        this.MenuModel.MusicOnNode.active = false;
        this.MenuModel.MusicOffNode.active = true;
        LoadingController.volumeMusicValue = this.MenuModel.MusicBg.volume = 0.7;
        this.MenuModel.SoundMenu.clip = this.MenuModel.SoundMenuArr[0];
        this.MenuModel.SoundMenu.play();
    }

    private soundOff(): void {
        this.MenuModel.SoundOnNode.active = true;
        this.MenuModel.SoundOffNode.active = false;
        LoadingController.volumeSoundValue = this.MenuModel.SoundMenu.volume = 0;
    }

    private souncOn(): void {
        this.MenuModel.SoundOnNode.active = false;
        this.MenuModel.SoundOffNode.active = true;
        LoadingController.volumeSoundValue =this.MenuModel.SoundMenu.volume = 0.7;
        this.MenuModel.SoundMenu.clip = this.MenuModel.SoundMenuArr[0];
        this.MenuModel.SoundMenu.play();
    }

    private openSetting(): void {
        this.MenuView.BlackNode.active = true;
        this.MenuModel.SoundMenu.clip = this.MenuModel.SoundMenuArr[0];
        this.MenuModel.SoundMenu.play();
        this.MenuModel.SettingNode.active = true;
    }

    private closeSetting(): void {
        this.MenuView.BlackNode.active = false;
        this.MenuModel.SoundMenu.clip = this.MenuModel.SoundMenuArr[0];
        this.MenuModel.SoundMenu.play();
        this.MenuModel.SettingNode.active = false;
    }

    // private async completeGame(): Promise<void> {
    //     await this.gameClient.match
    //         .completeMatch(this.matchData, { score: this.score})
    //         .then(async (data) => {
    //             if (this.score > DataUser.dataUser.data.highScore) {
    //                 DataUser.dataUser.data.highScore = this.score;
    //                 this.GameView.HighScoreLabel.string = DataUser.dataUser.data.highScore.toString();
    //             } else {
    //                 this.GameView.HighScoreLabel.string = DataUser.dataUser.data.highScore.toString();
    //             }
    //             await this.gameClient.user.data.setGameData({ [this.userId]: DataUser.dataUser }, false).then((response: any) => { 
    //             })
    //             .catch((e) => { console.log("Error at set game data", e); })
    //         })
    //         .catch((error) => console.log(error));
    // }

}


