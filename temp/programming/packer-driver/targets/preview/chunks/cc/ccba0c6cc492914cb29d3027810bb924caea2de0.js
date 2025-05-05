System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Collider2D, Component, RigidBody2D, Sprite, SpriteFrame, UIOpacity, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, BossController;

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
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      RigidBody2D = _cc.RigidBody2D;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "610b88MdzBPbIxipQezdT2x", "BossController", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Collider2D', 'Component', 'Node', 'RigidBody2D', 'Sprite', 'SpriteFrame', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BossController", BossController = (_dec = ccclass('BossController'), _dec2 = property({
        type: RigidBody2D
      }), _dec3 = property({
        type: Collider2D
      }), _dec4 = property({
        type: UIOpacity
      }), _dec5 = property({
        type: Animation
      }), _dec6 = property({
        type: Sprite
      }), _dec7 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = class BossController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bossRb", _descriptor, this);

          _initializerDefineProperty(this, "bossCollide", _descriptor2, this);

          _initializerDefineProperty(this, "bossOpacity", _descriptor3, this);

          _initializerDefineProperty(this, "bossAnim", _descriptor4, this);

          _initializerDefineProperty(this, "bossSprite", _descriptor5, this);

          _initializerDefineProperty(this, "bossSF", _descriptor6, this);

          this.speedChase = 0.5;
          this.isAttack = false;
          this.isShoot = false;
          this.isIdle = false;
          this.isCanHit = true;
          this.isDead = false;
          this.hp = 30;
          this.hpMax = 30;
          this.bossTurn = 0;
        }

        start() {
          this.playAnim(0);
        }

        update(dt) {}

        playAnim(type) {
          this.bossAnim.defaultClip = this.bossAnim.clips[type];
          this.bossAnim.play();
        }

        attackAction() {
          this.playAnim(1);
        }

        shootAction() {
          this.playAnim(2);
        }

        dieAction() {
          this.playAnim(3);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bossRb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bossCollide", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bossOpacity", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bossAnim", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bossSprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bossSF", [_dec7], {
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
//# sourceMappingURL=ccba0c6cc492914cb29d3027810bb924caea2de0.js.map