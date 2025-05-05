import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export type User = {
    data: {
        highScore: number,
        scoreCount: number,
        rewardCount: number
    }
}
export class DataUser {
    public static dataUser: User = { 
        data:{ 
            highScore: 0,
            scoreCount: 0,
            rewardCount: 0
        } 
    }
}

