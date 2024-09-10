document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Set the year in the footer
    document.getElementById('year').textContent = currentYear;
});

    //ShowSideBar function

    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    // //hideSideBar function

    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }

    // function showSidebar() {
    //     document.querySelector('.sidebar').classList.add('active');
    // }
    
    // function hideSidebar() {
    //     document.querySelector('.sidebar').classList.remove('active');
    // }
    
    // // Optional: Close sidebar when clicking outside of it
    // document.addEventListener('click', function(event) {
    //     const sidebar = document.querySelector('.sidebar');
    //     const menuButton = document.querySelector('.menu-button');
    
    //     if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    //         sidebar.classList.remove('active');
    //     }
    // });
     
      
    
    
