System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SpikeController;

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
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "391adQOqFdFy78jAmAKCJpb", "SpikeController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'AnimationClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpikeController", SpikeController = (_dec = ccclass('SpikeController'), _dec2 = property({
        type: Animation
      }), _dec(_class = (_class2 = class SpikeController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spikeAnim", _descriptor, this);

          this.isPlayNormal = false;
          this.isPlayReverse = false;
          this.isHasSpike = false;
        }

        start() {}

        update(dt) {
          if (this.isPlayNormal && !this.isPlayReverse) {
            this.isPlayNormal = false;
            this.scheduleOnce(function () {
              this.isPlayReverse = true;
            }, 3);
            this.scheduleOnce(function () {
              this.isHasSpike = true;
            }, 0.53);
            this.spikeAnim.defaultClip = this.spikeAnim.clips[0];
            this.spikeAnim.play();
          } else if (!this.isPlayNormal && this.isPlayReverse) {
            this.isPlayReverse = false;
            this.scheduleOnce(function () {
              this.isPlayNormal = true;
            }, 3);
            this.scheduleOnce(function () {
              this.isHasSpike = false;
            }, 0.53);
            this.spikeAnim.defaultClip = this.spikeAnim.clips[1];
            this.spikeAnim.play();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spikeAnim", [_dec2], {
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
//# sourceMappingURL=18bc6674d2716b6b426200fcf87710657e1edb3c.js.map