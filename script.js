setTimeout(() => {
    const startUp = document.querySelector('.startUp');
    startUp.remove();
  }, 3000);
  $(document).ready(function() {
    $('#creditsBtn').on('click', function() {
      window.location.href = 'https://www.instagram.com/massine.x_x?igsh=MW5zNmltMXpvcTZnMg==';
  });
    const setLanguage = (language) => {
        if(language === 'fr') {
            // French content
            $('#join').html(`"Rejoignez-nous pour façonner l'avenir de la technologie."<br>
            Participez à nos ateliers pratiques et projets pour développer vos compétences en informatique, cybersécurité, et entrepreneuriat numérique.<br>
            Aidez Chefchaouen à devenir un hub tech et contribuez à la croissance numérique du Maroc.`);
            $('#ourIt').html(`Notre club IT à Chefchaouen s'engage à renforcer les compétences numériques de notre ville et du Maroc.<br>
            Nous croyons que la technologie est un outil clé pour le développement. Par des ateliers pratiques, nous préparons les jeunes aux défis de l'économie numérique.<br>
            Notre mission : faire de Chefchaouen un centre d'excellence IT, et contribuer à la croissance numérique du Maroc.`);
            $('#man').html(`L'homme n'a pas été créé pour rester immobile, mais pour lutter, tomber, et se relever.<br>
            Chaque échec est une leçon, chaque cicatrice une porte vers la grandeur.<br>
            Ne pas avancer, c'est se figer. Avancer, même dans la douleur, c'est vivre.`);
            $('.title').text('Contactez-nous');
        } else {
            // English content
            $('#join').html(`"Join Us in Shaping the Future of Technology"<br>
            At our IT Club, we’re turning technology into a tool for change.<br> 
            We offer hands-on workshops, real-world projects, and collaborative learning to help you develop skills in coding, networking, cybersecurity, and digital entrepreneurship.<br>
            Be part of a movement to make Chefchaouen a tech hub and contribute to Morocco’s digital growth.`);
            $('#ourIt').html(`Our IT Club in Chefchaouen is dedicated to building a stronger digital foundation for our city and Morocco as a whole.<br>
            We believe that technology is a critical tool for development, innovation, and opportunity. Through practical workshops, real-world projects, and collaborative learning, we aim to equip students and young professionals with the skills needed to thrive in today’s digital economy.<br>
            Our mission is simple: to make Chefchaouen a hub for IT talent, and to contribute to Morocco’s growth as a competitive, tech-driven country.`);
            $('#man').html(`Man was not made to find comfort in stillness, but to bleed, to fall, and to rise higher than before.<br>
            Each wound is a door, each failure a torch. In the endless climb, the soul remembers its purpose: not perfection, but motion.<br>
            To stand still is to decay; to strive, even in agony, is to live forever.`);
            $('.title').text('Contact Us');
        }
    };

    // Set default language to French
    setLanguage('fr');
    
    // Language change event listener
    $('input[name="language"]').on('change', function() {
        const selectedLanguage = $(this).val();
        setLanguage(selectedLanguage);
    });
});
  