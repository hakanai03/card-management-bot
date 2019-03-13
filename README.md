# discordのチャットからtrelloへカードをつくるbot

## じゅんび

```bash
yarn install
touch .env
```

.envファイルに以下の情報を埋める

```
DISCORD_USER_TOKEN=""
TRELLO_API_KEY=""
TRELLO_API_TOKEN=""
TRELLO_LIST_ID=""
```

## つかいかた

```bash
node src/index.js
```

トークンの取得は以下参考
https://liginc.co.jp/370260
