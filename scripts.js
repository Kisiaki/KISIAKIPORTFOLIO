document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Set the year in the footer
    document.getElementById('year').textContent = currentYear;
});

    //ShowSideBar function

    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.add('sidebar-visible');
    }
    

    //hideSideBar function

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('sidebar-visible');
    }
