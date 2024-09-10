document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Set the year in the footer
    document.getElementById('year').textContent = currentYear;
});

    //ShowSideBar function

    // function showSidebar(){
    //     const sidebar = document.querySelector('.sidebar')
    //     sidebar.style.display = 'flex'
    // }

    //hideSideBar function

    // function hideSidebar(){
    //     const sidebar = document.querySelector('.sidebar')
    //     sidebar.style.display = 'none'
    // }

    document.addEventListener('DOMContentLoaded', function() {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('main');
        
        // Function to show the sidebar and shift the main content
        function showSidebar() {
            sidebar.style.display = 'flex'; // Ensure sidebar is displayed
            sidebar.classList.add('active'); // Add 'active' class to the sidebar
            mainContent.classList.add('shifted'); // Add 'shifted' class to the main content
        }
    
        // Function to hide the sidebar and revert the main content position
        function hideSidebar() {
            sidebar.style.display = 'none'; // Hide the sidebar
            sidebar.classList.remove('active'); // Remove 'active' class from the sidebar
            mainContent.classList.remove('shifted'); // Remove 'shifted' class from the main content
        }
    
        // Ensure SVG triggers call the appropriate functions
        document.querySelector('.menu-button').addEventListener('click', showSidebar);
        document.querySelector('.sidebar li:last-child').addEventListener('click', hideSidebar);
    });
    
    
