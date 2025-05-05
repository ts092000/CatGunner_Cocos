System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, NodePool, _dec, _class, _crd, ccclass, property, PoolObject;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      NodePool = _cc.NodePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd6cf6oXxJEwqo/eJVR/8zy", "PoolObject", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'NodePool']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PoolObject", PoolObject = (_dec = ccclass('PoolObject'), _dec(_class = class PoolObject extends Component {
        constructor() {
          super(...arguments);
          this.poolBullet = new NodePool();
          this.poolEnemyBullet = new NodePool();
          this.poolBossBullet = new NodePool();
          this.poolBulletExlodeAnim = new NodePool();
          this.poolObstacles = new NodePool();
          this.poolEnemy = new NodePool();
          this.poolBoss = new NodePool();
          this.poolEnemyDead = new NodePool();
          this.poolReward = new NodePool();
          this.poolDropBullet = new NodePool();
          this.poolHostage = new NodePool();
          this.poolObstacle = new NodePool();
          this.poolSpike = new NodePool();
        }

        get PoolBullet() {
          return this.poolBullet;
        }

        set PoolBullet(poolBullet) {
          this.poolBullet = poolBullet;
        }

        get PoolEnemyBullet() {
          return this.poolEnemyBullet;
        }

        set PoolEnemyBullet(poolEnemyBullet) {
          this.poolEnemyBullet = poolEnemyBullet;
        }

        get PoolBossBullet() {
          return this.poolBossBullet;
        }

        set PoolBossBullet(poolBossBullet) {
          this.poolBossBullet = poolBossBullet;
        }

        get PoolBulletExlodeAnim() {
          return this.poolBulletExlodeAnim;
        }

        set PoolBulletExlodeAnim(poolBulletExlodeAnim) {
          this.poolBulletExlodeAnim = poolBulletExlodeAnim;
        }

        get PoolObstacles() {
          return this.poolObstacles;
        }

        set PoolObstacles(poolObstacles) {
          this.poolObstacles = poolObstacles;
        }

        // public listPoolEnemy: NodePool[] = [];
        // public initListEnemy(): void{
        //     while(this.listPoolEnemy.length < 5) {
        //         let el: NodePool = new NodePool();
        //         this.listPoolEnemy.push(el);
        //     }
        // }
        get PoolEnemy() {
          return this.poolEnemy;
        }

        set PoolEnemy(poolEnemy) {
          this.poolEnemy = poolEnemy;
        }

        get PoolBoss() {
          return this.poolBoss;
        }

        set PoolBoss(poolBoss) {
          this.poolBoss = poolBoss;
        }

        get PoolEnemyDead() {
          return this.poolEnemyDead;
        }

        set PoolEnemyDead(poolEnemyDead) {
          this.poolEnemyDead = poolEnemyDead;
        }

        get PoolReward() {
          return this.poolReward;
        }

        set PoolReward(poolReward) {
          this.poolReward = poolReward;
        }

        get PoolDropBullet() {
          return this.poolDropBullet;
        }

        set PoolDropBullet(poolDropBullet) {
          this.poolDropBullet = poolDropBullet;
        }

        get PoolHostage() {
          return this.poolHostage;
        }

        set PoolHostage(poolHostage) {
          this.poolHostage = poolHostage;
        }

        get PoolObstacle() {
          return this.poolObstacle;
        }

        set PoolObstacle(poolObstacle) {
          this.poolObstacle = poolObstacle;
        }

        get PoolSpike() {
          return this.poolSpike;
        }

        set PoolSpike(poolSpike) {
          this.poolSpike = poolSpike;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=813a5ca41730cdde46aebafae3f3c82890e1111d.js.map