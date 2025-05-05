System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, Constants;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "877647ksbdDO50789DJRAoL", "Constants", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Constants", Constants = (_dec = ccclass('Constants'), _dec(_class = (_class2 = class Constants extends Component {}, _class2.SPEED_ENEMY = 150, _class2.SPEED_CHASE = 1, _class2.SPEED_BULLET = 350, _class2.DEFAULT_NUMBER_OF_ENEMY = 50, _class2.DEFAULT_NUMBER_OF_BULLET = 50, _class2.DEFAULT_NUMBER_OF_BULLETANIMEXPLODE = 50, _class2.DEFAULT_NUMBER_OF_REWARD = 50, _class2.DISTANCE_MAP = 2132, _class2.GAME_SCENE = "Game", _class2.MENU_SCENE = "Menu", _class2.LOADING_SCENE = "Loading", _class2.GAME_CLIENT = "GameClient", _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b2de4eb44adfb7af5f20a9ee7c702aaee4958e7e.js.map