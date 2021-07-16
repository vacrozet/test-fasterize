# API Test Fasterize

Test réalisé en 4-5h

Pour lancer l'app

Lancer l'api en mode local

- npm i
- npm run start:local

Lancer les tests

- npm run test (Démarrer l'api en mode local avant)

Lancer l'api en mode prod

- docker-compose up


## Remarques:

Je me suis permis d'enlever les fichiers .eslint et .prettier avec lesquelles j'ai l'habitude de travailler

Je n'ai faits seulement que deux tests pour montrer comment je faisais.

L'api n'est pas sécurisé. Pour un vrai projet on pourrait mettre en place des tokens pour l'authentification et ainsi sécuriser l'api

J'ai pris l'habitude d'organiser mes routes par module, pour ainsi, bien les distingers et pouvoir rapidement modifier ce qui est demandé.
Quand je fais appel à une base de données je rajoute un dossier "services" et "models" pour chaque module.

Lors de l'énoncé je n'ai pas compris si je devais réinventer le module SHARP. Du coup je ne me suis pas amusé à réinventer le module, je l'ai utilisé.

## J'aurais pu l'améliorer de différentes façons:

- Mettre en place une base de données et sauvegarder le nom des fichiers traités avec leur emplacement (si spécifique), avoir un historique sur chaque image qui a été modifiée.

- Compléter tous les tests techniques, les diversifiers


## Bonus

Un swagger à été mis en place pour tester les routes facilement et ainsi avoir une mini documentation, accessible sur http://localhost:****/api-doc/