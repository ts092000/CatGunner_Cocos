System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, Component, Node, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, MenuModel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0addbaQ0bFCH7qwBADNwA97", "MenuModel", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuModel", MenuModel = (_dec = ccclass('MenuModel'), _dec2 = property({
        type: AudioSource
      }), _dec3 = property({
        type: AudioSource
      }), _dec4 = property({
        type: [AudioClip]
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec(_class = (_class2 = class MenuModel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "musicBg", _descriptor, this);

          _initializerDefineProperty(this, "soundMenu", _descriptor2, this);

          _initializerDefineProperty(this, "soundMenuArr", _descriptor3, this);

          _initializerDefineProperty(this, "musicOnNode", _descriptor4, this);

          _initializerDefineProperty(this, "musicOffNode", _descriptor5, this);

          _initializerDefineProperty(this, "soundOnNode", _descriptor6, this);

          _initializerDefineProperty(this, "soundOffNode", _descriptor7, this);

          _initializerDefineProperty(this, "settingNode", _descriptor8, this);
        }

        get MusicBg() {
          return this.musicBg;
        }

        set MusicBg(musicBg) {
          this.musicBg = musicBg;
        }

        get SoundMenu() {
          return this.soundMenu;
        }

        set SoundMenu(soundMenu) {
          this.soundMenu = soundMenu;
        }

        get SoundMenuArr() {
          return this.soundMenuArr;
        }

        set SoundMenuArr(soundMenuArr) {
          this.soundMenuArr = soundMenuArr;
        }

        get SettingNode() {
          return this.settingNode;
        }

        set SettingNode(settingNode) {
          this.settingNode = settingNode;
        }

        get MusicOnNode() {
          return this.musicOnNode;
        }

        set MusicOnNode(musicOnNode) {
          this.musicOnNode = musicOnNode;
        }

        get MusicOffNode() {
          return this.musicOffNode;
        }

        set MusicOffNode(musicOffNode) {
          this.musicOffNode = musicOffNode;
        }

        get SoundOnNode() {
          return this.soundOnNode;
        }

        set SoundOnNode(soundOnNode) {
          this.soundOnNode = soundOnNode;
        }

        get SoundOffNode() {
          return this.soundOffNode;
        }

        set SoundOffNode(soundOffNode) {
          this.soundOffNode = soundOffNode;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "musicBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "soundMenu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "soundMenuArr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "musicOnNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "musicOffNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "soundOnNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "soundOffNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "settingNode", [_dec9], {
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
//# sourceMappingURL=b51da5e3f41773441dd2c688588a80174e177d29.js.map