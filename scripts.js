// ハンバーガーメニューの表示/非表示を切り替える
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const dropdown = document.getElementById('hamburger-dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});

