import { _decorator, Component, Game, instantiate, Node, randomRange, tween, Vec3, misc, Vec2, EventKeyboard, KeyCode, input, Input, Collider2D, IPhysics2DContact, Contact2DType, RigidBody2D, Animation, UIOpacity, director, randomRangeInt, Sprite, UITransform, EventTouch, sys, BoxCollider2D, find, Color, Button } from 'cc';
import { GameModel } from './GameModel';
import { GameView } from './GameView';
import { PoolObject } from './PoolObject';
import { Constants } from '../DataGame/Constants';
import { EnemyController } from './EnemyController';
import { BulletController } from './BulletController';
import { PlayerController } from './PlayerController';
import { LoadingController } from '../Loading/LoadingController';
import { BulletEnemyController } from './BulletEnemyController';
import { BossController } from './BossController';
import { BulletBossController } from './BulletBossController';
import { HostageController } from './HostageController';
import { StoreAPI } from '../GameCenter/StoreAPI';
import { DataUser } from '../GameCenter/DataUser';
import { ObstacleController } from './ObstacleController';
import { SpikeController } from './SpikeController';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property({ type: GameModel })
    private GameModel: GameModel;

    @property({ type: GameView })
    private GameView: GameView;

    @property({ type: PoolObject })
    private PoolObject: PoolObject;

    @property({ type: PlayerController })
    private playerControllerComponent: PlayerController;

    public movement: Vec3;
    public directionX: number;
    public directionY: number;
    public dt: number;
    public shootSchedule: any;
    public isShootBullet: boolean = false;
    public holdShootBullet: boolean = false;
    public currentHp: number;
    public isPressDash: boolean = true;
    public isDash: boolean = false;
    public isPressPowerUp: boolean = true;
    public isPressHeal: boolean = true;
    public scoreCurrent: number = 0;
    public scoreTotal: number;
    public rewardCount: number = 0;
    public countEnemyEachTurn: number = randomRangeInt(15, 20);
    public countBoss: number = 0;
    public extraEnemy: number = 0;
    public extraEnemyHp: number = 0;
    public countWave: number = 0;
    public totalBulletCount: number = 20;
    public initTotalBullet: number = 20;
    public isOver: boolean = false;
    public isReload: boolean = false;
    public levelCount: number = 1;
    public isWarningLowHealth: boolean = true;
    public timeNum: number = 5;
    public callBackSchedule: any;
    public playerDameInit: number;
    public isTouchBtnShooting: boolean = false;
    public isPressShooting: boolean = false;
    public isStopSchedule: boolean = true;

    public isHostageDone: boolean = true;

    public isOpenDoor: boolean = false;

    private isGoNextWave: boolean = false;

    private countHeal: number = 2;
    private countPlusDame: number = 2;

    public initPLayerPosX: number;
    public isMoveBG: boolean = false;
    public speedBulletInit: number = 300;

    public gameClient: any;
    public matchData: any;
    public userId: string;
    public initNotiY: number;

    public isHitBySpike: boolean = false;

    public isTakeDameBySpike: boolean = false;

    public levelBooster1: number = 1;
    public levelBooster2: number = 1;
    public levelBooster3: number = 1;
    public levelBooster4: number = 1;
    public levelBooster5: number = 1;

    public priceBooster1: number = 10;
    public priceBooster2: number = 10;
    public priceBooster3: number = 10;
    public priceBooster4: number = 10;
    public priceBooster5: number = 10;

    protected start(): void {
        // let parameters = find(Constants.GAME_CLIENT);
        // let gameClientParams = parameters.getComponent(StoreAPI);
        // this.gameClient = gameClientParams.gameClient;
        if (LoadingController.volumeMusicValue === 0.7) {
            this.GameModel.MusicBg.volume = 0.7;
            this.GameModel.MusicOnNode.active = false;
            this.GameModel.MusicOffNode.active = true;
        }
        else {
            this.GameModel.MusicBg.volume = 0;
            this.GameModel.MusicOnNode.active = true;
            this.GameModel.MusicOffNode.active = false;
        }

        if (LoadingController.volumeSoundValue === 0.7) {
            this.GameModel.SoundOnNode.active = false;
            this.GameModel.SoundOffNode.active = true;
            this.GameModel.SoundGame.volume = 0.7;
        }
        else {
            this.GameModel.SoundOnNode.active = true;
            this.GameModel.SoundOffNode.active = false;
            this.GameModel.SoundGame.volume = 0;
        }

        if (sys.isMobile) {
            this.GameModel.JoystickNode.active = true;
        }
        else {
            this.GameModel.JoystickNode.active = false;
        }

        // this.GameView.BackgroundSprite1.spriteFrame = this.GameView.BackgroundSprite2.spriteFrame = this.GameView.BackgroundMap[randomRangeInt(0, 4)]

        this.GameView.SpawnPlayerEffectNode.active = true;
        this.GameView.SpawnPlayerEffectAnimation.play();
        this.GameView.BulletCountLabel.string = this.totalBulletCount.toString();
        this.GameView.HealLabelCount.string = `${this.countHeal}`;
        this.GameView.PlusDameLabelCount.string = `${this.countPlusDame}`;
        
        this.scheduleOnce(function () {
            // this.initGame();
            this.GameModel.DoorAnim.defaultClip = this.GameModel.DoorAnim.clips[0];
            this.GameModel.DoorAnim.play();
            this.GameView.WaveCountNode.active = true;
            for (let i = 0; i < 5; i++) {
                this.GameView.WaveCountLabel[i].string = 'Wave ' + `${this.countWave + 1}`;
            }
            
            this.initNotiY = this.GameModel.NotiLabel.node.position.y;
            // let spike: Node = new Node();
            // spike = this.instantiateSpike(spike);

            // let hostage: Node = new Node();
            // hostage = this.instantiateHostage(hostage);

            // let obstacle: Node = new Node();
            // obstacle = this.instantiateObstacle(obstacle);
        
            this.GameView.SpawnPlayerEffectNode.active = false;
            this.initPLayerPosX = -300;
            this.GameModel.PlayerNode.active = this.GameModel.CircleNode.active = this.GameModel.PointNode.active = true;

            let collider = this.GameModel.PlayerCollider;
            if (collider) {
                collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContactPlayer, this);
            }
            this.tweenArrowDirecion();
            let enemyNode: Node;
            this.schedule(function () {
                this.instantiateEnemy(enemyNode, randomRangeInt(0, 3));
            }, 1, this.countEnemyEachTurn - 1, 0);
            input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
            
            this.playerDameInit = this.playerControllerComponent.dame;
            console.log(this.playerDameInit);
            this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_START, this.onTouchStartShootBtn, this);
            this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_END, this.onTouchEndShootBtn, this);
            this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_CANCEL, this.onTouchEndShootBtn, this);
        }, 0.25)

        let randomNumb = randomRangeInt(0, 2);
        this.GameModel.MusicBg.clip = this.GameModel.MusicBgArr[randomNumb];
        this.GameModel.MusicBg.play();
        this.GameView.HpLabelCurrent.string = this.GameView.HpLabelMax.string = this.GameView.HpMax.toString();
        this.GameView.ScoreLabel.string = this.scoreCurrent.toString();
        this.GameView.RewardCountLabel.string = this.rewardCount.toString();
        this.GameModel.PlayerNode.getComponent(PlayerController).currentPLayerHp = this.GameView.HpMax;

    }

    protected update(dt: number): void {
        this.GameModel.BossContainer.children.map((boss) => {
            let bossPos = boss.getPosition();
            let bossNodeController = boss.getComponent(BossController);
            let playerNodeController = this.GameModel.PlayerNode.getComponent(PlayerController);
            let directionX = this.GameModel.PlayerNode.position.x - bossPos.x;
            let directionY = this.GameModel.PlayerNode.position.y - bossPos.y;
            if (directionX > 0) {
                boss.scale = new Vec3(-1, 1, 1);
                this.GameModel.PlayerNode.scale = new Vec3(-1, 1, 1)
            }
            else {
                boss.scale = new Vec3(1, 1, 1);
                this.GameModel.PlayerNode.scale = new Vec3(1, 1, 1)
            }
            this.movement = new Vec3(directionX, directionY, 0);
            this.checkBossAction(boss, this.movement, dt);
        })

        if (this.GameModel.EnemyContainerNode.children.length === 0 && this.GameModel.BossContainer.children.length === 0) {
            this.GameModel.PlayerNode.scale = new Vec3(1, 1, 1)
        }

        this.GameModel.EnemyContainerNode.children.map((enemy) => {
            let enemyNeareast: Node = new Node();
            enemyNeareast = this.findNearestEnemy();
            let enemyPos = enemy.getPosition();
            let enemyNodeController = enemy.getComponent(EnemyController);
            let playerNodeController = this.GameModel.PlayerNode.getComponent(PlayerController);
            let directionXNeareast = this.GameModel.PlayerNode.position.x - enemyNeareast.position.x;
            let directionX = this.GameModel.PlayerNode.position.x - enemyPos.x;
            let directionY = this.GameModel.PlayerNode.position.y - enemyPos.y;

            if (directionXNeareast > 0) {
                this.GameModel.PlayerNode.scale = new Vec3(-1, 1, 1)
            }
            else {
                this.GameModel.PlayerNode.scale = new Vec3(1, 1, 1)
            }

            if (directionX > 0) {
                enemy.scale = new Vec3(-1, 1, 1);
            } else {
                enemy.scale = new Vec3(1, 1, 1);
            }
            enemyNodeController.enemyNodeLevelLabel.scale = enemy.scale;
            this.movement = new Vec3(directionX, directionY, 0);
            if (enemyNodeController.canShoot) {
                this.moveEnemyCanShoot(enemy, this.movement, dt);
                if (directionX <= 270 && directionX >= -270 && directionY <= 20 && directionY >= -20 && !this.isOver && enemyNodeController.isShooting && enemyNodeController.isReadyShoot) {
                    this.playSoundGame(10);
                    let bulletEnemyNode: Node = new Node();
                    bulletEnemyNode = this.instantiateEnemyBullet(bulletEnemyNode, enemyPos.x, enemyPos.y, enemy);
                    enemyNodeController.isShooting = false;
                    enemyNodeController.animEnemyNode[1].active = true;
                    enemyNodeController.animEnemyNode[0].active = false;
                    enemyNodeController.animEnemyArr[1].play();

                    this.scheduleOnce(function () {
                        enemyNodeController.isShooting = true;
                    }, 1)
                }
                else if ((directionX > 270 && enemyNodeController.isOutShooting) ||
                    (directionX < -270 && enemyNodeController.isOutShooting) ||
                    (directionY < -20 && enemyNodeController.isOutShooting) ||
                    (directionY > 20 && enemyNodeController.isOutShooting)) {
                    enemyNodeController.isOutShooting = false;
                    enemyNodeController.animEnemyNode[0].active = true;
                    enemyNodeController.animEnemyNode[1].active = false;
                    enemyNodeController.animEnemyArr[0].play();

                    this.scheduleOnce(function () {
                        enemyNodeController.isOutShooting = true;
                    }, 0.55)
                }
            }
            else {
                this.moveEnemyToPlayer(enemy, this.movement, dt);
                if (directionX >= -40 && directionX <= 40 && directionY >= -40 && directionY <= 40 && enemyNodeController.hit && enemyNodeController.isReady && !this.isOver && !this.isDash) {
                    enemyNodeController.hit = false;
                    enemyNodeController.animEnemyNode[1].active = true;
                    enemyNodeController.animEnemyNode[0].active = false;
                    enemyNodeController.animEnemyArr[1].play();

                    if (playerNodeController.currentPLayerHp > 0) {
                        this.playerTakeDame(2, playerNodeController);
                        if (playerNodeController.currentPLayerHp <= 0) {
                            this.isOver = true;
                            enemyNodeController.animEnemyNode[0].active = true;
                            enemyNodeController.animEnemyNode[1].active = false;
                            enemyNodeController.animEnemyArr[0].play();
                            this.gameOverAction();
                        }
                    }

                    else {
                        this.GameModel.BulletContainerNode.active = false;
                        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
                        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
                    }

                    this.scheduleOnce(function () {
                        enemyNodeController.hit = true;
                    }, 0.5)
                }
                else if ((directionX > 40 && enemyNodeController.outHit) ||
                    (directionX < -40 && enemyNodeController.outHit) ||
                    (directionY < -40 && enemyNodeController.outHit) ||
                    (directionY > 40 && enemyNodeController.outHit)) {
                    enemyNodeController.outHit = false;
                    enemyNodeController.animEnemyNode[0].active = true;
                    enemyNodeController.animEnemyNode[1].active = false;
                    enemyNodeController.animEnemyArr[0].play();

                    this.scheduleOnce(function () {
                        enemyNodeController.outHit = true;
                    }, 0.55)
                }
            }

        })

        this.GameModel.BulletContainerNode.children.map((bullet) => {
            if (bullet.position.x - bullet.getComponent(BulletController).initPosX > 200 || bullet.position.x - bullet.getComponent(BulletController).initPosX < -200) {
                this.putBulletIntoPool(bullet);
            }
        })

        this.GameModel.BulletEnemyContainerNode.children.map((bullet) => {
            if (bullet.position.x - bullet.getComponent(BulletEnemyController).initPosX > 350 || bullet.position.x - bullet.getComponent(BulletEnemyController).initPosX < -350) {
                this.putBulletEnemyIntoPool(bullet);
            }
        })

        if (this.holdShootBullet === true && !this.isReload && !this.isOver) {
            this.shootBulletAction();
        }
        else if (!this.holdShootBullet || this.isReload || this.isOver) {
            this.unschedule(this.shootSchedule);
        }

        this.checkHostage();
        this.checkSpike();
        if (this.countEnemyEachTurn === 0 && this.countBoss === 0 && !this.isOpenDoor && this.isHostageDone) {
            // this.tweenArrowDirecion();
            this.isOpenDoor = true;
            this.GameModel.DoorAnim.defaultClip = this.GameModel.DoorAnim.clips[1];
            this.GameModel.DoorAnim.play();
            this.scheduleOnce(function(){
                this.GameModel.DoorCollider.enabled = false;
            }, 0.6)
        }

        if (this.GameModel.PlayerNode.position.x >= 1785 && !this.isGoNextWave) {
            this.isGoNextWave = true;
            this.GameModel.PlayerNode.position = new Vec3(-300, -50, 1000);
            this.GameModel.PlayerNode.active = false;
            this.appearBoosterNode();
        }
    }

    private findNearestEnemy(): Node | null {
        let nearestEnemy = null;
        let minDistance = Number.MAX_VALUE;

        for (const enemy of this.GameModel.EnemyContainerNode.children) {
            // if (this.GameModel.EnemyContainerNode.children.length === 0) return;
            // if (enemy.position.x > 350 ||  enemy.position.x < -350) continue;
            let sub = this.GameModel.PlayerNode.position.clone().subtract(enemy.position);
            const distance = sub.length();
            if (distance < minDistance) {
                minDistance = distance;
                nearestEnemy = enemy;
            }
        }

        return nearestEnemy;
    }

    private getEnemyFromPool(): Node {
        let element = this.PoolObject.PoolEnemy.size() > 0 ? this.PoolObject.PoolEnemy.get() : instantiate(this.GameModel.EnemyPrefab);
        let elementNode = element.getComponent(EnemyController);
        elementNode.rigidEnemy.enabledContactListener = true;
        elementNode.colliderEnemy.enabled = true;
        elementNode.speed = 0;
        elementNode.speedChase = randomRange(0.5, 1.5);
        elementNode.dead = false;
        elementNode.animEnemyNode[0].active = true;
        elementNode.animEnemyNode[1].active = false;
        let collider = elementNode.colliderEnemy;
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
        return element;
    }

    private putEnemyIntoPool(enemy: Node): void {
        let enemyControllerComponent = enemy.getComponent(EnemyController);
        this.countEnemyEachTurn--;
        enemyControllerComponent.rigidEnemy.enabledContactListener = false;
        enemyControllerComponent.colliderEnemy.enabled = false;
        this.PoolObject.PoolEnemy.put(enemy);
    }

    private getBossFromPool(): Node {
        let element = this.PoolObject.PoolBoss.size() > 0 ? this.PoolObject.PoolBoss.get() : instantiate(this.GameModel.BossPrefab);
        return element;
    }

    private putBossIntoPool(boss: Node): void {
        this.PoolObject.PoolBoss.put(boss);
    }

    private getHostageFromPool(): Node {
        let element = this.PoolObject.PoolHostage.size() > 0 ? this.PoolObject.PoolHostage.get() : instantiate(this.GameModel.HostagePrefab);
        return element;
    }

    private putHostageIntoPool(hostage: Node): void {
        this.PoolObject.PoolHostage.put(hostage);
    }

    public instantiateHostage(node: Node): Node {
        node = this.getHostageFromPool();
        node.position = new Vec3(randomRangeInt(this.GameView.RedWall.position.x + 800, this.GameView.RedWall.position.x + 1300), (randomRangeInt(-100, 0)));
        node.parent = this.GameModel.HostageContainer;
        let hostageComponent = node.getComponent(HostageController);
        hostageComponent.unActiveLoading();
        hostageComponent.playAnimVictim(0);
        hostageComponent.changePopupSprite(2);
        hostageComponent.changeCageSf(1);
        hostageComponent.isStand = false;
        hostageComponent.isDone = false;
        hostageComponent.isDoneChecked = false;
        this.isHostageDone = false;
        let collider = hostageComponent.cageCollider;
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContactCage, this);
        }
        for (let i = 0; i < 3; i++) {
            hostageComponent.playAnim(i);
        }

        return node;
    }

    public checkHostage(): void {
        this.GameModel.HostageContainer.children.map((hostage) => {
            let hostagePos = hostage.getPosition();
            let playerNodeController = this.GameModel.PlayerNode.getComponent(PlayerController);
            let hostageNodeController = hostage.getComponent(HostageController);
            let directionX = this.GameModel.PlayerNode.position.x - hostagePos.x;
            let directionY = this.GameModel.PlayerNode.position.y - hostagePos.y;
            if (directionX <= 80 && directionX >= -80 && directionY <= 25 && directionY >= -25 && !hostageNodeController.isStand && !hostageNodeController.isDone && !hostageNodeController.isDoneChecked) {
                this.playSoundGame(14);
                hostageNodeController.isStand = true;
                hostageNodeController.playLoadingAnim();
                hostageNodeController.changePopupSprite(0);
                hostageNodeController.checkDone();

            } else if ((directionX > 80 || directionX < -80 || directionY > 25 || directionY < -25) && hostageNodeController.isStand && !hostageNodeController.isDone && !hostageNodeController.isDoneChecked) {
                hostageNodeController.isStand = false;
                hostageNodeController.unActiveLoading();
                hostageNodeController.changePopupSprite(2);
            }

            if (hostageNodeController.isDone) {
                hostageNodeController.isDone = false;
                this.isHostageDone = true;
                this.playSoundGame(randomRangeInt(15, 17));
                this.rewardCount += 10;
                this.GameView.RewardCountLabel.string = this.rewardCount.toString();
                this.scoreCurrent += 10;
                this.GameView.ScoreLabel.string = this.scoreCurrent.toString();
            }
        })
    }

    private checkSpike(): void {
        this.GameModel.SpikeContainer.children.map((spike) => {
            let spikePos = spike.getPosition();
            let playerNodeController = this.GameModel.PlayerNode.getComponent(PlayerController);
            let directionX = this.GameModel.PlayerNode.position.x - spikePos.x;
            let directionY = this.GameModel.PlayerNode.position.y - spikePos.y - 20;
            if (directionX <= 30 && directionX >= -30 && directionY <= 15 && directionY >= -15 
                && spike.children[0].getComponent(SpikeController).isHasSpike && !this.isHitBySpike && !this.isOver) {
                    this.isHitBySpike = true;
                    if (playerNodeController.currentPLayerHp > 0) {
                        this.playerTakeDame(2, playerNodeController);
                        this.playSoundGame(2);
                    }

                    else {
                        this.isOver = true;
                        this.gameOverAction();
                        this.GameModel.BulletContainerNode.active = false;
                        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
                        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
                    }
                    this.scheduleOnce(function(){
                        this.isHitBySpike = false
                    }, 1)
                }
        })
    }

    private getObstacleFromPool(): Node {
        let element = this.PoolObject.PoolObstacle.size() > 0 ? this.PoolObject.PoolObstacle.get() : instantiate(this.GameModel.ObstaclePrefab);
        return element;
    }

    private putObstacleIntoPool(obstacle: Node): void {
        this.PoolObject.PoolObstacle.put(obstacle);
    }

    public instantiateObstacle(node: Node): Node {
        let rand = randomRangeInt(this.GameView.RedWall.position.x + 800, this.GameView.RedWall.position.x + 1500)
        for (let i = 0; i < randomRangeInt(2, 5); i++) {
            let ranndomNumb = randomRangeInt(0, 2);
            node = this.getObstacleFromPool();
            if (ranndomNumb === 0) {
                node.position = new Vec3(rand + i * randomRange(120, 180), randomRangeInt(-150, -170));
            } else {
                node.position = new Vec3(rand + i * randomRange(120, 180), randomRangeInt(30, 50));
            }
            node.parent = this.GameModel.ObstacleContainer;
            let obstacleComponent = node.getComponent(ObstacleController);
            let collider = obstacleComponent.obstacleCollider;
            if (collider) {
                collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContactObstacle, this);
            }
        }

        return node;
    }

    public instantiateEnemy(node: Node, type: number): void {
        if (type === 6) {
            node = this.getEnemyFromPool();
            this.spawnEnemy(node, type, true);
        }
        else if (type === 7) {
            node = this.getEnemyFromPool();
            this.spawnEnemy(node, type, true);
        }
        else {
            node = this.getEnemyFromPool();
            this.spawnEnemy(node, type, false);
        }
    }

    private spawnEnemy(node: Node, type: number, canShoot: boolean): void {
        let nodeEnemy = node.getComponent(EnemyController);
        let nodeUITransformY = node.getComponent(UITransform).contentSize.y;
        node.position = new Vec3(randomRange(150, 1500), randomRange(-150, 50));
        node.parent = this.GameModel.EnemyContainerNode;
        nodeEnemy.canShoot = canShoot;
        this.spawningEnemyAction(node, nodeEnemy);
        this.typeOfEnemy(nodeEnemy, type, nodeUITransformY);
    }

    private getSpikeFromPool(): Node {
        let element = this.PoolObject.PoolSpike.size() > 0 ? this.PoolObject.PoolSpike.get() : instantiate(this.GameModel.SpikePrefab);
        return element;
    }

    private putSpikeIntoPool(spike: Node): void {
        this.PoolObject.PoolSpike.put(spike);
    }

    private instantiateSpike(node: Node): Node {
        let initPosX = randomRange(500, 1000);
        let randomNumb = randomRangeInt(2, 5);
        // let initPosX = 50;
        let initX = initPosX
        let initY = randomRange(-50, 0)
        for (let i = 0; i < randomNumb; i++) {
            initX = initPosX + 13.75 * i;
            for (let j = 0; j < 2; j++) {
                node = this.getSpikeFromPool();
                let spikeNode = node.children[0].getComponent(SpikeController);
                node.parent = this.GameModel.SpikeContainer;
                // this.GameModel.SpikeContainer.insertChild(node, 0)
                node.position = new Vec3(initX , initY);
                initX += 42.5;
                this.scheduleOnce(function(){
                    spikeNode.isPlayNormal = true;
                }, 5)
                spikeNode.isHasSpike = false;
                spikeNode.isPlayReverse = false;
            }
            initY -= 15;
        }
        return node;
    }

    public instantiateBullet(node: Node): Node {
        node = new Node();
        node = this.getBulletFromPool();
        node.position = new Vec3(this.GameModel.PlayerNode.position.x + 10, this.GameModel.PlayerNode.position.y);
        node.parent = this.GameModel.BulletContainerNode;
        let nodeBullet = node.getComponent(BulletController);
        let dropBullet: Node;
        if (this.GameModel.PlayerNode.scale.x === 1) {
            nodeBullet.moveRight = true;
            let tweenShoot = tween(this.GameModel.PlayerNode).to(0.05,
                { position: new Vec3(this.GameModel.PlayerNode.position.x - 10, this.GameModel.PlayerNode.position.y, this.GameModel.PlayerNode.position.z) }, {
                easing: "linear"
            })
            tweenShoot.start();
            dropBullet = this.instantiateDropBullet(dropBullet, -randomRange(2, 4))
        }
        else {
            nodeBullet.moveRight = false;
            let tweenShoot = tween(this.GameModel.PlayerNode).to(0.05,
                { position: new Vec3(this.GameModel.PlayerNode.position.x + 10, this.GameModel.PlayerNode.position.y, this.GameModel.PlayerNode.position.z) }, {
                easing: "linear"
            })
            tweenShoot.start();
            dropBullet = this.instantiateDropBullet(dropBullet, randomRange(2, 4));
        }

        
        nodeBullet.speed = this.speedBulletInit;
        nodeBullet.initPosX = node.position.x;
        nodeBullet.type = this.playerDameInit;
        if (nodeBullet.type > 5) {
            nodeBullet.type = 5
        }
        nodeBullet.bulletAnim.defaultClip = nodeBullet.bulletAnim.clips[nodeBullet.type - 1];
        nodeBullet.bulletAnim.play()
        // switch (this.playerDameInit) {
        //     case 1:
                
        //         break;
        
        //     default:
        //         break;
        // }
        this.totalBulletCount -= 2;
        this.GameView.BulletCountLabel.string = this.totalBulletCount.toString();
        if (this.totalBulletCount === 0) {
            this.isPressShooting = false;
            this.isTouchBtnShooting = false;
            this.isReload = true;
            this.playSoundGame(8)
            this.GameModel.ReloadAnimNode.active = true;
            this.GameModel.ReloadAnim.play();
            this.scheduleOnce(function () {
                this.totalBulletCount = this.initTotalBullet;
                this.GameView.BulletCountLabel.string = this.totalBulletCount.toString();
                this.GameModel.ReloadAnimNode.active = false;
                this.isReload = false;
            }, 1.5)
        }
        this.scheduleOnce(function () {
            this.putDropBulletIntoPool(dropBullet);
        }, 1.25)
        return node
    }

    public instantiateBossBullet(node: Node, bulletPosX: number, bulletPosY: number): Node {
        node = this.getBulletBossFromPool();
        node.position = new Vec3(bulletPosX, bulletPosY + 10);
        node.parent = this.GameModel.BulletBossContainer;
        let nodeBullet = node.getComponent(BulletBossController);
        nodeBullet.bulletBossSprite.spriteFrame = nodeBullet.bulletBossSF;
        return node;
    }

    private shootBulletAction(): void {
        if ((!this.isReload && !this.isPressShooting) || (!this.isReload && !this.isTouchBtnShooting)) {
            this.isPressShooting = true;
            this.isTouchBtnShooting = true;
            this.playSoundGame(0);
            this.GameView.ShootBtnUIOpacity.opacity = 150;

            this.isShootBullet = true;
            if (this.isShootBullet) {
                let bulletNode: Node = new Node();
                bulletNode = this.instantiateBullet(bulletNode);
                this.shootSchedule = function () {
                    this.playSoundGame(0);
                    let bulletNode: Node = new Node();
                    bulletNode = this.instantiateBullet(bulletNode);
                }
                this.schedule(this.shootSchedule, 0.25);
            }
        }
    }

    public instantiateEnemyBullet(newNode: Node, enemyPosX: number, enemyPosY: number, enemyNode: Node): Node {
        newNode = this.getBulletEnemyFromPool();
        newNode.position = new Vec3(enemyPosX, enemyPosY);
        newNode.parent = this.GameModel.BulletEnemyContainerNode;
        let nodeBullet = newNode.getComponent(BulletEnemyController);
        nodeBullet.initPosX = newNode.position.x;
        if (enemyNode.scale.x === 1) {
            nodeBullet.moveLeft = true;
            newNode.scale = new Vec3(-1, 1, 1);
        }
        else {
            nodeBullet.moveLeft = false;
            newNode.scale = new Vec3(1, 1, 1);
        }
        return newNode
    }

    public instantiateDeadEnemyAnim(node: Node, positionX: number, positionY: number, type: number, scaleX: number): Node {
        node = this.getEnemyAnimDeadFromPool();
        node.position = new Vec3(positionX, positionY, node.position.z);
        node.parent = this.GameModel.EnemyDeadContainerNode;
        node.getComponent(UIOpacity).opacity = 255;
        node.scale = new Vec3(scaleX, 1);
        node.getComponent(Animation).defaultClip = node.getComponent(Animation).clips[type];
        node.getComponent(Animation).play();
        return node;
    }

    public instantiateReward(node: Node, positionX: number, positionY: number): Node {
        node = this.getRewardFromPool();
        node.position = new Vec3(positionX, positionY, node.position.z);
        node.parent = this.GameModel.RewardContainerNode;
        let nodeCollider = node.getComponent(Collider2D);
        let nodeRigidBody = node.getComponent(RigidBody2D);
        let nodeUIOpacity = node.getComponent(UIOpacity);
        nodeCollider.enabled = false;
        nodeUIOpacity.opacity = 255;
        nodeRigidBody.linearVelocity = new Vec2(-2.5, 2.5);
        nodeRigidBody.gravityScale = 0.5;
        this.scheduleOnce(function () {
            nodeRigidBody.enabledContactListener = true;
            nodeCollider.enabled = true;
            nodeRigidBody.linearVelocity = new Vec2(0, 0);
            nodeRigidBody.gravityScale = 0;
        }, 1)
        return node;
    }

    private instantiateEnemyAnimDeadPool(): void {
        while (this.PoolObject.PoolEnemyDead.size() < Constants.DEFAULT_NUMBER_OF_BULLET) {
            for (let i = 0; i < Constants.DEFAULT_NUMBER_OF_BULLET; i++) {
                let node = instantiate(this.GameModel.EnemyDeadAnimPrefab);
                this.PoolObject.PoolEnemyDead.put(instantiate(node));
            }
        }
    }

    private getEnemyAnimDeadFromPool(): Node {
        let element = this.PoolObject.PoolEnemyDead.size() > 0 ? this.PoolObject.PoolEnemyDead.get() : instantiate(this.GameModel.EnemyDeadAnimPrefab);
        // element.scale = new Vec3(1, 1);
        return element;
    }

    private putEnemyAnimDeadIntoPool(enemy: Node): void {
        this.PoolObject.PoolEnemyDead.put(enemy);
    }

    private getDropBulletFromPool(): Node {
        let element = this.PoolObject.PoolDropBullet.size() > 0 ? this.PoolObject.PoolDropBullet.get() : instantiate(this.GameModel.BulletDropPrefab);
        return element;
    }

    private putDropBulletIntoPool(dropBullet: Node): void {
        this.PoolObject.PoolDropBullet.put(dropBullet);
    }

    private instantiateDropBullet(dropBullet: Node, velocityX: number): Node {
        dropBullet = this.getDropBulletFromPool();
        dropBullet.position = new Vec3(this.GameModel.PlayerNode.position.x, this.GameModel.PlayerNode.position.y);
        dropBullet.parent = this.GameModel.BulletDropContainerNode;
        let dropBulletOpacity = dropBullet.getComponent(UIOpacity);
        let dropBulletRb = dropBullet.getComponent(RigidBody2D);
        let dropBulletSprite = dropBullet.getComponent(Sprite);
        dropBulletOpacity.opacity = 255;
        dropBulletSprite.spriteFrame = this.GameView.BulletDropSf[randomRangeInt(0, 6)];
        dropBulletRb.linearVelocity = new Vec2(velocityX, 0);
        dropBulletRb.gravityScale = 0.5;
        let tweenOpacityDropBullet = tween(dropBulletOpacity).to(1, { opacity: 0 })
        tweenOpacityDropBullet.start();
        return dropBullet;
    }

    private moveEnemyToPlayer(enemy: Node, direction: Vec3, dt: number): void {
        let enemyControllerComponent = enemy.getComponent(EnemyController);
        if (enemy.position.x - this.GameModel.PlayerNode.position.x < 250 && enemy.position.x - this.GameModel.PlayerNode.position.x > -250 && enemyControllerComponent.isReady) {
            enemyControllerComponent.speed = 0;
            enemy.setPosition(new Vec3(enemy.position.x + (direction.x * enemyControllerComponent.speedChase * dt), enemy.position.y + (direction.y * enemyControllerComponent.speedChase * dt), enemy.position.z))
        }
        else if (enemy.position.x - this.GameModel.PlayerNode.position.x >= 250 && enemy.position.x - this.GameModel.PlayerNode.position.x <= 600 && enemyControllerComponent.isReady) {
            enemyControllerComponent.speed = randomRangeInt(125, 200);
            enemyControllerComponent.moveLeft = true;
        }
        else if (enemy.position.x - this.GameModel.PlayerNode.position.x <= -250 && enemy.position.x - this.GameModel.PlayerNode.position.x >= -600 && enemyControllerComponent.isReady) {
            enemyControllerComponent.speed = randomRangeInt(125, 200);
            enemyControllerComponent.moveLeft = false;
        }
        enemyControllerComponent.colliderEnemy.apply();
    }

    private moveEnemyCanShoot(enemy: Node, direction: Vec3, dt: number): void {
        let enemyControllerComponent = enemy.getComponent(EnemyController);
        if (enemy.position.x - this.GameModel.PlayerNode.position.x < 300 && enemy.position.x - this.GameModel.PlayerNode.position.x > -300 && enemyControllerComponent.isReady) {
            enemyControllerComponent.speed = 0;
            enemy.setPosition(new Vec3(enemy.position.x, enemy.position.y + (direction.y * enemyControllerComponent.speedChase * dt), enemy.position.z))
        }
        else if (enemy.position.x - this.GameModel.PlayerNode.position.x >= 300 && enemyControllerComponent.isReady) {
            enemyControllerComponent.speed = randomRangeInt(175, 225);
            enemyControllerComponent.moveLeft = true;
        }
        else if (enemy.position.x - this.GameModel.PlayerNode.position.x <= -300 && enemyControllerComponent.isReady) {
            enemyControllerComponent.speed = randomRangeInt(175, 225);
            enemyControllerComponent.moveLeft = false;
        }
        enemyControllerComponent.colliderEnemy.apply();
    }

    private getBulletFromPool(): Node {
        let element = this.PoolObject.PoolBullet.size() > 0 ? this.PoolObject.PoolBullet.get() : instantiate(this.GameModel.BulletPrefab);

        return element;
    }

    private putBulletIntoPool(bullet: Node): void {
        this.PoolObject.PoolBullet.put(bullet);
    }

    private getBulletEnemyFromPool(): Node {
        let element = this.PoolObject.PoolEnemyBullet.size() > 0 ? this.PoolObject.PoolEnemyBullet.get() : instantiate(this.GameModel.BulletEnemyPrefab);

        return element;
    }

    private putBulletEnemyIntoPool(bullet: Node): void {
        this.PoolObject.PoolEnemyBullet.put(bullet);
    }

    private getBulletBossFromPool(): Node {
        let element = this.PoolObject.PoolBossBullet.size() > 0 ? this.PoolObject.PoolBossBullet.get() : instantiate(this.GameModel.BulletBossPrefab);

        return element;
    }

    private putBulletBossIntoPool(bullet: Node): void {
        this.PoolObject.PoolBossBullet.put(bullet);
    }

    private getBulletExplodeAnimFromPool(): Node {
        let element = this.PoolObject.PoolBulletExlodeAnim.size() > 0 ? this.PoolObject.PoolBulletExlodeAnim.get() : instantiate(this.GameModel.BulletExplodePrefab);
        return element;
    }

    private putBulletExplodeAnimIntoPool(bullet: Node): void {
        this.PoolObject.PoolBulletExlodeAnim.put(bullet);
    }

    private getRewardFromPool(): Node {
        let element = this.PoolObject.PoolReward.size() > 0 ? this.PoolObject.PoolReward.get() : instantiate(this.GameModel.RewardPrefab);
        return element;
    }

    private putRewardIntoPool(reward: Node): void {
        this.PoolObject.PoolReward.put(reward);
    }

    private instantiateBulletExplodeAnim(animBulletExplode: Node, type: number, posX: number, posY: number): void {
        animBulletExplode = this.getBulletExplodeAnimFromPool();
        animBulletExplode.position = new Vec3(posX, posY, animBulletExplode.position.z);
        animBulletExplode.parent = this.GameModel.BulletExplodeContainerNode;
        animBulletExplode.getComponent(Animation).defaultClip = animBulletExplode.getComponent(Animation).clips[type];
        animBulletExplode.getComponent(Animation).play();

        this.scheduleOnce(function () {
            this.putBulletExplodeAnimIntoPool(animBulletExplode);
        }, 0.55);
    } 

    private onKeyDown(event: EventKeyboard): void {
        switch (event.keyCode) {
            case KeyCode.SPACE:
                this.holdShootBullet = true;
                this.GameModel.ShootBtnNode.off(Input.EventType.TOUCH_START, this.onTouchStartShootBtn, this);
                this.GameModel.ShootBtnNode.off(Input.EventType.TOUCH_END, this.onTouchEndShootBtn, this);
                this.GameModel.ShootBtnNode.off(Input.EventType.TOUCH_CANCEL, this.onTouchEndShootBtn, this);
                // this.shootBulletAction();
                break;
            case KeyCode.KEY_F:
                if (this.isPressDash) {
                    this.isDash = true;
                    this.playSoundGame(5);
                    let tweenBtnDash = tween(this.GameView.DashBtnProgressBar).to(5, { progress: 1 })
                    this.isPressDash = false;
                    tweenBtnDash.start();
                    this.scheduleOnce(function () {
                        this.isDash = false;
                    }, 0.5)
                    this.scheduleOnce(function () {
                        this.isPressDash = true;
                        this.GameView.DashBtnProgressBar.progress = 0;
                    }, 5.05)
                }
                break;
            case KeyCode.KEY_Z:
                if (this.isPressPowerUp && this.countPlusDame != 0) {
                    this.countPlusDame--;
                    this.GameView.PlusDameLabelCount.string = `${this.countPlusDame}`;
                    this.pressPowerUpAction();
                    let tweenBtnPowerUp = tween(this.GameView.PowerUpProgressBar).to(30, { progress: 1 })
                    this.isPressPowerUp = false;
                    tweenBtnPowerUp.start();
                    let tweenLabelPowerUp = tween(this.GameView.BuffPowerUpLabelNode)
                        .to(1, { scale: new Vec3(1.5, 1.5, this.GameView.BuffPowerUpLabelNode.scale.z) })
                        .to(1, { scale: new Vec3(1.25, 1.25, this.GameView.BuffPowerUpLabelNode.scale.z) })
                        .to(1, { scale: new Vec3(1.5, 1.5, this.GameView.BuffPowerUpLabelNode.scale.z) })
                        .to(1, { scale: new Vec3(1.25, 1.25, this.GameView.BuffPowerUpLabelNode.scale.z) })
                        .to(1, { scale: new Vec3(1.5, 1.5, this.GameView.BuffPowerUpLabelNode.scale.z) })
                    tweenLabelPowerUp.start();
                    this.scheduleOnce(function () {
                        this.isPressPowerUp = true;
                        this.GameView.BuffPowerUpLabelNode.scale = new Vec3(1.25, 1.25, this.GameView.BuffPowerUpLabelNode.scale.z)
                        this.GameView.PowerUpProgressBar.progress = 0;
                    }, 30.05)
                }
                break;
            case KeyCode.KEY_X:
                if (this.isPressHeal && this.playerControllerComponent.currentPLayerHp < this.GameView.HpMax && this.countHeal != 0) {
                    this.countHeal--;
                    this.GameView.HealLabelCount.string = `${this.countHeal}`;
                    this.pressHealAction()
                    let tweenBtnHeal = tween(this.GameView.HealProgressBar).to(30, { progress: 1 })
                    this.isPressHeal = false;
                    tweenBtnHeal.start();
                    this.scheduleOnce(function () {
                        this.isPressHeal = true;
                        this.GameView.HealProgressBar.progress = 0;
                    }, 30.05)
                }
                break;
            default: break;
        }
    }

    private onKeyUp(event: EventKeyboard): void {
        switch (event.keyCode) {
            case KeyCode.SPACE:
                this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_START, this.onTouchStartShootBtn, this);
                this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_END, this.onTouchEndShootBtn, this);
                this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_CANCEL, this.onTouchEndShootBtn, this);
                this.GameView.ShootBtnUIOpacity.opacity = 255;
                this.holdShootBullet = false;
                this.isPressShooting = false;
                this.isShootBullet = false;
                // this.GameModel.PlayerRb.linearVelocity = new Vec2(0, 0);
                // this.unschedule(this.shootSchedule);
                break;
            // case KeyCode.KEY_F:
            //     break;
            default: break;
        }
    }

    private onBeginContactCage(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null): void {
        this.scheduleOnce(function () {
            if (selfCollider.tag === 10) {
                let hostageComponent = selfCollider.node.parent.getComponent(HostageController);
                let type = this.playerDameInit;
                if (type > 5) {
                    type = 5;
                }
                let animBulletExplode: Node = new Node();
                this.instantiateBulletExplodeAnim(animBulletExplode, type - 1, hostageComponent.node.position.x, hostageComponent.node.position.y);
                
                this.putBulletIntoPool(otherCollider.node);
            }
        })
    }

    private onBeginContactObstacle(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null): void {
        this.scheduleOnce(function () {
            if (selfCollider.tag === 10 && otherCollider.tag != 1) {
                let obstacleComponent = selfCollider.node.getComponent(ObstacleController);
                let type = this.playerDameInit;
                if (type > 5) {
                    type = 5;
                }
                let animBulletExplode: Node = new Node();
                this.instantiateBulletExplodeAnim(animBulletExplode, type - 1, obstacleComponent.node.position.x, obstacleComponent.node.position.y);
                
                this.putBulletIntoPool(otherCollider.node);
            }
        })
    }

    private tweenArrowDirecion(): void {
        this.GameModel.ArrowDirection.active = true;
        let tweenDuration: number = 0.5;
        let tweenArrowDirecion = tween(this.GameModel.ArrowDirection)
            .to(tweenDuration, { position: new Vec3(this.GameModel.ArrowDirection.position.x + 20, this.GameModel.ArrowDirection.position.y) }, { easing: "linear" })
            .to(tweenDuration, { position: new Vec3(this.GameModel.ArrowDirection.position.x, this.GameModel.ArrowDirection.position.y) }, { easing: "linear" })
            .start();
        let tweenArrowDirecionOpacity = tween(this.GameModel.ArrowDirectionOpacity)
            .to(tweenDuration, { opacity: 150 })
            .to(tweenDuration, { opacity: 255 })
            .start();
        tweenArrowDirecion.repeat(3, tweenArrowDirecion).start();
        tweenArrowDirecionOpacity.repeat(3, tweenArrowDirecionOpacity).start();
        this.scheduleOnce(function () {
            this.GameModel.ArrowDirection.active = false;
        }, 3)
    }


    private onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null): void {
        this.scheduleOnce(function () {
            if (otherCollider.tag === 0) {
                let enemyControllerNode = selfCollider.node.getComponent(EnemyController);
                enemyControllerNode.enemyProgressBarHp.progress -= this.playerControllerComponent.dame / (enemyControllerNode.maxHp);
                enemyControllerNode.hp -= this.playerControllerComponent.dame;
                let type = this.playerDameInit;
                if (type > 5) {
                    type = 5;
                }
                let animBulletExplode: Node = new Node();
                this.instantiateBulletExplodeAnim(animBulletExplode, type - 1, selfCollider.node.position.x, selfCollider.node.position.y);
                this.putBulletIntoPool(otherCollider.node);
                this.playSoundGame(4);
                if (enemyControllerNode.hp <= 0) {
                    this.playSoundGame(3);
                    // otherCollider.node.getComponent(BulletController).speed = 0;
                    this.scoreCurrent += selfCollider.tag + 1;
                    this.GameView.ScoreLabel.string = this.scoreCurrent.toString();

                    let animDeadNode: Node = new Node();
                    animDeadNode = this.instantiateDeadEnemyAnim(animDeadNode, selfCollider.node.position.x, selfCollider.node.position.y, selfCollider.tag, selfCollider.node.scale.x);

                    let reward: Node = new Node();
                    reward = this.instantiateReward(reward, selfCollider.node.position.x, selfCollider.node.position.y);

                    this.putEnemyIntoPool(selfCollider.node);

                    this.scheduleOnce(function() {
                        let tweenAnimDead = tween(animDeadNode.getComponent(UIOpacity)).to(1, {opacity: 0})
                        tweenAnimDead.start();
                    }, 2.68)
                    
                    this.scheduleOnce(function () {
                        this.putEnemyAnimDeadIntoPool(animDeadNode);
                    }, 3.68);
                }
            }
        })
        // will be called once when two colliders begin to contact
    }

    private onBeginContactBoss(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null): void {
        this.scheduleOnce(function () {
            if (otherCollider.tag === 0) {
                let enemyControllerNode = selfCollider.node.getComponent(BossController);
                enemyControllerNode.hp -= this.playerControllerComponent.dame;
                this.GameView.BossHpProgressBar.progress = enemyControllerNode.hp / enemyControllerNode.hpMax;

                let type = this.playerDameInit;
                if (type > 5) {
                    type = 5;
                }
                let animBulletExplode: Node = new Node();
                this.instantiateBulletExplodeAnim(animBulletExplode, type - 1, selfCollider.node.position.x, selfCollider.node.position.y);

                this.putBulletIntoPool(otherCollider.node);
                this.playSoundGame(4);
                if (enemyControllerNode.hp <= 0) {
                    enemyControllerNode.isDead = true;
                    enemyControllerNode.bossRb.enabledContactListener = false;
                    enemyControllerNode.bossCollide.enabled = false;
                    enemyControllerNode.bossTurn++;
                    this.playSoundGame(13);
                    this.scoreCurrent += 50;
                    this.GameView.ScoreLabel.string = this.scoreCurrent.toString();

                    this.instantiateDeadEnemyAnim(selfCollider.node, selfCollider.node.position.x, selfCollider.node.position.y, 8, selfCollider.node.scale.x);
                    this.putBossIntoPool(selfCollider.node);

                    let reward: Node = new Node();
                    reward = this.instantiateReward(reward, selfCollider.node.position.x, selfCollider.node.position.y);
                    this.scheduleOnce(function () {
                        this.GameView.BossWarningLabelNode.active = false;
                        this.GameView.HpBossNode.active = false;
                    }, 1);
                    this.countBoss = 0;
                    // this.GameView.HpMax += 5;
                    // this.GameView.HpLabelMax.string = this.GameView.HpMax.toString();
                    // this.GameView.HpProgressBar.progress = this.GameModel.PlayerNode.getComponent(PlayerController).currentPLayerHp / this.GameView.HpMax;
                    let randomSpawnTime = randomRange(0.5, 1.5);
                    let enemyNode: Node;
                    this.schedule(function () {
                        this.instantiateEnemy(enemyNode, randomRangeInt(0, 7));
                    }, randomSpawnTime, this.countEnemyEachTurn - 1, 0);

                }
            }
        })
        // will be called once when two colliders begin to contact
    }

    private onBeginContactPlayer(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null): void {
        this.scheduleOnce(function () {
            if (otherCollider.tag === 0) {
                this.playSoundGame(7);
                let tweenReward = tween(otherCollider.node).to(1, { position: new Vec3(-235, 210, otherCollider.node.position.z) },
                    { easing: "fade" })
                this.rewardCount++;
                this.GameView.RewardCountLabel.string = this.rewardCount.toString();
                let tweenRewardOpacity = tween(otherCollider.node.getComponent(UIOpacity)).to(1, { opacity: 0 });
                tweenReward.start();
                tweenRewardOpacity.start();
                this.scheduleOnce(function () {
                    this.putRewardIntoPool(otherCollider.node);
                }, 1)
            }

            if (otherCollider.tag === 2) {
                let playerNodeController = this.GameModel.PlayerNode.getComponent(PlayerController);
                let animBulletExplode = this.getBulletExplodeAnimFromPool();
                animBulletExplode.position = new Vec3(selfCollider.node.position.x, selfCollider.node.position.y, animBulletExplode.position.z);
                animBulletExplode.parent = this.GameModel.BulletExplodeContainerNode;
                animBulletExplode.getComponent(Animation).defaultClip = animBulletExplode.getComponent(Animation).clips[1];
                animBulletExplode.getComponent(Animation).play();
                this.playerTakeDame(1, playerNodeController);
                this.putBulletEnemyIntoPool(otherCollider.node);
                this.playSoundGame(2);
                this.scheduleOnce(function () {
                    this.putBulletExplodeAnimIntoPool(animBulletExplode);
                }, 0.55);
                if (playerNodeController.currentPLayerHp <= 0 && !this.isOver) {
                    this.isOver = true;
                    this.unschedule(this.shootSchedule);
                    this.GameView.HpLabelCurrent.string = '0';
                    this.gameOverAction();
                }
            }

            if (otherCollider.tag === 3) {
                let playerNodeController = this.GameModel.PlayerNode.getComponent(PlayerController);
                let otherColliderNode = otherCollider.node.getComponent(BulletBossController);
                otherColliderNode.bulletExplodeAnim.play();
                this.playerTakeDame(2, playerNodeController);
                otherColliderNode.bossBulletRb.linearVelocity = new Vec2(0, 0);
                this.scheduleOnce(function () {
                    this.putBulletBossIntoPool(otherCollider.node);
                }, 0.5)
                this.playSoundGame(2);
                if (playerNodeController.currentPLayerHp <= 0 && !this.isOver) {
                    this.isOver = true;
                    this.unschedule(this.shootSchedule);
                    this.gameOverAction();
                }
            }

            if (otherCollider.tag === 1) {
                this.GameModel.PlayerRb.linearVelocity = new Vec2(0, 0);
            }
        })
        // will be called once when two colliders begin to contact
    }

    private playSoundGame(numb: number): void {
        this.GameModel.SoundGame.clip = this.GameModel.SoundGameArr[numb];
        this.GameModel.SoundGame.play();
    }

    private levelUpEnemy(): void {
        if (this.countWave > 0 && this.countWave % 5 === 0 && this.countWave <= 50) {
            this.levelCount++;
            this.extraEnemyHp++;
            this.warningLevelUpEnemy();
        }
    }

    private warningLevelUpEnemy(): void {
        this.GameView.EnemyLevelUpNode.active = true;
        this.GameView.EnemyLevelUpUIOpacity.opacity = 255;
        this.playSoundGame(9);
        let tweenWarning = tween(this.GameView.EnemyLevelUpUIOpacity).to(0.5, { opacity: 0 }).to(0.5, { opacity: 255 });
        tweenWarning.repeat(5, tweenWarning);
        tweenWarning.start();
        this.scheduleOnce(function () {
            let tweenWarning2 = tween(this.GameView.EnemyLevelUpUIOpacity).to(0.5, { opacity: 0 });
            tweenWarning2.start();
            this.scheduleOnce(function () {
                this.GameView.EnemyLevelUpNode.active = false;
            }, 0.5)
        }, 2.5)
    }

    private warningBoss(): void {
        this.GameView.BossWarningLabelNode.active = true;
        this.GameView.HpBossNode.active = true;
        this.GameView.BossHpProgressBar.progress = 1;
        this.playSoundGame(9);
        this.changeColorSpriteFull(Color.RED);
        this.scheduleOnce(function(){
            this.GameView.BossWarningLabelNode.active = false;
        }, 2)
    }

    private typeOfEnemy(enemyController: any, type: number, nodeUITransformY: number): void {
        enemyController.enemyLevelLabel.string = `lv` + `${this.levelCount}`;
        enemyController.enemyNodeHp.position = new Vec3(0, 0 - nodeUITransformY / 2 - 15);
        enemyController.enemyNodeLevelLabel.position = new Vec3(0, 0 + nodeUITransformY / 2 + 20);
        enemyController.animEnemyArr[0].defaultClip = enemyController.animClipEnemyArr[type * 2];
        enemyController.animEnemyArr[1].defaultClip = enemyController.animClipEnemyArr[type * 2 + 1];
        enemyController.colliderEnemy.tag = type;
        enemyController.hp = type + 1 + this.extraEnemyHp;
        enemyController.maxHp = enemyController.hp;
        enemyController.enemyProgressBarHp.progress = 1;
    }

    private onTouchStartShootBtn(event: EventTouch): void {
        this.holdShootBullet = true;
        this.GameModel.ShootBtnNode.off(Input.EventType.TOUCH_START, this.onTouchStartShootBtn, this);
        // this.GameModel.ShootBtnNode.off(Input.EventType.TOUCH_END, this.onTouchEndShootBtn, this);
    }

    private onTouchEndShootBtn(event: EventTouch): void {
        this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_START, this.onTouchStartShootBtn, this);
        // this.GameModel.ShootBtnNode.on(Input.EventType.TOUCH_END, this.onTouchEndShootBtn, this);
        this.holdShootBullet = false;
        this.GameView.ShootBtnUIOpacity.opacity = 255;
        this.isShootBullet = false;
    }

    private dashBtnAction(): void {
        if (this.isPressDash) {
            this.playerControllerComponent.playAnimDash();
            this.GameModel.DashBtn.interactable = false;
            this.playSoundGame(5);
            let tweenBtnDash = tween(this.GameView.DashBtnProgressBar).to(5, { progress: 1 })
            this.isPressDash = false;
            tweenBtnDash.start();
            this.scheduleOnce(function () {
                this.isPressDash = true;
                this.GameModel.DashBtn.interactable = true;
                this.GameView.DashBtnProgressBar.progress = 0;
            }, 5.05)
        }
    }

    private powerUpBtnAction(): void {
        if (this.isPressPowerUp) {
            this.GameModel.PowerUpBtn.interactable = false;
            this.pressPowerUpAction();
            let tweenBtnPowerUp = tween(this.GameView.PowerUpProgressBar).to(30, { progress: 1 })
            this.isPressPowerUp = false;
            tweenBtnPowerUp.start();
            this.scheduleOnce(function () {
                this.GameModel.PowerUpBtn.interactable = true;
                this.isPressPowerUp = true;
                this.GameView.PowerUpProgressBar.progress = 0;
            }, 30.05)
        }
    }

    private healBtnAction(): void {
        if (this.isPressHeal && this.playerControllerComponent.currentPLayerHp < this.GameView.HpMax) {
            this.GameModel.HealBtn.interactable = false;
            this.pressHealAction()
            let tweenBtnHeal = tween(this.GameView.HealProgressBar).to(30, { progress: 1 })
            this.isPressHeal = false;
            tweenBtnHeal.start();
            this.scheduleOnce(function () {
                this.GameModel.HealBtn.interactable = true;
                this.isPressHeal = true;
                this.GameView.HealProgressBar.progress = 0;
            }, 30.05)
        }
    }

    private pressHealAction(): void {
        this.playerControllerComponent.currentPLayerHp += 5;
        if (this.playerControllerComponent.currentPLayerHp > this.GameView.HpMax) {
            this.playerControllerComponent.currentPLayerHp = 20;
        }
        this.GameView.HpLabelCurrent.string = `${this.playerControllerComponent.currentPLayerHp}`;
        this.GameView.HpProgressBar.progress = this.playerControllerComponent.currentPLayerHp / this.GameView.HpMax;
        this.changeColorSpriteFull(Color.CYAN);
    }

    private pressPowerUpAction(): void {
        this.playerControllerComponent.dame *= 2;
        this.GameView.BuffNode.active = true;
        this.startCountDown();
        this.changeColorSpriteFull(Color.GREEN);
    }

    private startCountDown(): void {
        this.GameView.BuffPowerUpLabelCountDown.string = `${this.timeNum}`;

        this.callBackSchedule = function () {
            this.timeNum--;
            this.GameView.BuffPowerUpLabelCountDown.string = `${this.timeNum}`;
            if (this.timeNum === 0) {
                this.GameView.BuffNode.active = false;
                this.timeNum = 5;
                this.playerControllerComponent.dame = this.playerDameInit;
                this.unschedule(this.callBackSchedule);
            }
        }
        this.schedule(this.callBackSchedule, 1);
    }

    private onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null): void {
        // will be called once when the contact between two colliders just about to end.
        console.log('onEndContact');
    }

    private playAgain(): void {
        director.resume();
        this.isOver = true;
        this.playSoundGame(1);
        this.GameView.LoadingAnimNode.active = true;
        let tweenLoadingAnim = tween(this.GameView.LoadingAnimProgressBar).to(1.5, { progress: 1 })
        tweenLoadingAnim.start();
        this.scheduleOnce(function () {
            director.loadScene(Constants.GAME_SCENE);
        }, 1.5)
    }

    private backMenu(): void {
        director.resume();
        this.isOver = true;
        this.playSoundGame(1);
        this.GameView.LoadingAnimNode.active = true;
        let tweenLoadingAnim = tween(this.GameView.LoadingAnimProgressBar).to(1.5, { progress: 1 })
        tweenLoadingAnim.start();
        this.scheduleOnce(function () {
            director.loadScene(Constants.MENU_SCENE);
        }, 1.5)
    }

    private openSetting(): void {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.GameView.BlackNode.active = true;
        this.playSoundGame(1);
        this.GameModel.SettingBtn.interactable = false;
        this.GameView.SettingNode.active = true;
        director.pause();
    }

    private closeSetting(): void {
        director.resume();
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.GameView.BlackNode.active = false;
        this.playSoundGame(1);
        this.GameModel.SettingBtn.interactable = true;
        this.GameView.SettingNode.active = false;
    }

    private musicOff(): void {
        this.GameModel.MusicOnNode.active = true;
        this.GameModel.MusicOffNode.active = false;
        LoadingController.volumeMusicValue = this.GameModel.MusicBg.volume = 0;
    }

    private musicOn(): void {
        this.GameModel.MusicOnNode.active = false;
        this.GameModel.MusicOffNode.active = true;
        LoadingController.volumeMusicValue = this.GameModel.MusicBg.volume = 0.7;
        this.GameModel.SoundGame.clip = this.GameModel.SoundGameArr[1];
        this.GameModel.SoundGame.play();
    }

    private soundOff(): void {
        this.GameModel.SoundOnNode.active = true;
        this.GameModel.SoundOffNode.active = false;
        LoadingController.volumeSoundValue = this.GameModel.SoundGame.volume = 0;
    }

    private souncOn(): void {
        this.GameModel.SoundOnNode.active = false;
        this.GameModel.SoundOffNode.active = true;
        LoadingController.volumeSoundValue = this.GameModel.SoundGame.volume = 0.7;
        this.GameModel.SoundGame.clip = this.GameModel.SoundGameArr[1];
        this.GameModel.SoundGame.play();
    }

    private gameOverAction(): void {
        let playerNodeController = this.GameModel.PlayerNode.getComponent(PlayerController);
        this.unschedule(this.shootSchedule);
        playerNodeController.currentPLayerHp = 0;
        this.GameView.HpLabelCurrent.string = playerNodeController.currentPLayerHp.toString();
        this.GameModel.BulletContainerNode.active = false;
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.GameModel.PlayerRb.enabledContactListener = false;
        this.GameModel.PlayerCollider.enabled = false;
        this.GameModel.MusicBg.stop();
        this.GameView.BlackNode.active = true;
        this.GameView.GameOverNode.active = true;
        this.GameView.ScoreResultLabel.string = this.scoreCurrent.toString();
        this.GameView.RewardCountResultLabel.string = this.rewardCount.toString();
        // this.completeGame();
        this.playSoundGame(6);
    }

    private playerTakeDame(hp: number, playerNodeController: any): void {
        this.playSoundGame(2);
        let tweenOpacityPlayer = tween(this.GameModel.PlayerUIOpacity).to(0.25, { opacity: 100 }).to(0.25, { opacity: 255 })
        tweenOpacityPlayer.start();
        playerNodeController.currentPLayerHp -= hp;
        this.GameView.HpLabelCurrent.string = playerNodeController.currentPLayerHp.toString();
        this.GameView.HpProgressBar.progress -= hp / this.GameView.HpMax;
        if (playerNodeController.currentPLayerHp <= this.GameView.HpMax / 4 && this.isWarningLowHealth) {
            this.GameView.WarningLowHealthNode.active = true;
            this.GameView.WarningLowHealthOpacity.opacity = 255;
            this.isWarningLowHealth = false;
            // this.playSoundGame(9);
            let tweenWarning = tween(this.GameView.WarningLowHealthOpacity).to(0.5, { opacity: 0 }).to(0.5, { opacity: 255 });
            tweenWarning.repeat(3, tweenWarning);
            tweenWarning.start();
            this.changeColorSpriteFull(Color.RED);
            this.scheduleOnce(function () {
                // let tweenWarning2 = tween(this.GameView.WarningLowHealthOpacity).to(0.5, {opacity: 0});
                // tweenWarning2.start();
                this.scheduleOnce(function () {
                    this.GameView.WarningLowHealthNode.active = false;
                    // this.GameView.ColorFullNode.active = false;
                }, 0.5)
            }, 2.5)
        }
        else if (playerNodeController.currentPLayerHp > this.GameView.HpMax / 4) {
            this.isWarningLowHealth = true;
        }
    }

    public setTypeObject(): void {
        // obstacle.getComponent(ObstacleController).setInitPos();
        this.GameModel.HostageContainer.children.map((hostage) => {
            this.putHostageIntoPool(hostage);
        })
        this.GameModel.ObstacleContainer.removeAllChildren();
        this.GameModel.SpikeContainer.removeAllChildren();
        this.GameModel.RewardContainerNode.removeAllChildren();

        let randomNumb = randomRangeInt(0, 20);
        if (randomNumb >= 0 && randomNumb <= 4) {
            let hostage: Node = new Node();
            hostage = this.instantiateHostage(hostage);
            hostage.getComponent(HostageController).setInitPos();
        } else if (randomNumb >= 5 && randomNumb <= 9) {
            let obstacle: Node = new Node();
            obstacle = this.instantiateObstacle(obstacle);
        } else if (randomNumb >= 10 && randomNumb <= 14) {
            let spike: Node = new Node();
            spike = this.instantiateSpike(spike);
        } else if (randomNumb >= 15 && randomNumb <= 17) {
            let hostage: Node = new Node();
            hostage = this.instantiateHostage(hostage);
            hostage.getComponent(HostageController).setInitPos();

            let obstacle: Node = new Node();
            obstacle = this.instantiateObstacle(obstacle);
        }
        else {
            let spike: Node = new Node();
            spike = this.instantiateSpike(spike);

            let obstacle: Node = new Node();
            obstacle = this.instantiateObstacle(obstacle);
        }
    
    }

    private instantiateBoss(): void {
        let node = this.getBossFromPool();
        let nodeEnemy = node.getComponent(BossController);
        nodeEnemy.hpMax = nodeEnemy.hp = 30 + nodeEnemy.bossTurn * 10;
        node.position = new Vec3(randomRange(1200, 1450), randomRange(-50, 50), 1);
        node.parent = this.GameModel.BossContainer;
        nodeEnemy.bossSprite.spriteFrame = nodeEnemy.bossSF;
        nodeEnemy.bossOpacity.opacity = 255;
        nodeEnemy.bossRb.enabledContactListener = true;
        nodeEnemy.bossCollide.enabled = true;
        nodeEnemy.isDead = false;
        this.countBoss = 1;
        let collider = nodeEnemy.bossCollide;
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContactBoss, this);
        }
    }

    private checkBossAction(enemy: Node, direction: Vec3, dt: number): void {
        let enemyControllerComponent = enemy.getComponent(BossController);
        let playerNodeController = this.GameModel.PlayerNode.getComponent(PlayerController);
        if ((enemy.position.x - this.GameModel.PlayerNode.position.x <= - 150 && enemy.position.x - this.GameModel.PlayerNode.position.x >= -300 && !enemyControllerComponent.isAttack) ||
            (enemy.position.x - this.GameModel.PlayerNode.position.x >= 150 && enemy.position.x - this.GameModel.PlayerNode.position.x <= 300 && !enemyControllerComponent.isAttack) && !this.isOver && !enemyControllerComponent.isDead) {
            if (enemyControllerComponent.isDead || this.isOver) return;
            enemyControllerComponent.isAttack = true;
            enemyControllerComponent.attackAction();
            this.playSoundGame(11);
            let tweenAttack = tween(enemy)
                .to(0.2, { position: new Vec3(enemy.position.x, enemy.position.y + 50, enemy.position.z) })
                .to(0.275, { position: new Vec3(this.GameModel.PlayerNode.position.x, this.GameModel.PlayerNode.position.y + 20, this.GameModel.PlayerNode.position.z) },
                    { easing: "linear" })
            tweenAttack.start();

            this.scheduleOnce(function () {
                if (enemy.position.x - this.GameModel.PlayerNode.position.x <= 50
                    && enemy.position.x - this.GameModel.PlayerNode.position.x >= -50
                    && enemy.position.y - this.GameModel.PlayerNode.position.y <= 50
                    && enemy.position.y - this.GameModel.PlayerNode.position.y >= -50 && enemyControllerComponent.isCanHit && !this.isOver && !this.isDash) {
                    enemyControllerComponent.isCanHit = false;
                    this.playerTakeDame(5, playerNodeController);
                    if (playerNodeController.currentPLayerHp <= 0 && !this.isOver) {
                        this.isOver = true;
                        this.gameOverAction();
                    }
                }
            }, 0.5)
            this.scheduleOnce(function () {

                if (!enemyControllerComponent.isDead) {
                    enemyControllerComponent.playAnim(0);
                    this.GameModel.CrackNode.active = true;
                    this.GameModel.CrackNode.position = new Vec3(enemy.position.x, enemy.position.y - 50);
                    let tweenCrackOpacity = tween(this.GameModel.CrackNodeOpacity).to(1, { opacity: 0 });
                    tweenCrackOpacity.start();
                    this.scheduleOnce(function () {
                        this.GameModel.CrackNode.active = false;
                        this.GameModel.CrackNodeOpacity.opacity = 255;

                    }, 1.05)

                }
            }, 0.8);
            this.scheduleOnce(function () {
                enemyControllerComponent.isAttack = false;
                enemyControllerComponent.isCanHit = true;
            }, randomRangeInt(3, 6))
        }

        else if ((enemy.position.x - this.GameModel.PlayerNode.position.x < 150 && enemy.position.x - this.GameModel.PlayerNode.position.x > -150 && !enemyControllerComponent.isShoot) 
            && !this.isOver && !enemyControllerComponent.isDead) {
            if (enemyControllerComponent.isDead || this.isOver) return;
            enemyControllerComponent.isShoot = true;
            enemyControllerComponent.shootAction();
            this.playSoundGame(12);
            let bossBullet: Node = new Node();
            bossBullet = this.instantiateBossBullet(bossBullet, enemy.position.x, enemy.position.y);
            let bulletBossComponent = bossBullet.getComponent(BulletBossController);
            bulletBossComponent.shootBullet(this.GameModel.PlayerNode.position.x, this.GameModel.PlayerNode.position.y);
            this.scheduleOnce(function () {
                if (!enemyControllerComponent.isDead) enemyControllerComponent.playAnim(0);
            }, 0.5);
            this.scheduleOnce(function () {
                enemyControllerComponent.isShoot = false;
            }, randomRange(2, 4))

            this.scheduleOnce(function () {
                this.putBulletBossIntoPool(bossBullet);
            }, 2)
        }
    }

    private async initGame(): Promise<void> {
        let _this = this;
        let parameters = find(Constants.GAME_CLIENT);
        let gameClientParams = parameters.getComponent(StoreAPI);
        this.gameClient = gameClientParams.gameClient;
        await gameClientParams.gameClient.match.startMatch()
            .then((data) => {
                this.matchData = data;
                // this.startMatchLog();
            })
            .catch((error) => console.log(error));
    }

    private async completeGame(): Promise<void> {
        await this.gameClient.match
            .completeMatch(this.matchData, { score: this.scoreCurrent })
            .then(async (data) => {
                if (this.scoreCurrent > DataUser.dataUser.data.highScore) {
                    DataUser.dataUser.data.highScore = this.scoreCurrent;
                }
                this.GameView.HighScoreLabel.string = DataUser.dataUser.data.highScore.toString();
                DataUser.dataUser.data.rewardCount += this.rewardCount;
                DataUser.dataUser.data.scoreCount += this.scoreCurrent;
                await this.gameClient.user.data.setGameData({ [this.userId]: DataUser.dataUser }, false).then((response: any) => {
                })
                    .catch((e) => { console.log("Error at set game data", e); })
            })
            .catch((error) => console.log(error));
    }

    // public logMatch(data: Object): void {
    //     let parameters = find(Constants.GAME_CLIENT);
    //     let gameClientParams = parameters.getComponent(StoreAPI);
    //     this.gameClient = gameClientParams.gameClient;
    //     this.gameClient.match.logMatch(this.matchData.matchId, data).catch((e) => console.log(e));
    // }

    // public startMatchLog(): void {
    //     let id = setInterval(() => {
    //         if (this.isOver) {
    //             clearInterval(id);
    //             return;
    //         }

    //         this.logMatch({ score: this.scoreCurrent })
    //     }, 2000)
    // }

    public changeColorSpriteFull(hexColor: Color): void {
        this.GameView.ColorFullNode.active = true;
        this.GameView.ColorFullUIOpacity.opacity = 0;
        this.GameView.ColorFullSprite.color = hexColor;
        let tweenWarningColor = tween(this.GameView.ColorFullUIOpacity).to(0.5, { opacity: 50 }).to(0.5, { opacity: 0 });
        tweenWarningColor.repeat(3, tweenWarningColor);
        tweenWarningColor.start();
    }

    public appearBoosterNode(): void {
        let playerNodeController = this.GameModel.PlayerNode.getComponent(PlayerController);

        this.holdShootBullet = false;
        playerNodeController.isStop = true;
        playerNodeController.moveArr1 = [];
        playerNodeController.moveArr2 = [];

        this.GameModel.PlayerRb.linearVelocity = new Vec2(0, 0);
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.playerControllerComponent.offKeyboard();
        this.GameView.BlackNode.active = true;
        this.GameModel.BoosterNode.active = true;
        this.GameModel.BoosterNode.setPosition(new Vec3(0, 450));
        let tweenBoosterNode = tween(this.GameModel.BoosterNode).to(0.5, { position: new Vec3(0, 0) }, { easing: "linear" });
        tweenBoosterNode.start();
        let arr = this.shuffleArray([0, 1, 2, 3, 4]);

        // let result = arr.slice(0, 3);
        for (let i = 0; i < 3; i++) {
            this.ShowAttribute(i, arr[i]);
        }
    }

    private shuffleArray(array: any[]): number[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    private ShowAttribute(num: number, type: number): void {
        switch (type) {
            case 0:
                this.settingBooster(num, 'Heal 5 hp', type, this.levelBooster1, 'Healing', this.priceBooster1);
                break;
            case 1:
                this.settingBooster(num, 'Plus 5 hp', type, this.levelBooster2, 'HP Container', this.priceBooster2);
                break;
            case 2:
                this.settingBooster(num, 'Plus 1 damage', type, this.levelBooster3, 'Damage Plus', this.priceBooster3);
                break;
            case 3:
                this.settingBooster(num, 'Plus 4 Bullets', type, this.levelBooster4, 'More Bullet', this.priceBooster4);
                break;
            case 4:
                this.settingBooster(num, 'Plus 50 speed shot', type, this.levelBooster5, 'Speed Shot', this.priceBooster5);
                break;
            default:
                break;
        }
    }
    
    private settingBooster(num: number, note: string, type: number, level: number, name: string, price: number): void {
        let playerControllerComponent = this.GameModel.PlayerNode.getComponent(PlayerController);
        this.GameModel.OptionSprite[num].spriteFrame = this.GameView.ItemBoosterSf[type];
        this.GameModel.OptionLabel[num].string = `${note}`;
        this.GameModel.OptionName[num].string = `${name}`;
        this.GameModel.OptionLevel[num].string = 'Lv' + `${level}`;
        this.GameModel.OptionPrice[num].string = `${price}`;
        this.GameModel.OptionButton[num].node.off(Button.EventType.CLICK);
        this.GameModel.OptionButton[num].node.on(Button.EventType.CLICK, ()=>{
            switch(type){
            case 0:
                if (this.rewardCount < this.priceBooster1) {
                    this.clickBoosterUnsuccessfully();
                }
                else {
                    playerControllerComponent.currentPLayerHp += 5;
                    if (playerControllerComponent.currentPLayerHp > this.GameView.HpMax) {
                        playerControllerComponent.currentPLayerHp = 20;
                    }
                    this.GameView.HpLabelCurrent.string = `${playerControllerComponent.currentPLayerHp}`;
                    this.GameView.HpProgressBar.progress = playerControllerComponent.currentPLayerHp / this.GameView.HpMax;
                    this.clickBoosterSuccessfully(this.priceBooster1);
                    this.levelBooster1++;
                    this.priceBooster1 *= 2;
                }
                break;
            case 1:
                if (this.rewardCount < this.priceBooster2) {
                    this.clickBoosterUnsuccessfully();
                }
                else {
                    this.GameView.HpMax += 5;
                    this.GameView.HpLabelMax.string = this.GameView.HpMax.toString();
                    this.GameView.HpProgressBar.progress = playerControllerComponent.currentPLayerHp / this.GameView.HpMax;
                    this.clickBoosterSuccessfully(this.priceBooster2);
                    this.levelBooster2++;
                    this.priceBooster2 *= 2;
                }
                break;
            case 2:
                if (this.rewardCount < this.priceBooster3) {
                    this.clickBoosterUnsuccessfully();
                }
                else {
                    this.playerControllerComponent.dame++;
                    this.playerDameInit = this.playerControllerComponent.dame;
                    this.clickBoosterSuccessfully(this.priceBooster3);
                    this.levelBooster3++;
                    this.priceBooster3 *= 2;
                }
                break;
            case 3:
                if (this.rewardCount < this.priceBooster4) {
                    this.clickBoosterUnsuccessfully();
                }
                else {
                    this.initTotalBullet += 4;
                    this.totalBulletCount = this.initTotalBullet;
                    this.GameView.BulletCountLabel.string = this.totalBulletCount.toString();
                    this.clickBoosterSuccessfully(this.priceBooster4);
                    this.levelBooster4++;
                    this.priceBooster4 *= 2;
                }
                break;
            case 4:
                if (this.rewardCount < this.priceBooster5) {
                    this.clickBoosterUnsuccessfully();
                }
                else {
                    this.speedBulletInit += 50;
                    this.clickBoosterSuccessfully(this.priceBooster5);
                    this.levelBooster5++;
                    this.priceBooster5 *= 2;
                }
                break;
            default:
                break;
            }
        }, this)
    }

    public clickBoosterSuccessfully(price: number): void {
        this.changeWaveAction();
        this.playSoundGame(17);
        
        this.GameModel.PlayerNode.getComponent(PlayerController).isStop = false;
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.GameView.BlackNode.active = false;
        this.GameModel.BoosterNode.active = false;
        this.GameModel.NotiLabel.node.active = false;
        this.playerControllerComponent.onKeyboard();
        this.rewardCount -= price;
        this.GameView.RewardCountLabel.string = this.rewardCount.toString();
    }

    public clickBoosterUnsuccessfully(): void {
        this.GameModel.NotiLabel.node.active = false;

        this.GameModel.NotiLabel.node.position = new Vec3(this.GameModel.NotiLabel.node.position.x, this.initNotiY);

        this.GameModel.NotiLabel.node.active = true;
        let tweenNoti = tween(this.GameModel.NotiLabel.node)
        .to(0.5, { position: new Vec3(this.GameModel.NotiLabel.node.position.x, (this.initNotiY + 65)) }, { easing: "linear" })
        .start();
        this.scheduleOnce(function(){
            if (this.GameModel.NotiLabel.node.active) {
                this.GameModel.NotiLabel.node.active = false;
            }
        }, 0.505)
    }

    public skipBoosterBtnAction(): void {
        this.tweenArrowDirecion();
        this.GameModel.PlayerNode.getComponent(PlayerController).isStop = false;
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.GameView.BlackNode.active = false;
        this.GameModel.BoosterNode.active = false;
        this.GameModel.NotiLabel.node.active = false;
        this.playerControllerComponent.onKeyboard();
        this.GameModel.PlayerNode.active = false;     
        this.GameModel.FadeNode.active = true;
        let tweenFade = tween(this.GameModel.FadeUIOpacity).to(0.5,{ opacity: 255 }).to(0.5, {opacity: 0});
        tweenFade.start();
        
        this.changeWaveAction()
    }

    public nextWaveAction(): void {
        this.GameView.WaveCountNode.active = true;
        let wave = this.countWave + 1
        let randomSpawnTime = randomRange(0.5, 1.5);
        
        if (this.countWave > 0 && this.countWave % 5 === 0 && this.countWave <= 50) {
            this.extraEnemy++;
        }
        this.countEnemyEachTurn = randomRangeInt(15, 25) + this.extraEnemy;
        this.levelUpEnemy();
        if (wave < 6) {
            if (wave % 5 === 0) {
                this.instantiateBoss();
                this.warningBoss();
                console.log('boss')
            }
            let enemyNode: Node;
            this.schedule(function () {
                this.instantiateEnemy(enemyNode, randomRangeInt(0, wave + 2));
            }, randomSpawnTime, this.countEnemyEachTurn - 1, 0);
            
        }
        else {
            if (wave % 5 === 0) {
                this.instantiateBoss();
                this.warningBoss();
                console.log('boss')
            }
            let enemyNode: Node;
            this.schedule(function () {
                this.instantiateEnemy(enemyNode, randomRangeInt(0, 8));
            }, randomSpawnTime, this.countEnemyEachTurn - 1, 0);

            
        }
    }

    private changeWaveAction(): void {
        this.GameModel.FadeNode.active = true;
        let tweenFade = tween(this.GameModel.FadeUIOpacity).to(0.5,{ opacity: 255 }).to(0.5, {opacity: 0});
        tweenFade.start();
        this.countWave++;
        this.isHostageDone = true;
        this.scheduleOnce(function(){
            for (let i = 0; i < 5; i++) {
                this.GameView.WaveCountLabel[i].string = 'Wave ' + `${this.countWave + 1}`;
            }
            this.countHeal = this.countPlusDame = 2;
            this.GameView.HealLabelCount.string = `${this.countHeal}`;
            this.GameView.PlusDameLabelCount.string = `${this.countPlusDame}`;

            this.tweenArrowDirecion();
            this.GameView.SpawnPlayerEffectNode.active = true;
            this.GameView.SpawnPlayerEffectAnimation.play();
            this.GameModel.DoorCollider.enabled = true;
            this.GameModel.FadeNode.active = false;
            this.playerControllerComponent.cameraPlayer.node.setPosition(-150, -50, 1000);
            this.GameModel.DoorAnim.defaultClip = this.GameModel.DoorAnim.clips[0];
            this.GameModel.DoorAnim.play();
            this.scheduleOnce(function(){
                this.GameModel.PlayerNode.active = true;
            }, 0.25)
            this.setTypeObject();
            this.nextWaveAction();
            this.isGoNextWave = false;
            this.scheduleOnce(function(){
                this.isOpenDoor = false;
            }, 1.5)
        }, 1)
    }

    private spawningEnemyAction(node: Node, nodeComponent: any): void {
        nodeComponent.isReady = false;
        node.scale = new Vec3(0, 0);
        nodeComponent.colliderEnemy.enabled = false;
        nodeComponent.rigidEnemy.enabledContactListener = false;
        nodeComponent.isReadyShoot = false;
        let tweenScale = tween(node).to(0.5, {scale: new Vec3(1, 1)})
        tweenScale.start()
        this.scheduleOnce(function(){
            nodeComponent.colliderEnemy.enabled = true;
            nodeComponent.isReadyShoot = true;

            nodeComponent.rigidEnemy.enabledContactListener = true;
            nodeComponent.isReady = true;
        }, 1)
    }
}


