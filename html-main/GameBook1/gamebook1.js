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
    var stage = 1;//ステージ
    var onflag = false;//ボタンを押したかどうか
    var flagCourage = 0;//勇気
    var flagBrain = 0;//頭脳
    var flagMoney = 0;//財力
    var HP = 10;
    var pp1 = 1;//player parameter 1
    var pp2 = 1;//player parameter 2


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
    }
    /* イベント、テキスト、ステージ管理 */
    function Eventfunc() {
        switch (stage) {//ケースは１０通り？（選択肢により）
            case 1://ステージ１
                 document.getElementById("stage").textContent = "STAGE:1 --- 主人公ティンク ---";
                 document.getElementById("text").textContent = "ティンクとは何者なのか";
                 document.getElementById("text1").textContent = "1:男";
               　document.getElementById("text2").textContent = "2:魔王の名";
                 document.getElementById("text3").textContent = "3:天高く舞う金色の鳥";
                 stage = 2;
                 break;
            case 2://ステージ２
                switch (flag) {//選択肢３つ
                    case 1:
                        document.getElementById("stage").textContent = "STAGE:2-1 --- 旅の始まり ---";
                        document.getElementById("text").textContent = "ティンクは旅に出た。目的はない。";
                        document.getElementById("text1").textContent = "1:とりあえず街に入る";
                        document.getElementById("text2").textContent = "2:森に入って狩りをする";
                        document.getElementById("text3").textContent = "3:あの橋を渡る";
                        document.getElementById('name').textContent = "ティンク";
                        stage = 3;
                        break;
                    case 2:
                        document.getElementById("stage").textContent = "STAGE:2-2 --- 魔王登場 ---";
                        document.getElementById("text").textContent = "魔王ティンクは世界征服を企む。";
                        document.getElementById("text1").textContent = "1:力で支配する";
                        document.getElementById("text2").textContent = "2:金に物を言わせる";
                        document.getElementById("text3").textContent = "3:心で語りかける";
                        document.getElementById('name').textContent = "ティンク（魔王）";
                        HP = 99999;
                        pp1 = 99999;
                        document.getElementById('hp-text').textContent = "体力 :" + HP;
                        document.getElementById('pptext').textContent = "実力 :" + pp1;
                        stage = 0;
                        break;
                    case 3:
                        document.getElementById("stage").textContent = "STAGE:2-3 --- はばたく希望 ---";
                        document.getElementById("text").textContent = "金色の鳥ティンクは天高く舞い上がった！！";
                        document.getElementById("text1").textContent = "1:そのまま太陽に突っ込む！！";
                        document.getElementById("text2").textContent = "2:あの広大な海へ飛び込む！！";
                        document.getElementById("text3").textContent = "3:憎き魔王が住む魔王城へ奇襲をかける！！";
                        document.getElementById('name').textContent = "ティンク（鳥）";
                        HP = 5000;
                        documnet.getElementById("hp-text").textContent = "体力 :" + HP;
                        document.getElementById('pp1text').textContent = "翼力 : 78000";
                        document.getElementById('pp2text').textContent = "速度 : 3000m/s"
                        stage = 0;
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 3://ステージ３
                switch (flag) {
                    case 1:
                        document.getElementById("stage").textContent = "STAGE:3-1 --- 活気あふれる街 ---";
                        document.getElementById("text").textContent = "街は多くの人で賑わっていた。";
                        document.getElementById("text1").textContent = "1:まずは買い物をする";
                        document.getElementById("text2").textContent = "2:カジノで大儲け";
                        document.getElementById("text3").textContent = "3:とりあえず宿屋で休む";
                        stage = 4;
                        break;
                    case 2:
                        document.getElementById("stage").textContent = "STAGE:3-2 --- 生きる森 ---";
                        document.getElementById("text").textContent = "暗く静かな森、何か得体のしれない気配を感じる。";
                        document.getElementById("text1").textContent = "1:何も考えず突き進む";
                        document.getElementById("text2").textContent = "2:よく考えて突き進む";
                        document.getElementById("text3").textContent = "3:森の妖精に話しかける";
                        stage = 0;
                        break;
                    case 3:
                        document.getElementById("stage").textContent = "STAGE:3-3 --- その橋渡るべからず ---";
                        document.getElementById("text").textContent = "あの今にも落ちそうな朽ちた橋を渡る";
                        document.getElementById("text1").textContent = "1:堂々と歩いて渡る";
                        document.getElementById("text2").textContent = "2:全力で走って渡る";
                        document.getElementById("text3").textContent = "3:叩いてから渡る";
                        stage = 0;
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 4://ステージ４
                switch (flag) {
                    case 1:
                        document.getElementById("stage").textContent = "STAGE:4-1 --- 買い物は慎重に ---";
                        document.getElementById("text").textContent = "必要な物がたくさんあり、何を買うか悩む";
                        document.getElementById("text1").textContent = "1:武器";
                        document.getElementById("text2").textContent = "2:食べ物";
                        document.getElementById("text3").textContent = "3:やさしさ";
                        stage = 5;
                        break;
                    case 2:
                        document.getElementById("stage").textContent = "STAGE:4-2 --- 大金持ちの夢 ---";
                        document.getElementById("text").textContent = "カジノで大儲けはずっと夢だった。";
                        document.getElementById("text1").textContent = "すべては金で解決できる。";
                        document.getElementById("text2").textContent = "金こそが人生だ！！";
                        document.getElementById("text3").textContent = "人生を賭け、ティンクは勝負に出る！！";
                        break;
                    case 3:
                        document.getElementById("stage").textContent = "STAGE:4-3 --- 時には一休み ---";
                        document.getElementById("text").textContent = "街で一番安い宿屋を見つけた。";
                        document.getElementById("text1").textContent = "体力が１０回復した！！";
                        document.getElementById("text2").textContent = "";
                        document.getElementById("text3").textContent = "旅を続けることにしよう";
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 5://ステージ５
                switch (flag) {
                    case 1:
                        document.getElementById("stage").textContent = "STAGE:5-1 --- 武器とは魂である ---";
                        document.getElementById("text").textContent = "自分に合った武器は何だろうか";
                        document.getElementById("text1").textContent = "1:刃渡り３メートルの剣";
                        document.getElementById("text2").textContent = "2:投げる用のハンマー";
                        document.getElementById("text3").textContent = "3:レーザービーム";
                        stage = 6;
                        break;
                    case 2:
                        document.getElementById("stage").textContent = "STAGE:5-2 --- 食べ物は重要 ---";
                        document.getElementById("text").textContent = "全部おいしそうだ、何を食べるか";
                        document.getElementById("text1").textContent = "1:でかい焼き魚";
                        document.getElementById("text2").textContent = "2:生肉２キログラム";
                        document.getElementById("text3").textContent = "3:トマト１ダース";
                        break;
                    case 3:
                        document.getElementById("stage").textContent = "STAGE:5-3 --- 優しさ屋 ---";
                        document.getElementById("text").textContent = "優しさ屋「優しさをお前に売ってやろう」";
                        document.getElementById("text1").textContent = "ティンクは優しさを手に入れた。しかし、代わりに何かを失った。";
                        document.getElementById("text2").textContent = "何かを手に入れるには何かを犠牲にしなくてはならない。";
                        document.getElementById("text3").textContent = "この教訓を胸に秘め、ティンクは旅を続ける。";
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 6://ステージ６
                switch (flag) {
                    case 1:
                        document.getElementById("stage").textContent = "STAGE:6-1 --- 心にも剣を ---";
                        document.getElementById("text").textContent = "ティンクは鳥となり空高く舞い上がった！！";
                        document.getElementById("text1").textContent = "1:太陽に突っ込む！！";
                        document.getElementById("text2").textContent = "2:海に突っ込む！！";
                        document.getElementById("text3").textContent = "3:魔王城に突っ込む！！";
                        break;
                    case 2:
                        document.getElementById("stage").textContent = "STAGE:6-2 --- 飛び道具はこすい ---";
                        document.getElementById("text").textContent = "2-3";
                        document.getElementById("text1").textContent = "1:";
                        document.getElementById("text2").textContent = "2:";
                        document.getElementById("text3").textContent = "3:";
                        break;
                    case 3:
                        document.getElementById("stage").textContent = "STAGE:6-3 --- これが最強武器 ---";
                        document.getElementById("text").textContent = "レーザービーム";
                        document.getElementById("text1").textContent = "世界最強武器";
                        document.getElementById("text2").textContent = "ティンクはこれで世界を支配することにした。";
                        document.getElementById("text3").textContent = "ティンクは魔王となった。";
                        break;
                    default:
                        console.log("Not-Stage");
                        break;
                }
                break;
            case 7://ステージ６
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
            case 8://ステージ7
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
            case 9://ステージ８
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
            case 10://ステージ９
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
            case 11://ステージ１０
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
})();
