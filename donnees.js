/*
  CONTENU DE CHACOUNETTE
  ----------------------
  Modifie ce fichier pour changer le journal, le quiz ou la photo du jour.
  Les photos doivent être dans le même dossier que le site.

  - "photos"  : la photo du jour change chaque jour, dans cet ordre.
                (Le widget de l'app utilise le même ordre.)
  - "journal" : une entrée = une ligne. Mets les plus récentes en premier.
  - "quiz"    : "reponse" est le numéro de la bonne option (0 = la première).
  - "appli"   : le pop-up « Télécharger l'app » (visible uniquement sur le site, jamais dans l'app).
*/
window.CHACOUNETTE = {
  appli: {
    // Adresse de téléchargement de l'app (lien App Store ou TestFlight).
    // Tant qu'elle est vide, le pop-up ne s'affiche pas.
    lien: "",
    // Secondes avant l'apparition du pop-up
    delaiSecondes: 4,
    // Jours avant qu'il reparaisse après « Plus tard »
    rappelJours: 7
  },

  photos: [
    { file: "IMG_0229.jpeg", caption: "Assise. Elle vous a vue.",
      alt: "Chacounette assise de profil, la tête tournée vers l’objectif, les yeux verts grands ouverts", pos: "50% 22%" },
    { file: "IMG_0410.jpeg", caption: "Tête posée. Ne pas bouger.",
      alt: "Chacounette la tête posée sur un genou en jean, le regard tourné sur le côté", pos: "50% 50%" },
    { file: "IMG_0358.jpeg", caption: "Yeux fermés. Ne pas déranger.",
      alt: "Chacounette les yeux fermés, blottie dans une couette bleu-vert", pos: "50% 50%" },
    { file: "IMG_0019.jpeg", caption: "En observation.",
      alt: "Chacounette debout sur ses pattes arrière, les pattes sur un volet, qui regarde dehors", pos: "50% 27%" },
    { file: "IMG_0109.jpeg", caption: "Expression neutre. Jugement en cours.",
      alt: "Chacounette sur un lit, le regard mi-clos et sévère, les pattes en avant", pos: "50% 34%" },
    { file: "IMG_0415.jpeg", caption: "Toujours sur le même genou.",
      alt: "Chacounette somnolente, la tête posée sur un genou en jean", pos: "50% 50%" },
    { file: "IMG_0421.jpeg", caption: "Le regard vert.",
      alt: "Gros plan sur le visage de Chacounette, tigrée grise aux yeux verts", pos: "50% 18%" },
    { file: "IMG_0413.jpeg", caption: "Gros plan sur le museau.",
      alt: "Gros plan sur le museau de Chacounette endormie, sur du jean", pos: "50% 62%" }
  ],

  journal: [
    { date: "2026-09-19", titre: "Le journal démarre.",
      texte: "Première entrée. Aucun ronron à signaler." },
    { date: "2026-09-19", titre: "La galerie est en ligne.",
      texte: "Huit photos. Chacounette n’en a validé aucune, mais ne s’y est pas opposée." },
    { date: "2026-09-19", titre: "Le site ouvre.",
      texte: "Chacounette a été informée. Elle n’a pas commenté." }
  ],

  quiz: [
    { question: "Quelle est l’espèce de Chacounette ?",
      options: ["Chat siamois", "Chat européen", "Maine coon", "Chat persan"], reponse: 1,
      explication: "Chacounette est un chat européen." },
    { question: "De quelle couleur sont ses yeux ?",
      options: ["Bleus", "Verts", "Marron", "Un de chaque couleur"], reponse: 1,
      explication: "Verts, et très expressifs." },
    { question: "Comment est sa robe ?",
      options: ["Noire unie", "Blanche", "Tigrée grise", "Rousse"], reponse: 2,
      explication: "Tigrée grise, avec des rayures bien visibles de près." },
    { question: "Que fait-elle quand on la caresse ?",
      options: ["Elle ronronne à fond", "Elle miaule sans arrêt", "Elle s’enfuit", "Elle ne ronronne pas"], reponse: 3,
      explication: "Pas de ronron, même sous les caresses. Elle garde ça pour elle." },
    { question: "Où aime-t-elle poser la tête ?",
      options: ["Dans une gamelle", "Sur un genou", "Sur le frigo", "Dans un carton"], reponse: 1,
      explication: "Sur un genou, de préférence." },
    { question: "Que fait-elle à la fenêtre ?",
      options: ["Elle surveille dehors", "Elle ouvre les volets", "Elle chante", "Elle range"], reponse: 0,
      explication: "Debout sur ses pattes arrière, elle surveille dehors." },
    { question: "Combien d’heures peut-elle dormir par jour ?",
      options: ["2 heures", "6 heures", "Jusqu’à 16 heures", "24 heures"], reponse: 2,
      explication: "Jusqu’à 16 heures, d’après la fiche technique." },
    { question: "Comment la câliner ?",
      options: ["La saisir par surprise", "Tendre la main et attendre", "Lui crier bonjour", "Lui courir après"], reponse: 1,
      explication: "Tendez la main et attendez qu’elle décide." }
  ]
};
