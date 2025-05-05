import { _decorator, Animation, CCInteger, Component, Label, Node, Prefab, ProgressBar, Sprite, SpriteFrame, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameView')
export class GameView extends Component {
    @property({type:ProgressBar})
    private hpProgressBar: ProgressBar;

    @property({type:ProgressBar})
    private bossHpProgressBar: ProgressBar;

    @property({type: Label})
    private hpLabelCurrent: Label

    @property({type: Label})
    private hpLabelMax: Label

    @property({type: Label})
    private healLabelCount: Label

    @property({type: Label})
    private plusDameLabelCount: Label

    @property({type: CCInteger})
    private hpMax: number

    @property({type:ProgressBar})
    private dashBtnProgressBar: ProgressBar;

    @property({type:ProgressBar})
    private powerUpProgressBar: ProgressBar;

    @property({type:ProgressBar})
    private healProgressBar: ProgressBar;

    @property({type:Node})
    private shootBtnNode: Node;

    @property({type:UIOpacity})
    private shootBtnUIOpacity: UIOpacity;

    @property({type:Node})
    private dashBtnNode: Node;

    @property({type: Label})
    private scoreLabel: Label

    @property({type: Label})
    private rewardCountLabel: Label

    @property({type: Label})
    private scoreResultLabel: Label

    @property({type: Label})
    private rewardCountResultLabel: Label

    @property({type: Label})
    private highScoreLabel: Label

    @property({type: Node})
    private colorFullNode: Node

    @property({type: UIOpacity})
    private colorFullUIOpacity: UIOpacity

    @property({type: Sprite})
    private colorFullSprite: Sprite

    @property({type: Label})
    private bulletCountLabel: Label

    @property({type: Label})
    private enemyLevelUpLabel: Label

    @property({type: Label})
    private bossWarningLabel: Label

    @property({type: Node})
    private enemyLevelUpNode: Node

    @property({type: Node})
    private bossWarningLabelNode: Node

    @property({type: UIOpacity})
    private enemyLevelUpUIOpacity: UIOpacity

    @property({type: Node})
    private warningLowHealthNode: Node

    @property({type: UIOpacity})
    private warningLowHealthOpacity: UIOpacity

    @property({type: Node})
    private buffNode: Node

    @property({type: Node})
    private buffPowerUpNode: Node

    @property({type: Label})
    private buffPowerUpLabelCountDown: Label

    @property({type: Node})
    private buffPowerUpLabelNode: Node

    @property({type:Node})
    private settingNode: Node;

    @property({type:Node})
    private blackNode: Node;
    
    @property({type:Node})
    private gameOverNode: Node;

    @property({type:Node})
    private loadingAnimNode: Node;

    @property({type:ProgressBar})
    private loadingAnimProgressBar: ProgressBar;

    @property({type:Node})
    private spawnPlayerEffectNode: Node;

    @property({type:Animation})
    private spawnPlayerEffectAnimation: Animation;

    @property({type:[SpriteFrame]})
    private backgroundMap: SpriteFrame[] = [];

    @property({type:[SpriteFrame]})
    private bulletDropSf: SpriteFrame[] = [];

    @property({type:Node})
    private background1: Node;

    @property({type:Node})
    private redWall: Node;

    @property({type:Sprite})
    private backgroundSprite1: Sprite;

    @property({type:Node})
    private hpBossNode: Node;

    @property({type:[SpriteFrame]})
    private itemBoosterSf: SpriteFrame[] = [];

    @property({type:Node})
    private waveCountNode: Node;

    @property({type:[Label]})
    private waveCountLabel: Label[] = [];

    public get HpProgressBar() : ProgressBar {
        return this.hpProgressBar
    }

    public set HpProgressBar(hpProgressBar : ProgressBar) {
        this.hpProgressBar = hpProgressBar;
    }

    public get BossHpProgressBar() : ProgressBar {
        return this.bossHpProgressBar
    }

    public set BossHpProgressBar(bossHpProgressBar : ProgressBar) {
        this.bossHpProgressBar = bossHpProgressBar;
    }
    
    public get HpLabelCurrent() : Label {
        return this.hpLabelCurrent
    }

    public set HpLabelCurrent(hpLabelCurrent : Label) {
        this.hpLabelCurrent = hpLabelCurrent;
    }

    public get HpLabelMax() : Label {
        return this.hpLabelMax
    }

    public set HpLabelMax(hpLabelMax : Label) {
        this.hpLabelMax = hpLabelMax;
    }

    public get HealLabelCount() : Label {
        return this.healLabelCount
    }

    public set HealLabelCount(healLabelCount : Label) {
        this.healLabelCount = healLabelCount;
    }

    public get PlusDameLabelCount() : Label {
        return this.plusDameLabelCount
    }

    public set PlusDameLabelCount(plusDameLabelCount : Label) {
        this.plusDameLabelCount = plusDameLabelCount;
    }

    public get HpMax() : number {
        return this.hpMax
    }

    public set HpMax(hpMax : number) {
        this.hpMax = hpMax;
    }

    public get DashBtnProgressBar() : ProgressBar {
        return this.dashBtnProgressBar
    }

    public set DashBtnProgressBar(dashBtnProgressBar : ProgressBar) {
        this.dashBtnProgressBar = dashBtnProgressBar;
    }

    public get PowerUpProgressBar() : ProgressBar {
        return this.powerUpProgressBar
    }

    public set PowerUpProgressBar(powerUpProgressBar : ProgressBar) {
        this.powerUpProgressBar = powerUpProgressBar;
    }

    public get HealProgressBar() : ProgressBar {
        return this.healProgressBar
    }

    public set HealProgressBar(healProgressBar : ProgressBar) {
        this.healProgressBar = healProgressBar;
    }

    public get DashBtnNode() : Node {
        return this.dashBtnNode
    }

    public set DashBtnNode(dashBtnNode : Node) {
        this.dashBtnNode = dashBtnNode;
    }

    public get ShootBtnNode() : Node {
        return this.shootBtnNode
    }

    public set ShootBtnNode(shootBtnNode : Node) {
        this.shootBtnNode = shootBtnNode;
    }

    public get ShootBtnUIOpacity() : UIOpacity {
        return this.shootBtnUIOpacity
    }

    public set ShootBtnUIOpacity(shootBtnUIOpacity : UIOpacity) {
        this.shootBtnUIOpacity = shootBtnUIOpacity;
    }

    public get ScoreLabel() : Label {
        return this.scoreLabel
    }

    public set ScoreLabel(scoreLabel : Label) {
        this.scoreLabel = scoreLabel;
    }

    public get RewardCountLabel() : Label {
        return this.rewardCountLabel
    }

    public set RewardCountLabel(rewardCountLabel : Label) {
        this.rewardCountLabel = rewardCountLabel;
    }

    public get ScoreResultLabel() : Label {
        return this.scoreResultLabel
    }

    public set ScoreResultLabel(scoreResultLabel : Label) {
        this.scoreResultLabel = scoreResultLabel;
    }

    public get HighScoreLabel() : Label {
        return this.highScoreLabel
    }

    public set HighScoreLabel(highScoreLabel : Label) {
        this.highScoreLabel = highScoreLabel;
    }

    public get ColorFullNode() : Node {
        return this.colorFullNode
    }

    public set ColorFullNode(colorFullNode : Node) {
        this.colorFullNode = colorFullNode;
    }

    public get ColorFullUIOpacity() : UIOpacity {
        return this.colorFullUIOpacity
    }

    public set ColorFullUIOpacity(colorFullUIOpacity : UIOpacity) {
        this.colorFullUIOpacity = colorFullUIOpacity;
    }

    public get ColorFullSprite() : Sprite {
        return this.colorFullSprite
    }

    public set ColorFullSprite(colorFullSprite : Sprite) {
        this.colorFullSprite = colorFullSprite;
    }

    public get RewardCountResultLabel() : Label {
        return this.rewardCountResultLabel
    }

    public set RewardCountResultLabel(rewardCountResultLabel : Label) {
        this.rewardCountResultLabel = rewardCountResultLabel;
    }

    public get BulletCountLabel() : Label {
        return this.bulletCountLabel
    }

    public set BulletCountLabel(bulletCountLabel : Label) {
        this.bulletCountLabel = bulletCountLabel;
    }

    public get EnemyLevelUpLabel() : Label {
        return this.enemyLevelUpLabel
    }

    public set EnemyLevelUpLabel(enemyLevelUpLabel : Label) {
        this.enemyLevelUpLabel = enemyLevelUpLabel;
    }

    public get BossWarningLabel() : Label {
        return this.bossWarningLabel
    }

    public set BossWarningLabel(bossWarningLabel : Label) {
        this.bossWarningLabel = bossWarningLabel;
    }

    public get EnemyLevelUpNode() : Node {
        return this.enemyLevelUpNode
    }

    public set EnemyLevelUpNode(enemyLevelUpNode : Node) {
        this.enemyLevelUpNode = enemyLevelUpNode;
    }

    public get BossWarningLabelNode() : Node {
        return this.bossWarningLabelNode
    }

    public set BossWarningLabelNode(bossWarningLabelNode : Node) {
        this.bossWarningLabelNode = bossWarningLabelNode;
    }

    public get EnemyLevelUpUIOpacity() : UIOpacity {
        return this.enemyLevelUpUIOpacity
    }

    public set EnemyLevelUpUIOpacity(enemyLevelUpUIOpacity : UIOpacity) {
        this.enemyLevelUpUIOpacity = enemyLevelUpUIOpacity;
    }

    public get WarningLowHealthNode() : Node {
        return this.warningLowHealthNode
    }

    public set WarningLowHealthNode(warningLowHealthNode : Node) {
        this.warningLowHealthNode = warningLowHealthNode;
    }

    public get WarningLowHealthOpacity() : UIOpacity {
        return this.warningLowHealthOpacity
    }

    public set WarningLowHealthOpacity(warningLowHealthOpacity : UIOpacity) {
        this.warningLowHealthOpacity = warningLowHealthOpacity;
    }

    public get BuffNode() : Node {
        return this.buffNode
    }

    public set BuffNode(buffNode : Node) {
        this.buffNode = buffNode;
    }

    public get BuffPowerUpNode() : Node {
        return this.buffPowerUpNode
    }

    public set BuffPowerUpNode(buffPowerUpNode : Node) {
        this.buffPowerUpNode = buffPowerUpNode;
    }

    public get BuffPowerUpLabelCountDown() : Label {
        return this.buffPowerUpLabelCountDown
    }

    public set BuffPowerUpLabelCountDown(buffPowerUpLabelCountDown : Label) {
        this.buffPowerUpLabelCountDown = buffPowerUpLabelCountDown;
    }

    public get BuffPowerUpLabelNode() : Node {
        return this.buffPowerUpLabelNode
    }

    public set BuffPowerUpLabelNode(buffPowerUpLabelNode : Node) {
        this.buffPowerUpLabelNode = buffPowerUpLabelNode;
    }

    public get SettingNode() : Node {
        return this.settingNode
    }

    public set SettingNode(settingNode : Node) {
        this.settingNode = settingNode;
    }

    public get BlackNode() : Node {
        return this.blackNode
    }

    public set BlackNode(blackNode : Node) {
        this.blackNode = blackNode;
    }

    public get GameOverNode() : Node {
        return this.gameOverNode
    }

    public set GameOverNode(gameOverNode : Node) {
        this.gameOverNode = gameOverNode;
    }

    public get LoadingAnimNode() : Node {
        return this.loadingAnimNode
    }

    public set LoadingAnimNode(loadingAnimNode : Node) {
        this.loadingAnimNode = loadingAnimNode;
    }

    public get SpawnPlayerEffectNode() : Node {
        return this.spawnPlayerEffectNode
    }

    public set SpawnPlayerEffectNode(spawnPlayerEffectNode : Node) {
        this.spawnPlayerEffectNode = spawnPlayerEffectNode;
    }

    public get SpawnPlayerEffectAnimation() : Animation {
        return this.spawnPlayerEffectAnimation
    }

    public set SpawnPlayerEffectAnimation(spawnPlayerEffectAnimation : Animation) {
        this.spawnPlayerEffectAnimation = spawnPlayerEffectAnimation;
    }
    
    public get LoadingAnimProgressBar() : ProgressBar {
        return this.loadingAnimProgressBar
    }

    public set LoadingAnimProgressBar(loadingAnimProgressBar : ProgressBar) {
        this.loadingAnimProgressBar = loadingAnimProgressBar;
    }

    public get BackgroundMap() : SpriteFrame[] {
        return this.backgroundMap
    }
    
    public set BackgroundMap(backgroundMap : SpriteFrame[]) {
        this.backgroundMap = backgroundMap;
    }

    public get BulletDropSf() : SpriteFrame[] {
        return this.bulletDropSf
    }
    
    public set BulletDropSf(bulletDropSf : SpriteFrame[]) {
        this.bulletDropSf = bulletDropSf;
    }

    public get Background1() : Node {
        return this.background1
    }

    public set Background1(background1 : Node) {
        this.background1 = background1;
    }

    public get RedWall() : Node {
        return this.redWall
    }

    public set RedWall(redWall : Node) {
        this.redWall = redWall;
    }

    public get BackgroundSprite1() : Sprite {
        return this.backgroundSprite1
    }

    public set BackgroundSprite1(backgroundSprite1 : Sprite) {
        this.backgroundSprite1 = backgroundSprite1;
    }

    public get HpBossNode() : Node {
        return this.hpBossNode
    }

    public set HpBossNode(hpBossNode : Node) {
        this.hpBossNode = hpBossNode;
    }

    public get ItemBoosterSf() : SpriteFrame[] {
        return this.itemBoosterSf
    }
    
    public set ItemBoosterSf(itemBoosterSf : SpriteFrame[]) {
        this.itemBoosterSf = itemBoosterSf;
    }

    public get WaveCountNode() : Node {
        return this.waveCountNode
    }
    
    public set WaveCountNode(waveCountNode : Node) {
        this.waveCountNode = waveCountNode;
    }

    public get WaveCountLabel() : Label[] {
        return this.waveCountLabel
    }
    
    public set WaveCountLabel(waveCountLabel : Label[]) {
        this.waveCountLabel = waveCountLabel;
    }
}


