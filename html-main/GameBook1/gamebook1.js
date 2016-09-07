/**
 * START : 9.6.2016
 * LAST  : 9.7.2016
 * WebGame
 * GameBook1
 * Yusuke Kato
 * ＜ゲーム説明＞
 * 各ステージで選択肢３つから行動を選び、それによりイベントが起こる
 * ステージは連続ではなくて、イベントによってどのステージに行くか変わる
 * クリア条件を満たせばクリア
 * ゲームオーバーもある
 * エンド分岐（good,normal,bad）計３つ、増減あり
 * ステージは１０つ、各ステージに選択肢３つ、しかしイベントの数は合計３０ではない。
 * フラグを立てると、同じステージの同じ選択肢を選んでも異なるイベントが起こることもある。
 */

/*
 *　問題点
 *　シングルとダブルが混じってる(保留)
 *  console.logは残すことになる（保留）
 */

(function () {
    'use strict';
    const flag1Button = document.getElementById('flag1');
    const flag2Button = document.getElementById('flag2');
    const flag3Button = document.getElementById('flag3');
    const GoButton = document.getElementById('Go');
    var flag = 0;//選択肢
    var stage = 0;//ステージ
    var onflag = false;//ボタンを押したかどうか
    var HP = 10;
    var pp1 = 5;//player parameter
    var pp2 = 4;
    var money = 7;//財産


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
    GoButton.onclick = () => {
        onflag = true;
        Eventfunc();
        storyfunc();
        stageChange();
    }
    /* イベント、テキスト、ステージ管理 */
    function Eventfunc() {
        switch (stage) {//ケースは１０通り？（選択肢により）
            case 0://ステージ１
                 document.getElementById("stage").textContent = "STAGE:1 --- 主人公ティンク ---";
                 document.getElementById("text").textContent = "ティンクとは何か";
                 document.getElementById("text1").textContent = "1:男";
               　document.getElementById("text2").textContent = "2:魔王の名";
                 document.getElementById("text3").textContent = "3:天高く舞う金色の鳥";
                 stage = 1;
                 break;
            case 1://ステージ２
                switch (flag) {//選択肢３つ
                    case 1:
                        document.getElementById("stage").textContent = "STAGE:2-1 --- 旅の始まり ---";
                        document.getElementById("text").textContent = "ティンクは旅に出た。目的はない。";
                        document.getElementById("text1").textContent = "1:とりあえず街に入る";
                        document.getElementById("text2").textContent = "2:森に入って狩りをする";
                        document.getElementById("text3").textContent = "3:あの橋を渡る";
                        console.log("stage:1,flag:1");
                        document.getElementById('name').textContent = "ティンク";
                        stage = 2;
                        break;
                    case 2:
                        document.getElementById("stage").textContent = "STAGE:2-2 --- 魔王登場 ---";
                        document.getElementById("text").textContent = "魔王ティンクは世界征服を企む。";
                        document.getElementById("text1").textContent = "1:力で支配する";
                        document.getElementById("text2").textContent = "2:金に物を言わせる";
                        document.getElementById("text3").textContent = "3:心で語りかける";
                        console.log("stage:1,flag:2");
                        document.getElementById('name').textContent = "ティンク（魔王）";
                        HP = 99999;
                        pp1 = 99999;
                        document.getElementById('hp-text').textContent = "体力 :" + HP;
                        document.getElementById('ef-text').textContent = "実力 :" + pp1;
                        stage = 61;
                        break;
                    case 3:
                        document.getElementById("stage").textContent = "STAGE:2-3 --- はばたく希望 ---";
                        document.getElementById("text").textContent = "金色の鳥ティンクは天高く舞い上がった！！";
                        document.getElementById("text1").textContent = "1:そのまま太陽に突っ込む！！";
                        document.getElementById("text2").textContent = "2:あの広大な海へ飛び込む！！";
                        document.getElementById("text3").textContent = "3:憎き魔王が住む魔王城へ奇襲をかける！！";
                        console.log("stage:1,flag:3");
                        document.getElementById('name').textContent = "ティンク（鳥）";
                        stage = 78;
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 2://ステージ３
                switch (flag) {
                    case 1:
                        document.getElementById("stage").textContent = "STAGE:3-1 --- 活気あふれる街 ---";
                        document.getElementById("text").textContent = "街は多くの人で賑わっていた。";
                        document.getElementById("text1").textContent = "1:まずは買い物をする";
                        document.getElementById("text2").textContent = "2:カジノで大儲け";
                        document.getElementById("text3").textContent = "3:とりあえず宿屋で休む";
                        console.log("stage:2,flag:1");
                        stage = 3;
                        break;
                    case 2:
                        document.getElementById("stage").textContent = "STAGE:3-2 --- 生きる森 ---";
                        document.getElementById("text").textContent = "暗く静かな森、何か得体のしれない気配を感じる。";
                        document.getElementById("text1").textContent = "1:何も考えず突き進む";
                        document.getElementById("text2").textContent = "2:よく考えて突き進む";
                        document.getElementById("text3").textContent = "3:森の妖精に話しかける";
                        console.log("stage:2,flag:2");
                        stage = 4;
                        break;
                    case 3:
                        document.getElementById("stage").textContent = "STAGE:3-3 --- その橋渡るべからず ---";
                        document.getElementById("text").textContent = "あの今にも落ちそうな朽ちた橋を渡る";
                        document.getElementById("text1").textContent = "1:堂々と歩いて渡る";
                        document.getElementById("text2").textContent = "2:全力で走って渡る";
                        document.getElementById("text3").textContent = "3:叩いてから渡る";
                        console.log("stage:2,flag:3");
                        stage = 5;
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 3://ステージ４
                switch (flag) {
                    case 1:
                        document.getElementById("stage").textContent = "STAGE:4-1 --- 買い物は慎重に ---";
                        document.getElementById("text").textContent = "何を買うか悩む";
                        document.getElementById("text1").textContent = "1:武器";
                        document.getElementById("text2").textContent = "2:食べ物";
                        document.getElementById("text3").textContent = "3:やさしさ";
                        console.log("stage:3,flag:1");
                        break;
                    case 2:
                        document.getElementById("stage").textContent = "STAGE:1 --- 主人公ティンク ---";
                        document.getElementById("text").textContent = "2-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:3,flag:2");
                        break;
                    case 3:
                        document.getElementById("stage").textContent = "STAGE:1 --- 主人公ティンク ---";
                        document.getElementById("text").textContent = "3-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:3,flag:3");
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 4://ステージ４
                switch (flag) {
                    case 1:
                        stage = 98;
                        document.getElementById("text").textContent = "ティンクは鳥となり空高く舞い上がった！！";
                        document.getElementById("text1").textContent = "1:太陽に突っ込む！！";
                        document.getElementById("text2").textContent = "2:海に突っ込む！！";
                        document.getElementById("text3").textContent = "3:魔王城に突っ込む！！";
                        console.log("stage:4,flag:1");
                        break;
                    case 2:
                        document.getElementById("text").textContent = "2-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:4,flag:2");
                        break;
                    case 3:
                        document.getElementById("text").textContent = "3-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:4,flag:3");
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 5://ステージ５
                switch (flag) {
                    case 1:
                        stage = 98;
                        document.getElementById("text").textContent = "ティンクは鳥となり空高く舞い上がった！！";
                        document.getElementById("text1").textContent = "1:太陽に突っ込む！！";
                        document.getElementById("text2").textContent = "2:海に突っ込む！！";
                        document.getElementById("text3").textContent = "3:魔王城に突っ込む！！";
                        console.log("stage:5,flag:1");
                        break;
                    case 2:
                        document.getElementById("text").textContent = "2-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:5,flag:2");
                        break;
                    case 3:
                        document.getElementById("text").textContent = "3-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:5,flag:3");
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 6://ステージ６
                switch (flag) {
                    case 1:
                        stage = 98;
                        document.getElementById("text").textContent = "ティンクは鳥となり空高く舞い上がった！！";
                        document.getElementById("text1").textContent = "1:太陽に突っ込む！！";
                        document.getElementById("text2").textContent = "2:海に突っ込む！！";
                        document.getElementById("text3").textContent = "3:魔王城に突っ込む！！";
                        console.log("stage:6,flag:1");
                        break;
                    case 2:
                        document.getElementById("text").textContent = "2-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:6,flag:2");
                        break;
                    case 3:
                        document.getElementById("text").textContent = "3-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:6,flag:3");
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 7://ステージ7
                switch (flag) {
                    case 1:
                        stage = 98;
                        document.getElementById("text").textContent = "ティンクは鳥となり空高く舞い上がった！！";
                        document.getElementById("text1").textContent = "1:太陽に突っ込む！！";
                        document.getElementById("text2").textContent = "2:海に突っ込む！！";
                        document.getElementById("text3").textContent = "3:魔王城に突っ込む！！";
                        console.log("stage:7,flag:1");
                        break;
                    case 2:
                        document.getElementById("text").textContent = "2-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:7,flag:2");
                        break;
                    case 3:
                        document.getElementById("text").textContent = "3-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:7,flag:3");
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 8://ステージ８
                switch (flag) {
                    case 1:
                        stage = 98;
                        document.getElementById("text").textContent = "ティンクは鳥となり空高く舞い上がった！！";
                        document.getElementById("text1").textContent = "1:太陽に突っ込む！！";
                        document.getElementById("text2").textContent = "2:海に突っ込む！！";
                        document.getElementById("text3").textContent = "3:魔王城に突っ込む！！";
                        console.log("stage:8,flag:1");
                        break;
                    case 2:
                        document.getElementById("text").textContent = "2-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:8,flag:2");
                        break;
                    case 3:
                        document.getElementById("text").textContent = "3-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:8,flag:3");
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 9://ステージ９
                switch (flag) {
                    case 1:
                        stage = 98;
                        document.getElementById("text").textContent = "ティンクは鳥となり空高く舞い上がった！！";
                        document.getElementById("text1").textContent = "1:太陽に突っ込む！！";
                        document.getElementById("text2").textContent = "2:海に突っ込む！！";
                        document.getElementById("text3").textContent = "3:魔王城に突っ込む！！";
                        console.log("stage:9,flag:1");
                        break;
                    case 2:
                        document.getElementById("text").textContent = "2-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:9,flag:2");
                        break;
                    case 3:
                        document.getElementById("text").textContent = "3-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:9,flag:3");
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 10://ステージ１０
                switch (flag) {
                    case 1:
                        stage = 98;
                        document.getElementById("text").textContent = "ティンクは鳥となり空高く舞い上がった！！";
                        document.getElementById("text1").textContent = "1:太陽に突っ込む！！";
                        document.getElementById("text2").textContent = "2:海に突っ込む！！";
                        document.getElementById("text3").textContent = "3:魔王城に突っ込む！！";
                        console.log("stage:10,flag:1");
                        break;
                    case 2:
                        document.getElementById("text").textContent = "2-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:10,flag:2");
                        break;
                    case 3:
                        document.getElementById("text").textContent = "3-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        console.log("stage:10,flag:3");
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
                default://まだ行動を選択していないのにGOボタンを押してしまったとき
                    console.log("Not-Flag");
                    break;
        }
        flag = 0;//入力初期化
        document.getElementById('flag').textContent = "選択：0";
    }
    function storyfunc(){
        if(onflag == true){
            onflag = false;
            switch(stage){
                default:
                    break;
            }
        }
    }
    function stageChange(){
        /* ステージ番号変更 */
        switch (stage) {//ステージ番号表示
            case 1:
                document.getElementById("stage").textContent = "STAGE:1 --- 主人公ティンク ---";
                console.log("STAGE:1");
                break;
            case 2:
                document.getElementById("stage").textContent = "STAGE:2--- 旅の始まり ---";
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
            case 61:
                document.getElementById("stage").textContent = "STAGE:61--- 魔王登場 ---";
                console.log("STAGE:61");
                break;
            default:
                break;
        }
    }
})();
