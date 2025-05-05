System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Collider2D, Component, Node, Sprite, SpriteFrame, tween, UIOpacity, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, HostageController;

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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a47687ft9KFIQN72SkDZqK", "HostageController", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Collider', 'Collider2D', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'tween', 'UIOpacity', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HostageController", HostageController = (_dec = ccclass('HostageController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: UIOpacity
      }), _dec4 = property({
        type: [Animation]
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Sprite
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Sprite
      }), _dec9 = property({
        type: [SpriteFrame]
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Sprite
      }), _dec12 = property({
        type: SpriteFrame
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Node
      }), _dec15 = property({
        type: Animation
      }), _dec16 = property({
        type: [SpriteFrame]
      }), _dec17 = property({
        type: Collider2D
      }), _dec(_class = (_class2 = class HostageController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "circleNode", _descriptor, this);

          _initializerDefineProperty(this, "circleUIOpacity", _descriptor2, this);

          _initializerDefineProperty(this, "animArr", _descriptor3, this);

          _initializerDefineProperty(this, "cageNode", _descriptor4, this);

          _initializerDefineProperty(this, "cageSprite", _descriptor5, this);

          _initializerDefineProperty(this, "popupNode", _descriptor6, this);

          _initializerDefineProperty(this, "popupSprite", _descriptor7, this);

          _initializerDefineProperty(this, "popupSf", _descriptor8, this);

          _initializerDefineProperty(this, "gridNode", _descriptor9, this);

          _initializerDefineProperty(this, "gridSprite", _descriptor10, this);

          _initializerDefineProperty(this, "gridSpriteFrame", _descriptor11, this);

          _initializerDefineProperty(this, "loadingNode", _descriptor12, this);

          _initializerDefineProperty(this, "victimNode", _descriptor13, this);

          _initializerDefineProperty(this, "victimAnim", _descriptor14, this);

          _initializerDefineProperty(this, "cageSf", _descriptor15, this);

          _initializerDefineProperty(this, "cageCollider", _descriptor16, this);

          this.isStand = false;
          this.isDone = false;
          this.isDoneChecked = false;
        }

        start() {}

        update(dt) {}

        playAnim(type) {
          this.animArr[type].play();
        }

        playAnimVictim(type) {
          this.victimAnim.defaultClip = this.victimAnim.clips[type];
          this.victimAnim.play();
        }

        unActiveLoading() {
          this.loadingNode.active = false;
        }

        playLoadingAnim() {
          this.loadingNode.active = true;
          this.playAnim(4);
        }

        changePopupSprite(type) {
          this.popupSprite.spriteFrame = this.popupSf[type];
        }

        checkDone() {
          this.animArr[4].on(Animation.EventType.FINISHED, () => this.playVictimAnimWhenSuccess());
        }

        playVictimAnimWhenSuccess() {
          this.isDoneChecked = true;
          this.isDone = true;
          this.playAnim(3);
          this.playAnimVictim(1);
          this.unActiveLoading();
          this.animArr[3].on(Animation.EventType.FINISHED, () => this.playAnimCageAndVicAnim());
        }

        changeCageSf(type) {
          this.cageSprite.spriteFrame = this.cageSf[type];
        }

        playAnimCageAndVicAnim() {
          this.victimNode.scale = new Vec3(-1, 1);
          this.popupNode.scale = new Vec3(-1, 1);
          this.changePopupSprite(1);
          var tween1 = tween(this.victimNode).to(1.25, {
            position: new Vec3(this.victimNode.position.x - 750, this.victimNode.position.y, this.victimNode.position.z)
          }, {
            easing: "linear"
          });
          this.scheduleOnce(function () {
            this.victimNode.active = false;
          }, 1.25);
          this.playAnimVictim(2);
          tween1.start();
          this.circleUIOpacity.opacity = 255;

          for (var i = 0; i < 3; i++) {
            this.animArr[i].stop();
          }

          this.changeCageSf(0);
          this.gridNode.active = false;
        }

        setInitPos() {
          this.victimNode.setPosition(new Vec3(12.5, -3.5));
          this.gridNode.setPosition(new Vec3(10, -5));
          this.gridNode.active = true;
          this.gridSprite.spriteFrame = this.gridSpriteFrame;
          this.victimNode.active = true;
          this.victimNode.scale = new Vec3(1, 1);
          this.popupNode.scale = new Vec3(1, 1);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "circleNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "circleUIOpacity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "animArr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cageNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cageSprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "popupNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "popupSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "popupSf", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gridNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "gridSprite", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "gridSpriteFrame", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "loadingNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "victimNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "victimAnim", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "cageSf", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "cageCollider", [_dec17], {
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
//# sourceMappingURL=934899f8545d75eb67af715fb15b481b5059d64f.js.map