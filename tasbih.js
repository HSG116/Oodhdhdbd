function تهيئة_المسبحة() {
    let tasbe7at = ["سبحـان الله", "الحمد لله", "لا إله إلا الله", "الله اكبر"];
    let clicks = 10;
    let n = 0;
    let tries = 0;
    let score = 0;

    function count() {
        const tasbe7Element = document.getElementById("tasbe7");
        const scoreElement = document.getElementById("score");
        const textElement = document.getElementById("text");

        // تأثير النقر
        tasbe7Element.style.textShadow = "1px 0 4px rgba(86,170,255,0.9)";
        tasbe7Element.style.marginTop = "22px";
        setTimeout(function () {
            tasbe7Element.style.marginTop = "20px";
            tasbe7Element.style.textShadow = "none";
        }, 80);

        if (n >= clicks) {
            n = 0;
            tries++;
            if (tries > 3) {
                textElement.textContent = "ابدء التسبيح";
                score = 0;
                tries = 0;
            } else {
                textElement.textContent = "ابدء التسبيح";
            }
        } else {
            n++;
            score++;
            if (n === 1) textElement.textContent = tasbe7at[Math.floor(Math.random() * tasbe7at.length)];
        }

        scoreElement.textContent = `score: ${score}`;
    }

    document.getElementById("circle").addEventListener("click", count);
}
