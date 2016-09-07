/**
 * START : 9.6.2016
 * LAST  : 9.7.2016
 * WebGame
 * GameBook-Like
 * Yusuke Kato
 * ＜ゲーム説明＞
 * 各ステージで選択肢３つから行動を選び、それによりイベントが起こる
 * ステージは連続ではなくて、イベントによってどのステージに行くか変わる
 * クリア条件を満たせばクリア
 */

/*
 *　シングルとダブルが混じってる 
 */

(function () {
    'use strict';
    const flag1Button = document.getElementById('flag1');
    const flag2Button = document.getElementById('flag2');
    const flag3Button = document.getElementById('flag3');
    const GoButton = document.getElementById('Go');
    var flag = 0;//選択肢
    var stage = 1;//ステージ

    flag1Button.onclick = () => {//ボタン１が押された
        flag = 1;
        document.getElementById("flag").textContent = "選択：1";
        console.log("flag = 1");
    }
    flag2Button.onclick = () => {//ボタン２が押された
        flag = 2;
        document.getElementById("flag").textContent = "選択：2";
        console.log("flag = 2");
    }
    flag3Button.onclick = () => {//ボタン３が押された
        flag = 3;
        document.getElementById("flag").textContent = "選択：3";
        console.log("flag = 3");
    }

    GoButton.onclick = () => {//テキストの制御
        switch (flag) {//ケースは３通り（選択肢により）
            case 1://選択肢１
                switch (stage) {
                    case 1://ステージ１
                        document.getElementById("text").textContent = "1-1";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:1,flag:1");
                        break;
                    case 2://ステージ２
                        document.getElementById("text").textContent = "2-1";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:2,flag:1");
                        break;
                    case 3://ステージ３
                        document.getElementById("text").textContent = "3-1";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:3,flag:1");
                        break;
                    case 4://ステージ４
                        document.getElementById("text").textContent = "4-1";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:4,flag:1");
                        break;
                    case 5://ステージ５
                        document.getElementById("text").textContent = "5-1";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:5,flag:1");
                        break;
                    case 6://ステージ６
                        document.getElementById("text").textContent = "6-1";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:6,flag:1");
                        break;
                    case 7://ステージ７
                        document.getElementById("text").textContent = "7-1";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:7,flag:1");
                        break;
                    case 8://ステージ８
                        document.getElementById("text").textContent = "8-1";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:8,flag:1");
                        break;
                    case 9://ステージ９
                        document.getElementById("text").textContent = "9-1";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:9,flag:1");
                        break;
                    case 10://ステージ１０
                        document.getElementById("text").textContent = "10-1";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:10,flag:1");
                        break;
                    default:
                        console.lot("Not-Stage");
                        stage = 0;
                        break;
                }
                break;
            case 2://選択肢２
                switch (stage) {
                    case 1://ステージ１
                        document.getElementById("text").textContent = "1-2";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:1,flag:2");
                        break;
                    case 2://ステージ２
                        document.getElementById("text").textContent = "2-2";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:2,flag:2");
                        break;
                    case 3://ステージ３
                        document.getElementById("text").textContent = "3-2";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:3,flag:2");
                        break;
                    case 4://ステージ４
                        document.getElementById("text").textContent = "4-2";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:4,flag:2");
                        break;
                    case 5://ステージ５
                        document.getElementById("text").textContent = "5-2";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:5,flag:2");
                        break;
                    case 6://ステージ６
                        document.getElementById("text").textContent = "6-2";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:6,flag:2");
                        break;
                    case 7://ステージ７
                        document.getElementById("text").textContent = "7-2";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:7,flag:2");
                        break;
                    case 8://ステージ８
                        document.getElementById("text").textContent = "8-2";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:8,flag:2");
                        break;
                    case 9://ステージ９
                        document.getElementById("text").textContent = "9-2";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:9,flag:2");
                        break;
                    case 10://ステージ１０
                        document.getElementById("text").textContent = "10-2";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:10,flag:2");
                        break;
                    default:
                        console.log("Not-Stage");
                        stage = 0;
                        break;
                }
                break;
            case 3://選択肢３
                switch (stage) {
                    case 1://ステージ１
                        document.getElementById("text").textContent = "1-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:1,flag:3");
                        break;
                    case 2://ステージ２
                        document.getElementById("text").textContent = "2-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:2,flag:3");
                        break;
                    case 3://ステージ３
                        document.getElementById("text").textContent = "3-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:3,flag:3");
                        break;
                    case 4://ステージ４
                        document.getElementById("text").textContent = "4-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:4,flag:3");
                        break;
                    case 5://ステージ５
                        document.getElementById("text").textContent = "5-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:5,flag:3");
                        break;
                    case 6://ステージ６
                        document.getElementById("text").textContent = "6-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:6,flag:3");
                        break;
                    case 7://ステージ７
                        document.getElementById("text").textContent = "7-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:7,flag:3");
                        break;
                    case 8://ステージ８
                        document.getElementById("text").textContent = "8-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:8,flag:3");
                        break;
                    case 9://ステージ９
                        document.getElementById("text").textContent = "9-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:9,flag:3");
                        break;
                    case 10://ステージ１０
                        document.getElementById("text").textContent = "10-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:10,flag:3");
                        break;
                    default:
                        console.log("Not-Stage");
                        stage = 0;
                        break;
                }
                break;
            default://まだ行動を選択していないのにGOボタンを押してしまったとき
                console.log("Not-Flag");
                break;
        }
        flag = 0;//入力初期化
        document.getElementById('flag').textContent = "選択：0";
        //stage++;はここに書くとflagが立っていない時でも
        //stageが進んでしまうのでここには書けない
        /*  */
        /* ステージ番号変更 */
        switch (stage) {//ステージ番号表示
            case 1:
                document.getElementById("stage").textContent = "STAGE:1";
                console.log("STAGE:1");
                break;
            case 2:
                document.getElementById("stage").textContent = "STAGE:2";
                console.log("STAGE:2");
                break;
            case 3:
                document.getElementById("stage").textContent = "STAGE:3";
                console.log("STAGE:3");
                break;
            case 4:
                document.getElementById("stage").textContent = "STAGE:4";
                console.log("STAGE:4");
                break;
            case 5:
                document.getElementById("stage").textContent = "STAGE:5";
                console.log("STAGE:5");
                break;
            case 6:
                document.getElementById("stage").textContent = "STAGE:6";
                console.log("STAGE:6");
                break;
            case 7:
                document.getElementById("stage").textContent = "STAGE:7";
                console.log("STAGE:7");
                break;
            case 8:
                document.getElementById("stage").textContent = "STAGE:8";
                console.log("STAGE:8");
                break;
            case 9:
                document.getElementById("stage").textContent = "STAGE:9";
                console.log("STAGE:9");
                break;
            case 10:
                document.getElementById("stage").textContent = "STAGE:10";
                console.log("STAGE:10");
                break;
            default:
                break;
        }
    }
})();