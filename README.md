**Site de livraison de planche apéro**

- Front End en React / Redux
- BDD gérée avec firebase
- Paiement avec stripe géré avec une API Express (https://github.com/16Bonte/express-backend-stripe)

**Fonctionnement de l'application**

**Le composant 'Shop.js'** (/src/components/shop/Shop) permet de déterminer date, heure et secteur de livraison et de configurer sa planche en quelques clicks, il possède plusieurs état qui vont déterminer ce qui doit être afficher:
- Etape 1: Créneaux de livraison (if selectShift is true)
- Etape 2: Code postal de livraison (if selectZip is true)
- Etape 3: Selectionner une formule (if selectFormula is true)
- Etape 4: Ajuster le nombre de personne pour les quantités (if selectSize is true)
- Etape 5: Choisir une bouteille (if selectBottle is true)
- Etape 6: Ajouter encas à l'unité (if selectMoreFood is true)
- Etape 7: Ajouter bouteille à l'unité (if selectMoreDrink is true)
- Etape 8: Ajouter au pannier

L'utilisateur peut voir évoluer le montant et les détails de la commande graçe à un encart (composant Recap.js) qui met à jour les donnée au fur et à mesure.

**Le composant 'Cart.js'** (/src/components/cart/Cart) permet de supprimer des formules ou avancer sur les étapes de paiement:
 - Etape 1: Valider les produit et lancer une intention de paiement avec l'API express (if init is true)
 - Etape 2: Ajouter / Valider les informations de livraison si l'utilisateurs à déjà utilisé le service (if personalInfos is true)
 - Etape 3: Paiement par carte (if payment is true)
 - Etape 4: Redirection vers page succès / échéc de paiement, ajout de la commande au compte en cas de succés 

 **Le composant 'Dashboard.js'** (/src/components/adminDashboard/Dashboard) permet de gérer la partie admin du site:
 - Ajout / Edition de produit / catégories
 - Gestion des commandes (en attente / en chemin / livrée / annulée)

 **Site en stand-by, en attente d'éléments visuels / photos**