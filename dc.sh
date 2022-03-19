#! /bin/bash

DOCKER_HOME=./docker
DOCKER_COMPOSE="docker-compose -f $DOCKER_HOME/docker-compose.yml"

function usage {
    cat <<EOF
$(basename ${0}) is a tool for ...

Usage:
  $(basename ${0}) [command] [<options>]

Options:
  stats|st                 Dockerコンテナの状態を表示します。
  init                     Dockerコンテナ・イメージ・生成ファイルの状態を初期化します。
  start                    すべてのDaemonを起動します。
  stop                     すべてのDaemonを停止します。
  mysql login              MySQLデータベースにログインします。
  mysql export <PAHT>      MySQLデータベースのdumpファイルをエクスポートします。
  mysql import <PAHT>      MySQLデータベースにdumpファイルをインポートします。
  mysql restart            MySQLデータベースを再起動します。
  server login             Nest.jsのサーバーにログインします。
  server start             Nest.jsを起動します。
  prisma studio            Prisma Studio を起動します。
  prisma migrate           Prisma の Migrate を実行します。
  --version, -v     バージョンを表示します。
  --help, -h        ヘルプを表示します。
EOF
}

function version {
    echo "$(basename ${0}) version 0.0.1 "
}

case ${1} in
    stats|st)
        docker container stats
    ;;

    init)
        # 停止＆削除（コンテナ・イメージ・ボリューム）
        pushd $DOCKER_HOME
        docker-compose down --rmi all --volumes
        rm -Rf ./mysql/logs && mkdir ./mysql/logs && chmod 777 ./mysql/logs
        popd
    ;;

    start)
        $DOCKER_COMPOSE up -d
    ;;
    
    stop)
        pushd $DOCKER_HOME
        docker-compose down
        popd
    ;;

    mysql)
      case ${2} in
          login)
              mysql -u user -ppassword -h 127.0.0.1 sample
          ;;
          export)
              mysqldump --skip-column-statistics -u root -h 127.0.0.1 -A > ${3}
          ;;
          import)
              mysql -u root -h 127.0.0.1 --default-character-set=utf8mb4 < ${3}
              $DOCKER_COMPOSE restart mysql
          ;;
          restart)
              $DOCKER_COMPOSE restart mysql
          ;;
          *)
              usage
          ;;
      esac
    ;;

    prisma)
      case ${2} in
          studio)
              pushd backend
              nestjs npx prisma studio
              popd
          ;;
          migrate)
              pushd backend
              nestjs npx prisma migrate dev --name post
              popd
          ;;
          *)
              usage
          ;;
      esac
    ;;
    
    help|--help|-h)
        usage
    ;;

    version|--version|-v)
        version
    ;;
    
    *)
        echo "[ERROR] Invalid subcommand '${1}'"
        usage
        exit 1
    ;;
esac


