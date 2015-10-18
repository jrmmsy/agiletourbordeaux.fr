jQuery(document).ready(function () {
    jQuery('body').addClass('sub-page');
    theme.init();

    // add active class to programme menu
    jQuery('ul.sf-menu li:nth-child(2)').addClass('active');

    var animatedModal = jQuery("#animatedModal");

    var descriptions = {
        'conf-ploum': '<h1>Le bonheur sans travail</h1><p><ol><li>1. Le travail est appelé à disparaitre car, par nature, il y aura un robot pour le faire à notre place</li><li>2. Il est nécessaire de trouver une motivation, un sens à sa vie autre que le travail</li><li>3. L’argent, symbole du travail, ne s’y prête pas. Je propose donc une nouvelle méthode de mesure de l’épanouissement à travers des unités de temps.</li></ol></p>',
        'conf-rosoor': '<h1>Comment ça va ? Bien ! Evidemment.</h1><p>Dirigeants, indépendants, freelance, auto-entrepreneurs sont maîtres de leur destin. En position de            leadership, c\'est assez rare qu\'ils avouent "aller mal". Et d\'ailleurs, la société ne le comprendrait pas.</p>            <p>Quand on parle de bien être au travail et donc de risques psycho-sociologiques on s\'adresse donc            essentiellement aux salariés, aux personnes qui ont un lien hiérarchique avec un manager, un patron.</p>            <p>Or nous sommes dans un monde où l\'organisation du travail évolue avec de plus en plus, avec une            augmentation de l\'indépendance au détriment du salariat...le burn-out, lui ne fait pas la différence entre            les statuts.</p>            <p>Pointer le problème, c\'est déjà y répondre en partie.</p>            <p><b>Benjamin Rosoor,</b></p>    <p>Multi-Entrepreneur du web depuis 1999. Il est engagé depuis plusieurs années au sein du Centre des Jeunes    Dirigeants (CJD) où il a participé à des travaux sur le bien être du dirigeant.</p>',
        'conf-gaillot': '<h1>Mob mob mob programming</h1><p>Vous connaissez peut-être déjà la pratique de "mob programming" (littéralement : programmer en meute), qui consiste à programmer en groupe sur un seul ordinateur - une manière comme une autre de prolonger la blague sur le nombre de guitaristes qu\'il faut pour changer une ampoule. Mais avez-vous déjà essayé le "mob programming" (littéralement : la programmation de mobs, c\'est-à-dire des animaux/robots/monstres/personnages-non-joueurs dans un jeu vidéo) ?<p><p>Le temps d\'une session hautement pédagogique à valeur fortement ajoutée, nous montrerons comment allier poésie, curiosité scientifique et grand n\'importe quoi dans un monde virtuel (en l\'occurrence : Minecraft). Nous programmerons des mobs, des meutes de mobs, avec une meute de programmeurs. Accessoirement, nous en profiterons pour réviser les fondamentaux de la programmation JavaScript et de la physique Minecraftienne. Et pour réfléchir à comment intéresser les enfants (et les adultes) à la programmation. Une écoute de Marilyn Manson n\'est pas à exclure.</p>',
		'conf-patou': '<h1>No Scrum, no win</h1><p>Chasser les anti-patterns fréquents chez les équipes qui commencent l\'agilité</p><p>Entre la découverte de Scrum (simple à comprendre) et la mise en pratique sur le terrain, la réalité vous rattrape et certains raccourcis ne sont pas les meilleurs. La simplicité et le bon sens sont souvent les meilleurs alliés, mais comment faire pour rester lucide quand on est sous le feu de l\'action, que des évènements extérieurs viennent compromettre vos plans?</p><p>Etre agile, c\'est quoi en vrai sur le terrain?</p>',
		'conf-aimetti': '<h1>Happy Hour</h1><p>Venez à la découverte de trucs et astuces pour être heureux au travail !</p>',
		'conf-morvant': '<h1>Découverte de l\'agilité de manière ludique : mindstorm4scrum</h1><p>Nous proposons ici de relever un challenge simple en construisant un robot qui est capable de mouvement. Les fonctionnels définiront les US, les développeurs/testeurs programmeront le robot et le construirons. Bien sûr le tout, sans plan et en appliquant une méthode agile</p>'
		'conf-carvalho': '<h1>Feedback Loops</h1><p>Agile. « Agile » ne représente pas un nom que nous pouvons quantifier mais une qualité, une propriété de quelque chose. Pourquoi donc dans ce cas, certaines personnes veulent nous vendre de l’agile ou prétendent faire de l’agile ?<p/><p>Pour éviter ce genre d’écarts, il est peut être important aujourd’hui de revenir sur les valeurs fondamentales de notre métier et sur l’agilité. Parmi ces valeurs importantes, les boucles de feedback sont une charnière centrale. Je vous propose de revenir sur ces valeurs afin de mieux les comprendre et voir ainsi comment réellement produire de meilleurs produits.</p>',
		'conf-avoustin': '<h1>Le courage de vivre consciemment</h1><p>Faire un métier rêvé, dans une ambiance géniale, de l\'autonomie, du temps pour apprendre, de l\'innovation (donc des essais, et des échecs), le tout à 40 mètres de la mer (allez... 45...), ça vous fait rêver ? Et bien c\'est ce que je vis en ce moment :p, et sans exagérer...</p><p>Pour autant, en arriver là n\'a pas été si simple. Et il a fallu sortir de sa zone confort pour vivre [sa vie pro] consciemment.</p><p>Malgré quelques rêves, et quelques bonnes intentions, je n\'étais jamais franchement sorti de ma zone de confort. Et c\'est à la lumière d\'un article de Steve Pavlina, dont cette session porte le nom, et traduit ici en français, que j\'ai franchi le pas. Et pour ainsi dire, je ne m\'attendais pas une seconde à ce qui m\'est arrivé.</p><p>J\'aimerais ici vous faire partager mon expérience, en toute humilité, et vous donner quelques clés pour, pourquoi pas, vous permettre d\'en faire de même !</p>',
		'conf-stetienne': '<h1>La recette pour développer son logiciel dans le bonheur</h1><p></p>',
		'conf-urvoas': '<h1>Du post-it à l\'écran tactile : l\'évolution de notre management visuel</h1><p>Après une description rapide des concepts de management visuel, cette présentation décrit le parcours des équipes Lectra dans leurs mises en œuvre au cours de ces 6 dernières années.</p><p>• Itération 0.0 : 2 Scrum Boards sont perdus quelque part dans la R&D</p><p>• Itération 1.0 : Un papier craft apparaît pour synchroniser 4 équipes Scrum</p><p>• Itération 2.0 : Et pourquoi ne ferait on pas apparaître l\'avancement de la définition de nos projets vu que nous comptons maintenant 14 équipes Scrum ?</p><p>• Itération 3.0 : 230 personnes sont maintenant concernées. La solution : "une Obeya de 60 m2 pour tous !"</p><p>A chaque étape, un éclairage sera mis sur le détail des constats qui ont été faits et des améliorations apportées. L\'accent sera également mis sur le rôle que le management visuel aura joué dans l\'adoption des méthodes Agiles et la conduite du changement au sein de nos équipes.</p>',
		'conf-mansuy': '<h1>Des timbrés agiles à Libourne</h1><p>Il y a quelques milliers de jours, au Service National de l’Adresse (Groupe La Poste), parce que les projets et les services sont cloisonnés, quelques postiers se lèvent et se mettent à l’Agilité. Face aux difficultés rencontrées, ils se défendent et s’adaptent. Leur conscience se développe. Ils inventent, ils s’organisent, ils élargissent l’horizon en expérimentant de nouvelles méthodes de travail impliquant les utilisateurs locaux.</p><p>Aujourd’hui, une nouvelle collaboration se met en place avec les pouvoirs publics (ETALAB/SGMAP), l’IGN et l’association OSM pour co-construire une Base Adresse Nationale. Et de cette base ils créent de nouveaux services autour de l’adresse.</p><p>C’est toute l’histoire de cette transformation, avec ses hauts et ses bas, que Jérôme et Arnaud vont vous conter, depuis les premiers projets Agile jusqu’à la mise en place de ce modèle collaboratif.</p>'
    };

    jQuery('.modalLink').each(function(index, element) {
        jQuery(element).on('click', function(event) {
            var id = jQuery(event.currentTarget).attr('id');
            animatedModal.find('.modal-content').html(descriptions[id]);
        });

        jQuery(element).animatedModal({
            animatedIn:'slideInLeft',
            animatedOut:'slideOutRight',
            animationDuration:'.6s',
            beforeOpen: function() {
                animatedModal.addClass('visible');
            },
            afterClose: function() {
                animatedModal.removeClass('visible');
            },
            color: '#2C495A'
        });
    });
});
