document.getElementById('toggleSidebar').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');

    // Alterna classe entre active (mobile) e hidden (desktop)
    if (window.innerWidth < 768) {
        sidebar.classList.toggle('active');
    } else {
        sidebar.classList.toggle('hidden');
    }
});

document.getElementById('toggleNotification').addEventListener('click', function () {
    document.getElementById('notificationPanel').classList.toggle('active');
});


