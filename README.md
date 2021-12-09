# SIT-PORTAIL

Portail des services TI de l'Université Laval

## Prérequis pour le développement

- Docker (Windows ou Linux)
- WSL 2 avec ubuntu 20.04 LTS (https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers)
- VSCode

## Exécuter et développer localement

Faire le git clone dans votre home de ubuntu dans WSL2

```bash
cd sit-gabarit
code .
```

Dans VSCode

- Ctrl+Shift+P
- Remote-Containers: Open Folder in Container...
- Dans le terminal exécuter "npm start"
- Lancez "Launch Chrome" dans les options d'exécutions pour debugger.

## Conventions

### Nom de branches

Une branche devrait être nommé ainsi: _type_/_descriptif_, où _descriptif_ est un court titre décrivant le problème adressé par la branche. Si une demande ou une épopée est reliée, la JIRA peut être spécifiée.

Types disponibles:

- feature: Pour toute nouvelle fonctionnalité ajoutée
- bugfix: Pour appliquer un changement suite à une MR rejeté, une démo ou un test en dev/approbation
- hotfix: Pour tout changement rapide ou critique suite à un incident
- build: Pour des changements reliés au build ou au déploiement, sans impact sur l'application.
- Rares:
  - misc: Pour tester une fonctionnalité ou un nouvel outil. Une branche pour s'amuser et expérimenter.
  - merge: Pour résoudre les merge conflitcs

## Déploiement de l'application

1. Appliquer des modifications au code, au Dockerfile ou aux configurations de node.js (package.json)
2. Pousser le code sur le dépôt dans la branche `dev`
3. **Étape automatique**: Déclencher le pipeline sur [le projet Jenkins](https://jenkins.svc.ulaval.ca/job/fondation/job/SIT/job/sit-portail/job/SIT-Portail-dv/)
   > Il est possible d'automatiser le déclenchement du pipeline lors du push sur le dépôt. Voir la procédure [GEG-PE Déclencher un build Jenkins depuis Gitlab (DCO)](https://wiki.dti.ulaval.ca/pages/viewpage.action?pageId=123476253)

### Description des étapes du pipeline de déploiement

1. Build de l'application sur nodejs 14 avec `npm ci` (installe les dépendances) et `npm run build`
2. Build de l'image Docker nginx qui lancera l'application
3. Push de l'image sur le registre d'Artifactory (maven.ulaval.ca)
4. Récupération de l'identifiant (digest) de l'image sur artifactory. Cet identifiant est utilisé par openshift pour qu'on référence exactement l'image qu'on veut
5. Traitement des tags. Cette étape sert à classer les tags.
   > On garde un historique de trois version dans artifactory accessible avec des tags (dv, dv-1 et dv-2). Par contre, pour faire un retour en arrière dans openshift, on n'as qu'à faire un `oc rollback`
6. Déploiement des configurations Openshift: Tout est traité par code à l'aide du fichier sit-portail.yml. Les différents paramètres sont gérés dans le Jenkinsfile
7. Déploiement de l'application: On fait un oc rollout pour déployer la nouvelle configuration

## Scripts disponibles

Dans le dossier du projet, vous pouvez lancer les scripts suivants:

### `npm start`

Lance l'application en mode développement afin de la tester.<br>
Ouvrir [http://localhost:8080](http://localhost:8080) pour la consulter dans le navigateur

> Le port 8080 a été configuré dans `package.json`

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run start-pc`

Même chose que `npm start`, mais la commande est modifiée pour fonctionner avec dos et Powershell<br>

### `npm test`

Lance les tests unitaires (présents dans les fichiers `.test.js`).<br>
Pour plus d'informations sur la création des tests unitaires en react, voir la page du wiki [Tests en REACT](https://wiki.dti.ulaval.ca/display/SIT/Tests+en+REACT>) <br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Créer le build de production de l'application

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
