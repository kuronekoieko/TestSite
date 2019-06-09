document.onkeydown = keydown;
var x = 0;
var ball;
var isJump = false;
var jumpingTime = 0;
var deltaTime = 1;
var a = 0.1;
var maxJumpY = 1000  ;

function OnClick() {
    alert("ボタンをおした");
    for (; ;) {
        window.alert("　∧_∧　ババババ\n（ ・ω・)=つ≡つ\n（っ ≡つ=つ\n`/　　)\n(ノΠＵ\n何回閉じても無駄ですよ～ww\nm9（＾Д＾）プギャー！！")
    }
}

window.onload = function Start() {
    // ページ読み込み時に実行したい処理
    ball = document.getElementById('ball');
    x = 500;

}

function keydown() {

    switch (event.keyCode) {
        case 37://左
            x -= 10;
            break;
        case 38://上

            break;
        case 39://右
            x += 10;
            break;
        case 40://下

            break;
        case 32://スペース
            isJump = true;

        default:
            break;
    }

    ball.style.left = x + "px";
}

function Update() {
    if (isJump) {
        jumpingTime += deltaTime;
        var y = -470 + a * jumpingTime * (2 * Math.sqrt(maxJumpY) - jumpingTime);
        if (y < -470) {
            y = -470;
            isJump = false;
            jumpingTime = 0;
        }
        ball.style.bottom = y + "px";

    }


}
setInterval(Update, deltaTime);