/* scripts.js */
function showView(view) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(view).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const btn = document.querySelector(`.nav-btn[data-view="${view}"]`);
    if (btn) btn.classList.add('active');
}

function setPathProgress(pathName, percent) {
    localStorage.setItem(`path_${pathName}`, percent);
}

function loadPathProgress() {
    document.querySelectorAll('.path-card').forEach(card => {
        const name = card.querySelector('h3').innerText;
        const stored = localStorage.getItem(`path_${name}`);
        if (stored) {
            const fill = card.querySelector('.progress-fill');
            fill.style.width = stored;
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    loadPathProgress();
});
