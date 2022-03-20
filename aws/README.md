
## ネットワーク構成
https://drive.google.com/file/d/1apdUexohgn13wSd_I7kaWmujCYJPpACz/view?usp=sharing
![ネットワーク構成](./network.png "ネットワーク構成")

## 見積もり
https://calculator.aws/#/estimate?id=554054049fbca3545079c3a1213b3beea21d54d4

## VPCネットワークを構築する
CloudFormation → スタック → スタックの作成
- Igress(ALB)用のパブリックサブネット
- フロントアプリ、内部ALBやバックエンドアプリ用のプライベートサブネット
- データベース用のプライベートサブネット
- 管理サーバーやBastion等の運用管理用パブリックサブネット
```text
テンプレートの準備：テンプレートの準備完了
テンプレートの指定：テンプレートファイルのアップロード
ファイル選択：cloudformations/network.cf.yml
スタックの名前： isystk-base
上記以外はデフォルトのまま
```
## データベースを作成する

#### Aurora DBクラスターをVPC内で利用するためのサブネットグループを作成する
RDS → サブネットグループ → DBサブネットグループを作成する
```
名前：isystk-rds-subnet-group
VPC：IsystkVpc
AZ：1a と 1c
サブネット：db用のサブネットを2つ追加
上記以外はデフォルトのまま

```

#### Auroraを作成する
RDS → データベースを作成
```
エディション：MySQLと互換性を持つAmazon Aurora
キャパシティタイプ：プロビジョニング済み
バージョン：Aurora MySQL 3.01.0 (compatible with MySQL 8.0.23)
テンプレート：開発/テスト用
DBクラスター識別子：nextjs-nestjs-graphql-db
マスターユーザー名：room
マスターパスワード：password
DBインスタンスクラス：db.t3.medium
マルチAZ配置：Auroraレプリカを作成しない
VPC：IsystkVpc
サブネットグループ：rdsのつくもの
パブリックアクセス：なし
VPCセグメントグループ：database を選択（default は削除）
AZ：指定なし
データベースポート：3306
データベース認証：パスワード認証
最初のデータベース：sample
上記以外はデフォルトのまま
```


## バックエンド用の環境を構築する

#### ECSサービスから接続する為のVPCエンドポイント(有料)を作成する
VPC → エンドポイント → エンドポイントを作成

-「aws ecr get-login-password」コマンドなどのECR APIの呼び出しに利用されるVPCエンドポイント
```text
名前タグ：isystk-vpce-ecr-api
com.amazonaws.ap-northeast-1.ecr.api
サブネット：「egress」と名前がつくものを選択
セキュリティグループ：「egress」と名前がつくものを選択
上記以外はデフォルトのまま
```

-「docker image push」コマンドなどのDockerクライアントコマンドの呼び出しに利用されるVPCエンドポイント
```text
名前タグ：isystk-vpce-ecr-dkr
com.amazonaws.ap-northeast-1.ecr.dkr
サブネット：「egress」と名前がつくものを選択
セキュリティグループ：「egress」と名前がつくものを選択
上記以外はデフォルトのまま
```

- Dockerイメージの取得に利用されるVPCエンドポイント
```text
名前タグ：isystk-vpce-s3
com.amazonaws.ap-northeast-1.s3
Gateway
ルートテーブル：isystk-route-app
上記以外はデフォルトのまま
```

- Fagateのログの転送経路に利用されるVPCエンドポイント
```text
名前タグ：isystk-vpce-logs
com.amazonaws.ap-northeast-1.logs
サブネット：「egress」と名前がつくものを選択
セキュリティグループ：「egress」と名前がつくものを選択
上記以外はデフォルトのまま
```

#### ECSからALBのBlue/Greenデプロイメントを利用するためのIAMロールを作成する
IAM → ロール → ロールを作成
```text
ユースケース：「CodeDeploy - ECS」
ロール名：ecsCodeDeployRole
上記以外はデフォルトのまま
```

#### CLIからFargateコンテナにシェルでアクセスするためのIAMロールを作成する
IAM → ロール → ロールを作成
```text
ポリシーの名前：isystk-Fargateaccess
ポリシーのJSON：fargate_access.json
```
IAM → ポリシー → ポリシーを作成
```text
ユースケース：Elastic Container Service Task
ロールの名前：isystk-Fargateaccess
ロールに適用するポリシー：isystk-Fargateaccess
上記以外はデフォルトのまま
```


#### バックエンド用のECSを作成する

ロードバランサーの作成
```text
名前：nextjs-nestjs-graphql-backend-alb-internal
スキーム：内部(Internal)
AZ：「container」と名前のつくもの
セキュリティグループ：internal
上記以外はデフォルトのまま
```

