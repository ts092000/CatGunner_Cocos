import { _decorator, AudioClip, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MenuModel')
export class MenuModel extends Component {
    @property({type: AudioSource})
    private musicBg: AudioSource;

    @property({type: AudioSource})
    private soundMenu: AudioSource;

    @property({type:[AudioClip]})
    public soundMenuArr: AudioClip[] = [];

    @property({type: Node})
    private musicOnNode: Node;

    @property({type: Node})
    private musicOffNode: Node;

    @property({type: Node})
    private soundOnNode: Node;

    @property({type: Node})
    private soundOffNode: Node;

    @property({type: Node})
    private settingNode: Node;
    
    public get MusicBg() : AudioSource {
        return this.musicBg
    }
    
    public set MusicBg(musicBg : AudioSource) {
        this.musicBg = musicBg;
    }

    public get SoundMenu() : AudioSource {
        return this.soundMenu
    }
    
    public set SoundMenu(soundMenu : AudioSource) {
        this.soundMenu = soundMenu;
    }

    public get SoundMenuArr() : AudioClip[] {
        return this.soundMenuArr
    }
    
    public set SoundMenuArr(soundMenuArr : AudioClip[]) {
        this.soundMenuArr = soundMenuArr;
    }

    public get SettingNode() : Node {
        return this.settingNode
    }
    
    public set SettingNode(settingNode : Node) {
        this.settingNode = settingNode;
    }

    public get MusicOnNode() : Node {
        return this.musicOnNode
    }
    
    public set MusicOnNode(musicOnNode : Node) {
        this.musicOnNode = musicOnNode;
    }

    public get MusicOffNode() : Node {
        return this.musicOffNode
    }
    
    public set MusicOffNode(musicOffNode : Node) {
        this.musicOffNode = musicOffNode;
    }

    public get SoundOnNode() : Node {
        return this.soundOnNode
    }
    
    public set SoundOnNode(soundOnNode : Node) {
        this.soundOnNode = soundOnNode;
    }

    public get SoundOffNode() : Node {
        return this.soundOffNode
    }
    
    public set SoundOffNode(soundOffNode : Node) {
        this.soundOffNode = soundOffNode;
    }
}


