const quizData = {
    debutant: [
        {
            question: "Qu'est-ce qu'un réacteur chimique ?",
            options: ["Un appareil permettant de stocker des produits chimiques", "Un dispositif où se déroulent des réactions chimiques", "Un outil de mesure de la température", "Une pompe pour transporter des liquides"],
            answer: 1,
            explanation: "Un réacteur chimique est un équipement conçu pour contenir et contrôler des réactions chimiques de manière efficace et sécurisée."
        },
        {
            question: "Quel est le principal objectif d'un réacteur chimique ?",
            options: ["Stocker des produits chimiques", "Mélanger des substances sans réaction", "Faciliter une réaction chimique pour transformer des réactifs en produits", "Refroidir des substances à haute température"],
            answer: 2,
            explanation: "Un réacteur chimique est conçu pour optimiser la transformation des réactifs en produits grâce à des conditions contrôlées."
        },
        {
            question: "Quel paramètre est essentiel pour une réaction chimique en réacteur ?",
            options: ["Le volume du réacteur", "La couleur des réactifs", "La forme du récipient", "La température"],
            answer: 3,
            explanation: "La température influence la vitesse de réaction et le rendement des produits formés."
        },
        {
            question: "Quel est le rôle de la température dans un réacteur chimique ?",
            options: ["Elle ne joue aucun rôle", "Elle ralentit toujours la réaction", "Elle peut accélérer ou ralentir la réaction", "Elle change la couleur des produits"],
            answer: 2,
            explanation: "La température influence la vitesse des réactions chimiques. Une température plus élevée accélère généralement la réaction, tandis qu’une température plus basse peut la ralentir."
        },
        {
            question: "Quel est l’effet d’une augmentation de la concentration des réactifs dans un réacteur ?",
            options: ["Elle ralentit la réaction", "Elle accélère généralement la réaction", "Elle n’a aucun effet", "Elle empêche la réaction de se produire"],
            answer: 1,
            explanation: "En augmentant la concentration des réactifs, la probabilité de collisions entre molécules réactives augmente, ce qui accélère généralement la réaction."
        },
        {
            question: "Quel paramètre n'influence PAS le rendement d'un réacteur chimique ?",
            options: ["Température", "Pression", "Couleur des réactifs", "Temps de séjour"],
            answer: 2,
            explanation: "La couleur des réactifs n'a aucune influence sur le rendement."
        },
        {
            question: "Quelle est la conséquence d’un mauvais mélange des réactifs dans un réacteur ?",
            options: ["Une réaction homogène", "Une conversion inefficace", "Une augmentation de la température uniforme", "Une amélioration du rendement"],
            answer: 1,
            explanation: "Un mauvais mélange peut créer des zones de concentration inégales, ce qui réduit l’efficacité de la réaction et peut mener à des sous-produits indésirables."
        },
        {
            question: "Quel est le principe de fonctionnement d'un réacteur batch ?",
            options: [
                "Les réactifs sont introduits en continu et les produits extraits en permanence.",
                "Les réactifs sont ajoutés au début et la réaction se déroule sans ajout ni retrait de matière.",
                "Il est utilisé uniquement pour des réactions gazeuses sous haute pression.",
                "Les réactifs et les produits sont mélangés en permanence pour maintenir un état stationnaire."
            ],
            answer: 1,
            explanation: "Un réacteur batch est un réacteur fermé où l'on introduit tous les réactifs en une seule fois. La réaction se déroule sans ajout ni retrait de matière jusqu'à son achèvement, ce qui permet un contrôle précis des conditions opératoires."
        },
        {
            question: "Comment fonctionne un réacteur en lit fixe ?",
            options: [
                "Les réactifs traversent un lit de catalyseur solide immobile.",
                "Les réactifs et le catalyseur sont mélangés en permanence.",
                "Le catalyseur est remplacé à chaque cycle de réaction.",
                "Les réactifs circulent dans un réacteur sans interaction avec un catalyseur."
                ],
            answer: 0,
            explanation: "Dans un réacteur en lit fixe, les réactifs s’écoulent à travers un lit de catalyseur solide immobile, permettant une conversion chimique efficace sans déplacement du catalyseur."
        },
        {
            question: "Quel type de réacteur est souvent utilisé pour des expériences en laboratoire ?",
            options: ["Réacteur à lit fixe", "Réacteur Piston", "Réacteur batch", "Réacteur RPAC"],
            answer: 2,
            explanation: "Le réacteur batch est couramment utilisé en laboratoire pour les expériences car il permet un bon contrôle des conditions expérimentales."
        },
        {
            question: "Quel type de réacteur fonctionne en continu avec une alimentation constante en réactifs ?",
            options: ["Réacteur batch", "Réacteur à lit fixe", "Réacteur continu", "Réacteur discontinu"],
            answer: 2,
            explanation: "Un réacteur continu permet d'introduire des réactifs en permanence et de récupérer les produits de manière continue."
        },
        {
            question: "Dans un réacteur batch, que se passe-t-il après l’ajout des réactifs ?",
            options: ["La réaction démarre et se déroule jusqu’à sa fin", "Les réactifs sont immédiatement évacués", "Le réacteur est rechargé en continu", "La température chute automatiquement"],
            answer: 0,
            explanation: "Dans un réacteur batch, tous les réactifs sont ajoutés en une seule fois, et la réaction se déroule sans apport supplémentaire jusqu’à sa fin."
        },
        {
            question: "Quelle est la principale fonction d’un échangeur de chaleur dans un réacteur ?",
            options: ["Refroidir ou chauffer le réacteur", "Mélanger les réactifs", "Accélérer la réaction", "Modifier la pression"],
            answer: 0,
            explanation: "Un échangeur de chaleur contrôle la température du réacteur en apportant ou en évacuant de la chaleur selon les besoins du procédé."
        },
        {
            question: "Comment appelle-t-on un réacteur où les réactifs circulent en continu ?",
            options: ["Réacteur batch", "Réacteur statique", "Réacteur Piston", "Réacteur discontinu"],
            answer: 2,
            explanation: "Un réacteur Piston est un réacteur tubulaire où les réactifs s’écoulent de manière continue et réagissent progressivement."
        },
        {
            question: "Quelle est la différence entre un réacteur batch et un réacteur continu ?",
            options: ["Le batch est plus rapide", "Le réacteur continu n’a pas de réactifs", "Le réacteur batch est toujours plus grand", "Le batch fonctionne par cycles, le continu fonctionne en permanence"],
            answer: 3,
            explanation: "Un réacteur batch fonctionne par lots successifs tandis qu’un réacteur continu permet un écoulement constant des réactifs et des produits."
        },
        {
            question: "Pourquoi un agitateur est-il souvent utilisé dans un réacteur chimique ?",
            options: ["Pour changer la couleur de la solution", "Pour homogénéiser les réactifs et améliorer la réaction", "Pour chauffer les réactifs", "Pour ajouter de l’oxygène"],
            answer: 1,
            explanation: "L’agitation permet d’assurer un bon mélange des réactifs, évitant les gradients de concentration et améliorant l’efficacité de la réaction"
        },
        {
            question: "Quelles sont les trois types d'écoulements dans une cuve agitée.",
            options: ["Radial, axial, tangentiel", "Circulaire, vortex, laminaire", "Visqueux, turbulent, spiralé", "Aucun des choix"],
            answer: 0,
            explanation: "Les différents types d'écoulement influencent l'efficacité du processus."
        },
        {
        question: "Quel est le principal facteur influençant le type d'écoulement dans un réacteur agité ?",
        options: ["La température", "La vitesse d'agitation", "La couleur du réacteur", "La pression externe"],
        answer: 1,
        explanation: "La vitesse d'agitation est un paramètre clé qui détermine si l'écoulement sera laminaire, transitionnel ou turbulent."
        },
        {
        question: "Quel type d'écoulement est observé à faible vitesse d'agitation ?",
        options: ["Turbulent", "Laminaire", "Chaotique", "Tourbillonnaire"],
        answer: 1,
        explanation: "À faible vitesse d'agitation, l'écoulement est principalement laminaire, ce qui signifie que les couches de fluide s'écoulent parallèlement sans se mélanger de manière significative."
        },
        {
        question: "Lorsque l'agitation augmente, quel type d'écoulement devient dominant ?",
        options: ["Turbulent", "Laminaire", "Stagnant", "Stratifié"],
        answer: 0,
        explanation: "Une augmentation de la vitesse d'agitation entraîne la transition de l'écoulement laminaire à un écoulement turbulent, favorisant un meilleur mélange des réactifs."
        },
        {
        question: "Quel paramètre permet de caractériser le régime d'écoulement ?",
        options: ["Le nombre de Reynolds", "La pression atmosphérique", "La densité du fluide", "Le pH du liquide"],
        answer: 0,
        explanation: "Le nombre de Reynolds permet de déterminer si l'écoulement est laminaire (Re < 2000), transitionnel (2000 < Re < 4000) ou turbulent (Re > 4000)."
        },
        {
        question: "Pourquoi l’écoulement turbulent est-il souvent préféré dans les réacteurs chimiques ?",
        options: ["Il réduit la consommation énergétique", "Il améliore le mélange et le transfert de matière", "Il empêche les réactions chimiques", "Il diminue la conversion des réactifs"],
        answer: 1,
        explanation: "L'écoulement turbulent favorise un mélange homogène et un meilleur transfert de chaleur et de matière, améliorant ainsi l’efficacité des réactions chimiques."
        },
        {
    question: "Quel paramètre doit être surveillé pour éviter un emballement thermique de la réaction ?",
    options: ["La couleur des réactifs", "Le type de récipient", "La hauteur du réacteur", "La vitesse de réaction"],
    answer: 3,
    explanation: "Une vitesse de réaction trop élevée peut provoquer une montée en température rapide, augmentant ainsi le risque d’emballement thermique."
        },
        {
            question: "Comment appelle-t-on la durée moyenne qu’un réactif passe dans un réacteur ?",
            options: ["Le temps de séjour ", "La vitesse de réaction", "Le volume du réacteur", "La pression de réaction"],
            answer: 0,
            explanation: "Le temps de séjour est une mesure clé qui permet de déterminer combien de temps un réactif passe à l'intérieur du réacteur avant d'être transformé en produit."
        },
        {
            question: "Pourquoi mesure-t-on la pression dans un réacteur chimique ?",
            options: ["Pour assurer la sécurité", "Pour modifier la couleur du réacteur", "Pour augmenter la masse des réactifs", "Pour améliorer l’agitation"],
            answer: 0,
            explanation: "Une pression excessive peut entraîner des risques d’explosion ou de fuite. Il est donc crucial de surveiller la pression dans un réacteur."
        },
        {
            question: "Comment peut-on améliorer la sécurité d’un réacteur chimique ?",
            options: ["En utilisant des matériaux résistants à la pression", "En diminuant la quantité de catalyseur", "En augmentant la taille du réacteur", "En utilisant des réactifs moins concentrés"],
            answer: 0,
            explanation: "Les matériaux du réacteur doivent être adaptés pour résister aux conditions de pression et de température afin d’éviter les accidents"
        },
        {
            question: "Pourquoi utilise-t-on des catalyseurs dans certains réacteurs ?",
            options: ["Pour ralentir la réaction", "Pour éliminer les sous-produits", "Pour augmenter la pression", "Pour accélérer la réaction sans être consommé"],
            answer: 3,
            explanation: "Un catalyseur accélère la réaction chimique sans être consommé, ce qui permet d'améliorer l'efficacité du procédé sans modifier la composition chimique finale."
        }
    ],
    intermediaire: [
        {
            question: "Quel type de réacteur choisir pour un mélange homogène ?",
            options: ["Réacteur à cuve agitée (Batch)", "Réacteur tubulaire", "Réacteur en cascade", "Réacteur à lit fixe"],
            answer: 0,
            explanation: "Les réacteurs batch permettent un contrôle précis."
        },
        {
            question: "Quelle est la principale caractéristique d'un réacteur tubulaire à écoulement piston ?",
            options: [
                "Les réactifs sont parfaitement mélangés dans tout le volume du réacteur.",
                "Le catalyseur est en suspension dans le fluide réactionnel.",
                "Les réactifs reviennent en arrière pour optimiser la conversion.",
               "Les réactifs avancent sans mélange axial, comme des couches successives."
            ],
            answer: 4,
            explanation: "Dans un réacteur tubulaire à écoulement piston, l’écoulement est idéalement en plug flow (sans mélange axial), ce qui signifie que chaque élément de fluide avance en conservant sa composition initiale jusqu’à la sortie."
         },
        {
            question: "L'inconvénient des réacteurs tubulaires pour les réactions exothermiques est : ",
            options: ["Faible rendement énergétique", "Difficulté à contrôler la température le long du réacteur", "Coût élevé de fabrication", "Mélange insuffisant des réactifs"],
            answer: 1,
            explanation: "La chaleur générée peut s'accumuler, rendant le contrôle difficile."
        },
        {
            question: "Un ingénieur doit choisir entre un réacteur batch et un réacteur en continu pour produire de grandes quantités de polymères. Quel est le principal avantage des réacteurs en continu ?",
            options: ["Moins de maintenance requise", "Réduction des coûts énergétiques", "Production en flux constant et rendement plus élevé", "Utilisation de catalyseurs moins coûteux"],
            answer: 2,
            explanation: "Les réacteurs en continu permettent une production stable et efficace."
        },
        {
            question: "Un ingénieur chimiste vérifie les bilans de matière dans un réacteur FERME. Quelle équation est correcte ?",
            options: ["Entrée + production = sortie", "Entrée = sortie", "Production = accumulation", "Entrée + production = sortie + accumulation"],
            answer: 2,
            explanation: "Dans un réacteur fermé, la production se traduit par une accumulation."
        },
        {
            question: "Un ingénieur chimiste vérifie les bilans de matière dans un réacteur PISTON. Quelle équation est correcte ?",
            options: ["Entrée + production = sortie", "Entrée = sortie", "Production = accumulation", "Entrée + production = sortie + accumulation"],
            answer: 2, 
            explanation: "Selon le principe des bilans matière vus en cours"
        },
        {
            question: "Bilan matière dans les réacteurs idéaux pour un réacteur parfaitement agité continu RPAC",
            options: ["Entrée + production = sortie", "Entrée = sortie", "Production = accumulation", "Entrée + production = sortie + accumulation"],
            answer: 0,
            explanation: "Selon le principe des bilans matière vus en cours"
        },
        {
            question: "Bilan matière dans les réacteurs idéaux pour un réacteur SEMI-FERME",
            options: ["Entrée + production = sortie", "Entrée = sortie", "Production = accumulation", "Entrée + production = sortie + accumulation"],
            answer: 3,
            explanation: "Selon le principe des bilans matière vus en cours"
        },
        {
            question: "Quel paramètre influence le plus la conversion dans un réacteur RPAC ?",
            options: ["La pression", "Le temps de séjour", "La couleur du réacteur", "L’agitation"],
            answer: 1,
            explanation: "Le temps de séjour est un facteur clé dans un réacteur RPAC. Une augmentation du temps de séjour permet d'améliorer la conversion des réactifs en produits."
        },
        {
            question: "Dans un réacteur piston, comment évolue la concentration des réactifs ?",
            options: ["Elle reste constante", "Elle diminue progressivement", "Elle augmente progressivement", "Elle fluctue aléatoirement"],
            answer: 1,
            explanation: "Dans un réacteur piston, les réactifs réagissent de manière progressive au fur et à mesure de leur écoulement, ce qui entraîne une diminution de leur concentration."
        },
        {
            question: "Quelle grandeur est conservée dans un réacteur piston à régime permanent ?",
            options: ["Température", "Pression", "Concentration", "Débit molaire"],
            answer: 3,
            explanation: "Dans un réacteur piston à régime permanent, le débit molaire des espèces est conservé tout au long du réacteur."
        },
        {
            question: "Quelle est l'unité du temps de séjour dans un réacteur ?",
            options: ["Secondes (s)", "Kilogrammes (kg)", "Litres (L)", "Mètres carrés (m²)"],
            answer: 0,
            explanation: "Le temps de séjour est une durée et s'exprime donc en secondes (ou en minutes, selon l’échelle du procédé)."
        },
        {
            question: "Quel type de réacteur est le plus adapté pour une réaction fortement exothermique nécessitant un contrôle précis de la température ?",
            options: ["Réacteur Batch", "Réacteur RPAC", "Réacteur Piston", "Réacteur à lit Fixe"],
            answer: 1,
            explanation: "Un réacteur RPAC permet un bon contrôle de la température grâce à son agitation continue et à l'échange thermique efficace."
        },
        {
            question: "Quel phénomène est souvent un problème dans les réacteurs à lit fixe ?",
            options: ["Le colmatage", "La diminution de la pression", "La réduction de la surface de contact", "La surconsommation d’énergie"],
            answer: 0,
            explanation: "Dans un réacteur à lit fixe, le colmatage peut se produire lorsque les particules de catalyseur s'agglomèrent ou que des impuretés s’accumulent, bloquant le passage des réactifs."
        },
        {
            question: "Quelle est la principale cause de formation de points chauds dans un réacteur ?",
            options: ["Un mauvais mélange", "Une trop grande quantité de catalyseur", "Un faible débit des réactifs", "Une pression trop élevée"],
            answer: 0,
            explanation: "Une mauvaise homogénéisation de la température peut entraîner des zones de surchauffe appelées points chauds, augmentant le risque de réactions secondaires ou de dégradations thermiques."
        },
       {
            question: "Comment peut-on minimiser la formation de sous-produits dans un réacteur ?",
            options: ["En réduisant la concentration des réactifs", "En augmentant la pression", "En optimisant la température et le temps de séjour", "En utilisant un réacteur batch"],
            answer: 2,
            explanation: "Un contrôle précis de la température et du temps de séjour permet de favoriser la réaction souhaitée et de minimiser la formation de sous-produits indésirables."
        },
        {
            question: "Pourquoi utilise-t-on un réacteur en série ?",
            options: ["Pour réduire la consommation énergétique", "Pour maximiser la conversion", "Pour simplifier la maintenance", "Pour éviter les réactions secondaires"],
            answer: 1,
            explanation: "L’utilisation de réacteurs en série permet d’augmenter la conversion en combinant les avantages des différents types de réacteurs et en optimisant le temps de séjour."
        },
        {
            question: "Quel est l’effet principal d’un recyclage partiel des réactifs dans un RPAC ?",
            options: ["Augmentation de la conversion", "Diminution du rendement", "Aucune influence", "Diminution du temps de séjour"],
            answer: 0,
            explanation: "Le recyclage permet de faire réagir plusieurs fois les réactifs non convertis, augmentant ainsi la conversion globale."
        },
        {
            question: "Quel facteur influence principalement la sélectivité d’une réaction chimique dans un réacteur ?",
            options: ["Le volume du réacteur", "La pression atmosphérique", "La température", "Le matériau de construction du réacteur"],
            answer: 2,
            explanation: "La température joue un rôle majeur dans la sélectivité, car elle favorise certaines réactions par rapport à d’autres, influençant ainsi la formation des produits souhaités."
        },
        {
            question: "Dans un réacteur batch, quel paramètre doit être contrôlé pour éviter une réaction incontrôlée ?",
            options: ["La vitesse d’agitation", "La température", "La concentration initiale des réactifs", "La pression ambiante"],
            answer: 1,
            explanation: "Une température excessive peut accélérer excessivement la réaction et conduire à une perte de contrôle du procédé, voire à un emballement thermique."
        },
        {
            question: "Pourquoi un réacteur Piston est-il souvent préféré pour les réactions rapides ?",
            options: ["Il permet un meilleur contrôle de la température", "Il réduit la consommation énergétique", "Il diminue la production de sous-produits", "Il favorise une conversion maximale"],
            answer: 3,
            explanation: "Un réacteur piston assure une réaction efficace pour les réactions rapides, car les réactifs sont immédiatement en contact et réagissent tout au long du réacteur."
        },
        {
            question: "Quel paramètre est crucial pour la conception d’un réacteur catalytique ?",
            options: ["La surface spécifique du catalyseur", "La couleur du catalyseur", "La taille du réacteur", "La pression extérieure"],
            answer: 0,
            explanation: "Une grande surface spécifique permet d’optimiser les interactions entre les réactifs et le catalyseur, augmentant ainsi l’efficacité de la réaction."
        },
        {
            question: "Quel est l’impact d’un mélange insuffisant dans un RPAC ?",
            options: ["Augmentation de la conversion", "Création de gradients de concentration", "Augmentation de la sélectivité", "Réduction du temps de séjour"],
            answer: 1,
            explanation: "Un mélange insuffisant conduit à des zones où la concentration des réactifs varie, ce qui peut entraîner des réactions secondaires non désirées."
        }
    ],
    avance: [
        {
            question: "Association la plus efficace de réacteurs idéaux",
            options: ["Piston > Cascade > RPAC", "RPAC > Cascade > Piston", "Cascade > RPAC > Piston", "RPAC > Piston > Cascade"],
            answer: 0,
            explanation: "Cette association maximise le rendement."
        },
        {
            question: "Lors d'une réaction gaz-liquide, quel bilan matière est correct ?",
            options: ["Entrée = sortie", "Production = accumulation", "Entrée + production = sortie + accumulation", "Entrée + production = sortie"],
            answer: 2,
            explanation: "La matière peut s'accumuler dans la phase liquide ou gazeuse."
        },
        {
            question: "Si un réacteur montre un critère de Hatta < 0,02 et des concentrations uniformes en C_AL et C_BL, qu'est-ce que cela signifie ?",
            options: ["Réaction lente limitante → Régime chimique", "Réaction rapide limitation par le transfert → Régime physique", "Rien"],
            answer: 0,
            explanation: " Un critère de Hatta < 0,02 indique que la réaction est lente par rapport au transfert de masse, ce qui place le système dans un régime cinétique contrôlé par la réaction chimique."
        }, 
        {
        question: "Quel critère est essentiel pour modéliser une réaction hétérogène en réacteur à lit fixe ?",
        options: ["Le coefficient de transfert de chaleur", "Le diamètre des particules de catalyseur", "La température d'inflammation", "La pression partielle des produits"],
        answer: 1,
        explanation: "Le diamètre des particules influence la diffusion interne et le transfert de matière, ce qui est crucial pour la modélisation d'une réaction hétérogène."
      },
      {
        question: "Dans un réacteur tubulaire à flux piston, comment la conversion évolue-t-elle le long du réacteur ?",
        options: ["Elle augmente linéairement", "Elle reste constante", "Elle diminue avec la longueur", "Elle suit une cinétique dépendant du temps de séjour"],
        answer: 3,
        explanation: "La conversion dépend du temps de séjour et de la cinétique réactionnelle, ce qui implique une évolution selon le modèle de réacteur piston."
      },
      {
        question: "Quel paramètre permet d’évaluer l’impact des limitations diffusionnelles dans un réacteur catalytique ?",
        options: ["Le nombre de Damköhler", "Le nombre de Reynolds", "Le pH du milieu", "Le coefficient de solubilité"],
        answer: 0,
        explanation: "Le nombre de Damköhler compare la vitesse de réaction à la vitesse de transport des réactifs, ce qui permet d’évaluer les limitations diffusionnelles."
      },
      {
        question: "Pourquoi un réacteur à recirculation est-il utilisé pour certaines réactions catalytiques ?",
        options: ["Pour augmenter la sélectivité des produits", "Pour diminuer la consommation énergétique", "Pour maximiser l’adsorption des réactifs sur le catalyseur", "Pour réduire la pression du système"],
        answer: 2,
        explanation: "Un réacteur à recirculation favorise un contact prolongé entre les réactifs et le catalyseur, améliorant ainsi l’adsorption et donc l’efficacité de la réaction."
      },
      {
        question: "Quel phénomène thermique peut causer un emballement de réaction dans un réacteur continu ?",
        options: ["La détonation chimique", "L’effet Joule-Thomson", "L’accumulation de chaleur exothermique", "L'évaporation rapide des solvants"],
        answer: 2,
        explanation: "L’accumulation de chaleur exothermique sans un refroidissement efficace peut entraîner une montée en température incontrôlée et provoquer un emballement thermique."
      },
        {
        question: "Quelle hypothèse fondamentale est faite pour modéliser un réacteur idéal de type piston ?",
        options: ["Le mélange est parfait", "Le temps de séjour est uniforme pour tous les éléments de fluide", "Il n’y a aucun transfert thermique", "La réaction ne dépend pas de la concentration"],
        answer: 1,
        explanation: "Un réacteur piston suppose que tous les éléments de fluide ont le même temps de séjour, ce qui permet d’écrire un bilan matière différentiel."
      },
      {
        question: "Quel paramètre contrôle principalement l’efficacité d’un réacteur batch pour une réaction d’ordre 1 ?",
        options: ["Le temps de séjour", "Le coefficient de diffusion", "Le diamètre du réacteur", "La viscosité du fluide"],
        answer: 0,
        explanation: "Dans un réacteur batch, l’évolution de la concentration suit une loi exponentielle gouvernée par le temps de séjour et la constante cinétique."
      },
      {
        question: "Pourquoi utilise-t-on un réacteur RPAC au lieu d’un réacteur tubulaire pour certaines réactions lentes ?",
        options: ["Pour obtenir une meilleure conversion", "Pour faciliter le contrôle de la température et le mélange", "Pour réduire les pertes thermiques", "Parce qu’il est plus efficace énergétiquement"],
        answer: 1,
        explanation: "Un réacteur RPAC assure un bon mélange, ce qui permet un contrôle plus fin des conditions opératoires pour des réactions lentes."
      },
      {
        question: "Dans un réacteur batch, l'équation de bilan de matière s’écrit : dC/dt = -kC. Quelle est l'expression de la concentration en fonction du temps, en supposant C(0) = C0 ?",
        options: ["C = C0 - kt", "C = C0 e^{-kt}", "C = C0 / (1 + kt)", "C = C0 (1 - kt)"],
        answer: 1,
        explanation: "La résolution de l’équation différentielle dC/dt = -kC donne C = C0 e^{-kt}, ce qui montre une décroissance exponentielle de la concentration."
      },
      {
        question: "Pour une réaction d’ordre 1 dans un réacteur tubulaire, le taux de conversion X est donné par : X = 1 - e^{-kτ}. Quelle est la conversion pour kτ = 2 ?",
        options: ["0.135", "0.865", "0.500", "0.270"],
        answer: 1,
        explanation: "En remplaçant kτ = 2 dans l’expression X = 1 - e^{-2}, on obtient environ X = 0.865."
      },
      {
        question: "Un réacteur parfaitement agité de volume V reçoit un débit volumique d'alimentation Q. La réaction suit une cinétique d'ordre 1 avec une constante k. Quelle est l'expression du temps de séjour moyen ?",
        options: ["V/Q", "1/k", "Q/V", "k/V"],
        answer: 0,
        explanation: "Le temps de séjour moyen dans un réacteur parfaitement agité est donné par \u03C4 = V/Q."
      },
      {
        question: "Le temps de séjour moyen dans un réacteur parfaitement agité est donné par τ = V/Q. Si le volume du réacteur est de 100 L et le débit volumique est de 20 L/min, quelle est la valeur de τ ?",
        options: ["2 min", "5 min", "10 min", "20 min"],
        answer: 1,
        explanation: "Le temps de séjour est τ = V/Q = 100 L / 20 L/min = 5 min."
      },
      {
        question: "Dans un réacteur tubulaire, une réaction A → B suit une cinétique d’ordre 1. Quelle est l’expression de la conversion X en fonction du temps de séjour τ et de la constante de vitesse k ?",
        options: [
            "X = 1 - e^(-kτ)", 
            "X = kτ", 
            "X = kτ / (1 + kτ)", 
            "X = e^(-kτ)"
        ],
        answer: 0,
        explanation: "En supposant un écoulement piston, l’équation du bilan matière donne dX/dτ = k(1 - X), dont la solution est X = 1 - e^(-kτ)."
      },
      {
        question: "Un mélangeur-réacteur parfaitement agité fonctionne en régime stationnaire avec une réaction d’ordre 1 A → B. Quelle est l’expression du taux de conversion X en fonction du temps de séjour τ et de la constante de vitesse k ?",
        options: [
            "X = 1 - e^(-kτ)", 
            "X = kτ / (1 + kτ)", 
            "X = kτ", 
            "X = e^(-kτ)"
        ],
        answer: 1,
        explanation: "En régime stationnaire, le bilan matière pour un réacteur CSTR donne C_A = C_A0 / (1 + kτ), donc X = 1 - (C_A / C_A0) = kτ / (1 + kτ)."
      }
      ]
};

