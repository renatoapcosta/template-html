// Toggle da barra lateral esquerda
document.getElementById('toggleSidebar').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('collapsed');
});

// Toggle do painel de notificações à direita
document.getElementById('toggleNotification').addEventListener('click', function () {
    document.getElementById('notificationPanel').classList.toggle('active');
});

