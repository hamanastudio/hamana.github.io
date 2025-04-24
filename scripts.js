document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const dropdown = document.getElementById('hamburger-dropdown');

    // ハンバーガーメニューのクリックイベント
    hamburgerMenu.addEventListener('click', function (e) {
        e.stopPropagation(); // 親のクリックイベントが発火しないように
        dropdown.classList.toggle('open'); // ドロップダウンを開閉
    });

    // ドロップダウン自体をクリックしたときは親のクリックイベントが発火しないように
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
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
});

// スクロールイベントで要素がビューポートに入ったときに show クラスを追加
window.addEventListener('scroll', function() {
    const element = document.querySelector('.collection-title-right');
    const position = element.getBoundingClientRect();

    // ビューポートに要素が入った場合
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('show');
    }
});
