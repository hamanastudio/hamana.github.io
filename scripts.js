// ハンバーガーメニューの表示/非表示を切り替える
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const dropdown = document.getElementById('hamburger-dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});

document.getElementById('see-more-link').addEventListener('click', function() {
    // 画像の表示を切り替え
    var additionalImages = document.getElementById('additional-images');
    if (additionalImages.style.display === "none" || additionalImages.style.display === "") {
        additionalImages.style.display = "flex"; // 画像を表示
        this.innerText = "もっと少なく見る"; // リンクテキストを変更
    } else {
        additionalImages.style.display = "none"; // 画像を非表示
        this.innerText = "もっと見る"; // リンクテキストを元に戻す
    }
});

hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("active");
});


const hamburger = document.getElementById('hamburger-menu');
const dropdown = document.getElementById('hamburger-dropdown');

hamburger.addEventListener('click', function (e) {
    dropdown.classList.toggle('open');
    e.stopPropagation(); // ハンバーガークリックが body の click をトリガーしないように
});

document.body.addEventListener('click', function () {
    dropdown.classList.remove('open');
});

// ドロップダウン自体のクリックでは閉じないように
dropdown.addEventListener('click', function (e) {
    e.stopPropagation();
});

// スクロールイベントリスナー
window.addEventListener('scroll', function() {
    const typewriterElement = document.querySelector('.typewriter');
    const rect = typewriterElement.getBoundingClientRect();

    // 要素が画面に現れたときにアニメーションを開始
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        typewriterElement.classList.add('animate');
    } else {
        typewriterElement.classList.remove('animate');
    }


});

