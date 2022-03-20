         ___        ______     ____ _                 _  ___  
        / \ \      / / ___|   / ___| | ___  _   _  __| |/ _ \ 
       / _ \ \ /\ / /\___ \  | |   | |/ _ \| | | |/ _` | (_) |
      / ___ \ V  V /  ___) | | |___| | (_) | |_| | (_| |\__, |
     /_/   \_\_/\_/  |____/   \____|_|\___/ \__,_|\__,_|  /_/ 
 ----------------------------------------------------------------- 


Hi there! Welcome to AWS Cloud9!

To get started, create some files, play with the terminal,
or visit https://docs.aws.amazon.com/console/cloud9/ for our documentation.

Happy coding!

## Cloud9の環境を作成する
```text
名前：isystk-dev
Subnet：management-1a
上記以外はデフォルトのまま
```

Cloud9のEC2インスタンスのセキュリティグループに managementを追加する（default は残しておく）

IAMロールを作成する
```text
ポリシーの名前：isystk-AccessingECRRepositoryPolicy
ポリシーのJSON：cloud9_ecr_policy.json
ロールの名前：isystk-cloud9-role
ロールに適用するポリシー：isystk-AccessingECRRepositoryPolicy
```
Cloud9のEC2インスタンスに、上記のIAMロールを適用する

Cloud9の設定画面から、AMTCを無効にする(←有効のままにしないとAWS認証が通らない？)

Cloud9でDockerイメージを生成してECRにプッシュする
```
# 拡張作業ディレクトリに移動
$ cd /home/ec2-user/environment
$ pwd
/home/ec2-user/environment

$ git clone https://github.com/isystk/nextjs-nestjs-graphql.git
$ cd ./nextjs-nestjs-graphql

# EBSのサイズを拡張
$ df -h
/dev/xvda1       10G  9.7G  302M  98% /
$ chmod 755 ./aws/cloud9/resize.sh
$ ./aws/cloud9/resize.sh 30
$ df -h
/dev/xvda1       30G  9.8G   21G  33% /


# Node.js のバージョンを変更
$ node -v
v14.18.1
$ npm i -g nvm
$ nvm install v16.14.0
$ nvm alias default v16.14.0
$ node -v
v16.14.0
$ npm i -g yarn

# アプリケーションをビルドする
$ cd backend
$ yarn
$ yarn build

# 不要なDockerイメージを削除
$ docker image rm -f $(docker image ls -q)
$ docker image ls

# Dockerイメージを作成
$ docker image build -t nextjs-nestjs-graphql-backend:v1 .
$ AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query 'Account' --output text)
$ docker image tag nextjs-nestjs-graphql-backend:v1 ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/nextjs-nestjs-graphql-backend:v1
$ docker image ls
REPOSITORY                                                        TAG                 IMAGE ID       CREATED         SIZE
004796740041.dkr.ecr.ap-northeast-1.amazonaws.com/nextjs-nestjs-graphql-backend   v1                  6cb9b4b9d269   3 minutes ago   28.3MB

# ECRにログインしてコンテナイメージをPush
$ aws ecr --region ap-northeast-1 get-login-password | docker login --username AWS --password-stdin https://${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/nextjs-nestjs-graphql-backend
$ docker image push ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/nextjs-nestjs-graphql-backend:v1


# 作成したDockerイメージを削除しておく
$ docker image rm -f $(docker image ls -q)
$ docker image ls

# ECRからコンテナイメージを取得する
$ docker image pull ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/nextjs-nestjs-graphql-backend:v1

# Dockerコンテナを起動する
$ docker container run -d -e DATABASE_URL=mysql://root:password@nextjs-nestjs-graphql-db-cluster.cluster-cqzuhfxnig0a.ap-northeast-1.rds.amazonaws.com:3306/sample -p 9000:9000 ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/nextjs-nestjs-graphql-backend:v1
$ docker container ls
CONTAINER ID   IMAGE                                                                 COMMAND   CREATED          STATUS          PORTS                                   NAMES
53f64e2b8d72   004796740041.dkr.ecr.ap-northeast-1.amazonaws.com/nextjs-nestjs-graphql-backend:v1   "/main"   16 seconds ago   Up 15 seconds   0.0.0.0:9000->9000/tcp, :::9000->9000/tcp   kind_bardeen

# 起動したAPIサーバーにリスクエストする
$ date; curl http://localhost:9000
Hello World!

# RDS への接続を確認する
$  mysql -u root -ppassword -h nextjs-nestjs-graphql-db-cluster.cluster-cqzuhfxnig0a.ap-northeast-1.rds.amazonaws.com sample

# Prismaをマイグレーションしてテーブルを作成する
$ cp .env.example .env
# .env に記載の接続情報を編集してから以下を実行する
$ npx prisma migrate dev --name post

```
