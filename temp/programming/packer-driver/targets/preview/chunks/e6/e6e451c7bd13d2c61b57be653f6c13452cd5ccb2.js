System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, CCInteger, Component, Label, Node, ProgressBar, Sprite, SpriteFrame, UIOpacity, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _crd, ccclass, property, GameView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8a574U7sRGn7T8VTm5y+ch", "GameView", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'CCInteger', 'Component', 'Label', 'Node', 'Prefab', 'ProgressBar', 'Sprite', 'SpriteFrame', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameView", GameView = (_dec = ccclass('GameView'), _dec2 = property({
        type: ProgressBar
      }), _dec3 = property({
        type: ProgressBar
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Label
      }), _dec7 = property({
        type: Label
      }), _dec8 = property({
        type: CCInteger
      }), _dec9 = property({
        type: ProgressBar
      }), _dec10 = property({
        type: ProgressBar
      }), _dec11 = property({
        type: ProgressBar
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: UIOpacity
      }), _dec14 = property({
        type: Node
      }), _dec15 = property({
        type: Label
      }), _dec16 = property({
        type: Label
      }), _dec17 = property({
        type: Label
      }), _dec18 = property({
        type: Label
      }), _dec19 = property({
        type: Label
      }), _dec20 = property({
        type: Node
      }), _dec21 = property({
        type: UIOpacity
      }), _dec22 = property({
        type: Sprite
      }), _dec23 = property({
        type: Label
      }), _dec24 = property({
        type: Label
      }), _dec25 = property({
        type: Label
      }), _dec26 = property({
        type: Node
      }), _dec27 = property({
        type: Node
      }), _dec28 = property({
        type: UIOpacity
      }), _dec29 = property({
        type: Node
      }), _dec30 = property({
        type: UIOpacity
      }), _dec31 = property({
        type: Node
      }), _dec32 = property({
        type: Node
      }), _dec33 = property({
        type: Label
      }), _dec34 = property({
        type: Node
      }), _dec35 = property({
        type: Node
      }), _dec36 = property({
        type: Node
      }), _dec37 = property({
        type: Node
      }), _dec38 = property({
        type: Node
      }), _dec39 = property({
        type: ProgressBar
      }), _dec40 = property({
        type: Node
      }), _dec41 = property({
        type: Animation
      }), _dec42 = property({
        type: [SpriteFrame]
      }), _dec43 = property({
        type: [SpriteFrame]
      }), _dec44 = property({
        type: Node
      }), _dec45 = property({
        type: Node
      }), _dec46 = property({
        type: Sprite
      }), _dec47 = property({
        type: Node
      }), _dec48 = property({
        type: [SpriteFrame]
      }), _dec49 = property({
        type: Node
      }), _dec50 = property({
        type: [Label]
      }), _dec(_class = (_class2 = class GameView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "hpProgressBar", _descriptor, this);

          _initializerDefineProperty(this, "bossHpProgressBar", _descriptor2, this);

          _initializerDefineProperty(this, "hpLabelCurrent", _descriptor3, this);

          _initializerDefineProperty(this, "hpLabelMax", _descriptor4, this);

          _initializerDefineProperty(this, "healLabelCount", _descriptor5, this);

          _initializerDefineProperty(this, "plusDameLabelCount", _descriptor6, this);

          _initializerDefineProperty(this, "hpMax", _descriptor7, this);

          _initializerDefineProperty(this, "dashBtnProgressBar", _descriptor8, this);

          _initializerDefineProperty(this, "powerUpProgressBar", _descriptor9, this);

          _initializerDefineProperty(this, "healProgressBar", _descriptor10, this);

          _initializerDefineProperty(this, "shootBtnNode", _descriptor11, this);

          _initializerDefineProperty(this, "shootBtnUIOpacity", _descriptor12, this);

          _initializerDefineProperty(this, "dashBtnNode", _descriptor13, this);

          _initializerDefineProperty(this, "scoreLabel", _descriptor14, this);

          _initializerDefineProperty(this, "rewardCountLabel", _descriptor15, this);

          _initializerDefineProperty(this, "scoreResultLabel", _descriptor16, this);

          _initializerDefineProperty(this, "rewardCountResultLabel", _descriptor17, this);

          _initializerDefineProperty(this, "highScoreLabel", _descriptor18, this);

          _initializerDefineProperty(this, "colorFullNode", _descriptor19, this);

          _initializerDefineProperty(this, "colorFullUIOpacity", _descriptor20, this);

          _initializerDefineProperty(this, "colorFullSprite", _descriptor21, this);

          _initializerDefineProperty(this, "bulletCountLabel", _descriptor22, this);

          _initializerDefineProperty(this, "enemyLevelUpLabel", _descriptor23, this);

          _initializerDefineProperty(this, "bossWarningLabel", _descriptor24, this);

          _initializerDefineProperty(this, "enemyLevelUpNode", _descriptor25, this);

          _initializerDefineProperty(this, "bossWarningLabelNode", _descriptor26, this);

          _initializerDefineProperty(this, "enemyLevelUpUIOpacity", _descriptor27, this);

          _initializerDefineProperty(this, "warningLowHealthNode", _descriptor28, this);

          _initializerDefineProperty(this, "warningLowHealthOpacity", _descriptor29, this);

          _initializerDefineProperty(this, "buffNode", _descriptor30, this);

          _initializerDefineProperty(this, "buffPowerUpNode", _descriptor31, this);

          _initializerDefineProperty(this, "buffPowerUpLabelCountDown", _descriptor32, this);

          _initializerDefineProperty(this, "buffPowerUpLabelNode", _descriptor33, this);

          _initializerDefineProperty(this, "settingNode", _descriptor34, this);

          _initializerDefineProperty(this, "blackNode", _descriptor35, this);

          _initializerDefineProperty(this, "gameOverNode", _descriptor36, this);

          _initializerDefineProperty(this, "loadingAnimNode", _descriptor37, this);

          _initializerDefineProperty(this, "loadingAnimProgressBar", _descriptor38, this);

          _initializerDefineProperty(this, "spawnPlayerEffectNode", _descriptor39, this);

          _initializerDefineProperty(this, "spawnPlayerEffectAnimation", _descriptor40, this);

          _initializerDefineProperty(this, "backgroundMap", _descriptor41, this);

          _initializerDefineProperty(this, "bulletDropSf", _descriptor42, this);

          _initializerDefineProperty(this, "background1", _descriptor43, this);

          _initializerDefineProperty(this, "redWall", _descriptor44, this);

          _initializerDefineProperty(this, "backgroundSprite1", _descriptor45, this);

          _initializerDefineProperty(this, "hpBossNode", _descriptor46, this);

          _initializerDefineProperty(this, "itemBoosterSf", _descriptor47, this);

          _initializerDefineProperty(this, "waveCountNode", _descriptor48, this);

          _initializerDefineProperty(this, "waveCountLabel", _descriptor49, this);
        }

        get HpProgressBar() {
          return this.hpProgressBar;
        }

        set HpProgressBar(hpProgressBar) {
          this.hpProgressBar = hpProgressBar;
        }

        get BossHpProgressBar() {
          return this.bossHpProgressBar;
        }

        set BossHpProgressBar(bossHpProgressBar) {
          this.bossHpProgressBar = bossHpProgressBar;
        }

        get HpLabelCurrent() {
          return this.hpLabelCurrent;
        }

        set HpLabelCurrent(hpLabelCurrent) {
          this.hpLabelCurrent = hpLabelCurrent;
        }

        get HpLabelMax() {
          return this.hpLabelMax;
        }

        set HpLabelMax(hpLabelMax) {
          this.hpLabelMax = hpLabelMax;
        }

        get HealLabelCount() {
          return this.healLabelCount;
        }

        set HealLabelCount(healLabelCount) {
          this.healLabelCount = healLabelCount;
        }

        get PlusDameLabelCount() {
          return this.plusDameLabelCount;
        }

        set PlusDameLabelCount(plusDameLabelCount) {
          this.plusDameLabelCount = plusDameLabelCount;
        }

        get HpMax() {
          return this.hpMax;
        }

        set HpMax(hpMax) {
          this.hpMax = hpMax;
        }

        get DashBtnProgressBar() {
          return this.dashBtnProgressBar;
        }

        set DashBtnProgressBar(dashBtnProgressBar) {
          this.dashBtnProgressBar = dashBtnProgressBar;
        }

        get PowerUpProgressBar() {
          return this.powerUpProgressBar;
        }

        set PowerUpProgressBar(powerUpProgressBar) {
          this.powerUpProgressBar = powerUpProgressBar;
        }

        get HealProgressBar() {
          return this.healProgressBar;
        }

        set HealProgressBar(healProgressBar) {
          this.healProgressBar = healProgressBar;
        }

        get DashBtnNode() {
          return this.dashBtnNode;
        }

        set DashBtnNode(dashBtnNode) {
          this.dashBtnNode = dashBtnNode;
        }

        get ShootBtnNode() {
          return this.shootBtnNode;
        }

        set ShootBtnNode(shootBtnNode) {
          this.shootBtnNode = shootBtnNode;
        }

        get ShootBtnUIOpacity() {
          return this.shootBtnUIOpacity;
        }

        set ShootBtnUIOpacity(shootBtnUIOpacity) {
          this.shootBtnUIOpacity = shootBtnUIOpacity;
        }

        get ScoreLabel() {
          return this.scoreLabel;
        }

        set ScoreLabel(scoreLabel) {
          this.scoreLabel = scoreLabel;
        }

        get RewardCountLabel() {
          return this.rewardCountLabel;
        }

        set RewardCountLabel(rewardCountLabel) {
          this.rewardCountLabel = rewardCountLabel;
        }

        get ScoreResultLabel() {
          return this.scoreResultLabel;
        }

        set ScoreResultLabel(scoreResultLabel) {
          this.scoreResultLabel = scoreResultLabel;
        }

        get HighScoreLabel() {
          return this.highScoreLabel;
        }

        set HighScoreLabel(highScoreLabel) {
          this.highScoreLabel = highScoreLabel;
        }

        get ColorFullNode() {
          return this.colorFullNode;
        }

        set ColorFullNode(colorFullNode) {
          this.colorFullNode = colorFullNode;
        }

        get ColorFullUIOpacity() {
          return this.colorFullUIOpacity;
        }

        set ColorFullUIOpacity(colorFullUIOpacity) {
          this.colorFullUIOpacity = colorFullUIOpacity;
        }

        get ColorFullSprite() {
          return this.colorFullSprite;
        }

        set ColorFullSprite(colorFullSprite) {
          this.colorFullSprite = colorFullSprite;
        }

        get RewardCountResultLabel() {
          return this.rewardCountResultLabel;
        }

        set RewardCountResultLabel(rewardCountResultLabel) {
          this.rewardCountResultLabel = rewardCountResultLabel;
        }

        get BulletCountLabel() {
          return this.bulletCountLabel;
        }

        set BulletCountLabel(bulletCountLabel) {
          this.bulletCountLabel = bulletCountLabel;
        }

        get EnemyLevelUpLabel() {
          return this.enemyLevelUpLabel;
        }

        set EnemyLevelUpLabel(enemyLevelUpLabel) {
          this.enemyLevelUpLabel = enemyLevelUpLabel;
        }

        get BossWarningLabel() {
          return this.bossWarningLabel;
        }

        set BossWarningLabel(bossWarningLabel) {
          this.bossWarningLabel = bossWarningLabel;
        }

        get EnemyLevelUpNode() {
          return this.enemyLevelUpNode;
        }

        set EnemyLevelUpNode(enemyLevelUpNode) {
          this.enemyLevelUpNode = enemyLevelUpNode;
        }

        get BossWarningLabelNode() {
          return this.bossWarningLabelNode;
        }

        set BossWarningLabelNode(bossWarningLabelNode) {
          this.bossWarningLabelNode = bossWarningLabelNode;
        }

        get EnemyLevelUpUIOpacity() {
          return this.enemyLevelUpUIOpacity;
        }

        set EnemyLevelUpUIOpacity(enemyLevelUpUIOpacity) {
          this.enemyLevelUpUIOpacity = enemyLevelUpUIOpacity;
        }

        get WarningLowHealthNode() {
          return this.warningLowHealthNode;
        }

        set WarningLowHealthNode(warningLowHealthNode) {
          this.warningLowHealthNode = warningLowHealthNode;
        }

        get WarningLowHealthOpacity() {
          return this.warningLowHealthOpacity;
        }

        set WarningLowHealthOpacity(warningLowHealthOpacity) {
          this.warningLowHealthOpacity = warningLowHealthOpacity;
        }

        get BuffNode() {
          return this.buffNode;
        }

        set BuffNode(buffNode) {
          this.buffNode = buffNode;
        }

        get BuffPowerUpNode() {
          return this.buffPowerUpNode;
        }

        set BuffPowerUpNode(buffPowerUpNode) {
          this.buffPowerUpNode = buffPowerUpNode;
        }

        get BuffPowerUpLabelCountDown() {
          return this.buffPowerUpLabelCountDown;
        }

        set BuffPowerUpLabelCountDown(buffPowerUpLabelCountDown) {
          this.buffPowerUpLabelCountDown = buffPowerUpLabelCountDown;
        }

        get BuffPowerUpLabelNode() {
          return this.buffPowerUpLabelNode;
        }

        set BuffPowerUpLabelNode(buffPowerUpLabelNode) {
          this.buffPowerUpLabelNode = buffPowerUpLabelNode;
        }

        get SettingNode() {
          return this.settingNode;
        }

        set SettingNode(settingNode) {
          this.settingNode = settingNode;
        }

        get BlackNode() {
          return this.blackNode;
        }

        set BlackNode(blackNode) {
          this.blackNode = blackNode;
        }

        get GameOverNode() {
          return this.gameOverNode;
        }

        set GameOverNode(gameOverNode) {
          this.gameOverNode = gameOverNode;
        }

        get LoadingAnimNode() {
          return this.loadingAnimNode;
        }

        set LoadingAnimNode(loadingAnimNode) {
          this.loadingAnimNode = loadingAnimNode;
        }

        get SpawnPlayerEffectNode() {
          return this.spawnPlayerEffectNode;
        }

        set SpawnPlayerEffectNode(spawnPlayerEffectNode) {
          this.spawnPlayerEffectNode = spawnPlayerEffectNode;
        }

        get SpawnPlayerEffectAnimation() {
          return this.spawnPlayerEffectAnimation;
        }

        set SpawnPlayerEffectAnimation(spawnPlayerEffectAnimation) {
          this.spawnPlayerEffectAnimation = spawnPlayerEffectAnimation;
        }

        get LoadingAnimProgressBar() {
          return this.loadingAnimProgressBar;
        }

        set LoadingAnimProgressBar(loadingAnimProgressBar) {
          this.loadingAnimProgressBar = loadingAnimProgressBar;
        }

        get BackgroundMap() {
          return this.backgroundMap;
        }

        set BackgroundMap(backgroundMap) {
          this.backgroundMap = backgroundMap;
        }

        get BulletDropSf() {
          return this.bulletDropSf;
        }

        set BulletDropSf(bulletDropSf) {
          this.bulletDropSf = bulletDropSf;
        }

        get Background1() {
          return this.background1;
        }

        set Background1(background1) {
          this.background1 = background1;
        }

        get RedWall() {
          return this.redWall;
        }

        set RedWall(redWall) {
          this.redWall = redWall;
        }

        get BackgroundSprite1() {
          return this.backgroundSprite1;
        }

        set BackgroundSprite1(backgroundSprite1) {
          this.backgroundSprite1 = backgroundSprite1;
        }

        get HpBossNode() {
          return this.hpBossNode;
        }

        set HpBossNode(hpBossNode) {
          this.hpBossNode = hpBossNode;
        }

        get ItemBoosterSf() {
          return this.itemBoosterSf;
        }

        set ItemBoosterSf(itemBoosterSf) {
          this.itemBoosterSf = itemBoosterSf;
        }

        get WaveCountNode() {
          return this.waveCountNode;
        }

        set WaveCountNode(waveCountNode) {
          this.waveCountNode = waveCountNode;
        }

        get WaveCountLabel() {
          return this.waveCountLabel;
        }

        set WaveCountLabel(waveCountLabel) {
          this.waveCountLabel = waveCountLabel;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hpProgressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bossHpProgressBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hpLabelCurrent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hpLabelMax", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "healLabelCount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "plusDameLabelCount", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "hpMax", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "dashBtnProgressBar", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "powerUpProgressBar", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "healProgressBar", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "shootBtnNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "shootBtnUIOpacity", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "dashBtnNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "rewardCountLabel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "scoreResultLabel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "rewardCountResultLabel", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "highScoreLabel", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "colorFullNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "colorFullUIOpacity", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "colorFullSprite", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "bulletCountLabel", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "enemyLevelUpLabel", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "bossWarningLabel", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "enemyLevelUpNode", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "bossWarningLabelNode", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "enemyLevelUpUIOpacity", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "warningLowHealthNode", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "warningLowHealthOpacity", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "buffNode", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "buffPowerUpNode", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "buffPowerUpLabelCountDown", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "buffPowerUpLabelNode", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "settingNode", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "blackNode", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "gameOverNode", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "loadingAnimNode", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "loadingAnimProgressBar", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "spawnPlayerEffectNode", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "spawnPlayerEffectAnimation", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "backgroundMap", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "bulletDropSf", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "background1", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "redWall", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "backgroundSprite1", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "hpBossNode", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "itemBoosterSf", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "waveCountNode", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "waveCountLabel", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6e451c7bd13d2c61b57be653f6c13452cd5ccb2.js.map