ターゲットグループ1
```text
種類：IP addresses
名前：nextjs-nestjs-graphql-backend-tg-blue
パス：/
ポート：http:9000
上記以外はデフォルトのまま
```

ターゲットグループ2
```text
種類：IP addresses
名前：nextjs-nestjs-graphql-backend-tg-green
パス：/
ポート：http:10080
上記以外はデフォルトのまま
```

セキュリティグループの変更
```text
名前：innternal
インバウンドのルールに、10080ポートを追加
セキュリティグループ：management
上記以外はデフォルトのまま
```

タスク定義の作成
```text
Fargate
名前：nextjs-nestjs-graphql-backend-def
タスクロール：isystk-Fargateaccess
タスクメモリ：1GB
タスクCPU：0.5vCPU
コンテナ名：app
イメージ：004796740041.dkr.ecr.ap-northeast-1.amazonaws.com/nextjs-nestjs-graphql-backend:latest
メモリ：ソフト制限 512M
ポートマッピング：9000
CPUユニット数：256
環境変数：DATABASE_URL=mysql://root:password@nextjs-nestjs-graphql-db-cluster.cluster-cqzuhfxnig0a.ap-northeast-1.rds.amazonaws.com:3306/sample
上記以外はデフォルトのまま
```

ECSクラスターの作成
```text
テンプレート：ネットワーキングのみ
名前：nextjs-nestjs-graphql-backend-cluster
Container Insights を有効(有料)にする
上記以外はデフォルトのまま
```

サービスの作成(ロードバランサーあり)
```text
起動タイプ：Fargate
タスク定義：nextjs-nestjs-graphql-backend-dev
クラスター：nextjs-nestjs-graphql-backend-cluster
サービス名：nextjs-nestjs-graphql-backend-service
タスクの数：2
デプロイメントタイプ：Blue/Green デプロイメント
CodeDeploy のサービスロール：ecsCodeDeployRole
サブネット：「container」と名前のつくものを２つ
セキュリティグループ：「container」と名前のつくもの
パブリック IP の自動割り当て：Disabled
ヘルスチェックの猶予期間：120
Application Load Balancer
ロードバランサー名：nextjs-nestjs-graphql-backend-alb-internal
コンテナ名ポート：app:80:9000
ロードバランサーに追加→
ポロダクションリスナーポート：80
テストリスナーポート：10080
ターゲットグループ 1 の名前：nextjs-nestjs-graphql-backend-tg-blue
ターゲットグループ 2 の名前：nextjs-nestjs-graphql-backend-tg-green
サービスの検出の統合の有効化
サービスの検出名：nextjs-nestjs-graphql-backend-service
DNS レコード型：A
TTL：60
上記以外はデフォルトのまま
```

## フロントエンド用の環境を構築する

#### フロントエンド用のALBとECSを作成する
CloudFormation → スタック → スタックの作成
- フロントエンド用のECS Cluster
- フロントエンド用のALBやターゲットグループ
- フロントエンド用のCloudWatchロググループ
```text
テンプレートの準備：テンプレートの準備完了
テンプレートの指定：テンプレートファイルのアップロード
ファイル選択：cloudformations/frontend.cf.yml
スタック名： nextjs-nestjs-graphql-frontend
ALBSecurityGroupId：「igress」と名前のつくもの
ALBSubnetId1：「igress-1a」
ALBSubnetId2：「igress-1c」
BackendHost：バックエンドALBのDNS名
VpcId：「IsystkVpc」
上記以外はデフォルトのまま
```

#### フロントエンド用のECSタスクを実行する

クラスター → nextjs-nestjs-graphql-frontend-cluster → 新しいタスクの実行

```text
起動タイプ：Fargate
オペレーティングシステムファミリー：Linux
タスク定義：nextjs-nestjs-graphql-frontend-def
クラスター：nextjs-nestjs-graphql-frontend-cluster
タスクの数：1
タスクグループ：空のまま
クラスターVPC：isystkVpc
サブネット：「container」と名前のつくものを２つ
セキュリティグループ：「front-container」と名前のつくもの
パブリック IP の自動割り当て：Disabled
上記以外はデフォルトのまま
```

## 起動したECSタスクのプライベートIPをターゲットグループに紐付ける
EC2 → Target groups → isystk-tg-nextjs-nestjs-graphql-frontend → Register targets
```text
Network：isystkVpc
IP address：起動中のECSタスクのプライベートIP
「Include as pending below」を押してPendingに追加
上記以外はデフォルトのまま
```

ブラウザからフロントエンド用ALBのDNSにアクセスして表示してみる
http://isystk-alb-ingress-nextjs-nestjs-graphql-frontend-3550701.ap-northeast-1.elb.amazonaws.com


