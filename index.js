function showSection(sectionId, button){

    // Hide all sections
    document.querySelectorAll(".content").forEach(function(section){
        section.classList.remove("active");
    });

    // Remove active from buttons
    document.querySelectorAll(".tab-btn").forEach(function(btn){
        btn.classList.remove("active");
    });

    // Show selected section
    document.getElementById(sectionId).classList.add("active");

    // Highlight active button
    button.classList.add("active");
}