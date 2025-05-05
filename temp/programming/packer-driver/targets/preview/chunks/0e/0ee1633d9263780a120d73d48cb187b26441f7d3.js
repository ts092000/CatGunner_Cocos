System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Animation, AnimationClip, input, Input, KeyCode, Vec3, RigidBody2D, Vec2, Camera, sys, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, PlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      Vec3 = _cc.Vec3;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
      Camera = _cc.Camera;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50473m47ctM04v1MkWPGc9X", "PlayerController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'AnimationClip', 'EventKeyboard', 'input', 'Input', 'KeyCode', 'Vec3', 'tween', 'RigidBody2D', 'Vec2', 'Camera', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec2 = property({
        type: [AnimationClip]
      }), _dec3 = property({
        type: Animation
      }), _dec4 = property({
        type: RigidBody2D
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Camera
      }), _dec(_class = (_class2 = class PlayerController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "animPlayerArr", _descriptor, this);

          _initializerDefineProperty(this, "animPlayer", _descriptor2, this);

          _initializerDefineProperty(this, "rigidPlayer", _descriptor3, this);

          _initializerDefineProperty(this, "circleNode", _descriptor4, this);

          _initializerDefineProperty(this, "pointNode", _descriptor5, this);

          _initializerDefineProperty(this, "redWall", _descriptor6, this);

          _initializerDefineProperty(this, "cameraPlayer", _descriptor7, this);

          this.currentPLayerHp = void 0;
          this.isPlayerDead = false;
          this.isDash = false;
          this.isCanPressDash = true;
          this.dame = 1;
          this.isMoving = void 0;
          this.isPlayAnimIdle = true;
          this.isPlayAnimMove = true;
          this.isStop = false;
          this.moveArr1 = [];
          this.moveArr2 = [];
        }

        get AnimPlayerArr() {
          return this.animPlayerArr;
        }

        set AnimPlayerArr(animPlayerArr) {
          this.animPlayerArr = animPlayerArr;
        }

        start() {
          this.onKeyboard();
          this.playIdleMove();
        }

        update(dt) {
          this.cameraFollow();
          this.playAnimDead();

          if (this.rigidPlayer.linearVelocity.x != 0 && this.isPlayAnimMove || this.rigidPlayer.linearVelocity.y != 0 && this.isPlayAnimMove && !this.isDash) {
            this.isMoving = true;
            this.isPlayAnimMove = false;
            this.playAnimMove();
          } else if (this.rigidPlayer.linearVelocity.x === 0 && this.rigidPlayer.linearVelocity.y === 0 && this.isPlayAnimIdle && !this.isDash) {
            this.isPlayAnimIdle = false;
            this.isMoving = false;
            this.isPlayAnimMove = true;
            this.playIdleMove();
          }

          if (this.moveArr1[this.moveArr1.length - 1] === 0 && !this.isDash && !this.isStop) {
            this.rigidPlayer.linearVelocity = new Vec2(-7.5, this.rigidPlayer.linearVelocity.y);
          }

          if (this.moveArr1[this.moveArr1.length - 1] === 1 && !this.isDash && !this.isStop) {
            this.rigidPlayer.linearVelocity = new Vec2(7.5, this.rigidPlayer.linearVelocity.y);
          }

          if (this.moveArr2[this.moveArr2.length - 1] === 0 && !this.isDash && !this.isStop) {
            this.rigidPlayer.linearVelocity = new Vec2(this.rigidPlayer.linearVelocity.x, 7.5);
          }

          if (this.moveArr2[this.moveArr2.length - 1] === 1 && !this.isDash && !this.isStop) {
            this.rigidPlayer.linearVelocity = new Vec2(this.rigidPlayer.linearVelocity.x, -7.5);
          }

          if (this.moveArr1.length === 0 && this.moveArr2.length === 0 && sys.isMobile && this.isDash) {
            console.log('1');
            this.rigidPlayer.linearVelocity = new Vec2(0, 0);
          }
        }

        onKeyDown(event) {
          var index = 0;

          switch (event.keyCode) {
            case KeyCode.KEY_W:
              index = this.moveArr2.findIndex(item => item === 0);
              if (index === -1) this.moveArr2.push(0);
              break;

            case KeyCode.ARROW_UP:
              index = this.moveArr2.findIndex(item => item === 0);
              if (index === -1) this.moveArr2.push(0);
              break;

            case KeyCode.KEY_A:
              index = this.moveArr1.findIndex(item => item === 0);
              if (index === -1) this.moveArr1.push(0);
              break;

            case KeyCode.ARROW_LEFT:
              index = this.moveArr1.findIndex(item => item === 0);
              if (index === -1) this.moveArr1.push(0);
              break;

            case KeyCode.KEY_S:
              index = this.moveArr2.findIndex(item => item === 1);
              if (index === -1) this.moveArr2.push(1);
              break;

            case KeyCode.ARROW_DOWN:
              index = this.moveArr2.findIndex(item => item === 1);
              if (index === -1) this.moveArr2.push(1);
              break;

            case KeyCode.KEY_D:
              index = this.moveArr1.findIndex(item => item === 1);
              if (index === -1) this.moveArr1.push(1);
              break;

            case KeyCode.ARROW_RIGHT:
              index = this.moveArr1.findIndex(item => item === 1);
              if (index === -1) this.moveArr1.push(1);
              break;

            case KeyCode.KEY_F:
              this.playAnimDash();
              break;

            case KeyCode.SPACE:
              this.playAnimShooting();
              break;

            default:
              break;
          }
        }

        onKeyUp(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_W:
              this.rigidPlayer.linearVelocity = new Vec2(this.rigidPlayer.linearVelocity.x, 0);
              var index5 = this.moveArr2.findIndex(item => item === 0);
              this.moveArr2.splice(index5, 1);
              break;

            case KeyCode.ARROW_UP:
              this.rigidPlayer.linearVelocity = new Vec2(this.rigidPlayer.linearVelocity.x, 0);
              var index6 = this.moveArr2.findIndex(item => item === 0);
              this.moveArr2.splice(index6, 1);
              break;

            case KeyCode.KEY_A:
              this.rigidPlayer.linearVelocity = new Vec2(0, this.rigidPlayer.linearVelocity.y);
              var index1 = this.moveArr1.findIndex(item => item === 0);
              this.moveArr1.splice(index1, 1);
              break;

            case KeyCode.ARROW_LEFT:
              this.rigidPlayer.linearVelocity = new Vec2(0, this.rigidPlayer.linearVelocity.y);
              var index2 = this.moveArr1.findIndex(item => item === 0);
              this.moveArr1.splice(index2, 1);
              break;

            case KeyCode.KEY_S:
              this.rigidPlayer.linearVelocity = new Vec2(this.rigidPlayer.linearVelocity.x, 0);
              var index7 = this.moveArr2.findIndex(item => item === 1);
              this.moveArr2.splice(index7, 1);
              break;

            case KeyCode.ARROW_DOWN:
              this.rigidPlayer.linearVelocity = new Vec2(this.rigidPlayer.linearVelocity.x, 0);
              var index8 = this.moveArr2.findIndex(item => item === 1);
              this.moveArr2.splice(index8, 1);
              break;

            case KeyCode.KEY_D:
              this.rigidPlayer.linearVelocity = new Vec2(0, this.rigidPlayer.linearVelocity.y);
              var index3 = this.moveArr1.findIndex(item => item === 1);
              this.moveArr1.splice(index3, 1);
              break;

            case KeyCode.ARROW_RIGHT:
              this.rigidPlayer.linearVelocity = new Vec2(0, this.rigidPlayer.linearVelocity.y);
              var index4 = this.moveArr1.findIndex(item => item === 1);
              this.moveArr1.splice(index4, 1);
              break;

            case KeyCode.SPACE:
              this.isPlayAnimIdle = true;
              break;

            default:
              break;
          }
        }

        offKeyboard() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onKeyboard() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        playAnimShooting() {
          if (!this.isMoving) {
            this.animPlayer.defaultClip = this.animPlayer.clips[0];
            this.animPlayer.play();
          }
        }

        playAnimMove() {
          this.isPlayAnimIdle = true;
          this.animPlayer.defaultClip = this.animPlayer.clips[1];
          this.animPlayer.play();
        }

        playIdleMove() {
          this.animPlayer.defaultClip = this.animPlayer.clips[2];
          this.animPlayer.play();
        }

        playAnimDash() {
          if (this.isCanPressDash) {
            this.isCanPressDash = false;
            this.isPlayAnimIdle = false;
            this.isPlayAnimMove = false;
            this.isDash = true;

            if (this.isDash) {
              if (this.rigidPlayer.linearVelocity.x > 0) {
                this.rigidPlayer.linearVelocity = new Vec2(15, this.rigidPlayer.linearVelocity.y);
              } else if (this.rigidPlayer.linearVelocity.x < 0) {
                this.rigidPlayer.linearVelocity = new Vec2(-15, this.rigidPlayer.linearVelocity.y);
              } else if (this.rigidPlayer.linearVelocity.x === 0) {
                if (this.node.scale.x === 1) {
                  this.rigidPlayer.linearVelocity = new Vec2(15, this.rigidPlayer.linearVelocity.y);
                } else {
                  this.rigidPlayer.linearVelocity = new Vec2(-15, this.rigidPlayer.linearVelocity.y);
                }
              }

              this.animPlayer.defaultClip = this.animPlayer.clips[3];
              this.animPlayer.play();
              input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this); // input.off(Input.EventType.KEY_UP, this.onKeyUp, this);

              this.scheduleOnce(function () {
                this.rigidPlayer.linearVelocity = new Vec2(0, this.rigidPlayer.linearVelocity.y);
                this.playIdleMove();
                input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
                this.isPlayAnimIdle = true;
                this.isPlayAnimMove = true;
                this.isDash = false; // input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
              }, 0.5);
              this.scheduleOnce(function () {
                this.isCanPressDash = true;
              }, 5.025);
            }
          }
        }

        cameraFollow() {
          this.circleNode.position = new Vec3(this.node.position.x - 5, this.node.position.y - 25, this.circleNode.position.z);
          this.pointNode.position = new Vec3(this.node.position.x - 5, this.node.position.y + 40, this.circleNode.position.z);
          var targetPos = this.node.getPosition();
          var cameraPos = this.cameraPlayer.node.getPosition();

          if (targetPos.x > -185 && Math.abs(this.node.position.x - this.redWall.position.x) >= 230 && targetPos.x <= 1470) {
            var newPos = cameraPos.lerp(targetPos, 0.1);
            this.cameraPlayer.node.setPosition(newPos.x, this.cameraPlayer.node.position.y, 1000);
          }

          if (targetPos.y < 100 && targetPos.y > -110) {
            var _newPos = cameraPos.lerp(targetPos, 0.1);

            this.cameraPlayer.node.setPosition(this.cameraPlayer.node.position.x, _newPos.y, 1000);
          }
        }

        playAnimDead() {
          if (this.currentPLayerHp <= 0 && this.isPlayerDead === false) {
            this.isPlayerDead = true;
            input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
            this.animPlayer.defaultClip = this.animPlayer.clips[4];
            this.animPlayer.play();
            this.scheduleOnce(function () {
              this.pointNode.active = false;
              this.circleNode.active = false;
              this.node.active = false;
            }, 1);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animPlayerArr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animPlayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rigidPlayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "circleNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pointNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "redWall", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "cameraPlayer", [_dec8], {
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
//# sourceMappingURL=0ee1633d9263780a120d73d48cb187b26441f7d3.js.map