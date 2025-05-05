System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, randomRange, tween, Vec3, Vec2, KeyCode, input, Input, Collider2D, Contact2DType, RigidBody2D, Animation, UIOpacity, director, randomRangeInt, Sprite, UITransform, sys, find, Color, Button, GameModel, GameView, PoolObject, Constants, EnemyController, BulletController, PlayerController, LoadingController, BulletEnemyController, BossController, BulletBossController, HostageController, StoreAPI, DataUser, ObstacleController, SpikeController, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GameController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameModel(extras) {
    _reporterNs.report("GameModel", "./GameModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameView(extras) {
    _reporterNs.report("GameView", "./GameView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolObject(extras) {
    _reporterNs.report("PoolObject", "./PoolObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../DataGame/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyController(extras) {
    _reporterNs.report("EnemyController", "./EnemyController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletController(extras) {
    _reporterNs.report("BulletController", "./BulletController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./PlayerController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingController(extras) {
    _reporterNs.report("LoadingController", "../Loading/LoadingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletEnemyController(extras) {
    _reporterNs.report("BulletEnemyController", "./BulletEnemyController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBossController(extras) {
    _reporterNs.report("BossController", "./BossController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletBossController(extras) {
    _reporterNs.report("BulletBossController", "./BulletBossController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHostageController(extras) {
    _reporterNs.report("HostageController", "./HostageController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreAPI(extras) {
    _reporterNs.report("StoreAPI", "../GameCenter/StoreAPI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataUser(extras) {
    _reporterNs.report("DataUser", "../GameCenter/DataUser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObstacleController(extras) {
    _reporterNs.report("ObstacleController", "./ObstacleController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikeController(extras) {
    _reporterNs.report("SpikeController", "./SpikeController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      randomRange = _cc.randomRange;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
      KeyCode = _cc.KeyCode;
      input = _cc.input;
      Input = _cc.Input;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      RigidBody2D = _cc.RigidBody2D;
      Animation = _cc.Animation;
      UIOpacity = _cc.UIOpacity;
      director = _cc.director;
      randomRangeInt = _cc.randomRangeInt;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      sys = _cc.sys;
      find = _cc.find;
      Color = _cc.Color;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      GameModel = _unresolved_2.GameModel;
    }, function (_unresolved_3) {
      GameView = _unresolved_3.GameView;
    }, function (_unresolved_4) {
      PoolObject = _unresolved_4.PoolObject;
    }, function (_unresolved_5) {
      Constants = _unresolved_5.Constants;
    }, function (_unresolved_6) {
      EnemyController = _unresolved_6.EnemyController;
    }, function (_unresolved_7) {
      BulletController = _unresolved_7.BulletController;
    }, function (_unresolved_8) {
      PlayerController = _unresolved_8.PlayerController;
    }, function (_unresolved_9) {
      LoadingController = _unresolved_9.LoadingController;
    }, function (_unresolved_10) {
      BulletEnemyController = _unresolved_10.BulletEnemyController;
    }, function (_unresolved_11) {
      BossController = _unresolved_11.BossController;
    }, function (_unresolved_12) {
      BulletBossController = _unresolved_12.BulletBossController;
    }, function (_unresolved_13) {
      HostageController = _unresolved_13.HostageController;
    }, function (_unresolved_14) {
      StoreAPI = _unresolved_14.StoreAPI;
    }, function (_unresolved_15) {
      DataUser = _unresolved_15.DataUser;
    }, function (_unresolved_16) {
      ObstacleController = _unresolved_16.ObstacleController;
    }, function (_unresolved_17) {
      SpikeController = _unresolved_17.SpikeController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc0e4FEn6hGQI7NFLXBp0Hu", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Game', 'instantiate', 'Node', 'randomRange', 'tween', 'Vec3', 'misc', 'Vec2', 'EventKeyboard', 'KeyCode', 'input', 'Input', 'Collider2D', 'IPhysics2DContact', 'Contact2DType', 'RigidBody2D', 'Animation', 'UIOpacity', 'director', 'randomRangeInt', 'Sprite', 'UITransform', 'EventTouch', 'sys', 'BoxCollider2D', 'find', 'Color', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property({
        type: _crd && GameModel === void 0 ? (_reportPossibleCrUseOfGameModel({
          error: Error()
        }), GameModel) : GameModel
      }), _dec3 = property({
        type: _crd && GameView === void 0 ? (_reportPossibleCrUseOfGameView({
          error: Error()
        }), GameView) : GameView
      }), _dec4 = property({
        type: _crd && PoolObject === void 0 ? (_reportPossibleCrUseOfPoolObject({
          error: Error()
        }), PoolObject) : PoolObject
      }), _dec5 = property({
        type: _crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
          error: Error()
        }), PlayerController) : PlayerController
      }), _dec(_class = (_class2 = class GameController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "GameModel", _descriptor, this);

          _initializerDefineProperty(this, "GameView", _descriptor2, this);

          _initializerDefineProperty(this, "PoolObject", _descriptor3, this);

          _initializerDefineProperty(this, "playerControllerComponent", _descriptor4, this);

          this.movement = void 0;
          this.directionX = void 0;
          this.directionY = void 0;
          this.dt = void 0;
          this.shootSchedule = void 0;
          this.isShootBullet = false;
          this.holdShootBullet = false;
          this.currentHp = void 0;
          this.isPressDash = true;
          this.isDash = false;
          this.isPressPowerUp = true;
          this.isPressHeal = true;
          this.scoreCurrent = 0;
          this.scoreTotal = void 0;
          this.rewardCount = 0;
          this.countEnemyEachTurn = randomRangeInt(15, 20);
          this.countBoss = 0;
          this.extraEnemy = 0;
          this.extraEnemyHp = 0;
          this.countWave = 0;
          this.totalBulletCount = 20;
          this.initTotalBullet = 20;
          this.isOver = false;
          this.isReload = false;
          this.levelCount = 1;
          this.isWarningLowHealth = true;
          this.timeNum = 5;
          this.callBackSchedule = void 0;
          this.playerDameInit = void 0;
          this.isTouchBtnShooting = false;
          this.isPressShooting = false;
          this.isStopSchedule = true;
          this.isHostageDone = true;
          this.isOpenDoor = false;
          this.isGoNextWave = false;
          this.countHeal = 2;
          this.countPlusDame = 2;
          this.initPLayerPosX = void 0;
          this.isMoveBG = false;
          this.speedBulletInit = 300;
          this.gameClient = void 0;
          this.matchData = void 0;
          this.userId = void 0;
          this.initNotiY = void 0;
          this.isHitBySpike = false;
          this.isTakeDameBySpike = false;
          this.levelBooster1 = 1;
          this.levelBooster2 = 1;
          this.levelBooster3 = 1;
          this.levelBooster4 = 1;
          this.levelBooster5 = 1;
          this.priceBooster1 = 10;
          this.priceBooster2 = 10;
          this.priceBooster3 = 10;
          this.priceBooster4 = 10;
          this.priceBooster5 = 10;
        }

        start() {
          // let parameters = find(Constants.GAME_CLIENT);
          // let gameClientParams = parameters.getComponent(StoreAPI);
          // this.gameClient = gameClientParams.gameClient;
          if ((_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).volumeMusicValue === 0.7) {
            this.GameModel.MusicBg.volume = 0.7;
            this.GameModel.MusicOnNode.active = false;
            this.GameModel.MusicOffNode.active = true;
          } else {
            this.GameModel.MusicBg.volume = 0;
            this.GameModel.MusicOnNode.active = true;
            this.GameModel.MusicOffNode.active = false;
          }

          if ((_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).volumeSoundValue === 0.7) {
            this.GameModel.SoundOnNode.active = false;
            this.GameModel.SoundOffNode.active = true;
            this.GameModel.SoundGame.volume = 0.7;
          } else {
            this.GameModel.SoundOnNode.active = true;
            this.GameModel.SoundOffNode.active = false;
            this.GameModel.SoundGame.volume = 0;
          }

          if (sys.isMobile) {
            this.GameModel.JoystickNode.active = true;
          } else {
            this.GameModel.JoystickNode.active = false;
          } // this.GameView.BackgroundSprite1.spriteFrame = this.GameView.BackgroundSprite2.spriteFrame = this.GameView.BackgroundMap[randomRangeInt(0, 4)]


          this.GameView.SpawnPlayerEffectNode.active = true;
          this.GameView.SpawnPlayerEffectAnimation.play();
          this.GameView.BulletCountLabel.string = this.totalBulletCount.toString();
          this.GameView.HealLabelCount.string = "" + this.countHeal;
          this.GameView.PlusDameLabelCount.string = "" + this.countPlusDame;
          this.scheduleOnce(function () {
            // this.initGame();
            this.GameModel.DoorAnim.defaultClip = this.GameModel.DoorAnim.clips[0];
            this.GameModel.DoorAnim.play();
            this.GameView.WaveCountNode.active = true;

            for (var i = 0; i < 5; i++) {
              this.GameView.WaveCountLabel[i].string = 'Wave ' + ("" + (this.countWave + 1));
            }

            this.initNotiY = this.GameModel.NotiLabel.node.position.y; // let spike: Node = new Node();
            // spike = this.instantiateSpike(spike);
            // let hostage: Node = new Node();
            // hostage = this.instantiateHostage(hostage);
            // let obstacle: Node = new Node();
            // obstacle = this.instantiateObstacle(obstacle);

            this.GameView.SpawnPlayerEffectNode.active = false;
            this.initPLayerPosX = -300;
            this.GameModel.PlayerNode.active = this.GameModel.CircleNode.active = this.GameModel.PointNode.active = true;
            var collider = this.GameModel.PlayerCollider;

            if (collider) {
              collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContactPlayer, this);
            }

            this.tweenArrowDirecion();
            var enemyNode;
            this.schedule(function () {
              this.instantiateEnemy(enemyNode, randomRangeInt(0, 3));
            }, 1, this.countEnemyEachTurn - 1, 0);
            input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
            this.playerDameInit = this.playerControllerComponent.dame;
            console.log(this.playerDameInit);
            this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_START, this.onTouchStartShootBtn, this);
            this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_END, this.onTouchEndShootBtn, this);
            this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_CANCEL, this.onTouchEndShootBtn, this);
          }, 0.25);
          var randomNumb = randomRangeInt(0, 2);
          this.GameModel.MusicBg.clip = this.GameModel.MusicBgArr[randomNumb];
          this.GameModel.MusicBg.play();
          this.GameView.HpLabelCurrent.string = this.GameView.HpLabelMax.string = this.GameView.HpMax.toString();
          this.GameView.ScoreLabel.string = this.scoreCurrent.toString();
          this.GameView.RewardCountLabel.string = this.rewardCount.toString();
          this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController) : PlayerController).currentPLayerHp = this.GameView.HpMax;
        }

        update(dt) {
          this.GameModel.BossContainer.children.map(boss => {
            var bossPos = boss.getPosition();
            var bossNodeController = boss.getComponent(_crd && BossController === void 0 ? (_reportPossibleCrUseOfBossController({
              error: Error()
            }), BossController) : BossController);
            var playerNodeController = this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
              error: Error()
            }), PlayerController) : PlayerController);
            var directionX = this.GameModel.PlayerNode.position.x - bossPos.x;
            var directionY = this.GameModel.PlayerNode.position.y - bossPos.y;

            if (directionX > 0) {
              boss.scale = new Vec3(-1, 1, 1);
              this.GameModel.PlayerNode.scale = new Vec3(-1, 1, 1);
            } else {
              boss.scale = new Vec3(1, 1, 1);
              this.GameModel.PlayerNode.scale = new Vec3(1, 1, 1);
            }

            this.movement = new Vec3(directionX, directionY, 0);
            this.checkBossAction(boss, this.movement, dt);
          });

          if (this.GameModel.EnemyContainerNode.children.length === 0 && this.GameModel.BossContainer.children.length === 0) {
            this.GameModel.PlayerNode.scale = new Vec3(1, 1, 1);
          }

          this.GameModel.EnemyContainerNode.children.map(enemy => {
            var enemyNeareast = new Node();
            enemyNeareast = this.findNearestEnemy();
            var enemyPos = enemy.getPosition();
            var enemyNodeController = enemy.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
              error: Error()
            }), EnemyController) : EnemyController);
            var playerNodeController = this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
              error: Error()
            }), PlayerController) : PlayerController);
            var directionXNeareast = this.GameModel.PlayerNode.position.x - enemyNeareast.position.x;
            var directionX = this.GameModel.PlayerNode.position.x - enemyPos.x;
            var directionY = this.GameModel.PlayerNode.position.y - enemyPos.y;

            if (directionXNeareast > 0) {
              this.GameModel.PlayerNode.scale = new Vec3(-1, 1, 1);
            } else {
              this.GameModel.PlayerNode.scale = new Vec3(1, 1, 1);
            }

            if (directionX > 0) {
              enemy.scale = new Vec3(-1, 1, 1);
            } else {
              enemy.scale = new Vec3(1, 1, 1);
            }

            enemyNodeController.enemyNodeLevelLabel.scale = enemy.scale;
            this.movement = new Vec3(directionX, directionY, 0);

            if (enemyNodeController.canShoot) {
              this.moveEnemyCanShoot(enemy, this.movement, dt);

              if (directionX <= 270 && directionX >= -270 && directionY <= 20 && directionY >= -20 && !this.isOver && enemyNodeController.isShooting && enemyNodeController.isReadyShoot) {
                this.playSoundGame(10);
                var bulletEnemyNode = new Node();
                bulletEnemyNode = this.instantiateEnemyBullet(bulletEnemyNode, enemyPos.x, enemyPos.y, enemy);
                enemyNodeController.isShooting = false;
                enemyNodeController.animEnemyNode[1].active = true;
                enemyNodeController.animEnemyNode[0].active = false;
                enemyNodeController.animEnemyArr[1].play();
                this.scheduleOnce(function () {
                  enemyNodeController.isShooting = true;
                }, 1);
              } else if (directionX > 270 && enemyNodeController.isOutShooting || directionX < -270 && enemyNodeController.isOutShooting || directionY < -20 && enemyNodeController.isOutShooting || directionY > 20 && enemyNodeController.isOutShooting) {
                enemyNodeController.isOutShooting = false;
                enemyNodeController.animEnemyNode[0].active = true;
                enemyNodeController.animEnemyNode[1].active = false;
                enemyNodeController.animEnemyArr[0].play();
                this.scheduleOnce(function () {
                  enemyNodeController.isOutShooting = true;
                }, 0.55);
              }
            } else {
              this.moveEnemyToPlayer(enemy, this.movement, dt);

              if (directionX >= -40 && directionX <= 40 && directionY >= -40 && directionY <= 40 && enemyNodeController.hit && enemyNodeController.isReady && !this.isOver && !this.isDash) {
                enemyNodeController.hit = false;
                enemyNodeController.animEnemyNode[1].active = true;
                enemyNodeController.animEnemyNode[0].active = false;
                enemyNodeController.animEnemyArr[1].play();

                if (playerNodeController.currentPLayerHp > 0) {
                  this.playerTakeDame(2, playerNodeController);

                  if (playerNodeController.currentPLayerHp <= 0) {
                    this.isOver = true;
                    enemyNodeController.animEnemyNode[0].active = true;
                    enemyNodeController.animEnemyNode[1].active = false;
                    enemyNodeController.animEnemyArr[0].play();
                    this.gameOverAction();
                  }
                } else {
                  this.GameModel.BulletContainerNode.active = false;
                  input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
                  input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
                }

                this.scheduleOnce(function () {
                  enemyNodeController.hit = true;
                }, 0.5);
              } else if (directionX > 40 && enemyNodeController.outHit || directionX < -40 && enemyNodeController.outHit || directionY < -40 && enemyNodeController.outHit || directionY > 40 && enemyNodeController.outHit) {
                enemyNodeController.outHit = false;
                enemyNodeController.animEnemyNode[0].active = true;
                enemyNodeController.animEnemyNode[1].active = false;
                enemyNodeController.animEnemyArr[0].play();
                this.scheduleOnce(function () {
                  enemyNodeController.outHit = true;
                }, 0.55);
              }
            }
          });
          this.GameModel.BulletContainerNode.children.map(bullet => {
            if (bullet.position.x - bullet.getComponent(_crd && BulletController === void 0 ? (_reportPossibleCrUseOfBulletController({
              error: Error()
            }), BulletController) : BulletController).initPosX > 200 || bullet.position.x - bullet.getComponent(_crd && BulletController === void 0 ? (_reportPossibleCrUseOfBulletController({
              error: Error()
            }), BulletController) : BulletController).initPosX < -200) {
              this.putBulletIntoPool(bullet);
            }
          });
          this.GameModel.BulletEnemyContainerNode.children.map(bullet => {
            if (bullet.position.x - bullet.getComponent(_crd && BulletEnemyController === void 0 ? (_reportPossibleCrUseOfBulletEnemyController({
              error: Error()
            }), BulletEnemyController) : BulletEnemyController).initPosX > 350 || bullet.position.x - bullet.getComponent(_crd && BulletEnemyController === void 0 ? (_reportPossibleCrUseOfBulletEnemyController({
              error: Error()
            }), BulletEnemyController) : BulletEnemyController).initPosX < -350) {
              this.putBulletEnemyIntoPool(bullet);
            }
          });

          if (this.holdShootBullet === true && !this.isReload && !this.isOver) {
            this.shootBulletAction();
          } else if (!this.holdShootBullet || this.isReload || this.isOver) {
            this.unschedule(this.shootSchedule);
          }

          this.checkHostage();
          this.checkSpike();

          if (this.countEnemyEachTurn === 0 && this.countBoss === 0 && !this.isOpenDoor && this.isHostageDone) {
            // this.tweenArrowDirecion();
            this.isOpenDoor = true;
            this.GameModel.DoorAnim.defaultClip = this.GameModel.DoorAnim.clips[1];
            this.GameModel.DoorAnim.play();
            this.scheduleOnce(function () {
              this.GameModel.DoorCollider.enabled = false;
            }, 0.6);
          }

          if (this.GameModel.PlayerNode.position.x >= 1785 && !this.isGoNextWave) {
            this.isGoNextWave = true;
            this.GameModel.PlayerNode.position = new Vec3(-300, -50, 1000);
            this.GameModel.PlayerNode.active = false;
            this.appearBoosterNode();
          }
        }

        findNearestEnemy() {
          var nearestEnemy = null;
          var minDistance = Number.MAX_VALUE;

          for (var enemy of this.GameModel.EnemyContainerNode.children) {
            // if (this.GameModel.EnemyContainerNode.children.length === 0) return;
            // if (enemy.position.x > 350 ||  enemy.position.x < -350) continue;
            var sub = this.GameModel.PlayerNode.position.clone().subtract(enemy.position);
            var distance = sub.length();

            if (distance < minDistance) {
              minDistance = distance;
              nearestEnemy = enemy;
            }
          }

          return nearestEnemy;
        }

        getEnemyFromPool() {
          var element = this.PoolObject.PoolEnemy.size() > 0 ? this.PoolObject.PoolEnemy.get() : instantiate(this.GameModel.EnemyPrefab);
          var elementNode = element.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
            error: Error()
          }), EnemyController) : EnemyController);
          elementNode.rigidEnemy.enabledContactListener = true;
          elementNode.colliderEnemy.enabled = true;
          elementNode.speed = 0;
          elementNode.speedChase = randomRange(0.5, 1.5);
          elementNode.dead = false;
          elementNode.animEnemyNode[0].active = true;
          elementNode.animEnemyNode[1].active = false;
          var collider = elementNode.colliderEnemy;

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }

          return element;
        }

        putEnemyIntoPool(enemy) {
          var enemyControllerComponent = enemy.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
            error: Error()
          }), EnemyController) : EnemyController);
          this.countEnemyEachTurn--;
          enemyControllerComponent.rigidEnemy.enabledContactListener = false;
          enemyControllerComponent.colliderEnemy.enabled = false;
          this.PoolObject.PoolEnemy.put(enemy);
        }

        getBossFromPool() {
          var element = this.PoolObject.PoolBoss.size() > 0 ? this.PoolObject.PoolBoss.get() : instantiate(this.GameModel.BossPrefab);
          return element;
        }

        putBossIntoPool(boss) {
          this.PoolObject.PoolBoss.put(boss);
        }

        getHostageFromPool() {
          var element = this.PoolObject.PoolHostage.size() > 0 ? this.PoolObject.PoolHostage.get() : instantiate(this.GameModel.HostagePrefab);
          return element;
        }

        putHostageIntoPool(hostage) {
          this.PoolObject.PoolHostage.put(hostage);
        }

        instantiateHostage(node) {
          node = this.getHostageFromPool();
          node.position = new Vec3(randomRangeInt(this.GameView.RedWall.position.x + 800, this.GameView.RedWall.position.x + 1300), randomRangeInt(-100, 0));
          node.parent = this.GameModel.HostageContainer;
          var hostageComponent = node.getComponent(_crd && HostageController === void 0 ? (_reportPossibleCrUseOfHostageController({
            error: Error()
          }), HostageController) : HostageController);
          hostageComponent.unActiveLoading();
          hostageComponent.playAnimVictim(0);
          hostageComponent.changePopupSprite(2);
          hostageComponent.changeCageSf(1);
          hostageComponent.isStand = false;
          hostageComponent.isDone = false;
          hostageComponent.isDoneChecked = false;
          this.isHostageDone = false;
          var collider = hostageComponent.cageCollider;

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContactCage, this);
          }

          for (var i = 0; i < 3; i++) {
            hostageComponent.playAnim(i);
          }

          return node;
        }

        checkHostage() {
          this.GameModel.HostageContainer.children.map(hostage => {
            var hostagePos = hostage.getPosition();
            var playerNodeController = this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
              error: Error()
            }), PlayerController) : PlayerController);
            var hostageNodeController = hostage.getComponent(_crd && HostageController === void 0 ? (_reportPossibleCrUseOfHostageController({
              error: Error()
            }), HostageController) : HostageController);
            var directionX = this.GameModel.PlayerNode.position.x - hostagePos.x;
            var directionY = this.GameModel.PlayerNode.position.y - hostagePos.y;

            if (directionX <= 80 && directionX >= -80 && directionY <= 25 && directionY >= -25 && !hostageNodeController.isStand && !hostageNodeController.isDone && !hostageNodeController.isDoneChecked) {
              this.playSoundGame(14);
              hostageNodeController.isStand = true;
              hostageNodeController.playLoadingAnim();
              hostageNodeController.changePopupSprite(0);
              hostageNodeController.checkDone();
            } else if ((directionX > 80 || directionX < -80 || directionY > 25 || directionY < -25) && hostageNodeController.isStand && !hostageNodeController.isDone && !hostageNodeController.isDoneChecked) {
              hostageNodeController.isStand = false;
              hostageNodeController.unActiveLoading();
              hostageNodeController.changePopupSprite(2);
            }

            if (hostageNodeController.isDone) {
              hostageNodeController.isDone = false;
              this.isHostageDone = true;
              this.playSoundGame(randomRangeInt(15, 17));
              this.rewardCount += 10;
              this.GameView.RewardCountLabel.string = this.rewardCount.toString();
              this.scoreCurrent += 10;
              this.GameView.ScoreLabel.string = this.scoreCurrent.toString();
            }
          });
        }

        checkSpike() {
          this.GameModel.SpikeContainer.children.map(spike => {
            var spikePos = spike.getPosition();
            var playerNodeController = this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
              error: Error()
            }), PlayerController) : PlayerController);
            var directionX = this.GameModel.PlayerNode.position.x - spikePos.x;
            var directionY = this.GameModel.PlayerNode.position.y - spikePos.y - 20;

            if (directionX <= 30 && directionX >= -30 && directionY <= 15 && directionY >= -15 && spike.children[0].getComponent(_crd && SpikeController === void 0 ? (_reportPossibleCrUseOfSpikeController({
              error: Error()
            }), SpikeController) : SpikeController).isHasSpike && !this.isHitBySpike && !this.isOver) {
              this.isHitBySpike = true;

              if (playerNodeController.currentPLayerHp > 0) {
                this.playerTakeDame(2, playerNodeController);
                this.playSoundGame(2);
              } else {
                this.isOver = true;
                this.gameOverAction();
                this.GameModel.BulletContainerNode.active = false;
                input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
                input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
              }

              this.scheduleOnce(function () {
                this.isHitBySpike = false;
              }, 1);
            }
          });
        }

        getObstacleFromPool() {
          var element = this.PoolObject.PoolObstacle.size() > 0 ? this.PoolObject.PoolObstacle.get() : instantiate(this.GameModel.ObstaclePrefab);
          return element;
        }

        putObstacleIntoPool(obstacle) {
          this.PoolObject.PoolObstacle.put(obstacle);
        }

        instantiateObstacle(node) {
          var rand = randomRangeInt(this.GameView.RedWall.position.x + 800, this.GameView.RedWall.position.x + 1500);

          for (var i = 0; i < randomRangeInt(2, 5); i++) {
            var ranndomNumb = randomRangeInt(0, 2);
            node = this.getObstacleFromPool();

            if (ranndomNumb === 0) {
              node.position = new Vec3(rand + i * randomRange(120, 180), randomRangeInt(-150, -170));
            } else {
              node.position = new Vec3(rand + i * randomRange(120, 180), randomRangeInt(30, 50));
            }

            node.parent = this.GameModel.ObstacleContainer;
            var obstacleComponent = node.getComponent(_crd && ObstacleController === void 0 ? (_reportPossibleCrUseOfObstacleController({
              error: Error()
            }), ObstacleController) : ObstacleController);
            var collider = obstacleComponent.obstacleCollider;

            if (collider) {
              collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContactObstacle, this);
            }
          }

          return node;
        }

        instantiateEnemy(node, type) {
          if (type === 6) {
            node = this.getEnemyFromPool();
            this.spawnEnemy(node, type, true);
          } else if (type === 7) {
            node = this.getEnemyFromPool();
            this.spawnEnemy(node, type, true);
          } else {
            node = this.getEnemyFromPool();
            this.spawnEnemy(node, type, false);
          }
        }

        spawnEnemy(node, type, canShoot) {
          var nodeEnemy = node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
            error: Error()
          }), EnemyController) : EnemyController);
          var nodeUITransformY = node.getComponent(UITransform).contentSize.y;
          node.position = new Vec3(randomRange(150, 1500), randomRange(-150, 50));
          node.parent = this.GameModel.EnemyContainerNode;
          nodeEnemy.canShoot = canShoot;
          this.spawningEnemyAction(node, nodeEnemy);
          this.typeOfEnemy(nodeEnemy, type, nodeUITransformY);
        }

        getSpikeFromPool() {
          var element = this.PoolObject.PoolSpike.size() > 0 ? this.PoolObject.PoolSpike.get() : instantiate(this.GameModel.SpikePrefab);
          return element;
        }

        putSpikeIntoPool(spike) {
          this.PoolObject.PoolSpike.put(spike);
        }

        instantiateSpike(node) {
          var _this2 = this;

          var initPosX = randomRange(500, 1000);
          var randomNumb = randomRangeInt(2, 5); // let initPosX = 50;

          var initX = initPosX;
          var initY = randomRange(-50, 0);

          for (var i = 0; i < randomNumb; i++) {
            initX = initPosX + 13.75 * i;

            var _loop = function _loop() {
              node = _this2.getSpikeFromPool();
              var spikeNode = node.children[0].getComponent(_crd && SpikeController === void 0 ? (_reportPossibleCrUseOfSpikeController({
                error: Error()
              }), SpikeController) : SpikeController);
              node.parent = _this2.GameModel.SpikeContainer; // this.GameModel.SpikeContainer.insertChild(node, 0)

              node.position = new Vec3(initX, initY);
              initX += 42.5;

              _this2.scheduleOnce(function () {
                spikeNode.isPlayNormal = true;
              }, 5);

              spikeNode.isHasSpike = false;
              spikeNode.isPlayReverse = false;
            };

            for (var j = 0; j < 2; j++) {
              _loop();
            }

            initY -= 15;
          }

          return node;
        }

        instantiateBullet(node) {
          node = new Node();
          node = this.getBulletFromPool();
          node.position = new Vec3(this.GameModel.PlayerNode.position.x + 10, this.GameModel.PlayerNode.position.y);
          node.parent = this.GameModel.BulletContainerNode;
          var nodeBullet = node.getComponent(_crd && BulletController === void 0 ? (_reportPossibleCrUseOfBulletController({
            error: Error()
          }), BulletController) : BulletController);
          var dropBullet;

          if (this.GameModel.PlayerNode.scale.x === 1) {
            nodeBullet.moveRight = true;
            var tweenShoot = tween(this.GameModel.PlayerNode).to(0.05, {
              position: new Vec3(this.GameModel.PlayerNode.position.x - 10, this.GameModel.PlayerNode.position.y, this.GameModel.PlayerNode.position.z)
            }, {
              easing: "linear"
            });
            tweenShoot.start();
            dropBullet = this.instantiateDropBullet(dropBullet, -randomRange(2, 4));
          } else {
            nodeBullet.moveRight = false;

            var _tweenShoot = tween(this.GameModel.PlayerNode).to(0.05, {
              position: new Vec3(this.GameModel.PlayerNode.position.x + 10, this.GameModel.PlayerNode.position.y, this.GameModel.PlayerNode.position.z)
            }, {
              easing: "linear"
            });

            _tweenShoot.start();

            dropBullet = this.instantiateDropBullet(dropBullet, randomRange(2, 4));
          }

          nodeBullet.speed = this.speedBulletInit;
          nodeBullet.initPosX = node.position.x;
          nodeBullet.type = this.playerDameInit;

          if (nodeBullet.type > 5) {
            nodeBullet.type = 5;
          }

          nodeBullet.bulletAnim.defaultClip = nodeBullet.bulletAnim.clips[nodeBullet.type - 1];
          nodeBullet.bulletAnim.play(); // switch (this.playerDameInit) {
          //     case 1:
          //         break;
          //     default:
          //         break;
          // }

          this.totalBulletCount -= 2;
          this.GameView.BulletCountLabel.string = this.totalBulletCount.toString();

          if (this.totalBulletCount === 0) {
            this.isPressShooting = false;
            this.isTouchBtnShooting = false;
            this.isReload = true;
            this.playSoundGame(8);
            this.GameModel.ReloadAnimNode.active = true;
            this.GameModel.ReloadAnim.play();
            this.scheduleOnce(function () {
              this.totalBulletCount = this.initTotalBullet;
              this.GameView.BulletCountLabel.string = this.totalBulletCount.toString();
              this.GameModel.ReloadAnimNode.active = false;
              this.isReload = false;
            }, 1.5);
          }

          this.scheduleOnce(function () {
            this.putDropBulletIntoPool(dropBullet);
          }, 1.25);
          return node;
        }

        instantiateBossBullet(node, bulletPosX, bulletPosY) {
          node = this.getBulletBossFromPool();
          node.position = new Vec3(bulletPosX, bulletPosY + 10);
          node.parent = this.GameModel.BulletBossContainer;
          var nodeBullet = node.getComponent(_crd && BulletBossController === void 0 ? (_reportPossibleCrUseOfBulletBossController({
            error: Error()
          }), BulletBossController) : BulletBossController);
          nodeBullet.bulletBossSprite.spriteFrame = nodeBullet.bulletBossSF;
          return node;
        }

        shootBulletAction() {
          if (!this.isReload && !this.isPressShooting || !this.isReload && !this.isTouchBtnShooting) {
            this.isPressShooting = true;
            this.isTouchBtnShooting = true;
            this.playSoundGame(0);
            this.GameView.ShootBtnUIOpacity.opacity = 150;
            this.isShootBullet = true;

            if (this.isShootBullet) {
              var bulletNode = new Node();
              bulletNode = this.instantiateBullet(bulletNode);

              this.shootSchedule = function () {
                this.playSoundGame(0);
                var bulletNode = new Node();
                bulletNode = this.instantiateBullet(bulletNode);
              };

              this.schedule(this.shootSchedule, 0.25);
            }
          }
        }

        instantiateEnemyBullet(newNode, enemyPosX, enemyPosY, enemyNode) {
          newNode = this.getBulletEnemyFromPool();
          newNode.position = new Vec3(enemyPosX, enemyPosY);
          newNode.parent = this.GameModel.BulletEnemyContainerNode;
          var nodeBullet = newNode.getComponent(_crd && BulletEnemyController === void 0 ? (_reportPossibleCrUseOfBulletEnemyController({
            error: Error()
          }), BulletEnemyController) : BulletEnemyController);
          nodeBullet.initPosX = newNode.position.x;

          if (enemyNode.scale.x === 1) {
            nodeBullet.moveLeft = true;
            newNode.scale = new Vec3(-1, 1, 1);
          } else {
            nodeBullet.moveLeft = false;
            newNode.scale = new Vec3(1, 1, 1);
          }

          return newNode;
        }

        instantiateDeadEnemyAnim(node, positionX, positionY, type, scaleX) {
          node = this.getEnemyAnimDeadFromPool();
          node.position = new Vec3(positionX, positionY, node.position.z);
          node.parent = this.GameModel.EnemyDeadContainerNode;
          node.getComponent(UIOpacity).opacity = 255;
          node.scale = new Vec3(scaleX, 1);
          node.getComponent(Animation).defaultClip = node.getComponent(Animation).clips[type];
          node.getComponent(Animation).play();
          return node;
        }

        instantiateReward(node, positionX, positionY) {
          node = this.getRewardFromPool();
          node.position = new Vec3(positionX, positionY, node.position.z);
          node.parent = this.GameModel.RewardContainerNode;
          var nodeCollider = node.getComponent(Collider2D);
          var nodeRigidBody = node.getComponent(RigidBody2D);
          var nodeUIOpacity = node.getComponent(UIOpacity);
          nodeCollider.enabled = false;
          nodeUIOpacity.opacity = 255;
          nodeRigidBody.linearVelocity = new Vec2(-2.5, 2.5);
          nodeRigidBody.gravityScale = 0.5;
          this.scheduleOnce(function () {
            nodeRigidBody.enabledContactListener = true;
            nodeCollider.enabled = true;
            nodeRigidBody.linearVelocity = new Vec2(0, 0);
            nodeRigidBody.gravityScale = 0;
          }, 1);
          return node;
        }

        instantiateEnemyAnimDeadPool() {
          while (this.PoolObject.PoolEnemyDead.size() < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).DEFAULT_NUMBER_OF_BULLET) {
            for (var i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).DEFAULT_NUMBER_OF_BULLET; i++) {
              var node = instantiate(this.GameModel.EnemyDeadAnimPrefab);
              this.PoolObject.PoolEnemyDead.put(instantiate(node));
            }
          }
        }

        getEnemyAnimDeadFromPool() {
          var element = this.PoolObject.PoolEnemyDead.size() > 0 ? this.PoolObject.PoolEnemyDead.get() : instantiate(this.GameModel.EnemyDeadAnimPrefab); // element.scale = new Vec3(1, 1);

          return element;
        }

        putEnemyAnimDeadIntoPool(enemy) {
          this.PoolObject.PoolEnemyDead.put(enemy);
        }

        getDropBulletFromPool() {
          var element = this.PoolObject.PoolDropBullet.size() > 0 ? this.PoolObject.PoolDropBullet.get() : instantiate(this.GameModel.BulletDropPrefab);
          return element;
        }

        putDropBulletIntoPool(dropBullet) {
          this.PoolObject.PoolDropBullet.put(dropBullet);
        }

        instantiateDropBullet(dropBullet, velocityX) {
          dropBullet = this.getDropBulletFromPool();
          dropBullet.position = new Vec3(this.GameModel.PlayerNode.position.x, this.GameModel.PlayerNode.position.y);
          dropBullet.parent = this.GameModel.BulletDropContainerNode;
          var dropBulletOpacity = dropBullet.getComponent(UIOpacity);
          var dropBulletRb = dropBullet.getComponent(RigidBody2D);
          var dropBulletSprite = dropBullet.getComponent(Sprite);
          dropBulletOpacity.opacity = 255;
          dropBulletSprite.spriteFrame = this.GameView.BulletDropSf[randomRangeInt(0, 6)];
          dropBulletRb.linearVelocity = new Vec2(velocityX, 0);
          dropBulletRb.gravityScale = 0.5;
          var tweenOpacityDropBullet = tween(dropBulletOpacity).to(1, {
            opacity: 0
          });
          tweenOpacityDropBullet.start();
          return dropBullet;
        }

        moveEnemyToPlayer(enemy, direction, dt) {
          var enemyControllerComponent = enemy.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
            error: Error()
          }), EnemyController) : EnemyController);

          if (enemy.position.x - this.GameModel.PlayerNode.position.x < 250 && enemy.position.x - this.GameModel.PlayerNode.position.x > -250 && enemyControllerComponent.isReady) {
            enemyControllerComponent.speed = 0;
            enemy.setPosition(new Vec3(enemy.position.x + direction.x * enemyControllerComponent.speedChase * dt, enemy.position.y + direction.y * enemyControllerComponent.speedChase * dt, enemy.position.z));
          } else if (enemy.position.x - this.GameModel.PlayerNode.position.x >= 250 && enemy.position.x - this.GameModel.PlayerNode.position.x <= 600 && enemyControllerComponent.isReady) {
            enemyControllerComponent.speed = randomRangeInt(125, 200);
            enemyControllerComponent.moveLeft = true;
          } else if (enemy.position.x - this.GameModel.PlayerNode.position.x <= -250 && enemy.position.x - this.GameModel.PlayerNode.position.x >= -600 && enemyControllerComponent.isReady) {
            enemyControllerComponent.speed = randomRangeInt(125, 200);
            enemyControllerComponent.moveLeft = false;
          }

          enemyControllerComponent.colliderEnemy.apply();
        }

        moveEnemyCanShoot(enemy, direction, dt) {
          var enemyControllerComponent = enemy.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
            error: Error()
          }), EnemyController) : EnemyController);

          if (enemy.position.x - this.GameModel.PlayerNode.position.x < 300 && enemy.position.x - this.GameModel.PlayerNode.position.x > -300 && enemyControllerComponent.isReady) {
            enemyControllerComponent.speed = 0;
            enemy.setPosition(new Vec3(enemy.position.x, enemy.position.y + direction.y * enemyControllerComponent.speedChase * dt, enemy.position.z));
          } else if (enemy.position.x - this.GameModel.PlayerNode.position.x >= 300 && enemyControllerComponent.isReady) {
            enemyControllerComponent.speed = randomRangeInt(175, 225);
            enemyControllerComponent.moveLeft = true;
          } else if (enemy.position.x - this.GameModel.PlayerNode.position.x <= -300 && enemyControllerComponent.isReady) {
            enemyControllerComponent.speed = randomRangeInt(175, 225);
            enemyControllerComponent.moveLeft = false;
          }

          enemyControllerComponent.colliderEnemy.apply();
        }

        getBulletFromPool() {
          var element = this.PoolObject.PoolBullet.size() > 0 ? this.PoolObject.PoolBullet.get() : instantiate(this.GameModel.BulletPrefab);
          return element;
        }

        putBulletIntoPool(bullet) {
          this.PoolObject.PoolBullet.put(bullet);
        }

        getBulletEnemyFromPool() {
          var element = this.PoolObject.PoolEnemyBullet.size() > 0 ? this.PoolObject.PoolEnemyBullet.get() : instantiate(this.GameModel.BulletEnemyPrefab);
          return element;
        }

        putBulletEnemyIntoPool(bullet) {
          this.PoolObject.PoolEnemyBullet.put(bullet);
        }

        getBulletBossFromPool() {
          var element = this.PoolObject.PoolBossBullet.size() > 0 ? this.PoolObject.PoolBossBullet.get() : instantiate(this.GameModel.BulletBossPrefab);
          return element;
        }

        putBulletBossIntoPool(bullet) {
          this.PoolObject.PoolBossBullet.put(bullet);
        }

        getBulletExplodeAnimFromPool() {
          var element = this.PoolObject.PoolBulletExlodeAnim.size() > 0 ? this.PoolObject.PoolBulletExlodeAnim.get() : instantiate(this.GameModel.BulletExplodePrefab);
          return element;
        }

        putBulletExplodeAnimIntoPool(bullet) {
          this.PoolObject.PoolBulletExlodeAnim.put(bullet);
        }

        getRewardFromPool() {
          var element = this.PoolObject.PoolReward.size() > 0 ? this.PoolObject.PoolReward.get() : instantiate(this.GameModel.RewardPrefab);
          return element;
        }

        putRewardIntoPool(reward) {
          this.PoolObject.PoolReward.put(reward);
        }

        instantiateBulletExplodeAnim(animBulletExplode, type, posX, posY) {
          animBulletExplode = this.getBulletExplodeAnimFromPool();
          animBulletExplode.position = new Vec3(posX, posY, animBulletExplode.position.z);
          animBulletExplode.parent = this.GameModel.BulletExplodeContainerNode;
          animBulletExplode.getComponent(Animation).defaultClip = animBulletExplode.getComponent(Animation).clips[type];
          animBulletExplode.getComponent(Animation).play();
          this.scheduleOnce(function () {
            this.putBulletExplodeAnimIntoPool(animBulletExplode);
          }, 0.55);
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.SPACE:
              this.holdShootBullet = true;
              this.GameModel.ShootBtnNode.off(Input.EventType.TOUCH_START, this.onTouchStartShootBtn, this);
              this.GameModel.ShootBtnNode.off(Input.EventType.TOUCH_END, this.onTouchEndShootBtn, this);
              this.GameModel.ShootBtnNode.off(Input.EventType.TOUCH_CANCEL, this.onTouchEndShootBtn, this); // this.shootBulletAction();

              break;

            case KeyCode.KEY_F:
              if (this.isPressDash) {
                this.isDash = true;
                this.playSoundGame(5);
                var tweenBtnDash = tween(this.GameView.DashBtnProgressBar).to(5, {
                  progress: 1
                });
                this.isPressDash = false;
                tweenBtnDash.start();
                this.scheduleOnce(function () {
                  this.isDash = false;
                }, 0.5);
                this.scheduleOnce(function () {
                  this.isPressDash = true;
                  this.GameView.DashBtnProgressBar.progress = 0;
                }, 5.05);
              }

              break;

            case KeyCode.KEY_Z:
              if (this.isPressPowerUp && this.countPlusDame != 0) {
                this.countPlusDame--;
                this.GameView.PlusDameLabelCount.string = "" + this.countPlusDame;
                this.pressPowerUpAction();
                var tweenBtnPowerUp = tween(this.GameView.PowerUpProgressBar).to(30, {
                  progress: 1
                });
                this.isPressPowerUp = false;
                tweenBtnPowerUp.start();
                var tweenLabelPowerUp = tween(this.GameView.BuffPowerUpLabelNode).to(1, {
                  scale: new Vec3(1.5, 1.5, this.GameView.BuffPowerUpLabelNode.scale.z)
                }).to(1, {
                  scale: new Vec3(1.25, 1.25, this.GameView.BuffPowerUpLabelNode.scale.z)
                }).to(1, {
                  scale: new Vec3(1.5, 1.5, this.GameView.BuffPowerUpLabelNode.scale.z)
                }).to(1, {
                  scale: new Vec3(1.25, 1.25, this.GameView.BuffPowerUpLabelNode.scale.z)
                }).to(1, {
                  scale: new Vec3(1.5, 1.5, this.GameView.BuffPowerUpLabelNode.scale.z)
                });
                tweenLabelPowerUp.start();
                this.scheduleOnce(function () {
                  this.isPressPowerUp = true;
                  this.GameView.BuffPowerUpLabelNode.scale = new Vec3(1.25, 1.25, this.GameView.BuffPowerUpLabelNode.scale.z);
                  this.GameView.PowerUpProgressBar.progress = 0;
                }, 30.05);
              }

              break;

            case KeyCode.KEY_X:
              if (this.isPressHeal && this.playerControllerComponent.currentPLayerHp < this.GameView.HpMax && this.countHeal != 0) {
                this.countHeal--;
                this.GameView.HealLabelCount.string = "" + this.countHeal;
                this.pressHealAction();
                var tweenBtnHeal = tween(this.GameView.HealProgressBar).to(30, {
                  progress: 1
                });
                this.isPressHeal = false;
                tweenBtnHeal.start();
                this.scheduleOnce(function () {
                  this.isPressHeal = true;
                  this.GameView.HealProgressBar.progress = 0;
                }, 30.05);
              }

              break;

            default:
              break;
          }
        }

        onKeyUp(event) {
          switch (event.keyCode) {
            case KeyCode.SPACE:
              this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_START, this.onTouchStartShootBtn, this);
              this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_END, this.onTouchEndShootBtn, this);
              this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_CANCEL, this.onTouchEndShootBtn, this);
              this.GameView.ShootBtnUIOpacity.opacity = 255;
              this.holdShootBullet = false;
              this.isPressShooting = false;
              this.isShootBullet = false; // this.GameModel.PlayerRb.linearVelocity = new Vec2(0, 0);
              // this.unschedule(this.shootSchedule);

              break;
            // case KeyCode.KEY_F:
            //     break;

            default:
              break;
          }
        }

        onBeginContactCage(selfCollider, otherCollider, contact) {
          this.scheduleOnce(function () {
            if (selfCollider.tag === 10) {
              var hostageComponent = selfCollider.node.parent.getComponent(_crd && HostageController === void 0 ? (_reportPossibleCrUseOfHostageController({
                error: Error()
              }), HostageController) : HostageController);
              var type = this.playerDameInit;

              if (type > 5) {
                type = 5;
              }

              var animBulletExplode = new Node();
              this.instantiateBulletExplodeAnim(animBulletExplode, type - 1, hostageComponent.node.position.x, hostageComponent.node.position.y);
              this.putBulletIntoPool(otherCollider.node);
            }
          });
        }

        onBeginContactObstacle(selfCollider, otherCollider, contact) {
          this.scheduleOnce(function () {
            if (selfCollider.tag === 10 && otherCollider.tag != 1) {
              var obstacleComponent = selfCollider.node.getComponent(_crd && ObstacleController === void 0 ? (_reportPossibleCrUseOfObstacleController({
                error: Error()
              }), ObstacleController) : ObstacleController);
              var type = this.playerDameInit;

              if (type > 5) {
                type = 5;
              }

              var animBulletExplode = new Node();
              this.instantiateBulletExplodeAnim(animBulletExplode, type - 1, obstacleComponent.node.position.x, obstacleComponent.node.position.y);
              this.putBulletIntoPool(otherCollider.node);
            }
          });
        }

        tweenArrowDirecion() {
          this.GameModel.ArrowDirection.active = true;
          var tweenDuration = 0.5;
          var tweenArrowDirecion = tween(this.GameModel.ArrowDirection).to(tweenDuration, {
            position: new Vec3(this.GameModel.ArrowDirection.position.x + 20, this.GameModel.ArrowDirection.position.y)
          }, {
            easing: "linear"
          }).to(tweenDuration, {
            position: new Vec3(this.GameModel.ArrowDirection.position.x, this.GameModel.ArrowDirection.position.y)
          }, {
            easing: "linear"
          }).start();
          var tweenArrowDirecionOpacity = tween(this.GameModel.ArrowDirectionOpacity).to(tweenDuration, {
            opacity: 150
          }).to(tweenDuration, {
            opacity: 255
          }).start();
          tweenArrowDirecion.repeat(3, tweenArrowDirecion).start();
          tweenArrowDirecionOpacity.repeat(3, tweenArrowDirecionOpacity).start();
          this.scheduleOnce(function () {
            this.GameModel.ArrowDirection.active = false;
          }, 3);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          this.scheduleOnce(function () {
            if (otherCollider.tag === 0) {
              var enemyControllerNode = selfCollider.node.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
                error: Error()
              }), EnemyController) : EnemyController);
              enemyControllerNode.enemyProgressBarHp.progress -= this.playerControllerComponent.dame / enemyControllerNode.maxHp;
              enemyControllerNode.hp -= this.playerControllerComponent.dame;
              var type = this.playerDameInit;

              if (type > 5) {
                type = 5;
              }

              var animBulletExplode = new Node();
              this.instantiateBulletExplodeAnim(animBulletExplode, type - 1, selfCollider.node.position.x, selfCollider.node.position.y);
              this.putBulletIntoPool(otherCollider.node);
              this.playSoundGame(4);

              if (enemyControllerNode.hp <= 0) {
                this.playSoundGame(3); // otherCollider.node.getComponent(BulletController).speed = 0;

                this.scoreCurrent += selfCollider.tag + 1;
                this.GameView.ScoreLabel.string = this.scoreCurrent.toString();
                var animDeadNode = new Node();
                animDeadNode = this.instantiateDeadEnemyAnim(animDeadNode, selfCollider.node.position.x, selfCollider.node.position.y, selfCollider.tag, selfCollider.node.scale.x);
                var reward = new Node();
                reward = this.instantiateReward(reward, selfCollider.node.position.x, selfCollider.node.position.y);
                this.putEnemyIntoPool(selfCollider.node);
                this.scheduleOnce(function () {
                  var tweenAnimDead = tween(animDeadNode.getComponent(UIOpacity)).to(1, {
                    opacity: 0
                  });
                  tweenAnimDead.start();
                }, 2.68);
                this.scheduleOnce(function () {
                  this.putEnemyAnimDeadIntoPool(animDeadNode);
                }, 3.68);
              }
            }
          }); // will be called once when two colliders begin to contact
        }

        onBeginContactBoss(selfCollider, otherCollider, contact) {
          this.scheduleOnce(function () {
            if (otherCollider.tag === 0) {
              var enemyControllerNode = selfCollider.node.getComponent(_crd && BossController === void 0 ? (_reportPossibleCrUseOfBossController({
                error: Error()
              }), BossController) : BossController);
              enemyControllerNode.hp -= this.playerControllerComponent.dame;
              this.GameView.BossHpProgressBar.progress = enemyControllerNode.hp / enemyControllerNode.hpMax;
              var type = this.playerDameInit;

              if (type > 5) {
                type = 5;
              }

              var animBulletExplode = new Node();
              this.instantiateBulletExplodeAnim(animBulletExplode, type - 1, selfCollider.node.position.x, selfCollider.node.position.y);
              this.putBulletIntoPool(otherCollider.node);
              this.playSoundGame(4);

              if (enemyControllerNode.hp <= 0) {
                enemyControllerNode.isDead = true;
                enemyControllerNode.bossRb.enabledContactListener = false;
                enemyControllerNode.bossCollide.enabled = false;
                enemyControllerNode.bossTurn++;
                this.playSoundGame(13);
                this.scoreCurrent += 50;
                this.GameView.ScoreLabel.string = this.scoreCurrent.toString();
                this.instantiateDeadEnemyAnim(selfCollider.node, selfCollider.node.position.x, selfCollider.node.position.y, 8, selfCollider.node.scale.x);
                this.putBossIntoPool(selfCollider.node);
                var reward = new Node();
                reward = this.instantiateReward(reward, selfCollider.node.position.x, selfCollider.node.position.y);
                this.scheduleOnce(function () {
                  this.GameView.BossWarningLabelNode.active = false;
                  this.GameView.HpBossNode.active = false;
                }, 1);
                this.countBoss = 0; // this.GameView.HpMax += 5;
                // this.GameView.HpLabelMax.string = this.GameView.HpMax.toString();
                // this.GameView.HpProgressBar.progress = this.GameModel.PlayerNode.getComponent(PlayerController).currentPLayerHp / this.GameView.HpMax;

                var randomSpawnTime = randomRange(0.5, 1.5);
                var enemyNode;
                this.schedule(function () {
                  this.instantiateEnemy(enemyNode, randomRangeInt(0, 7));
                }, randomSpawnTime, this.countEnemyEachTurn - 1, 0);
              }
            }
          }); // will be called once when two colliders begin to contact
        }

        onBeginContactPlayer(selfCollider, otherCollider, contact) {
          this.scheduleOnce(function () {
            if (otherCollider.tag === 0) {
              this.playSoundGame(7);
              var tweenReward = tween(otherCollider.node).to(1, {
                position: new Vec3(-235, 210, otherCollider.node.position.z)
              }, {
                easing: "fade"
              });
              this.rewardCount++;
              this.GameView.RewardCountLabel.string = this.rewardCount.toString();
              var tweenRewardOpacity = tween(otherCollider.node.getComponent(UIOpacity)).to(1, {
                opacity: 0
              });
              tweenReward.start();
              tweenRewardOpacity.start();
              this.scheduleOnce(function () {
                this.putRewardIntoPool(otherCollider.node);
              }, 1);
            }

            if (otherCollider.tag === 2) {
              var playerNodeController = this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
                error: Error()
              }), PlayerController) : PlayerController);
              var animBulletExplode = this.getBulletExplodeAnimFromPool();
              animBulletExplode.position = new Vec3(selfCollider.node.position.x, selfCollider.node.position.y, animBulletExplode.position.z);
              animBulletExplode.parent = this.GameModel.BulletExplodeContainerNode;
              animBulletExplode.getComponent(Animation).defaultClip = animBulletExplode.getComponent(Animation).clips[1];
              animBulletExplode.getComponent(Animation).play();
              this.playerTakeDame(1, playerNodeController);
              this.putBulletEnemyIntoPool(otherCollider.node);
              this.playSoundGame(2);
              this.scheduleOnce(function () {
                this.putBulletExplodeAnimIntoPool(animBulletExplode);
              }, 0.55);

              if (playerNodeController.currentPLayerHp <= 0 && !this.isOver) {
                this.isOver = true;
                this.unschedule(this.shootSchedule);
                this.GameView.HpLabelCurrent.string = '0';
                this.gameOverAction();
              }
            }

            if (otherCollider.tag === 3) {
              var _playerNodeController = this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
                error: Error()
              }), PlayerController) : PlayerController);

              var otherColliderNode = otherCollider.node.getComponent(_crd && BulletBossController === void 0 ? (_reportPossibleCrUseOfBulletBossController({
                error: Error()
              }), BulletBossController) : BulletBossController);
              otherColliderNode.bulletExplodeAnim.play();
              this.playerTakeDame(2, _playerNodeController);
              otherColliderNode.bossBulletRb.linearVelocity = new Vec2(0, 0);
              this.scheduleOnce(function () {
                this.putBulletBossIntoPool(otherCollider.node);
              }, 0.5);
              this.playSoundGame(2);

              if (_playerNodeController.currentPLayerHp <= 0 && !this.isOver) {
                this.isOver = true;
                this.unschedule(this.shootSchedule);
                this.gameOverAction();
              }
            }

            if (otherCollider.tag === 1) {
              this.GameModel.PlayerRb.linearVelocity = new Vec2(0, 0);
            }
          }); // will be called once when two colliders begin to contact
        }

        playSoundGame(numb) {
          this.GameModel.SoundGame.clip = this.GameModel.SoundGameArr[numb];
          this.GameModel.SoundGame.play();
        }

        levelUpEnemy() {
          if (this.countWave > 0 && this.countWave % 5 === 0 && this.countWave <= 50) {
            this.levelCount++;
            this.extraEnemyHp++;
            this.warningLevelUpEnemy();
          }
        }

        warningLevelUpEnemy() {
          this.GameView.EnemyLevelUpNode.active = true;
          this.GameView.EnemyLevelUpUIOpacity.opacity = 255;
          this.playSoundGame(9);
          var tweenWarning = tween(this.GameView.EnemyLevelUpUIOpacity).to(0.5, {
            opacity: 0
          }).to(0.5, {
            opacity: 255
          });
          tweenWarning.repeat(5, tweenWarning);
          tweenWarning.start();
          this.scheduleOnce(function () {
            var tweenWarning2 = tween(this.GameView.EnemyLevelUpUIOpacity).to(0.5, {
              opacity: 0
            });
            tweenWarning2.start();
            this.scheduleOnce(function () {
              this.GameView.EnemyLevelUpNode.active = false;
            }, 0.5);
          }, 2.5);
        }

        warningBoss() {
          this.GameView.BossWarningLabelNode.active = true;
          this.GameView.HpBossNode.active = true;
          this.GameView.BossHpProgressBar.progress = 1;
          this.playSoundGame(9);
          this.changeColorSpriteFull(Color.RED);
          this.scheduleOnce(function () {
            this.GameView.BossWarningLabelNode.active = false;
          }, 2);
        }

        typeOfEnemy(enemyController, type, nodeUITransformY) {
          enemyController.enemyLevelLabel.string = "lv" + ("" + this.levelCount);
          enemyController.enemyNodeHp.position = new Vec3(0, 0 - nodeUITransformY / 2 - 15);
          enemyController.enemyNodeLevelLabel.position = new Vec3(0, 0 + nodeUITransformY / 2 + 20);
          enemyController.animEnemyArr[0].defaultClip = enemyController.animClipEnemyArr[type * 2];
          enemyController.animEnemyArr[1].defaultClip = enemyController.animClipEnemyArr[type * 2 + 1];
          enemyController.colliderEnemy.tag = type;
          enemyController.hp = type + 1 + this.extraEnemyHp;
          enemyController.maxHp = enemyController.hp;
          enemyController.enemyProgressBarHp.progress = 1;
        }

        onTouchStartShootBtn(event) {
          this.holdShootBullet = true;
          this.GameModel.ShootBtnNode.off(Input.EventType.TOUCH_START, this.onTouchStartShootBtn, this); // this.GameModel.ShootBtnNode.off(Input.EventType.TOUCH_END, this.onTouchEndShootBtn, this);
        }

        onTouchEndShootBtn(event) {
          this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_START, this.onTouchStartShootBtn, this); // this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_END, this.onTouchEndShootBtn, this);

          this.holdShootBullet = false;
          this.GameView.ShootBtnUIOpacity.opacity = 255;
          this.isShootBullet = false;
        }

        dashBtnAction() {
          if (this.isPressDash) {
            this.playerControllerComponent.playAnimDash();
            this.GameModel.DashBtn.interactable = false;
            this.playSoundGame(5);
            var tweenBtnDash = tween(this.GameView.DashBtnProgressBar).to(5, {
              progress: 1
            });
            this.isPressDash = false;
            tweenBtnDash.start();
            this.scheduleOnce(function () {
              this.isPressDash = true;
              this.GameModel.DashBtn.interactable = true;
              this.GameView.DashBtnProgressBar.progress = 0;
            }, 5.05);
          }
        }

        powerUpBtnAction() {
          if (this.isPressPowerUp) {
            this.GameModel.PowerUpBtn.interactable = false;
            this.pressPowerUpAction();
            var tweenBtnPowerUp = tween(this.GameView.PowerUpProgressBar).to(30, {
              progress: 1
            });
            this.isPressPowerUp = false;
            tweenBtnPowerUp.start();
            this.scheduleOnce(function () {
              this.GameModel.PowerUpBtn.interactable = true;
              this.isPressPowerUp = true;
              this.GameView.PowerUpProgressBar.progress = 0;
            }, 30.05);
          }
        }

        healBtnAction() {
          if (this.isPressHeal && this.playerControllerComponent.currentPLayerHp < this.GameView.HpMax) {
            this.GameModel.HealBtn.interactable = false;
            this.pressHealAction();
            var tweenBtnHeal = tween(this.GameView.HealProgressBar).to(30, {
              progress: 1
            });
            this.isPressHeal = false;
            tweenBtnHeal.start();
            this.scheduleOnce(function () {
              this.GameModel.HealBtn.interactable = true;
              this.isPressHeal = true;
              this.GameView.HealProgressBar.progress = 0;
            }, 30.05);
          }
        }

        pressHealAction() {
          this.playerControllerComponent.currentPLayerHp += 5;

          if (this.playerControllerComponent.currentPLayerHp > this.GameView.HpMax) {
            this.playerControllerComponent.currentPLayerHp = 20;
          }

          this.GameView.HpLabelCurrent.string = "" + this.playerControllerComponent.currentPLayerHp;
          this.GameView.HpProgressBar.progress = this.playerControllerComponent.currentPLayerHp / this.GameView.HpMax;
          this.changeColorSpriteFull(Color.CYAN);
        }

        pressPowerUpAction() {
          this.playerControllerComponent.dame *= 2;
          this.GameView.BuffNode.active = true;
          this.startCountDown();
          this.changeColorSpriteFull(Color.GREEN);
        }

        startCountDown() {
          this.GameView.BuffPowerUpLabelCountDown.string = "" + this.timeNum;

          this.callBackSchedule = function () {
            this.timeNum--;
            this.GameView.BuffPowerUpLabelCountDown.string = "" + this.timeNum;

            if (this.timeNum === 0) {
              this.GameView.BuffNode.active = false;
              this.timeNum = 5;
              this.playerControllerComponent.dame = this.playerDameInit;
              this.unschedule(this.callBackSchedule);
            }
          };

          this.schedule(this.callBackSchedule, 1);
        }

        onEndContact(selfCollider, otherCollider, contact) {
          // will be called once when the contact between two colliders just about to end.
          console.log('onEndContact');
        }

        playAgain() {
          director.resume();
          this.isOver = true;
          this.playSoundGame(1);
          this.GameView.LoadingAnimNode.active = true;
          var tweenLoadingAnim = tween(this.GameView.LoadingAnimProgressBar).to(1.5, {
            progress: 1
          });
          tweenLoadingAnim.start();
          this.scheduleOnce(function () {
            director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).GAME_SCENE);
          }, 1.5);
        }

        backMenu() {
          director.resume();
          this.isOver = true;
          this.playSoundGame(1);
          this.GameView.LoadingAnimNode.active = true;
          var tweenLoadingAnim = tween(this.GameView.LoadingAnimProgressBar).to(1.5, {
            progress: 1
          });
          tweenLoadingAnim.start();
          this.scheduleOnce(function () {
            director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).MENU_SCENE);
          }, 1.5);
        }

        openSetting() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          this.GameView.BlackNode.active = true;
          this.playSoundGame(1);
          this.GameModel.SettingBtn.interactable = false;
          this.GameView.SettingNode.active = true;
          director.pause();
        }

        closeSetting() {
          director.resume();
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          this.GameView.BlackNode.active = false;
          this.playSoundGame(1);
          this.GameModel.SettingBtn.interactable = true;
          this.GameView.SettingNode.active = false;
        }

        musicOff() {
          this.GameModel.MusicOnNode.active = true;
          this.GameModel.MusicOffNode.active = false;
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).volumeMusicValue = this.GameModel.MusicBg.volume = 0;
        }

        musicOn() {
          this.GameModel.MusicOnNode.active = false;
          this.GameModel.MusicOffNode.active = true;
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).volumeMusicValue = this.GameModel.MusicBg.volume = 0.7;
          this.GameModel.SoundGame.clip = this.GameModel.SoundGameArr[1];
          this.GameModel.SoundGame.play();
        }

        soundOff() {
          this.GameModel.SoundOnNode.active = true;
          this.GameModel.SoundOffNode.active = false;
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).volumeSoundValue = this.GameModel.SoundGame.volume = 0;
        }

        souncOn() {
          this.GameModel.SoundOnNode.active = false;
          this.GameModel.SoundOffNode.active = true;
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).volumeSoundValue = this.GameModel.SoundGame.volume = 0.7;
          this.GameModel.SoundGame.clip = this.GameModel.SoundGameArr[1];
          this.GameModel.SoundGame.play();
        }

        gameOverAction() {
          var playerNodeController = this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController) : PlayerController);
          this.unschedule(this.shootSchedule);
          playerNodeController.currentPLayerHp = 0;
          this.GameView.HpLabelCurrent.string = playerNodeController.currentPLayerHp.toString();
          this.GameModel.BulletContainerNode.active = false;
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          this.GameModel.PlayerRb.enabledContactListener = false;
          this.GameModel.PlayerCollider.enabled = false;
          this.GameModel.MusicBg.stop();
          this.GameView.BlackNode.active = true;
          this.GameView.GameOverNode.active = true;
          this.GameView.ScoreResultLabel.string = this.scoreCurrent.toString();
          this.GameView.RewardCountResultLabel.string = this.rewardCount.toString(); // this.completeGame();

          this.playSoundGame(6);
        }

        playerTakeDame(hp, playerNodeController) {
          this.playSoundGame(2);
          var tweenOpacityPlayer = tween(this.GameModel.PlayerUIOpacity).to(0.25, {
            opacity: 100
          }).to(0.25, {
            opacity: 255
          });
          tweenOpacityPlayer.start();
          playerNodeController.currentPLayerHp -= hp;
          this.GameView.HpLabelCurrent.string = playerNodeController.currentPLayerHp.toString();
          this.GameView.HpProgressBar.progress -= hp / this.GameView.HpMax;

          if (playerNodeController.currentPLayerHp <= this.GameView.HpMax / 4 && this.isWarningLowHealth) {
            this.GameView.WarningLowHealthNode.active = true;
            this.GameView.WarningLowHealthOpacity.opacity = 255;
            this.isWarningLowHealth = false; // this.playSoundGame(9);

            var tweenWarning = tween(this.GameView.WarningLowHealthOpacity).to(0.5, {
              opacity: 0
            }).to(0.5, {
              opacity: 255
            });
            tweenWarning.repeat(3, tweenWarning);
            tweenWarning.start();
            this.changeColorSpriteFull(Color.RED);
            this.scheduleOnce(function () {
              // let tweenWarning2 = tween(this.GameView.WarningLowHealthOpacity).to(0.5, {opacity: 0});
              // tweenWarning2.start();
              this.scheduleOnce(function () {
                this.GameView.WarningLowHealthNode.active = false; // this.GameView.ColorFullNode.active = false;
              }, 0.5);
            }, 2.5);
          } else if (playerNodeController.currentPLayerHp > this.GameView.HpMax / 4) {
            this.isWarningLowHealth = true;
          }
        }

        setTypeObject() {
          // obstacle.getComponent(ObstacleController).setInitPos();
          this.GameModel.HostageContainer.children.map(hostage => {
            this.putHostageIntoPool(hostage);
          });
          this.GameModel.ObstacleContainer.removeAllChildren();
          this.GameModel.SpikeContainer.removeAllChildren();
          this.GameModel.RewardContainerNode.removeAllChildren();
          var randomNumb = randomRangeInt(0, 20);

          if (randomNumb >= 0 && randomNumb <= 4) {
            var hostage = new Node();
            hostage = this.instantiateHostage(hostage);
            hostage.getComponent(_crd && HostageController === void 0 ? (_reportPossibleCrUseOfHostageController({
              error: Error()
            }), HostageController) : HostageController).setInitPos();
          } else if (randomNumb >= 5 && randomNumb <= 9) {
            var obstacle = new Node();
            obstacle = this.instantiateObstacle(obstacle);
          } else if (randomNumb >= 10 && randomNumb <= 14) {
            var spike = new Node();
            spike = this.instantiateSpike(spike);
          } else if (randomNumb >= 15 && randomNumb <= 17) {
            var _hostage = new Node();

            _hostage = this.instantiateHostage(_hostage);

            _hostage.getComponent(_crd && HostageController === void 0 ? (_reportPossibleCrUseOfHostageController({
              error: Error()
            }), HostageController) : HostageController).setInitPos();

            var _obstacle = new Node();

            _obstacle = this.instantiateObstacle(_obstacle);
          } else {
            var _spike = new Node();

            _spike = this.instantiateSpike(_spike);

            var _obstacle2 = new Node();

            _obstacle2 = this.instantiateObstacle(_obstacle2);
          }
        }

        instantiateBoss() {
          var node = this.getBossFromPool();
          var nodeEnemy = node.getComponent(_crd && BossController === void 0 ? (_reportPossibleCrUseOfBossController({
            error: Error()
          }), BossController) : BossController);
          nodeEnemy.hpMax = nodeEnemy.hp = 30 + nodeEnemy.bossTurn * 10;
          node.position = new Vec3(randomRange(1200, 1450), randomRange(-50, 50), 1);
          node.parent = this.GameModel.BossContainer;
          nodeEnemy.bossSprite.spriteFrame = nodeEnemy.bossSF;
          nodeEnemy.bossOpacity.opacity = 255;
          nodeEnemy.bossRb.enabledContactListener = true;
          nodeEnemy.bossCollide.enabled = true;
          nodeEnemy.isDead = false;
          this.countBoss = 1;
          var collider = nodeEnemy.bossCollide;

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContactBoss, this);
          }
        }

        checkBossAction(enemy, direction, dt) {
          var enemyControllerComponent = enemy.getComponent(_crd && BossController === void 0 ? (_reportPossibleCrUseOfBossController({
            error: Error()
          }), BossController) : BossController);
          var playerNodeController = this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController) : PlayerController);

          if (enemy.position.x - this.GameModel.PlayerNode.position.x <= -150 && enemy.position.x - this.GameModel.PlayerNode.position.x >= -300 && !enemyControllerComponent.isAttack || enemy.position.x - this.GameModel.PlayerNode.position.x >= 150 && enemy.position.x - this.GameModel.PlayerNode.position.x <= 300 && !enemyControllerComponent.isAttack && !this.isOver && !enemyControllerComponent.isDead) {
            if (enemyControllerComponent.isDead || this.isOver) return;
            enemyControllerComponent.isAttack = true;
            enemyControllerComponent.attackAction();
            this.playSoundGame(11);
            var tweenAttack = tween(enemy).to(0.2, {
              position: new Vec3(enemy.position.x, enemy.position.y + 50, enemy.position.z)
            }).to(0.275, {
              position: new Vec3(this.GameModel.PlayerNode.position.x, this.GameModel.PlayerNode.position.y + 20, this.GameModel.PlayerNode.position.z)
            }, {
              easing: "linear"
            });
            tweenAttack.start();
            this.scheduleOnce(function () {
              if (enemy.position.x - this.GameModel.PlayerNode.position.x <= 50 && enemy.position.x - this.GameModel.PlayerNode.position.x >= -50 && enemy.position.y - this.GameModel.PlayerNode.position.y <= 50 && enemy.position.y - this.GameModel.PlayerNode.position.y >= -50 && enemyControllerComponent.isCanHit && !this.isOver && !this.isDash) {
                enemyControllerComponent.isCanHit = false;
                this.playerTakeDame(5, playerNodeController);

                if (playerNodeController.currentPLayerHp <= 0 && !this.isOver) {
                  this.isOver = true;
                  this.gameOverAction();
                }
              }
            }, 0.5);
            this.scheduleOnce(function () {
              if (!enemyControllerComponent.isDead) {
                enemyControllerComponent.playAnim(0);
                this.GameModel.CrackNode.active = true;
                this.GameModel.CrackNode.position = new Vec3(enemy.position.x, enemy.position.y - 50);
                var tweenCrackOpacity = tween(this.GameModel.CrackNodeOpacity).to(1, {
                  opacity: 0
                });
                tweenCrackOpacity.start();
                this.scheduleOnce(function () {
                  this.GameModel.CrackNode.active = false;
                  this.GameModel.CrackNodeOpacity.opacity = 255;
                }, 1.05);
              }
            }, 0.8);
            this.scheduleOnce(function () {
              enemyControllerComponent.isAttack = false;
              enemyControllerComponent.isCanHit = true;
            }, randomRangeInt(3, 6));
          } else if (enemy.position.x - this.GameModel.PlayerNode.position.x < 150 && enemy.position.x - this.GameModel.PlayerNode.position.x > -150 && !enemyControllerComponent.isShoot && !this.isOver && !enemyControllerComponent.isDead) {
            if (enemyControllerComponent.isDead || this.isOver) return;
            enemyControllerComponent.isShoot = true;
            enemyControllerComponent.shootAction();
            this.playSoundGame(12);
            var bossBullet = new Node();
            bossBullet = this.instantiateBossBullet(bossBullet, enemy.position.x, enemy.position.y);
            var bulletBossComponent = bossBullet.getComponent(_crd && BulletBossController === void 0 ? (_reportPossibleCrUseOfBulletBossController({
              error: Error()
            }), BulletBossController) : BulletBossController);
            bulletBossComponent.shootBullet(this.GameModel.PlayerNode.position.x, this.GameModel.PlayerNode.position.y);
            this.scheduleOnce(function () {
              if (!enemyControllerComponent.isDead) enemyControllerComponent.playAnim(0);
            }, 0.5);
            this.scheduleOnce(function () {
              enemyControllerComponent.isShoot = false;
            }, randomRange(2, 4));
            this.scheduleOnce(function () {
              this.putBulletBossIntoPool(bossBullet);
            }, 2);
          }
        }

        initGame() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var _this = _this3;
            var parameters = find((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).GAME_CLIENT);
            var gameClientParams = parameters.getComponent(_crd && StoreAPI === void 0 ? (_reportPossibleCrUseOfStoreAPI({
              error: Error()
            }), StoreAPI) : StoreAPI);
            _this3.gameClient = gameClientParams.gameClient;
            yield gameClientParams.gameClient.match.startMatch().then(data => {
              _this3.matchData = data; // this.startMatchLog();
            }).catch(error => console.log(error));
          })();
        }

        completeGame() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            yield _this4.gameClient.match.completeMatch(_this4.matchData, {
              score: _this4.scoreCurrent
            }).then( /*#__PURE__*/_asyncToGenerator(function* (data) {
              if (_this4.scoreCurrent > (_crd && DataUser === void 0 ? (_reportPossibleCrUseOfDataUser({
                error: Error()
              }), DataUser) : DataUser).dataUser.data.highScore) {
                (_crd && DataUser === void 0 ? (_reportPossibleCrUseOfDataUser({
                  error: Error()
                }), DataUser) : DataUser).dataUser.data.highScore = _this4.scoreCurrent;
              }

              _this4.GameView.HighScoreLabel.string = (_crd && DataUser === void 0 ? (_reportPossibleCrUseOfDataUser({
                error: Error()
              }), DataUser) : DataUser).dataUser.data.highScore.toString();
              (_crd && DataUser === void 0 ? (_reportPossibleCrUseOfDataUser({
                error: Error()
              }), DataUser) : DataUser).dataUser.data.rewardCount += _this4.rewardCount;
              (_crd && DataUser === void 0 ? (_reportPossibleCrUseOfDataUser({
                error: Error()
              }), DataUser) : DataUser).dataUser.data.scoreCount += _this4.scoreCurrent;
              yield _this4.gameClient.user.data.setGameData({
                [_this4.userId]: (_crd && DataUser === void 0 ? (_reportPossibleCrUseOfDataUser({
                  error: Error()
                }), DataUser) : DataUser).dataUser
              }, false).then(response => {}).catch(e => {
                console.log("Error at set game data", e);
              });
            })).catch(error => console.log(error));
          })();
        } // public logMatch(data: Object): void {
        //     let parameters = find(Constants.GAME_CLIENT);
        //     let gameClientParams = parameters.getComponent(StoreAPI);
        //     this.gameClient = gameClientParams.gameClient;
        //     this.gameClient.match.logMatch(this.matchData.matchId, data).catch((e) => console.log(e));
        // }
        // public startMatchLog(): void {
        //     let id = setInterval(() => {
        //         if (this.isOver) {
        //             clearInterval(id);
        //             return;
        //         }
        //         this.logMatch({ score: this.scoreCurrent })
        //     }, 2000)
        // }


        changeColorSpriteFull(hexColor) {
          this.GameView.ColorFullNode.active = true;
          this.GameView.ColorFullUIOpacity.opacity = 0;
          this.GameView.ColorFullSprite.color = hexColor;
          var tweenWarningColor = tween(this.GameView.ColorFullUIOpacity).to(0.5, {
            opacity: 50
          }).to(0.5, {
            opacity: 0
          });
          tweenWarningColor.repeat(3, tweenWarningColor);
          tweenWarningColor.start();
        }

        appearBoosterNode() {
          var playerNodeController = this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController) : PlayerController);
          this.holdShootBullet = false;
          playerNodeController.isStop = true;
          playerNodeController.moveArr1 = [];
          playerNodeController.moveArr2 = [];
          this.GameModel.PlayerRb.linearVelocity = new Vec2(0, 0);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          this.playerControllerComponent.offKeyboard();
          this.GameView.BlackNode.active = true;
          this.GameModel.BoosterNode.active = true;
          this.GameModel.BoosterNode.setPosition(new Vec3(0, 450));
          var tweenBoosterNode = tween(this.GameModel.BoosterNode).to(0.5, {
            position: new Vec3(0, 0)
          }, {
            easing: "linear"
          });
          tweenBoosterNode.start();
          var arr = this.shuffleArray([0, 1, 2, 3, 4]); // let result = arr.slice(0, 3);

          for (var i = 0; i < 3; i++) {
            this.ShowAttribute(i, arr[i]);
          }
        }

        shuffleArray(array) {
          for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }

          return array;
        }

        ShowAttribute(num, type) {
          switch (type) {
            case 0:
              this.settingBooster(num, 'Heal 5 hp', type, this.levelBooster1, 'Healing', this.priceBooster1);
              break;

            case 1:
              this.settingBooster(num, 'Plus 5 hp', type, this.levelBooster2, 'HP Container', this.priceBooster2);
              break;

            case 2:
              this.settingBooster(num, 'Plus 1 damage', type, this.levelBooster3, 'Damage Plus', this.priceBooster3);
              break;

            case 3:
              this.settingBooster(num, 'Plus 4 Bullets', type, this.levelBooster4, 'More Bullet', this.priceBooster4);
              break;

            case 4:
              this.settingBooster(num, 'Plus 50 speed shot', type, this.levelBooster5, 'Speed Shot', this.priceBooster5);
              break;

            default:
              break;
          }
        }

        settingBooster(num, note, type, level, name, price) {
          var playerControllerComponent = this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController) : PlayerController);
          this.GameModel.OptionSprite[num].spriteFrame = this.GameView.ItemBoosterSf[type];
          this.GameModel.OptionLabel[num].string = "" + note;
          this.GameModel.OptionName[num].string = "" + name;
          this.GameModel.OptionLevel[num].string = 'Lv' + ("" + level);
          this.GameModel.OptionPrice[num].string = "" + price;
          this.GameModel.OptionButton[num].node.off(Button.EventType.CLICK);
          this.GameModel.OptionButton[num].node.on(Button.EventType.CLICK, () => {
            switch (type) {
              case 0:
                if (this.rewardCount < this.priceBooster1) {
                  this.clickBoosterUnsuccessfully();
                } else {
                  playerControllerComponent.currentPLayerHp += 5;

                  if (playerControllerComponent.currentPLayerHp > this.GameView.HpMax) {
                    playerControllerComponent.currentPLayerHp = 20;
                  }

                  this.GameView.HpLabelCurrent.string = "" + playerControllerComponent.currentPLayerHp;
                  this.GameView.HpProgressBar.progress = playerControllerComponent.currentPLayerHp / this.GameView.HpMax;
                  this.clickBoosterSuccessfully(this.priceBooster1);
                  this.levelBooster1++;
                  this.priceBooster1 *= 2;
                }

                break;

              case 1:
                if (this.rewardCount < this.priceBooster2) {
                  this.clickBoosterUnsuccessfully();
                } else {
                  this.GameView.HpMax += 5;
                  this.GameView.HpLabelMax.string = this.GameView.HpMax.toString();
                  this.GameView.HpProgressBar.progress = playerControllerComponent.currentPLayerHp / this.GameView.HpMax;
                  this.clickBoosterSuccessfully(this.priceBooster2);
                  this.levelBooster2++;
                  this.priceBooster2 *= 2;
                }

                break;

              case 2:
                if (this.rewardCount < this.priceBooster3) {
                  this.clickBoosterUnsuccessfully();
                } else {
                  this.playerControllerComponent.dame++;
                  this.playerDameInit = this.playerControllerComponent.dame;
                  this.clickBoosterSuccessfully(this.priceBooster3);
                  this.levelBooster3++;
                  this.priceBooster3 *= 2;
                }

                break;

              case 3:
                if (this.rewardCount < this.priceBooster4) {
                  this.clickBoosterUnsuccessfully();
                } else {
                  this.initTotalBullet += 4;
                  this.totalBulletCount = this.initTotalBullet;
                  this.GameView.BulletCountLabel.string = this.totalBulletCount.toString();
                  this.clickBoosterSuccessfully(this.priceBooster4);
                  this.levelBooster4++;
                  this.priceBooster4 *= 2;
                }

                break;

              case 4:
                if (this.rewardCount < this.priceBooster5) {
                  this.clickBoosterUnsuccessfully();
                } else {
                  this.speedBulletInit += 50;
                  this.clickBoosterSuccessfully(this.priceBooster5);
                  this.levelBooster5++;
                  this.priceBooster5 *= 2;
                }

                break;

              default:
                break;
            }
          }, this);
        }

        clickBoosterSuccessfully(price) {
          this.changeWaveAction();
          this.playSoundGame(17);
          this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController) : PlayerController).isStop = false;
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          this.GameView.BlackNode.active = false;
          this.GameModel.BoosterNode.active = false;
          this.GameModel.NotiLabel.node.active = false;
          this.playerControllerComponent.onKeyboard();
          this.rewardCount -= price;
          this.GameView.RewardCountLabel.string = this.rewardCount.toString();
        }

        clickBoosterUnsuccessfully() {
          this.GameModel.NotiLabel.node.active = false;
          this.GameModel.NotiLabel.node.position = new Vec3(this.GameModel.NotiLabel.node.position.x, this.initNotiY);
          this.GameModel.NotiLabel.node.active = true;
          var tweenNoti = tween(this.GameModel.NotiLabel.node).to(0.5, {
            position: new Vec3(this.GameModel.NotiLabel.node.position.x, this.initNotiY + 65)
          }, {
            easing: "linear"
          }).start();
          this.scheduleOnce(function () {
            if (this.GameModel.NotiLabel.node.active) {
              this.GameModel.NotiLabel.node.active = false;
            }
          }, 0.505);
        }

        skipBoosterBtnAction() {
          this.tweenArrowDirecion();
          this.GameModel.PlayerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController) : PlayerController).isStop = false;
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          this.GameView.BlackNode.active = false;
          this.GameModel.BoosterNode.active = false;
          this.GameModel.NotiLabel.node.active = false;
          this.playerControllerComponent.onKeyboard();
          this.GameModel.PlayerNode.active = false;
          this.GameModel.FadeNode.active = true;
          var tweenFade = tween(this.GameModel.FadeUIOpacity).to(0.5, {
            opacity: 255
          }).to(0.5, {
            opacity: 0
          });
          tweenFade.start();
          this.changeWaveAction();
        }

        nextWaveAction() {
          this.GameView.WaveCountNode.active = true;
          var wave = this.countWave + 1;
          var randomSpawnTime = randomRange(0.5, 1.5);

          if (this.countWave > 0 && this.countWave % 5 === 0 && this.countWave <= 50) {
            this.extraEnemy++;
          }

          this.countEnemyEachTurn = randomRangeInt(15, 25) + this.extraEnemy;
          this.levelUpEnemy();

          if (wave < 6) {
            if (wave % 5 === 0) {
              this.instantiateBoss();
              this.warningBoss();
              console.log('boss');
            }

            var enemyNode;
            this.schedule(function () {
              this.instantiateEnemy(enemyNode, randomRangeInt(0, wave + 2));
            }, randomSpawnTime, this.countEnemyEachTurn - 1, 0);
          } else {
            if (wave % 5 === 0) {
              this.instantiateBoss();
              this.warningBoss();
              console.log('boss');
            }

            var _enemyNode;

            this.schedule(function () {
              this.instantiateEnemy(_enemyNode, randomRangeInt(0, 8));
            }, randomSpawnTime, this.countEnemyEachTurn - 1, 0);
          }
        }

        changeWaveAction() {
          this.GameModel.FadeNode.active = true;
          var tweenFade = tween(this.GameModel.FadeUIOpacity).to(0.5, {
            opacity: 255
          }).to(0.5, {
            opacity: 0
          });
          tweenFade.start();
          this.countWave++;
          this.isHostageDone = true;
          this.scheduleOnce(function () {
            for (var i = 0; i < 5; i++) {
              this.GameView.WaveCountLabel[i].string = 'Wave ' + ("" + (this.countWave + 1));
            }

            this.countHeal = this.countPlusDame = 2;
            this.GameView.HealLabelCount.string = "" + this.countHeal;
            this.GameView.PlusDameLabelCount.string = "" + this.countPlusDame;
            this.tweenArrowDirecion();
            this.GameView.SpawnPlayerEffectNode.active = true;
            this.GameView.SpawnPlayerEffectAnimation.play();
            this.GameModel.DoorCollider.enabled = true;
            this.GameModel.FadeNode.active = false;
            this.playerControllerComponent.cameraPlayer.node.setPosition(-150, -50, 1000);
            this.GameModel.DoorAnim.defaultClip = this.GameModel.DoorAnim.clips[0];
            this.GameModel.DoorAnim.play();
            this.scheduleOnce(function () {
              this.GameModel.PlayerNode.active = true;
            }, 0.25);
            this.setTypeObject();
            this.nextWaveAction();
            this.isGoNextWave = false;
            this.scheduleOnce(function () {
              this.isOpenDoor = false;
            }, 1.5);
          }, 1);
        }

        spawningEnemyAction(node, nodeComponent) {
          nodeComponent.isReady = false;
          node.scale = new Vec3(0, 0);
          nodeComponent.colliderEnemy.enabled = false;
          nodeComponent.rigidEnemy.enabledContactListener = false;
          nodeComponent.isReadyShoot = false;
          var tweenScale = tween(node).to(0.5, {
            scale: new Vec3(1, 1)
          });
          tweenScale.start();
          this.scheduleOnce(function () {
            nodeComponent.colliderEnemy.enabled = true;
            nodeComponent.isReadyShoot = true;
            nodeComponent.rigidEnemy.enabledContactListener = true;
            nodeComponent.isReady = true;
          }, 1);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameModel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GameView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "PoolObject", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playerControllerComponent", [_dec5], {
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
//# sourceMappingURL=44fe1340ed77a565f564ee00d0c257a7f5e36ee0.js.map