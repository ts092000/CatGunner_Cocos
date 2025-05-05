System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ProgressBar, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, MenuView;

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
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96d117JnehAjpmU+2gXwO8K", "MenuView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuView", MenuView = (_dec = ccclass('MenuView'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: ProgressBar
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Label
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = class MenuView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loadAnimNode", _descriptor, this);

          _initializerDefineProperty(this, "btnNode", _descriptor2, this);

          _initializerDefineProperty(this, "loadAnimProgressBar", _descriptor3, this);

          _initializerDefineProperty(this, "coinLabel", _descriptor4, this);

          _initializerDefineProperty(this, "rewardLabel", _descriptor5, this);

          _initializerDefineProperty(this, "blackNode", _descriptor6, this);
        }

        get LoadAnimNode() {
          return this.loadAnimNode;
        }

        set LoadAnimNode(loadAnimNode) {
          this.loadAnimNode = loadAnimNode;
        }

        get LoadAnimProgressBar() {
          return this.loadAnimProgressBar;
        }

        set LoadAnimProgressBar(loadAnimProgressBar) {
          this.loadAnimProgressBar = loadAnimProgressBar;
        }

        get BlackNode() {
          return this.blackNode;
        }

        set BlackNode(blackNode) {
          this.blackNode = blackNode;
        }

        get CoinLabel() {
          return this.coinLabel;
        }

        set CoinLabel(coinLabel) {
          this.coinLabel = coinLabel;
        }

        get RewardLabel() {
          return this.rewardLabel;
        }

        set RewardLabel(rewardLabel) {
          this.rewardLabel = rewardLabel;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadAnimNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loadAnimProgressBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "coinLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rewardLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "blackNode", [_dec7], {
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
//# sourceMappingURL=a5022a9682d9da6b444e5949f8e605645a7f585a.js.map