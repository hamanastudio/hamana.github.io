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


document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.querySelector('.header-container');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const logo = document.querySelector('.logo');
    const dropdown = document.getElementById('hamburger-dropdown');

    // ハンバーガーメニューのクリックイベント
    hamburgerMenu.addEventListener('click', function (e) {
        e.stopPropagation(); // 親のクリックイベントが発火しないように
        dropdown.classList.toggle('open'); // ドロップダウンを開閉
    });

    // ロゴのクリックイベント
    logo.addEventListener('click', function (e) {
        e.stopPropagation(); // 親のクリックイベントが発火しないように
    });

    // ヘッダー以外の部分をクリックした場合にトップに戻る
    document.body.addEventListener('click', function() {
        // ドロップダウンが開いている場合は閉じる
        if (dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
        }
        // スムーズにトップへスクロール
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ドロップダウン自体をクリックしたときは親のクリックイベントが発火しないように
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});



// スクロールイベントで要素がビューポートに入ったときに show クラスを追加
window.addEventListener('scroll', function() {
    const element = document.querySelector('.collection-title-right');
    const position = element.getBoundingClientRect();

    // ビューポートに要素が入った場合
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('show');
    }
});{
    threshold: 0.1  // 10%が見えたら発火
};

