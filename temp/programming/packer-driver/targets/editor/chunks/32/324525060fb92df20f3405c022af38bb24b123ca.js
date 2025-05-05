System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AnimationClip, Component, Node, Animation, RigidBody2D, Collider2D, Sprite, SpriteFrame, ProgressBar, Label, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, EnemyController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AnimationClip = _cc.AnimationClip;
      Component = _cc.Component;
      Node = _cc.Node;
      Animation = _cc.Animation;
      RigidBody2D = _cc.RigidBody2D;
      Collider2D = _cc.Collider2D;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      ProgressBar = _cc.ProgressBar;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7fad3gYmftEUpfMxqLPCuBz", "EnemyController", undefined);

      __checkObsolete__(['_decorator', 'AnimationClip', 'Component', 'Node', 'Animation', 'RigidBody2D', 'Collider2D', 'Sprite', 'SpriteFrame', 'ProgressBar', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyController", EnemyController = (_dec = ccclass('EnemyController'), _dec2 = property({
        type: [Node]
      }), _dec3 = property({
        type: [Animation]
      }), _dec4 = property({
        type: [AnimationClip]
      }), _dec5 = property({
        type: RigidBody2D
      }), _dec6 = property({
        type: Collider2D
      }), _dec7 = property({
        type: Sprite
      }), _dec8 = property({
        type: [SpriteFrame]
      }), _dec9 = property({
        type: ProgressBar
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Label
      }), _dec(_class = (_class2 = class EnemyController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "animEnemyNode", _descriptor, this);

          _initializerDefineProperty(this, "animEnemyArr", _descriptor2, this);

          _initializerDefineProperty(this, "animClipEnemyArr", _descriptor3, this);

          _initializerDefineProperty(this, "rigidEnemy", _descriptor4, this);

          _initializerDefineProperty(this, "colliderEnemy", _descriptor5, this);

          _initializerDefineProperty(this, "enemySprite", _descriptor6, this);

          _initializerDefineProperty(this, "enemySFArr", _descriptor7, this);

          _initializerDefineProperty(this, "enemyProgressBarHp", _descriptor8, this);

          _initializerDefineProperty(this, "enemyNodeHp", _descriptor9, this);

          _initializerDefineProperty(this, "enemyNodeLevelLabel", _descriptor10, this);

          _initializerDefineProperty(this, "enemyLevelLabel", _descriptor11, this);

          this.speed = 150;
          this.hp = 0;
          this.maxHp = 0;
          this.speedChase = 0.75;
          this.moveLeft = true;
          this.hit = true;
          this.outHit = true;
          this.dead = false;
          this.canShoot = false;
          this.isShooting = true;
          this.isOutShooting = true;
          this.isReady = false;
          this.isReadyShoot = false;
        }

        start() {// this.scheduleOnce(function(){
          //     this.playIdleMove();
          // }, 1)
        }

        update(dt) {
          if (this.moveLeft) {
            this.moveEnemyLeft(dt);
          } else {
            this.moveEnemyRight(dt);
          }
        }

        playIdleMove() {
          this.animEnemyNode[0].active = true;
          this.animEnemyArr[0].play();
        }

        moveEnemyLeft(deltaTime) {
          var posX = this.node.position.x;
          var posY = this.node.position.y;
          posX -= this.speed * deltaTime;
          this.node.setPosition(posX, posY, 0.0);
          this.colliderEnemy.apply();
        }

        moveEnemyRight(deltaTime) {
          var posX = this.node.position.x;
          var posY = this.node.position.y;
          posX += this.speed * deltaTime;
          this.node.setPosition(posX, posY, 0.0);
          this.colliderEnemy.apply();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animEnemyNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animEnemyArr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "animClipEnemyArr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rigidEnemy", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "colliderEnemy", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "enemySprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "enemySFArr", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "enemyProgressBarHp", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "enemyNodeHp", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "enemyNodeLevelLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "enemyLevelLabel", [_dec12], {
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
//# sourceMappingURL=324525060fb92df20f3405c022af38bb24b123ca.js.map