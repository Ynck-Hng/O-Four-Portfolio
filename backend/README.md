# Bienvenue côté fourneau héhé, je vais vous montrer comment ça marche ! 🧑‍🍳

- Tapez dans le terminal la commande `cd backend/`.

- Puis `yarn` pour installer les dépendances.

- Créez vous une copie du fichier `.env` et définissez vos valeurs.

- Créez votre base de donnée PostgreSQL en suivant ces étapes :

```sql
a. CREATE ROLE "username" WITH LOGIN PASSWORD 'password';

b. CREATE DATABASE "dbname" OWNER "username";

-- Importez la base de donnée --

c. psql -U "username" -d "dbname" -f ./data/create_db.sql;

-- Connectez vous à la base de donnée --

d. psql -U "username" -d "dbname";` -- puis entrez votre 'password' --

-- Une fois connecté, entrez la commande --

e. SELECT * FROM "ingredient";

-- Si cela vous retourne un tableau avec des éléments à l'intérieur, féliciations vous avez importé la base de donnée ! --

-- Sinon, répétez depuis l'étape C --
```

- Générez le schema prisma avec la commande  :

`npx prisma generate --schema=./app/schema/schema.prisma`

- Entrez `nodemon index.js` / `node-dev index.js` dans le terminal.

- Et voilà le serveur API est lancé sur `http://localhost:PORT`. :rocket:
  - :warning: Remarque : Cette API n'est qu'en read-only (pour l'instant) et ne comporte que des routes `GET`.
  
- Optionnel : Vous pouvez également consulter la documentation de l'API sur la route : `http://localhost:PORT/api-docs`. :thumbsup:

- :warning: Remarque 2 : Les calls axios côté front sont faits sur le `PORT=3000`, si le serveur API fonctionne sur un Port différent, veillez à modifier également le Port dans le fichier `frontend/app/src/index.jsx`

Si vous n'avez pas encore rencontré le service à l'accueil, c'est par <a href="./../frontend/README.md"> -> ici <- </a>.
