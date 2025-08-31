document.querySelector('.toggle-sidebar-left').addEventListener('click', function () {
    const sidebar = document.querySelector('.l-sidebar-left');

    // Alterna classe entre active (mobile) e hidden (desktop)
    if (window.innerWidth < 768) {
        sidebar.classList.toggle('active');
    } else {
        sidebar.classList.toggle('hidden');
    }
});

document.querySelector('.toggle-sidebar-right').addEventListener('click', function () {
    document.querySelector('.l-sidebar-right').classList.toggle('active');
});


