System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, tween, MenuModel, MenuView, Constants, LoadingController, DataUser, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MenuController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMenuModel(extras) {
    _reporterNs.report("MenuModel", "./MenuModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMenuView(extras) {
    _reporterNs.report("MenuView", "./MenuView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../DataGame/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingController(extras) {
    _reporterNs.report("LoadingController", "../Loading/LoadingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataUser(extras) {
    _reporterNs.report("DataUser", "../GameCenter/DataUser", _context.meta, extras);
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
      tween = _cc.tween;
    }, function (_unresolved_2) {
      MenuModel = _unresolved_2.MenuModel;
    }, function (_unresolved_3) {
      MenuView = _unresolved_3.MenuView;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      LoadingController = _unresolved_5.LoadingController;
    }, function (_unresolved_6) {
      DataUser = _unresolved_6.DataUser;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "400f3QtrgZKu5vkjJASJFCg", "MenuController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'find', 'Node', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuController", MenuController = (_dec = ccclass('MenuController'), _dec2 = property({
        type: _crd && MenuModel === void 0 ? (_reportPossibleCrUseOfMenuModel({
          error: Error()
        }), MenuModel) : MenuModel
      }), _dec3 = property({
        type: _crd && MenuView === void 0 ? (_reportPossibleCrUseOfMenuView({
          error: Error()
        }), MenuView) : MenuView
      }), _dec(_class = (_class2 = class MenuController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "MenuModel", _descriptor, this);

          _initializerDefineProperty(this, "MenuView", _descriptor2, this);

          this.gameClient = void 0;
          this.matchData = void 0;
          this.userId = void 0;
        }

        start() {
          if ((_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).volumeMusicValue === 0.7) {
            this.MenuModel.MusicBg.volume = 0.7;
            this.MenuModel.MusicOnNode.active = false;
            this.MenuModel.MusicOffNode.active = true;
          } else {
            this.MenuModel.MusicBg.volume = 0;
            this.MenuModel.MusicOnNode.active = true;
            this.MenuModel.MusicOffNode.active = false;
          }

          if ((_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).volumeSoundValue === 0.7) {
            this.MenuModel.SoundOnNode.active = false;
            this.MenuModel.SoundOffNode.active = true;
            this.MenuModel.SoundMenu.volume = 0.7;
          } else {
            this.MenuModel.SoundOnNode.active = true;
            this.MenuModel.SoundOffNode.active = false;
            this.MenuModel.SoundMenu.volume = 0;
          }

          this.MenuModel.MusicBg.play();
          this.MenuView.CoinLabel.string = "" + (_crd && DataUser === void 0 ? (_reportPossibleCrUseOfDataUser({
            error: Error()
          }), DataUser) : DataUser).dataUser.data.scoreCount;
          this.MenuView.RewardLabel.string = "" + (_crd && DataUser === void 0 ? (_reportPossibleCrUseOfDataUser({
            error: Error()
          }), DataUser) : DataUser).dataUser.data.rewardCount;
        }

        update(dt) {}

        playGame() {
          this.MenuModel.SoundMenu.clip = this.MenuModel.SoundMenuArr[0];
          this.MenuModel.SoundMenu.play();
          this.MenuView.LoadAnimNode.active = true;
          var tweenLoadingAnim = tween(this.MenuView.LoadAnimProgressBar).to(1.5, {
            progress: 1
          });
          tweenLoadingAnim.start();
          this.scheduleOnce(function () {
            director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).GAME_SCENE);
          }, 1.5);
        }

        musicOff() {
          this.MenuModel.MusicOnNode.active = true;
          this.MenuModel.MusicOffNode.active = false;
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).volumeMusicValue = this.MenuModel.MusicBg.volume = 0;
        }

        musicOn() {
          this.MenuModel.MusicOnNode.active = false;
          this.MenuModel.MusicOffNode.active = true;
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).volumeMusicValue = this.MenuModel.MusicBg.volume = 0.7;
          this.MenuModel.SoundMenu.clip = this.MenuModel.SoundMenuArr[0];
          this.MenuModel.SoundMenu.play();
        }

        soundOff() {
          this.MenuModel.SoundOnNode.active = true;
          this.MenuModel.SoundOffNode.active = false;
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).volumeSoundValue = this.MenuModel.SoundMenu.volume = 0;
        }

        souncOn() {
          this.MenuModel.SoundOnNode.active = false;
          this.MenuModel.SoundOffNode.active = true;
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).volumeSoundValue = this.MenuModel.SoundMenu.volume = 0.7;
          this.MenuModel.SoundMenu.clip = this.MenuModel.SoundMenuArr[0];
          this.MenuModel.SoundMenu.play();
        }

        openSetting() {
          this.MenuView.BlackNode.active = true;
          this.MenuModel.SoundMenu.clip = this.MenuModel.SoundMenuArr[0];
          this.MenuModel.SoundMenu.play();
          this.MenuModel.SettingNode.active = true;
        }

        closeSetting() {
          this.MenuView.BlackNode.active = false;
          this.MenuModel.SoundMenu.clip = this.MenuModel.SoundMenuArr[0];
          this.MenuModel.SoundMenu.play();
          this.MenuModel.SettingNode.active = false;
        } // private async completeGame(): Promise<void> {
        //     await this.gameClient.match
        //         .completeMatch(this.matchData, { score: this.score})
        //         .then(async (data) => {
        //             if (this.score > DataUser.dataUser.data.highScore) {
        //                 DataUser.dataUser.data.highScore = this.score;
        //                 this.GameView.HighScoreLabel.string = DataUser.dataUser.data.highScore.toString();
        //             } else {
        //                 this.GameView.HighScoreLabel.string = DataUser.dataUser.data.highScore.toString();
        //             }
        //             await this.gameClient.user.data.setGameData({ [this.userId]: DataUser.dataUser }, false).then((response: any) => { 
        //             })
        //             .catch((e) => { console.log("Error at set game data", e); })
        //         })
        //         .catch((error) => console.log(error));
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "MenuModel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "MenuView", [_dec3], {
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
//# sourceMappingURL=df1d29b32d973c41fb08ebafeafb78607eee5c30.js.map