import { _decorator, Component, Node, NodePool } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PoolObject')
export class PoolObject extends Component {
    private poolBullet: NodePool = new NodePool();

    public get PoolBullet() : NodePool {
        return this.poolBullet
    }
    
    public set PoolBullet(poolBullet : NodePool) {
        this.poolBullet = poolBullet;
    }

    private poolEnemyBullet: NodePool = new NodePool();

    public get PoolEnemyBullet() : NodePool {
        return this.poolEnemyBullet
    }
    
    public set PoolEnemyBullet(poolEnemyBullet : NodePool) {
        this.poolEnemyBullet = poolEnemyBullet;
    }

    private poolBossBullet: NodePool = new NodePool();

    public get PoolBossBullet() : NodePool {
        return this.poolBossBullet
    }
    
    public set PoolBossBullet(poolBossBullet : NodePool) {
        this.poolBossBullet = poolBossBullet;
    }


    private poolBulletExlodeAnim: NodePool = new NodePool();

    public get PoolBulletExlodeAnim() : NodePool {
        return this.poolBulletExlodeAnim
    }
    
    public set PoolBulletExlodeAnim(poolBulletExlodeAnim : NodePool) {
        this.poolBulletExlodeAnim = poolBulletExlodeAnim;
    }

    private poolObstacles: NodePool = new NodePool();

    public get PoolObstacles() : NodePool {
        return this.poolObstacles
    }
    
    public set PoolObstacles(poolObstacles : NodePool) {
        this.poolObstacles = poolObstacles;
    }

    private poolEnemy: NodePool = new NodePool();
    // public listPoolEnemy: NodePool[] = [];

    // public initListEnemy(): void{
    //     while(this.listPoolEnemy.length < 5) {
    //         let el: NodePool = new NodePool();
    //         this.listPoolEnemy.push(el);
    //     }
    // }
    public get PoolEnemy() : NodePool {
        return this.poolEnemy
    }
    
    public set PoolEnemy(poolEnemy : NodePool) {
        this.poolEnemy = poolEnemy;
    }

    private poolBoss: NodePool = new NodePool();
    
    public get PoolBoss() : NodePool {
        return this.poolBoss
    }
    
    public set PoolBoss(poolBoss : NodePool) {
        this.poolBoss = poolBoss;
    }

    private poolEnemyDead: NodePool = new NodePool();

    public get PoolEnemyDead() : NodePool {
        return this.poolEnemyDead
    }
    
    public set PoolEnemyDead(poolEnemyDead : NodePool) {
        this.poolEnemyDead = poolEnemyDead;
    }

    private poolReward: NodePool = new NodePool();

    public get PoolReward() : NodePool {
        return this.poolReward
    }
    
    public set PoolReward(poolReward : NodePool) {
        this.poolReward = poolReward;
    }

    private poolDropBullet: NodePool = new NodePool();

    public get PoolDropBullet() : NodePool {
        return this.poolDropBullet
    }
    
    public set PoolDropBullet(poolDropBullet : NodePool) {
        this.poolDropBullet = poolDropBullet;
    }

    private poolHostage: NodePool = new NodePool();

    public get PoolHostage() : NodePool {
        return this.poolHostage
    }
    
    public set PoolHostage(poolHostage : NodePool) {
        this.poolHostage = poolHostage;
    }

    private poolObstacle: NodePool = new NodePool();

    public get PoolObstacle() : NodePool {
        return this.poolObstacle
    }
    
    public set PoolObstacle(poolObstacle : NodePool) {
        this.poolObstacle = poolObstacle;
    }

    private poolSpike: NodePool = new NodePool();

    public get PoolSpike() : NodePool {
        return this.poolSpike
    }
    
    public set PoolSpike(poolSpike : NodePool) {
        this.poolSpike = poolSpike;
    }
}