let currentLevel = null;
let currentQuestionIndex = 0;
let score = 0;
let startTime;
let timerInterval;
let selectedLevel; // Déclaration globale pour le niveau sélectionné
currentLevel = quizData[level];
currentQuestionIndex = 0;
score = 0;
startTime = new Date();
selectedLevel = level; // Ajout du stockage du niveau

document.getElementById("Sommaire").classList.add("hidden");
document.getElementById("quiz").classList.remove("hidden");

startTimer();
loadQuestion();

function startQuiz(level) {
    currentLevel = quizData[level];
    currentQuestionIndex = 0;
    score = 0;
    startTime = new Date();
    selectedLevel = level;

    document.getElementById("sommaire").classList.add("hidden"); // Cache le sommaire

    document.getElementById("quiz").classList.remove("hidden");

    startTimer();
    loadQuestion();
}
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval); 

    timerInterval = setInterval(() => {
        let elapsedTime = Math.round((new Date() - startTime) / 1000);
        timerElement.textContent = `Temps : ${elapsedTime} s`;
    }, 1000);
}

function loadQuestion() {
    let questionObj = currentLevel[currentQuestionIndex];
    document.getElementById("question").textContent = questionObj.question;

    let answersHtml = questionObj.options.map((option, index) => 
        `<li onclick="checkAnswer(${index}, this)">${option}</li>`).join("");
    document.getElementById("answers").innerHTML = answersHtml;

    document.getElementById("explanation").classList.add("hidden");
    document.getElementById("explanation").textContent = "";
}

