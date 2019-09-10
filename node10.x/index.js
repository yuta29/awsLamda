exports.handler = async(event) => {
    console.log("1")
    // TODO implement

    const https = require('https');

    //メッセージ設定
    var data = JSON.stringify({
        "text": "こんばんわ"
    });

    //オプション情報設定
    var options = {
        hostname: 'hooks.slack.com',
        port: 443,
        path: '/services/TGF7UF2QK/BMRFS7WLS/h9zQJsileLIsDN33Qekqh65O',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data)
        }
    };

    //リクエスト
    var req = https.request(options, (res) => {
        if (res.statusCode === 200) {
            console.log("2")
            console.log("OK:" + res.statusCode);
        }
        else {
            console.log("3")
            console.log("Status Error:" + res.statusCode);
        }
    });

    //そもそもなエラー時
    req.on('error', (e) => {
        console.log("4")
        console.error(e);
    });

    //データ送信
    req.write(data);
    console.log("5")
    //終わり
    req.end();
};
