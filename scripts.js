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

