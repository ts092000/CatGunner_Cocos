System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, DataUser, _crd, ccclass, property;

  _export("DataUser", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12ae52RDBFI07w/np/Xbg8C", "DataUser", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DataUser", DataUser = class DataUser {});

      DataUser.dataUser = {
        data: {
          highScore: 0,
          scoreCount: 0,
          rewardCount: 0
        }
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=61e574d92c5809a3dc102d62c9d1d41470b75bff.js.map