import { _decorator, Component, director, find, Node, ProgressBar, tween } from 'cc';
import { Constants } from '../DataGame/Constants';
import { StoreAPI } from '../GameCenter/StoreAPI';
// import GameClient from '@onechaintech/gamesdk-dev';
import { DataUser } from '../GameCenter/DataUser';
const { ccclass, property } = _decorator;

@ccclass('LoadingController')
export class LoadingController extends Component {
    @property({type: ProgressBar})
    private progressBarLoading: ProgressBar;
    
    public gameClient;
    public static volumeMusicValue: number = 0.7;
    public static volumeSoundValue: number = 0.7;
    public async start() : Promise<void> {
        // let _this = this;
        // let parameters = find(Constants.GAME_CLIENT);
        
        // if (parameters === null) {
        //     let parameters = new Node(Constants.GAME_CLIENT);
        //     if (this.gameClient === undefined) {
        //         this.gameClient = new GameClient("65b242e14c61324e3898d071", "51a09d3a-aace-4978-9475-30fc49164df8", window.parent, {dev: true});
        //         await this.gameClient.initAsync()
        //         .then(async (data) => {
        //             //Get current user id
        //             let userID = this.gameClient.user.citizen.getCitizenId();

        //             //Get gamedata from server
        //             await this.gameClient.user.data.getGameData().then((response: any) => {
        //                 //Save data
        //                 if (response.data[`${userID}`] !== undefined) DataUser.dataUser = response.data[`${userID}`];
                        
        //             }).catch(async (e) => {
        //                 console.log('Error at get game data: ', e);
        //             })

        //             let gameClientParams = parameters.addComponent(StoreAPI);
        //             gameClientParams.gameClient = this.gameClient;
        //             director.addPersistRootNode(parameters);
        //         })
        //         .catch((err) => console.log(err));
        //     }
        // }
        let tweenLoadingAnim = tween(this.progressBarLoading).to(1, {progress: 1})
        tweenLoadingAnim.start();
        this.scheduleOnce(function(){
            director.loadScene(Constants.MENU_SCENE);
        }, 1)
    }
}


