System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, sp, Animation, Constants, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SplashController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../DataGame/Constants", _context.meta, extras);
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
      director = _cc.director;
      sp = _cc.sp;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d46e6g6edhIbptSPHdEgk9u", "SplashController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'sp', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SplashController", SplashController = (_dec = ccclass('SplashController'), _dec2 = property({
        type: sp.Skeleton
      }), _dec3 = property({
        type: Animation
      }), _dec(_class = (_class2 = class SplashController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "SASpine", _descriptor, this);

          _initializerDefineProperty(this, "SAReveal", _descriptor2, this);
        }

        start() {
          this.SASpine.setCompleteListener(this.onAnimationComplete);
          this.scheduleOnce(function () {
            this.SAReveal.play();
          }, 5.5);
        }

        onAnimationComplete(track) {
          if (track.animation.name === 'Option 1') {
            director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).LOADING_SCENE);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "SASpine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "SAReveal", [_dec3], {
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
//# sourceMappingURL=534fda8b2830442b9783df40ffc55ec42754a3ac.js.map