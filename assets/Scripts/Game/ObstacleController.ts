import { _decorator, Collider2D, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ObstacleController')
export class ObstacleController extends Component {
    @property({type:Collider2D})
    public obstacleCollider: Collider2D
    
    start() {

    }

    update(deltaTime: number) {
        
    }
}


