import { _decorator, Animation, AudioClip, AudioSource, Button, Collider2D, Component, Label, Node, PolygonCollider2D, Prefab, RigidBody2D, Sprite, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameModel')
export class GameModel extends Component {
    @property({type: Prefab})
    private enemyPrefab: Prefab;

    @property({type: Prefab})
    private enemyDeadAnimPrefab: Prefab;

    @property({type: Prefab})
    private bulletPrefab: Prefab;

    @property({type: Prefab})
    private bulletEnemyPrefab: Prefab;

    @property({type: Prefab})
    private bulletBossPrefab: Prefab;

    @property({type: Prefab})
    private bulletExplodePrefab: Prefab;

    @property({type: Prefab})
    private obstaclesPrefab: Prefab;

    @property({type: Prefab})
    private rewardPrefab: Prefab;

    @property({type: Prefab})
    private bulletDropPrefab: Prefab;

    @property({type: Prefab})
    private bossPrefab: Prefab;

    @property({type: Prefab})
    private hostagePrefab: Prefab;

    @property({type: Prefab})
    private obstaclePrefab: Prefab;

    @property({type: Prefab})
    private spikePrefab: Prefab;
    
    @property({type: Node})
    private playerNode: Node;

    @property({type: Node})
    private circleNode: Node;

    @property({type: Node})
    private pointNode: Node;

    @property({type: Collider2D})
    private playerCollider: Collider2D;

    @property({type: RigidBody2D})
    private playerRb: RigidBody2D;

    @property({type: UIOpacity})
    private playerUIOpacity: UIOpacity;

    @property({type: Node})
    private enemyContainerNode: Node;

    @property({type: Node})
    private enemyDeadContainerNode: Node;

    @property({type: Node})
    private bulletContainerNode: Node;

    @property({type: Node})
    private bulletEnemyContainerNode: Node;

    @property({type: Node})
    private bulletBossContainer: Node;

    @property({type: Node})
    private bulletExplodeContainerNode: Node;

    @property({type: Node})
    private rewardContainerNode: Node;

    @property({type: Node})
    private bulletDropContainerNode: Node;

    @property({type: Node})
    private bossContainer: Node;

    @property({type: Node})
    private hostageContainer: Node;

    @property({type: Node})
    private obstacleContainer: Node;

    @property({type: Node})
    private spikeContainer: Node;

    @property({type: AudioSource})
    private musicBg: AudioSource;

    @property({type: AudioSource})
    private soundGame: AudioSource;

    @property({type:[AudioClip]})
    private musicBgArr: AudioClip[] = [];

    @property({type:[AudioClip]})
    private soundGameArr: AudioClip[] = [];

    @property({type: Button})
    private settingBtn: Button;

    @property({type: Button})
    private closeSettingBtn: Button;

    @property({type: Button})
    private shootBtn: Button;
    
    @property({type: Button})
    private replayBtn: Button;

    @property({type: Button})
    private menuBtn: Button;

    @property({type: Button})
    private resumeBtn: Button;

    @property({type: Button})
    private replaySettingBtn: Button;

    @property({type: Button})
    private menuSettingBtn: Button;

    @property({type: Node})
    private shootBtnNode: Node;

    @property({type: Button})
    private dashBtn: Button;

    @property({type: Button})
    private healBtn: Button;

    @property({type: Button})
    private powerUpBtn: Button;

    @property({type: Node})
    private joystickNode: Node;

    @property({type: Node})
    private musicOnNode: Node;

    @property({type: Node})
    private musicOffNode: Node;

    @property({type: Node})
    private soundOnNode: Node;

    @property({type: Node})
    private soundOffNode: Node;

    @property({type: Node})
    private reloadAnimNode: Node;

    @property({type: Animation})
    private reloadAnim: Animation;

    @property({type: PolygonCollider2D})
    private redWallCollider: PolygonCollider2D

    @property({type: Collider2D})
    private background1Collider: Collider2D

    @property({type: Node})
    private arrowDirection: Node;

    @property({type: UIOpacity})
    private arrowDirectionOpacity: UIOpacity;

    @property({type: Node})
    private crackNode: Node;

    @property({type: UIOpacity})
    private crackNodeOpacity: UIOpacity;

    @property({type: Node})
    private boosterNode: Node;

    @property({type: [Node]})
    private optionNode: Node[] = [];

    @property({type: [Button]})
    private optionButton: Button[] = [];

    @property({type: [Sprite]})
    private optionSprite: Sprite[] = [];

    @property({type: [Label]})
    private optionLabel: Label[] = [];

    @property({type: [Label]})
    private optionName: Label[] = [];

    @property({type: [Label]})
    private optionLevel: Label[] = [];

    @property({type: [Label]})
    private optionPrice: Label[] = [];

    @property({type: Label})
    private notiLabel: Label;

    @property({type: Animation})
    private doorAnim: Animation;

    @property({type: PolygonCollider2D})
    private doorCollider: PolygonCollider2D;

    @property({type: Node})
    private fadeNode: Node;

    @property({type: UIOpacity})
    private fadeUIOpacity: UIOpacity;
    
    public get EnemyPrefab() : Prefab {
        return this.enemyPrefab
    }
    
    public set EnemyPrefab(enemyPrefab : Prefab) {
        this.enemyPrefab = enemyPrefab;
    }

    public get EnemyDeadAnimPrefab() : Prefab {
        return this.enemyDeadAnimPrefab
    }
    
    public set EnemyDeadAnimPrefab(enemyDeadAnimPrefab : Prefab) {
        this.enemyDeadAnimPrefab = enemyDeadAnimPrefab;
    }

    public get BulletPrefab() : Prefab {
        return this.bulletPrefab
    }

    public set BulletPrefab(bulletPrefab : Prefab) {
        this.bulletPrefab = bulletPrefab;
    }

    public get BulletEnemyPrefab() : Prefab {
        return this.bulletEnemyPrefab
    }

    public set BulletEnemyPrefab(bulletEnemyPrefab : Prefab) {
        this.bulletEnemyPrefab = bulletEnemyPrefab;
    }

    public get BulletBossPrefab() : Prefab {
        return this.bulletBossPrefab
    }

    public set BulletBossPrefab(bulletBossPrefab : Prefab) {
        this.bulletBossPrefab = bulletBossPrefab;
    }

    public get BulletExplodePrefab() : Prefab {
        return this.bulletExplodePrefab
    }

    public set BulletExplodePrefab(bulletExplodePrefab : Prefab) {
        this.bulletExplodePrefab = bulletExplodePrefab;
    }
    
    public get ObstaclesPrefab() : Prefab {
        return this.obstaclesPrefab
    }

    public set ObstaclesPrefab(obstaclesPrefab : Prefab) {
        this.obstaclesPrefab = obstaclesPrefab;
    }

    public get RewardPrefab() : Prefab {
        return this.rewardPrefab
    }

    public set RewardPrefab(rewardPrefab : Prefab) {
        this.rewardPrefab = rewardPrefab;
    }

    public get BulletDropPrefab() : Prefab {
        return this.bulletDropPrefab
    }

    public set BulletDropPrefab(bulletDropPrefab : Prefab) {
        this.bulletDropPrefab = bulletDropPrefab;
    }

    public get BossPrefab() : Prefab {
        return this.bossPrefab
    }

    public set BossPrefab(bossPrefab : Prefab) {
        this.bossPrefab = bossPrefab;
    }

    public get HostagePrefab() : Prefab {
        return this.hostagePrefab
    }

    public set HostagePrefab(hostagePrefab : Prefab) {
        this.hostagePrefab = hostagePrefab;
    }

    public get ObstaclePrefab() : Prefab {
        return this.obstaclePrefab
    }

    public set ObstaclePrefab(obstaclePrefab : Prefab) {
        this.obstaclePrefab = obstaclePrefab;
    }

    public get SpikePrefab() : Prefab {
        return this.spikePrefab
    }

    public set SpikePrefab(spikePrefab : Prefab) {
        this.spikePrefab = spikePrefab;
    }

    public get PlayerNode() : Node {
        return this.playerNode
    }
    
    public set PlayerNode(playerNode : Node) {
        this.playerNode = playerNode;
    }

    public get CircleNode() : Node {
        return this.circleNode
    }
    
    public set CircleNode(circleNode : Node) {
        this.circleNode = circleNode;
    }

    public get PointNode() : Node {
        return this.pointNode
    }
    
    public set PointNode(pointNode : Node) {
        this.pointNode = pointNode;
    }

    public get PlayerCollider() : Collider2D {
        return this.playerCollider
    }
    
    public set PlayerCollider(playerCollider : Collider2D) {
        this.playerCollider = playerCollider;
    }

    public get PlayerRb() : RigidBody2D {
        return this.playerRb
    }
    
    public set PlayerRb(playerRb : RigidBody2D) {
        this.playerRb = playerRb;
    }

    public get PlayerUIOpacity() : UIOpacity {
        return this.playerUIOpacity
    }
    
    public set PlayerUIOpacity(playerUIOpacity : UIOpacity) {
        this.playerUIOpacity = playerUIOpacity;
    }

    public get EnemyContainerNode() : Node {
        return this.enemyContainerNode
    }
    
    public set EnemyContainerNode(enemyContainerNode : Node) {
        this.enemyContainerNode = enemyContainerNode;
    }

    public get EnemyDeadContainerNode() : Node {
        return this.enemyDeadContainerNode
    }
    
    public set EnemyDeadContainerNode(enemyDeadContainerNode : Node) {
        this.enemyDeadContainerNode = enemyDeadContainerNode;
    }

    public get BulletContainerNode() : Node {
        return this.bulletContainerNode
    }
    
    public set BulletContainerNode(bulletContainerNode : Node) {
        this.bulletContainerNode = bulletContainerNode;
    }

    public get BulletEnemyContainerNode() : Node {
        return this.bulletEnemyContainerNode
    }
    
    public set BulletEnemyContainerNode(bulletEnemyContainerNode : Node) {
        this.bulletEnemyContainerNode = bulletEnemyContainerNode;
    }

    public get BulletBossContainer() : Node {
        return this.bulletBossContainer
    }
    
    public set BulletBossContainer(bulletBossContainer : Node) {
        this.bulletBossContainer = bulletBossContainer;
    }

    public get BulletExplodeContainerNode() : Node {
        return this.bulletExplodeContainerNode
    }
    
    public set BulletExplodeContainerNode(bulletExplodeContainerNode : Node) {
        this.bulletExplodeContainerNode = bulletExplodeContainerNode;
    }

    public get RewardContainerNode() : Node {
        return this.rewardContainerNode
    }
    
    public set RewardContainerNode(rewardContainerNode : Node) {
        this.rewardContainerNode = rewardContainerNode;
    }

    public get BulletDropContainerNode() : Node {
        return this.bulletDropContainerNode
    }
    
    public set BulletDropContainerNode(bulletDropContainerNode : Node) {
        this.bulletDropContainerNode = bulletDropContainerNode;
    }

    public get BossContainer() : Node {
        return this.bossContainer
    }
    
    public set BossContainer(bossContainer : Node) {
        this.bossContainer = bossContainer;
    }

    public get HostageContainer() : Node {
        return this.hostageContainer
    }
    
    public set HostageContainer(hostageContainer : Node) {
        this.hostageContainer = hostageContainer;
    }

    public get ObstacleContainer() : Node {
        return this.obstacleContainer
    }
    
    public set ObstacleContainer(obstacleContainer : Node) {
        this.obstacleContainer = obstacleContainer;
    }

    public get SpikeContainer() : Node {
        return this.spikeContainer
    }
    
    public set SpikeContainer(spikeContainer : Node) {
        this.spikeContainer = spikeContainer;
    }

    public get MusicBg() : AudioSource {
        return this.musicBg
    }
    
    public set MusicBg(musicBg : AudioSource) {
        this.musicBg = musicBg;
    }

    public get SoundGame() : AudioSource {
        return this.soundGame
    }

    public set SoundGame(soundGame : AudioSource) {
        this.soundGame = soundGame;
    }

    public get MusicBgArr() : AudioClip[] {
        return this.musicBgArr
    }
    
    public set MusicBgArr(musicBgArr : AudioClip[]) {
        this.musicBgArr = musicBgArr;
    }

    public get SoundGameArr() : AudioClip[] {
        return this.soundGameArr
    }
    
    public set SoundGameArr(soundGameArr : AudioClip[]) {
        this.soundGameArr = soundGameArr;
    }

    public get SettingBtn() : Button {
        return this.settingBtn
    }
    
    public set SettingBtn(settingBtn : Button) {
        this.settingBtn = settingBtn;
    }

    public get CloseSettingBtn() : Button {
        return this.closeSettingBtn
    }
    
    public set CloseSettingBtn(closeSettingBtn : Button) {
        this.closeSettingBtn = closeSettingBtn;
    }

    public get ShootBtn() : Button {
        return this.shootBtn
    }
    
    public set ShootBtn(shootBtn : Button) {
        this.shootBtn = shootBtn;
    }

    public get ReplayBtn() : Button {
        return this.replayBtn
    }
    
    public set ReplayBtn(replayBtn : Button) {
        this.replayBtn = replayBtn;
    }

    public get MenuBtn() : Button {
        return this.menuBtn
    }
    
    public set MenuBtn(menuBtn : Button) {
        this.menuBtn = menuBtn;
    }

    public get ResumeBtn() : Button {
        return this.resumeBtn
    }
    
    public set ResumeBtn(resumeBtn : Button) {
        this.resumeBtn = resumeBtn;
    }

    public get ReplaySettingBtn() : Button {
        return this.replaySettingBtn
    }
    
    public set ReplaySettingBtn(replaySettingBtn : Button) {
        this.replaySettingBtn = replaySettingBtn;
    }

    public get MenuSettingBtn() : Button {
        return this.menuSettingBtn
    }
    
    public set MenuSettingBtn(menuSettingBtn : Button) {
        this.menuSettingBtn = menuSettingBtn;
    }

    public get ShootBtnNode() : Node {
        return this.shootBtnNode
    }
    
    public set ShootBtnNode(shootBtnNode : Node) {
        this.shootBtnNode = shootBtnNode;
    }

    public get DashBtn() : Button {
        return this.dashBtn
    }
    
    public set DashBtn(dashBtn : Button) {
        this.dashBtn = dashBtn;
    }

    public get HealBtn() : Button {
        return this.healBtn
    }
    
    public set HealBtn(healBtn : Button) {
        this.healBtn = healBtn;
    }

    public get PowerUpBtn() : Button {
        return this.powerUpBtn
    }
    
    public set PowerUpBtn(powerUpBtn : Button) {
        this.powerUpBtn = powerUpBtn;
    }

    public get JoystickNode() : Node {
        return this.joystickNode
    }
    
    public set JoystickNode(joystickNode : Node) {
        this.joystickNode = joystickNode;
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

    public get ReloadAnimNode() : Node {
        return this.reloadAnimNode
    }
    
    public set ReloadAnimNode(reloadAnimNode : Node) {
        this.reloadAnimNode = reloadAnimNode;
    }

    public get ReloadAnim() : Animation {
        return this.reloadAnim
    }
    
    public set ReloadAnim(reloadAnim : Animation) {
        this.reloadAnim = reloadAnim;
    }

    public get RedWallCollider() : PolygonCollider2D {
        return this.redWallCollider
    }
    
    public set RedWallCollider(redWallCollider : PolygonCollider2D) {
        this.redWallCollider = redWallCollider;
    }

    public get Background1Collider() : Collider2D {
        return this.background1Collider
    }
    
    public set Background1Collider(background1Collider : Collider2D) {
        this.background1Collider = background1Collider;
    }

    public get ArrowDirection() : Node {
        return this.arrowDirection
    }
    
    public set ArrowDirection(arrowDirection : Node) {
        this.arrowDirection = arrowDirection;
    }

    public get ArrowDirectionOpacity() : UIOpacity {
        return this.arrowDirectionOpacity
    }
    
    public set ArrowDirectionOpacity(arrowDirectionOpacity : UIOpacity) {
        this.arrowDirectionOpacity = arrowDirectionOpacity;
    }

    public get CrackNode() : Node {
        return this.crackNode
    }
    
    public set CrackNode(crackNode : Node) {
        this.crackNode = crackNode;
    }

    public get CrackNodeOpacity() : UIOpacity {
        return this.crackNodeOpacity
    }
    
    public set CrackNodeOpacity(crackNodeOpacity : UIOpacity) {
        this.crackNodeOpacity = crackNodeOpacity;
    }

    public get BoosterNode() : Node {
        return this.boosterNode
    }
    
    public set BoosterNode(boosterNode : Node) {
        this.boosterNode = boosterNode;
    }

    public get OptionNode() : Node[] {
        return this.optionNode
    }
    
    public set OptionNode(optionNode : Node[]) {
        this.optionNode = optionNode;
    }

    public get OptionButton() : Button[] {
        return this.optionButton
    }
    
    public set OptionButton(optionButton : Button[]) {
        this.optionButton = optionButton;
    }

    public get OptionSprite() : Sprite[] {
        return this.optionSprite
    }
    
    public set OptionSprite(optionSprite : Sprite[]) {
        this.optionSprite = optionSprite;
    }

    public get OptionLabel() : Label[] {
        return this.optionLabel
    }
    
    public set OptionLabel(optionLabel : Label[]) {
        this.optionLabel = optionLabel;
    }

    public get OptionName() : Label[] {
        return this.optionName
    }
    
    public set OptionName(optionName : Label[]) {
        this.optionName = optionName;
    }

    public get OptionLevel() : Label[] {
        return this.optionLevel
    }
    
    public set OptionLevel(optionLevel : Label[]) {
        this.optionLevel = optionLevel;
    }

    public get OptionPrice() : Label[] {
        return this.optionPrice
    }
    
    public set OptionPrice(optionPrice : Label[]) {
        this.optionPrice = optionPrice;
    }

    public get NotiLabel() : Label {
        return this.notiLabel
    }
    
    public set NotiLabel(notiLabel : Label) {
        this.notiLabel = notiLabel;
    }

    public get DoorAnim() : Animation {
        return this.doorAnim
    }
    
    public set DoorAnim(doorAnim: Animation) {
        this.doorAnim = doorAnim;
    }

    public get DoorCollider() : PolygonCollider2D {
        return this.doorCollider
    }
    
    public set DoorCollider(doorCollider: PolygonCollider2D) {
        this.doorCollider = doorCollider;
    }

    public get FadeNode() : Node {
        return this.fadeNode
    }
    
    public set FadeNode(fadeNode: Node) {
        this.fadeNode = fadeNode;
    }

    public get FadeUIOpacity() : UIOpacity {
        return this.fadeUIOpacity
    }
    
    public set FadeUIOpacity(fadeUIOpacity: UIOpacity) {
        this.fadeUIOpacity = fadeUIOpacity;
    }
}


