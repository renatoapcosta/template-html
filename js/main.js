document.getElementById('toggle-sidebar-left').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar-left');

    // Alterna classe entre active (mobile) e hidden (desktop)
    if (window.innerWidth < 768) {
        sidebar.classList.toggle('active');
    } else {
        sidebar.classList.toggle('hidden');
    }
});

document.getElementById('toggle-sidebar-right').addEventListener('click', function () {
    document.getElementById('sidebar-right').classList.toggle('active');
});


