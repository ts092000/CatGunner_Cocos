import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MenuView')
export class MenuView extends Component {
    @property({type: Node})
    private loadAnimNode: Node;

    @property({type: Node})
    private btnNode: Node;
    
    @property({type: ProgressBar})
    private loadAnimProgressBar: ProgressBar;

    @property({type: Label})
    private coinLabel: Label;

    @property({type: Label})
    private rewardLabel: Label;

    @property({type: Node})
    private blackNode: Node;

    public get LoadAnimNode() : Node {
        return this.loadAnimNode
    }
    
    public set LoadAnimNode(loadAnimNode : Node) {
        this.loadAnimNode = loadAnimNode;
    }

    public get LoadAnimProgressBar() : ProgressBar {
        return this.loadAnimProgressBar
    }
    
    public set LoadAnimProgressBar(loadAnimProgressBar : ProgressBar) {
        this.loadAnimProgressBar = loadAnimProgressBar;
    }

    public get BlackNode() : Node {
        return this.blackNode
    }
    
    public set BlackNode(blackNode : Node) {
        this.blackNode = blackNode;
    }

    public get CoinLabel() : Label {
        return this.coinLabel
    }
    
    public set CoinLabel(coinLabel : Label) {
        this.coinLabel = coinLabel;
    }

    public get RewardLabel() : Label {
        return this.rewardLabel
    }
    
    public set RewardLabel(rewardLabel : Label) {
        this.rewardLabel = rewardLabel;
    }
}


