Robbie Lens Photographie
Maîtrisez les bases de HTML5
Créez votre première page web en HTML
Pour cet exercice, vous allez devoir partir de votre fichier index.html que vous venez de créer pour :

y insérer la structure de base HTML ;
changer le contenu de la balise <title> </title> pour avoir “Accueil – Robbie Lens Photographie” ;
écrire un commentaire dans <body> </body>.
Organisez votre texte
La photographe Robbie Lens nous a demandé de lui faire un site web pour mettre en avant son travail. Mais il va lui falloir également une page pour se présenter. Pour l'occasion, nous avons donc ajouté du contenu dans le fichier index.html et créé une nouvelle page :a-propos.html. Vous allez :

créer le titre dans la page a-propos.html : "À propos de Robbie Lens" ;
créer le paragraphe associé : "Photographe depuis plus de 5 ans, je réalise des reportages aux photos dynamiques et pertinentes pour vos projets de communication. Créativité, qualité, et sérénité pour vous ! Je gère tout, depuis la direction artistique, la réalisation du reportage, jusqu’à la livraison de vos photos retouchées, prêtes à l’emploi." ;
créer un titre de niveau 2 pour ajouter une section nommée : "Services" ;
créer une liste non ordonnée pour lister les spécialités de Robbie Lens :
Portrait seul ou à plusieurs,
Shooting mode,
Retouches sur mesure,
Développement.
Créez un lien hypertexte en HTML
Vous allez maintenant pouvoir mettre en pratique ce que vous venez d'apprendre sur les liens. Exceptionnellement pour cet exercice, la page a-propos.html a été déplacée dans un dossier dossier-demo afin que vous puissiez tester votre compréhension des liens relatifs. Pour cet exercice, votre mission, si vous l'acceptez, est de :

