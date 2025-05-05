System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Collider2D, Component, RigidBody2D, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BulletEnemyController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      RigidBody2D = _cc.RigidBody2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7cbdc9rliFFZ7WHpqg1ikhx", "BulletEnemyController", undefined);

      __checkObsolete__(['_decorator', 'Collider2D', 'Component', 'Node', 'RigidBody2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletEnemyController", BulletEnemyController = (_dec = ccclass('BulletEnemyController'), _dec2 = property({
        type: Collider2D
      }), _dec3 = property({
        type: RigidBody2D
      }), _dec(_class = (_class2 = class BulletEnemyController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bulletCollider", _descriptor, this);

          _initializerDefineProperty(this, "bulletRb", _descriptor2, this);

          this.speed = 300;
          this.moveLeft = true;
          this.initPosX = void 0;
        }

        start() {}

        update(dt) {
          if (this.moveLeft) {
            this.moveBulletLeft(dt);
          } else {
            this.moveBulletRight(dt);
          }
        }

        moveBulletRight(deltaTime) {
          var posX = this.node.position.x;
          var posY = this.node.position.y;
          posX += this.speed * deltaTime;
          this.node.setPosition(posX, posY, 0.0);
          this.node.setScale(1, 1, 1);
          this.bulletCollider.apply();
        }

        moveBulletLeft(deltaTime) {
          var posX = this.node.position.x;
          var posY = this.node.position.y;
          posX -= this.speed * deltaTime;
          this.node.setPosition(posX, posY, 0.0);
          this.node.setScale(-1, 1, 1);
          this.bulletCollider.apply();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bulletCollider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bulletRb", [_dec3], {
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
//# sourceMappingURL=70e9e0f3ee35853e36c8506b014a25a9d8526d88.js.map