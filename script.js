 function showSection(sectionId, link){
    document.querySelectorAll('.service-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    toggleMenu(); // Fecha o menu no mobile
}
function toggleMenu(){
    document.querySelector('.menu-links').classList.toggle('show');
}