créer sur la page d'accueil un lien vers la page "À propos" (sans déplacer les fichiers) ;
créer sur la page a-propos.html un lien vers la page d'accueil (sans déplacer les fichiers) ;
ajouter les liens vers les réseaux sociaux (qui s'ouvrent dans un nouvel onglet) sur la page d'accueil et la page "À propos" :
pour Twitter, vous redirigerez vers https://twitter.com/,
pour Instagram, le lien pointe vers https://www.instagram.com/.
Insérez des images
Vous allez maintenant pouvoir enrichir le portfolio de Robbie Lens. Pour cela, vous devrez :

remplacer les liens Twitter et Instagram en bas des pages "À propos" et "Accueil" par les icônes correspondantes ;
insérer l'image de Robbie Lens sur la page d'accueil (le fichier s'appelle robbie-lens.png) ;
afficher tout en haut et tout en bas de la page le logo qui renvoie sur la page d'accueil grâce à un lien.
Mettez en forme vos pages web avec CSS3
Intégrez le CSS dans la page HTML
Ici, vous allez :

créer un fichier CSS commun style.css ;
appliquer la couleur black à l'ensemble des liens ;
mettre le logo et les liens de navigation en haut des pages "Accueil" et "À propos" dans une balise div ;
mettre les différents logos en bas des deux pages dans une autre div ;
sur la page d'accueil, dans le paragraphe d'introduction, vous allez appliquer le style suivant : color: #A5B4FC; au mot "professionnalisme" et au mot "passion". Pour l'instant, vous utiliserez un <span>, mais nous le modifierons dans le prochain chapitre pour utiliser <em>.
Changez l'apparence du texte
Vous allez :

importer les deux polices principales du projet avec Google Font : Montserrat et Manrope ;
assigner les propriétés de polices suivantes :
les titres H1 :
3.5em ;
en couleur #A5B4FC ;
police Montserrat ;
les paragraphes :
1.1em ;
police Manrope ;
les listes :
1em ;
police Manrope ;
les liens :
enlever le soulignement ;
1em ;
police Manrope ;
remplacer les <span class="important"></span> par des éléments em tout en gardant le même style.
Ajoutez de la couleur et un fond
Vous devrez :

changer les couleurs de fond pour que :
la divdans laquelle on a les liens en haut des pages, et le pied de page, aient un fond blanc ;
le cœur de la page ait un fond correspondant à #1F2039 ;
et les couleurs de texte pour que :
les liens en tête et pied de page soient de couleur #242424 ;
les paragraphes, les listes et les titres H2 soient de la couleur #F9F8FF (sur fond bleu foncé).
Vous trouverez également des liens hypertextes qui ont été ajoutés : "Un projet ? Écrivez-moi" et "Voir mon portfolio". Vous devrez leur ajouter un dégradé qui passe de la couleur #8E86B5 à la couleur #ACAEED et les mettre dans la police Montserrat, en blanc.

C'est normal si votre couleur de fond a une petite marge, nous corrigerons cela plus tard.

Créez des bordures et des ombres
Vous allez :

ajouter des arrondis sur les liens "Un projet ? Écrivez-moi" et "Voir mon portfolio", d'une valeur de 50px (le rendu n'est pas très beau, mais ne vous inquiétez pas, nous allons l'améliorer au fil des chapitres) ;
créer une div, sur la page À propos, qui englobe le paragraphe et la liste de compétences de Robbie Lens ; lui ajouter une bordure à droite et en bas, de 1px d'épaisseur et de la couleur #8e86b5.
Créez des apparences dynamiques
Pour cette étape, vous devrez :

souligner les liens au survol ;
permettre aux liens ayant la classe "cta" d'avoir un dégradé de la couleur #696484 à la couleur #8788BA au survol (attention, ceux-ci ne sont pas soulignés au survol) ;
dans les icônes de l'en-tête et du pied-de-page qui permettent de faire des liens, réduire l'opacité à 0.5 au survol.
Agencez le contenu de vos pages
Structurez votre page
Vous allez :

intégrer un <header> dans les pages d'accueil et Á propos ;
intégrer un <footer> dans ces même pages ;
ajouter <main> là où c'est nécessaire ;
basculer vos liens hypertextes de navigation dans une balise <nav> ;
adapter les déclarations CSS en fonction des modifications faites.
Découvrez le modèle des boîtes
Vous allez :

ajouter un padding au header et au footer de 20px en haut et en bas, et de 50px à gauche et à droite ;
ajouter une section autour du contenu de la page d'accueil ;
ajouter une section autour du contenu de la page A-propos ;
donner à vos sections (pour les futures sections à venir) un padding de 80px ;
créer un padding de 50px pour carre-contenu ;
centrer le contenu de la page A-propos ;
aérer le contenu de la page A-propos : mettre de la marge au-dessus du sous-titre "Services" et de la liste des compétences.
Faites votre mise en page avec Flexbox
Vous allez :

utiliser flex pour avoir le logo en haut à gauche de la page, et les liens de navigation à droite dans l’en-tête ;
réagencer les éléments pour avoir le titre de la page d'accueil, le paragraphe, et le lien ayant la classe "CTA" à gauche, et la photo à droite ;
importer les images dans la page d'accueil, et créer une grille d'images avec deux rangées de 3 images chacune.
Découvrez les bases de CSS Grids
Vous devrez coder deux grids :

une première grid avec les images dont le nom commence par "paysage". Elle comprend 3 colonnes et 3 rangées ;
une deuxième grid de 3 colonnes et 2 rangées, avec les images dont le nom commence par "portrait".
Les colonnes devront s'adapter à la largeur de l'écran, et les rangées feront 300px de haut, avec un écart de 15px.

Abordez d'autres techniques de mise en page
Vous allez :

transformer les liens qui ont la classe .cta en éléments inline-block avec display sur les pages "Accueil" et "À propos", et ajouter leur lien vers la page "Portfolio" ; (cta veut dire call to action en anglais, autrement dit, en français : "bouton d'appel à l'action") ;
ajouter des margin et padding là où il en manque sur les pages "Accueil" et "À propos" (pour rappel, voici la maquette d’inspiration pour le site) ;
créer sur les images un effet au survol de la souris en affichant un élément (grâce à display ) qui :
aura un fond noir d’une opacité de 70% ;
s’affichera par-dessus l’image, et y mentionnera le texte suivant : “Voir la photo”.
Utilisez des fonctionnalités avancées de HTML et CSS
Ajoutez des tableaux
Vous allez maintenant pouvoir construire le tableau des tarifs de Robbie Lens !

Vous ajouterez les tarifs à la suite de la page "À propos", après le lien Call to action (appel à l’action).

Créez des formulaires
Finalisez un formulaire et ajoutez un bouton d'envoi
À vous de jouer pour :

ajouter un champ nom avec le label associé ;
ajouter un champ email avec le label associé ;
ajouter un textarea ayant pour label message ;
créer un bouton de validation "Envoyer".
changer le lien du bouton “Un projet?Écrivez-moi” pour le faire pointer vers le formulaire.
Le formulaire aura une méthode get et restera vide pour l'attribut action.

Utilisez le responsive design avec les Media Queries
Réduisez la taille des titres à 2em.
Remplacez les width pour .accueil-introduction et form par la propriété max-width sur la page d'accueil, avec une valeur de 1000px.
Cachez la section "Tarifs" sur la page "À propos".
Tous les éléments qui sont disposés à l'horizontale basculent à la verticale à partir de la taille d'écran 996px (introduction, grilles photos et formulaire).
Le padding sur le côté des pages passe de 80px à 20px.
Les liens de navigation du header passent à la verticale et sont centrés.
