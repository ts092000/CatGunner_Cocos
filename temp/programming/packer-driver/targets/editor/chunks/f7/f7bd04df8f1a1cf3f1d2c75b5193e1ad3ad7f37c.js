System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, AudioClip, AudioSource, Button, Collider2D, Component, Label, Node, PolygonCollider2D, Prefab, RigidBody2D, Sprite, UIOpacity, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _dec72, _dec73, _dec74, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64, _descriptor65, _descriptor66, _descriptor67, _descriptor68, _descriptor69, _descriptor70, _descriptor71, _descriptor72, _descriptor73, _crd, ccclass, property, GameModel;

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
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Button = _cc.Button;
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      PolygonCollider2D = _cc.PolygonCollider2D;
      Prefab = _cc.Prefab;
      RigidBody2D = _cc.RigidBody2D;
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18abeahcDFOO7R7EE0EjXWT", "GameModel", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AudioClip', 'AudioSource', 'Button', 'Collider2D', 'Component', 'Label', 'Node', 'PolygonCollider2D', 'Prefab', 'RigidBody2D', 'Sprite', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameModel", GameModel = (_dec = ccclass('GameModel'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Prefab
      }), _dec7 = property({
        type: Prefab
      }), _dec8 = property({
        type: Prefab
      }), _dec9 = property({
        type: Prefab
      }), _dec10 = property({
        type: Prefab
      }), _dec11 = property({
        type: Prefab
      }), _dec12 = property({
        type: Prefab
      }), _dec13 = property({
        type: Prefab
      }), _dec14 = property({
        type: Prefab
      }), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Node
      }), _dec17 = property({
        type: Node
      }), _dec18 = property({
        type: Collider2D
      }), _dec19 = property({
        type: RigidBody2D
      }), _dec20 = property({
        type: UIOpacity
      }), _dec21 = property({
        type: Node
      }), _dec22 = property({
        type: Node
      }), _dec23 = property({
        type: Node
      }), _dec24 = property({
        type: Node
      }), _dec25 = property({
        type: Node
      }), _dec26 = property({
        type: Node
      }), _dec27 = property({
        type: Node
      }), _dec28 = property({
        type: Node
      }), _dec29 = property({
        type: Node
      }), _dec30 = property({
        type: Node
      }), _dec31 = property({
        type: Node
      }), _dec32 = property({
        type: Node
      }), _dec33 = property({
        type: AudioSource
      }), _dec34 = property({
        type: AudioSource
      }), _dec35 = property({
        type: [AudioClip]
      }), _dec36 = property({
        type: [AudioClip]
      }), _dec37 = property({
        type: Button
      }), _dec38 = property({
        type: Button
      }), _dec39 = property({
        type: Button
      }), _dec40 = property({
        type: Button
      }), _dec41 = property({
        type: Button
      }), _dec42 = property({
        type: Button
      }), _dec43 = property({
        type: Button
      }), _dec44 = property({
        type: Button
      }), _dec45 = property({
        type: Node
      }), _dec46 = property({
        type: Button
      }), _dec47 = property({
        type: Button
      }), _dec48 = property({
        type: Button
      }), _dec49 = property({
        type: Node
      }), _dec50 = property({
        type: Node
      }), _dec51 = property({
        type: Node
      }), _dec52 = property({
        type: Node
      }), _dec53 = property({
        type: Node
      }), _dec54 = property({
        type: Node
      }), _dec55 = property({
        type: Animation
      }), _dec56 = property({
        type: PolygonCollider2D
      }), _dec57 = property({
        type: Collider2D
      }), _dec58 = property({
        type: Node
      }), _dec59 = property({
        type: UIOpacity
      }), _dec60 = property({
        type: Node
      }), _dec61 = property({
        type: UIOpacity
      }), _dec62 = property({
        type: Node
      }), _dec63 = property({
        type: [Node]
      }), _dec64 = property({
        type: [Button]
      }), _dec65 = property({
        type: [Sprite]
      }), _dec66 = property({
        type: [Label]
      }), _dec67 = property({
        type: [Label]
      }), _dec68 = property({
        type: [Label]
      }), _dec69 = property({
        type: [Label]
      }), _dec70 = property({
        type: Label
      }), _dec71 = property({
        type: Animation
      }), _dec72 = property({
        type: PolygonCollider2D
      }), _dec73 = property({
        type: Node
      }), _dec74 = property({
        type: UIOpacity
      }), _dec(_class = (_class2 = class GameModel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "enemyPrefab", _descriptor, this);

          _initializerDefineProperty(this, "enemyDeadAnimPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "bulletPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "bulletEnemyPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "bulletBossPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "bulletExplodePrefab", _descriptor6, this);

          _initializerDefineProperty(this, "obstaclesPrefab", _descriptor7, this);

          _initializerDefineProperty(this, "rewardPrefab", _descriptor8, this);

          _initializerDefineProperty(this, "bulletDropPrefab", _descriptor9, this);

          _initializerDefineProperty(this, "bossPrefab", _descriptor10, this);

          _initializerDefineProperty(this, "hostagePrefab", _descriptor11, this);

          _initializerDefineProperty(this, "obstaclePrefab", _descriptor12, this);

          _initializerDefineProperty(this, "spikePrefab", _descriptor13, this);

          _initializerDefineProperty(this, "playerNode", _descriptor14, this);

          _initializerDefineProperty(this, "circleNode", _descriptor15, this);

          _initializerDefineProperty(this, "pointNode", _descriptor16, this);

          _initializerDefineProperty(this, "playerCollider", _descriptor17, this);

          _initializerDefineProperty(this, "playerRb", _descriptor18, this);

          _initializerDefineProperty(this, "playerUIOpacity", _descriptor19, this);

          _initializerDefineProperty(this, "enemyContainerNode", _descriptor20, this);

          _initializerDefineProperty(this, "enemyDeadContainerNode", _descriptor21, this);

          _initializerDefineProperty(this, "bulletContainerNode", _descriptor22, this);

          _initializerDefineProperty(this, "bulletEnemyContainerNode", _descriptor23, this);

          _initializerDefineProperty(this, "bulletBossContainer", _descriptor24, this);

          _initializerDefineProperty(this, "bulletExplodeContainerNode", _descriptor25, this);

          _initializerDefineProperty(this, "rewardContainerNode", _descriptor26, this);

          _initializerDefineProperty(this, "bulletDropContainerNode", _descriptor27, this);

          _initializerDefineProperty(this, "bossContainer", _descriptor28, this);

          _initializerDefineProperty(this, "hostageContainer", _descriptor29, this);

          _initializerDefineProperty(this, "obstacleContainer", _descriptor30, this);

          _initializerDefineProperty(this, "spikeContainer", _descriptor31, this);

          _initializerDefineProperty(this, "musicBg", _descriptor32, this);

          _initializerDefineProperty(this, "soundGame", _descriptor33, this);

          _initializerDefineProperty(this, "musicBgArr", _descriptor34, this);

          _initializerDefineProperty(this, "soundGameArr", _descriptor35, this);

          _initializerDefineProperty(this, "settingBtn", _descriptor36, this);

          _initializerDefineProperty(this, "closeSettingBtn", _descriptor37, this);

          _initializerDefineProperty(this, "shootBtn", _descriptor38, this);

          _initializerDefineProperty(this, "replayBtn", _descriptor39, this);

          _initializerDefineProperty(this, "menuBtn", _descriptor40, this);

          _initializerDefineProperty(this, "resumeBtn", _descriptor41, this);

          _initializerDefineProperty(this, "replaySettingBtn", _descriptor42, this);

          _initializerDefineProperty(this, "menuSettingBtn", _descriptor43, this);

          _initializerDefineProperty(this, "shootBtnNode", _descriptor44, this);

          _initializerDefineProperty(this, "dashBtn", _descriptor45, this);

          _initializerDefineProperty(this, "healBtn", _descriptor46, this);

          _initializerDefineProperty(this, "powerUpBtn", _descriptor47, this);

          _initializerDefineProperty(this, "joystickNode", _descriptor48, this);

          _initializerDefineProperty(this, "musicOnNode", _descriptor49, this);

          _initializerDefineProperty(this, "musicOffNode", _descriptor50, this);

          _initializerDefineProperty(this, "soundOnNode", _descriptor51, this);

          _initializerDefineProperty(this, "soundOffNode", _descriptor52, this);

          _initializerDefineProperty(this, "reloadAnimNode", _descriptor53, this);

          _initializerDefineProperty(this, "reloadAnim", _descriptor54, this);

          _initializerDefineProperty(this, "redWallCollider", _descriptor55, this);

          _initializerDefineProperty(this, "background1Collider", _descriptor56, this);

          _initializerDefineProperty(this, "arrowDirection", _descriptor57, this);

          _initializerDefineProperty(this, "arrowDirectionOpacity", _descriptor58, this);

          _initializerDefineProperty(this, "crackNode", _descriptor59, this);

          _initializerDefineProperty(this, "crackNodeOpacity", _descriptor60, this);

          _initializerDefineProperty(this, "boosterNode", _descriptor61, this);

          _initializerDefineProperty(this, "optionNode", _descriptor62, this);

          _initializerDefineProperty(this, "optionButton", _descriptor63, this);

          _initializerDefineProperty(this, "optionSprite", _descriptor64, this);

          _initializerDefineProperty(this, "optionLabel", _descriptor65, this);

          _initializerDefineProperty(this, "optionName", _descriptor66, this);

          _initializerDefineProperty(this, "optionLevel", _descriptor67, this);

          _initializerDefineProperty(this, "optionPrice", _descriptor68, this);

          _initializerDefineProperty(this, "notiLabel", _descriptor69, this);

          _initializerDefineProperty(this, "doorAnim", _descriptor70, this);

          _initializerDefineProperty(this, "doorCollider", _descriptor71, this);

          _initializerDefineProperty(this, "fadeNode", _descriptor72, this);

          _initializerDefineProperty(this, "fadeUIOpacity", _descriptor73, this);
        }

        get EnemyPrefab() {
          return this.enemyPrefab;
        }

        set EnemyPrefab(enemyPrefab) {
          this.enemyPrefab = enemyPrefab;
        }

        get EnemyDeadAnimPrefab() {
          return this.enemyDeadAnimPrefab;
        }

        set EnemyDeadAnimPrefab(enemyDeadAnimPrefab) {
          this.enemyDeadAnimPrefab = enemyDeadAnimPrefab;
        }

        get BulletPrefab() {
          return this.bulletPrefab;
        }

        set BulletPrefab(bulletPrefab) {
          this.bulletPrefab = bulletPrefab;
        }

        get BulletEnemyPrefab() {
          return this.bulletEnemyPrefab;
        }

        set BulletEnemyPrefab(bulletEnemyPrefab) {
          this.bulletEnemyPrefab = bulletEnemyPrefab;
        }

        get BulletBossPrefab() {
          return this.bulletBossPrefab;
        }

        set BulletBossPrefab(bulletBossPrefab) {
          this.bulletBossPrefab = bulletBossPrefab;
        }

        get BulletExplodePrefab() {
          return this.bulletExplodePrefab;
        }

        set BulletExplodePrefab(bulletExplodePrefab) {
          this.bulletExplodePrefab = bulletExplodePrefab;
        }

        get ObstaclesPrefab() {
          return this.obstaclesPrefab;
        }

        set ObstaclesPrefab(obstaclesPrefab) {
          this.obstaclesPrefab = obstaclesPrefab;
        }

        get RewardPrefab() {
          return this.rewardPrefab;
        }

        set RewardPrefab(rewardPrefab) {
          this.rewardPrefab = rewardPrefab;
        }

        get BulletDropPrefab() {
          return this.bulletDropPrefab;
        }

        set BulletDropPrefab(bulletDropPrefab) {
          this.bulletDropPrefab = bulletDropPrefab;
        }

        get BossPrefab() {
          return this.bossPrefab;
        }

        set BossPrefab(bossPrefab) {
          this.bossPrefab = bossPrefab;
        }

        get HostagePrefab() {
          return this.hostagePrefab;
        }

        set HostagePrefab(hostagePrefab) {
          this.hostagePrefab = hostagePrefab;
        }

        get ObstaclePrefab() {
          return this.obstaclePrefab;
        }

        set ObstaclePrefab(obstaclePrefab) {
          this.obstaclePrefab = obstaclePrefab;
        }

        get SpikePrefab() {
          return this.spikePrefab;
        }

        set SpikePrefab(spikePrefab) {
          this.spikePrefab = spikePrefab;
        }

        get PlayerNode() {
          return this.playerNode;
        }

        set PlayerNode(playerNode) {
          this.playerNode = playerNode;
        }

        get CircleNode() {
          return this.circleNode;
        }

        set CircleNode(circleNode) {
          this.circleNode = circleNode;
        }

        get PointNode() {
          return this.pointNode;
        }

        set PointNode(pointNode) {
          this.pointNode = pointNode;
        }

        get PlayerCollider() {
          return this.playerCollider;
        }

        set PlayerCollider(playerCollider) {
          this.playerCollider = playerCollider;
        }

        get PlayerRb() {
          return this.playerRb;
        }

        set PlayerRb(playerRb) {
          this.playerRb = playerRb;
        }

        get PlayerUIOpacity() {
          return this.playerUIOpacity;
        }

        set PlayerUIOpacity(playerUIOpacity) {
          this.playerUIOpacity = playerUIOpacity;
        }

        get EnemyContainerNode() {
          return this.enemyContainerNode;
        }

        set EnemyContainerNode(enemyContainerNode) {
          this.enemyContainerNode = enemyContainerNode;
        }

        get EnemyDeadContainerNode() {
          return this.enemyDeadContainerNode;
        }

        set EnemyDeadContainerNode(enemyDeadContainerNode) {
          this.enemyDeadContainerNode = enemyDeadContainerNode;
        }

        get BulletContainerNode() {
          return this.bulletContainerNode;
        }

        set BulletContainerNode(bulletContainerNode) {
          this.bulletContainerNode = bulletContainerNode;
        }

        get BulletEnemyContainerNode() {
          return this.bulletEnemyContainerNode;
        }

        set BulletEnemyContainerNode(bulletEnemyContainerNode) {
          this.bulletEnemyContainerNode = bulletEnemyContainerNode;
        }

        get BulletBossContainer() {
          return this.bulletBossContainer;
        }

        set BulletBossContainer(bulletBossContainer) {
          this.bulletBossContainer = bulletBossContainer;
        }

        get BulletExplodeContainerNode() {
          return this.bulletExplodeContainerNode;
        }

        set BulletExplodeContainerNode(bulletExplodeContainerNode) {
          this.bulletExplodeContainerNode = bulletExplodeContainerNode;
        }

        get RewardContainerNode() {
          return this.rewardContainerNode;
        }

        set RewardContainerNode(rewardContainerNode) {
          this.rewardContainerNode = rewardContainerNode;
        }

        get BulletDropContainerNode() {
          return this.bulletDropContainerNode;
        }

        set BulletDropContainerNode(bulletDropContainerNode) {
          this.bulletDropContainerNode = bulletDropContainerNode;
        }

        get BossContainer() {
          return this.bossContainer;
        }

        set BossContainer(bossContainer) {
          this.bossContainer = bossContainer;
        }

        get HostageContainer() {
          return this.hostageContainer;
        }

        set HostageContainer(hostageContainer) {
          this.hostageContainer = hostageContainer;
        }

        get ObstacleContainer() {
          return this.obstacleContainer;
        }

        set ObstacleContainer(obstacleContainer) {
          this.obstacleContainer = obstacleContainer;
        }

        get SpikeContainer() {
          return this.spikeContainer;
        }

        set SpikeContainer(spikeContainer) {
          this.spikeContainer = spikeContainer;
        }

        get MusicBg() {
          return this.musicBg;
        }

        set MusicBg(musicBg) {
          this.musicBg = musicBg;
        }

        get SoundGame() {
          return this.soundGame;
        }

        set SoundGame(soundGame) {
          this.soundGame = soundGame;
        }

        get MusicBgArr() {
          return this.musicBgArr;
        }

        set MusicBgArr(musicBgArr) {
          this.musicBgArr = musicBgArr;
        }

        get SoundGameArr() {
          return this.soundGameArr;
        }

        set SoundGameArr(soundGameArr) {
          this.soundGameArr = soundGameArr;
        }

        get SettingBtn() {
          return this.settingBtn;
        }

        set SettingBtn(settingBtn) {
          this.settingBtn = settingBtn;
        }

        get CloseSettingBtn() {
          return this.closeSettingBtn;
        }

        set CloseSettingBtn(closeSettingBtn) {
          this.closeSettingBtn = closeSettingBtn;
        }

        get ShootBtn() {
          return this.shootBtn;
        }

        set ShootBtn(shootBtn) {
          this.shootBtn = shootBtn;
        }

        get ReplayBtn() {
          return this.replayBtn;
        }

        set ReplayBtn(replayBtn) {
          this.replayBtn = replayBtn;
        }

        get MenuBtn() {
          return this.menuBtn;
        }

        set MenuBtn(menuBtn) {
          this.menuBtn = menuBtn;
        }

        get ResumeBtn() {
          return this.resumeBtn;
        }

        set ResumeBtn(resumeBtn) {
          this.resumeBtn = resumeBtn;
        }

        get ReplaySettingBtn() {
          return this.replaySettingBtn;
        }

        set ReplaySettingBtn(replaySettingBtn) {
          this.replaySettingBtn = replaySettingBtn;
        }

        get MenuSettingBtn() {
          return this.menuSettingBtn;
        }

        set MenuSettingBtn(menuSettingBtn) {
          this.menuSettingBtn = menuSettingBtn;
        }

        get ShootBtnNode() {
          return this.shootBtnNode;
        }

        set ShootBtnNode(shootBtnNode) {
          this.shootBtnNode = shootBtnNode;
        }

        get DashBtn() {
          return this.dashBtn;
        }

        set DashBtn(dashBtn) {
          this.dashBtn = dashBtn;
        }

        get HealBtn() {
          return this.healBtn;
        }

        set HealBtn(healBtn) {
          this.healBtn = healBtn;
        }

        get PowerUpBtn() {
          return this.powerUpBtn;
        }

        set PowerUpBtn(powerUpBtn) {
          this.powerUpBtn = powerUpBtn;
        }

        get JoystickNode() {
          return this.joystickNode;
        }

        set JoystickNode(joystickNode) {
          this.joystickNode = joystickNode;
        }

        get MusicOnNode() {
          return this.musicOnNode;
        }

        set MusicOnNode(musicOnNode) {
          this.musicOnNode = musicOnNode;
        }

        get MusicOffNode() {
          return this.musicOffNode;
        }

        set MusicOffNode(musicOffNode) {
          this.musicOffNode = musicOffNode;
        }

        get SoundOnNode() {
          return this.soundOnNode;
        }

        set SoundOnNode(soundOnNode) {
          this.soundOnNode = soundOnNode;
        }

        get SoundOffNode() {
          return this.soundOffNode;
        }

        set SoundOffNode(soundOffNode) {
          this.soundOffNode = soundOffNode;
        }

        get ReloadAnimNode() {
          return this.reloadAnimNode;
        }

        set ReloadAnimNode(reloadAnimNode) {
          this.reloadAnimNode = reloadAnimNode;
        }

        get ReloadAnim() {
          return this.reloadAnim;
        }

        set ReloadAnim(reloadAnim) {
          this.reloadAnim = reloadAnim;
        }

        get RedWallCollider() {
          return this.redWallCollider;
        }

        set RedWallCollider(redWallCollider) {
          this.redWallCollider = redWallCollider;
        }

        get Background1Collider() {
          return this.background1Collider;
        }

        set Background1Collider(background1Collider) {
          this.background1Collider = background1Collider;
        }

        get ArrowDirection() {
          return this.arrowDirection;
        }

        set ArrowDirection(arrowDirection) {
          this.arrowDirection = arrowDirection;
        }

        get ArrowDirectionOpacity() {
          return this.arrowDirectionOpacity;
        }

        set ArrowDirectionOpacity(arrowDirectionOpacity) {
          this.arrowDirectionOpacity = arrowDirectionOpacity;
        }

        get CrackNode() {
          return this.crackNode;
        }

        set CrackNode(crackNode) {
          this.crackNode = crackNode;
        }

        get CrackNodeOpacity() {
          return this.crackNodeOpacity;
        }

        set CrackNodeOpacity(crackNodeOpacity) {
          this.crackNodeOpacity = crackNodeOpacity;
        }

        get BoosterNode() {
          return this.boosterNode;
        }

        set BoosterNode(boosterNode) {
          this.boosterNode = boosterNode;
        }

        get OptionNode() {
          return this.optionNode;
        }

        set OptionNode(optionNode) {
          this.optionNode = optionNode;
        }

        get OptionButton() {
          return this.optionButton;
        }

        set OptionButton(optionButton) {
          this.optionButton = optionButton;
        }

        get OptionSprite() {
          return this.optionSprite;
        }

        set OptionSprite(optionSprite) {
          this.optionSprite = optionSprite;
        }

        get OptionLabel() {
          return this.optionLabel;
        }

        set OptionLabel(optionLabel) {
          this.optionLabel = optionLabel;
        }

        get OptionName() {
          return this.optionName;
        }

        set OptionName(optionName) {
          this.optionName = optionName;
        }

        get OptionLevel() {
          return this.optionLevel;
        }

        set OptionLevel(optionLevel) {
          this.optionLevel = optionLevel;
        }

        get OptionPrice() {
          return this.optionPrice;
        }

        set OptionPrice(optionPrice) {
          this.optionPrice = optionPrice;
        }

        get NotiLabel() {
          return this.notiLabel;
        }

        set NotiLabel(notiLabel) {
          this.notiLabel = notiLabel;
        }

        get DoorAnim() {
          return this.doorAnim;
        }

        set DoorAnim(doorAnim) {
          this.doorAnim = doorAnim;
        }

        get DoorCollider() {
          return this.doorCollider;
        }

        set DoorCollider(doorCollider) {
          this.doorCollider = doorCollider;
        }

        get FadeNode() {
          return this.fadeNode;
        }

        set FadeNode(fadeNode) {
          this.fadeNode = fadeNode;
        }

        get FadeUIOpacity() {
          return this.fadeUIOpacity;
        }

        set FadeUIOpacity(fadeUIOpacity) {
          this.fadeUIOpacity = fadeUIOpacity;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyDeadAnimPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bulletEnemyPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bulletBossPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bulletExplodePrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "obstaclesPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rewardPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bulletDropPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bossPrefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "hostagePrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "obstaclePrefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "spikePrefab", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "playerNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "circleNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "pointNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "playerCollider", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "playerRb", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "playerUIOpacity", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "enemyContainerNode", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "enemyDeadContainerNode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "bulletContainerNode", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "bulletEnemyContainerNode", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "bulletBossContainer", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "bulletExplodeContainerNode", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "rewardContainerNode", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "bulletDropContainerNode", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "bossContainer", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "hostageContainer", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "obstacleContainer", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "spikeContainer", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "musicBg", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "soundGame", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "musicBgArr", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "soundGameArr", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "settingBtn", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "closeSettingBtn", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "shootBtn", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "replayBtn", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "menuBtn", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "resumeBtn", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "replaySettingBtn", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "menuSettingBtn", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "shootBtnNode", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "dashBtn", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "healBtn", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "powerUpBtn", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "joystickNode", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "musicOnNode", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "musicOffNode", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "soundOnNode", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "soundOffNode", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "reloadAnimNode", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "reloadAnim", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "redWallCollider", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "background1Collider", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "arrowDirection", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor58 = _applyDecoratedDescriptor(_class2.prototype, "arrowDirectionOpacity", [_dec59], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor59 = _applyDecoratedDescriptor(_class2.prototype, "crackNode", [_dec60], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor60 = _applyDecoratedDescriptor(_class2.prototype, "crackNodeOpacity", [_dec61], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor61 = _applyDecoratedDescriptor(_class2.prototype, "boosterNode", [_dec62], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor62 = _applyDecoratedDescriptor(_class2.prototype, "optionNode", [_dec63], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor63 = _applyDecoratedDescriptor(_class2.prototype, "optionButton", [_dec64], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor64 = _applyDecoratedDescriptor(_class2.prototype, "optionSprite", [_dec65], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor65 = _applyDecoratedDescriptor(_class2.prototype, "optionLabel", [_dec66], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor66 = _applyDecoratedDescriptor(_class2.prototype, "optionName", [_dec67], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor67 = _applyDecoratedDescriptor(_class2.prototype, "optionLevel", [_dec68], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor68 = _applyDecoratedDescriptor(_class2.prototype, "optionPrice", [_dec69], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor69 = _applyDecoratedDescriptor(_class2.prototype, "notiLabel", [_dec70], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor70 = _applyDecoratedDescriptor(_class2.prototype, "doorAnim", [_dec71], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor71 = _applyDecoratedDescriptor(_class2.prototype, "doorCollider", [_dec72], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor72 = _applyDecoratedDescriptor(_class2.prototype, "fadeNode", [_dec73], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor73 = _applyDecoratedDescriptor(_class2.prototype, "fadeUIOpacity", [_dec74], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7bd04df8f1a1cf3f1d2c75b5193e1ad3ad7f37c.js.map