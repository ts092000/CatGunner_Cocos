System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, Component, Node, Vec2, Vec3, PlayerController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, JoystickController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./PlayerController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      PlayerController = _unresolved_2.PlayerController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3cddfeIfRtEZrPodNUYIFKV", "JoystickController", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Component', 'EventTouch', 'math', 'Node', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JoystickController", JoystickController = (_dec = ccclass('JoystickController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Camera
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = class JoystickController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "stick", _descriptor, this);

          _initializerDefineProperty(this, "cameraGame", _descriptor2, this);

          _initializerDefineProperty(this, "playerNode", _descriptor3, this);

          this.v3 = new Vec3();
          this.startPosMouse = new Vec3();
          this.maxR = 45;
          this.playerControllerComponent = void 0;
        }

        start() {
          // this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          this.playerControllerComponent = this.playerNode.getComponent(_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController) : PlayerController);
        }

        getContainerLocation(event, node) {
          var location = this.cameraGame.screenToWorld(new Vec3(event.getLocation().x, event.getLocation().y, 0));
          node.inverseTransformPoint(this.v3, new Vec3(location.x, location.y));
          return this.v3;
        }

        onTouchStart(event) {
          console.log('start');
          var newPos = this.getContainerLocation(event, this.node);
          var len = Math.sqrt(newPos.x * newPos.x + newPos.y * newPos.y);

          if (len > this.maxR) {
            newPos.x = newPos.x * this.maxR / len;
            newPos.y = newPos.y * this.maxR / len;
          }

          this.stick.setPosition(newPos);
          this.checkDirection();
        }

        onTouchMove(event) {
          var newPos = this.getContainerLocation(event, this.node);
          this.stick.setPosition(newPos);
          var len = Math.sqrt(newPos.x * newPos.x + newPos.y * newPos.y);

          if (len > this.maxR) {
            newPos.x = newPos.x * this.maxR / len;
            newPos.y = newPos.y * this.maxR / len;
          }

          this.stick.setPosition(newPos);
          this.checkDirection();
        }

        onTouchEnd(event) {
          this.stick.position = new Vec3(0, 0);
          this.playerControllerComponent.rigidPlayer.linearVelocity = new Vec2(0, 0);
          this.playerControllerComponent.playIdleMove();
        }

        checkDirection() {
          if (this.stick.position.x <= 22.5 && this.stick.position.x > -22.5 && this.stick.position.y > 0 && this.stick.position.y <= 45) {
            this.playerControllerComponent.rigidPlayer.linearVelocity = new Vec2(this.playerControllerComponent.rigidPlayer.linearVelocity.x, 7.5);
          } else if (this.stick.position.x > 0 && this.stick.position.x <= 45 && this.stick.position.y > -22.5 && this.stick.position.y <= 22.5) {
            this.playerControllerComponent.rigidPlayer.linearVelocity = new Vec2(7.5, this.playerControllerComponent.rigidPlayer.linearVelocity.y);
          } else if (this.stick.position.x <= 22.5 && this.stick.position.x > -22.5 && this.stick.position.y < 0 && this.stick.position.y >= -45) {
            this.playerControllerComponent.rigidPlayer.linearVelocity = new Vec2(this.playerControllerComponent.rigidPlayer.linearVelocity.x, -7.5);
          } else if (this.stick.position.x < 0 && this.stick.position.x >= -45 && this.stick.position.y > -22.5 && this.stick.position.y <= 22.5) {
            this.playerControllerComponent.rigidPlayer.linearVelocity = new Vec2(-7.5, this.playerControllerComponent.rigidPlayer.linearVelocity.y);
          }
        }

        update(dt) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cameraGame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerNode", [_dec4], {
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
//# sourceMappingURL=218605280ec4d7ac6c8e4da7501041f056c9f574.js.map