# projectAts_Amna

Consommation d'une API contenant des informations des produits sous forme de fichier JSON et l'intégrer dans la base de données mongoose.
-----
Utilisation de NodeJs comme backend:
    - Consommation de l'endpoint {$URL}, et stocker les produits dans votre base de données.
    - Exposition des produits avec 2 endpoints :
        - /api/products/ : pour retourner la liste des produits paginée par lot de 20.
        - /api/products/:id : pour retourner un produit par ID

-----
Utilisation de reactJs comme front-end :
 Création des  2 pages :
        - /products : pour afficher la liste des produits avec pagination (productName,category,price,imageUrl,review avg)
        - /products/:id : pour afficher un produit par ID (productName,description,price,imageUrl,all review)
