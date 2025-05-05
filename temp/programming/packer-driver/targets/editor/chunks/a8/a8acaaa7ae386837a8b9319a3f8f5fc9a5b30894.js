System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, ProgressBar, tween, Constants, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, LoadingController;

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
      ProgressBar = _cc.ProgressBar;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "268b4+DiMRJbouPSlsqbv6U", "LoadingController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'find', 'Node', 'ProgressBar', 'tween']);

      // import GameClient from '@onechaintech/gamesdk-dev';
      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadingController", LoadingController = (_dec = ccclass('LoadingController'), _dec2 = property({
        type: ProgressBar
      }), _dec(_class = (_class2 = (_class3 = class LoadingController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "progressBarLoading", _descriptor, this);

          this.gameClient = void 0;
        }

        async start() {
          // let _this = this;
          // let parameters = find(Constants.GAME_CLIENT);
          // if (parameters === null) {
          //     let parameters = new Node(Constants.GAME_CLIENT);
          //     if (this.gameClient === undefined) {
          //         this.gameClient = new GameClient("65b242e14c61324e3898d071", "51a09d3a-aace-4978-9475-30fc49164df8", window.parent, {dev: true});
          //         await this.gameClient.initAsync()
          //         .then(async (data) => {
          //             //Get current user id
          //             let userID = this.gameClient.user.citizen.getCitizenId();
          //             //Get gamedata from server
          //             await this.gameClient.user.data.getGameData().then((response: any) => {
          //                 //Save data
          //                 if (response.data[`${userID}`] !== undefined) DataUser.dataUser = response.data[`${userID}`];
          //             }).catch(async (e) => {
          //                 console.log('Error at get game data: ', e);
          //             })
          //             let gameClientParams = parameters.addComponent(StoreAPI);
          //             gameClientParams.gameClient = this.gameClient;
          //             director.addPersistRootNode(parameters);
          //         })
          //         .catch((err) => console.log(err));
          //     }
          // }
          let tweenLoadingAnim = tween(this.progressBarLoading).to(1, {
            progress: 1
          });
          tweenLoadingAnim.start();
          this.scheduleOnce(function () {
            director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).MENU_SCENE);
          }, 1);
        }

      }, _class3.volumeMusicValue = 0.7, _class3.volumeSoundValue = 0.7, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBarLoading", [_dec2], {
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
//# sourceMappingURL=a8acaaa7ae386837a8b9319a3f8f5fc9a5b30894.js.map