function checkAnswer(selectedIndex, element) {
    let questionObj = currentLevel[currentQuestionIndex];

    // Désactive tous les boutons après sélection
    document.querySelectorAll("#answers li").forEach(btn => btn.onclick = null);

    // Applique la classe 'selected' pour la réponse sélectionnée
    element.classList.add("selected");

    if (selectedIndex === questionObj.answer) {
        element.classList.add("correct");
        score++;
    } else {
        element.classList.add("wrong");
    }

    // Affiche l'explication après chaque réponse
    let explanationElement = document.getElementById("explanation");
    explanationElement.textContent = "Explication : " + questionObj.explanation;
    explanationElement.classList.remove("hidden");
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentLevel.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timerInterval);

    let endTime = new Date();
    let totalTime = Math.round((endTime - startTime) / 1000);

    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("score").textContent = `Votre score : ${score} / ${currentLevel.length}`;
    document.getElementById("temps").textContent = `Temps écoulé : ${totalTime} secondes`;

    saveScore(score, totalTime);
}

function saveScore(score, time) {
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
leaderboard.push({ level: selectedLevel, score, time }); // On stocke aussi le niveau
leaderboard.sort((a, b) => b.score - a.score || a.time - b.time);
localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

let leaderboardHtml = leaderboard.map((entry, index) => 
    `<p>${index + 1}. Niveau : ${entry.level} - Score : ${entry.score} - Temps : ${entry.time} s</p>`
).join("");
document.getElementById("leaderboard").innerHTML = leaderboardHtml;
}

function rejouer() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("sommaire").classList.remove("hidden");
}