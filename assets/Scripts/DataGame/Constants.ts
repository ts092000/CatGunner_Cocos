import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Constants')
export class Constants extends Component {
    public static SPEED_ENEMY: number = 150;
    public static readonly SPEED_CHASE: number = 1;
    public static readonly SPEED_BULLET: number = 350;
    public static readonly DEFAULT_NUMBER_OF_ENEMY: number = 50;
    public static readonly DEFAULT_NUMBER_OF_BULLET: number = 50;
    public static readonly DEFAULT_NUMBER_OF_BULLETANIMEXPLODE: number = 50;
    public static readonly DEFAULT_NUMBER_OF_REWARD: number = 50;
    public static readonly DISTANCE_MAP: number = 2132;
    // public static readonly DEFAULT_NUMBER_OF_BULLET: number = 50;

    public static readonly GAME_SCENE: string = "Game";
    public static readonly MENU_SCENE: string = "Menu";
    public static readonly LOADING_SCENE: string = "Loading";
    public static readonly GAME_CLIENT: string = "GameClient";

}


