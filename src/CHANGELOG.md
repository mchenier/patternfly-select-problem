<!-- markdownlint-disable MD024 -->

# Historique des modifications aux services TI de l'Université Laval

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.26.0] - 2021-11-03

### Ajout

#### Serveurs

- Prise en charge des nouvelles plages de mise à jour à la création de serveurs.
- Ajout d'un filtre sur le type de serveur dans l'inventaire.

### Modification

#### Serveurs

- Les serveurs vmware sont affichés par défaut dans l'inventaire des serveurs.

## [1.25.0] - 2021-10-25

### Ajout

#### Portail

- Ajout d'une page 404.

### Modification

#### Serveurs

- Ajout d'une notification de succès pour la suppression de serveur.

### Correctif

#### Portail

- Correction du bogue avec l'expiration du token.
- Correction du bogue sur l'ordre de disparition des notifications.

#### Serveurs

- Correction du bogue pour la création multiple de serveurs.
- Correction du bogue sur les actions applicables à plusieurs serveurs.

## [1.24.0] - 2021-09-22

### Modification

#### Serveurs

- Gain de performance obtenu grâce au préchargement des VLANs dans l’assistant de création de serveur.

### Correctif

#### Portail

- Correction du bogue avec le jeton d'authentification au démarrage du Portail.

#### Postes et applications virtuelles

- Correction du bogue d'affichage pour le Idle Time des connections.

## [1.23.0] - 2021-09-15

### Modification

#### Portail

- Standardisation des pages d'inventaire.
- Standardisation des icônes de création.
- Standardisation des icônes d'inventaire.

### Correctif

#### Portail

- Correction d'erreurs d'orthographe.

## [1.22.0] - 2021-08-24

### Ajout

#### Portail

- Nouvelle section pour les notifications.
- Nouvelle URL servicesti.ulaval.ca pour accéder au portail.

### Modification

#### Portail

- Nouvelle page d'accueil.
- Nouvelle page de commentaires.

### Suppression

#### Serveurs

- Retrait de l'onboarding Azure.

### Correctif

#### Serveurs

- Validation de l'espace disque et du nombre de CPU.
- Correction du bogue d'affichage des disques.

## [1.21.0] - 2021-07-15

### Modification

#### Serveurs

- Affichage de la sélection de la plage des mises à jour ouverte par défaut.
- Refonte du tableau de sélection des VLANs.

### Correctif

#### Postes et applications virtuelles

- Correction des droits d'accès pour PTV.

## [1.20.0] - 2021-07-07

### Ajout

#### Serveurs

- Fonctionnalité de conformité (SCCM) pour les serveurs Windows.

#### Postes et applications virtuelles

- Permettre la modification des permissions dans les remoteApps.

### Correctif

#### Serveurs

- Correction d'un bogue d'affichage pour les OS.

## [1.19.0] - 2021-06-07

### Ajout

#### Portail

- Ajout du support mobile pour l'entête du site.

### Modification

#### Portail

- Amélioration du menu de l'utilisateur.

## [1.18.0] - 2021-06-02

### Ajout

#### Portail

- Ajoute une barre de déroulement dans la section versions, dans l'inventaire des serveurs et l'inventaire PTV.

### Modification

#### Serveurs

- Validation du nom du serveur à créer après un certains temps d'inactivité à l'étape d'identification. Il n'est plus nécessaire de devoir changer le focus pour déclencher la validation.

### Suppression

#### Portail

- Retrait de la fonctionnalité "Vider la cache".

- Retrait de la fonctionnalité "Table des paramètres".

## [1.17.0] - 2021-05-24

### Ajout

#### Portail

- Ajout de l'historique des modifications au service d'infrastructure technologique.

#### Serveurs

- Ajout du positionnement du snapshot.

### Modification

#### Serveurs

- Désactivation des champs CPU et RAM en mode modification. Ils seront réactivés lorsque la fonctionnalité sera disponible.

## [1.16.0] - 2021-05-14

### Ajout

#### Portail

- Ajout de la nouvelle section "Aide" dans le menu du haut qui contient un message concernant l'accessibilité Web.
- Cliquer sur le logo de l'Université Laval en haut à gauche redirige maintenant vers la page d'accueil.

#### Serveurs

- Ajout de la fonctionnalité de retour arrière sur les snaphosts de VM.

## [1.15.0] - 2021-04-30

### Ajout

#### Serveurs

- Ajout de la validation de la mémoire vive des VMs selon l'OS sélectionné.

#### Postes et applications virtuelles

- Ajout de la création de collections.
- Ajout de l'affichage des connexions client.
- Ajout de la recherche de serveurs.

### Correctif

#### Portail

- Corrige la couleur du texte des boutons primaires.

#### Bases de données

- Correction du CSV produit.

## [1.14.0] - 2021-04-16

### Ajout

#### Serveurs

- Ajout de la mise à jour des plages de maintenance des serveurs Windows existants.

### Correctif

#### Portail

- Les textes du menu de gauche (hamburger) sont désormais tous alignés à gauche.

#### Serveurs

- Correction d'une VM sans OS.

## [1.13.0] - 2021-04-02

### Ajout

#### Postes et applications virtuelles

- Ajout de la validation des utilisateurs dans PTV quand on les ajoute à une collection.

#### Bases de données

- Ajout de la sortie CSV et Jira.

### Modification

#### Serveurs

- Change le label pour les machines sans domaines (AUCUN à EXTERNE).

### Correctif

#### Portail

- Correction de grammaire.

#### Serveurs

- Correction initialisation serveur physique.

## [1.12.0] - 2021-03-19

### Ajout

#### Bases de données

- Fonctionnalité de gestion des utilisateurs BD.

### Modification

#### Postes et applications virtuelles

- Le bouton final de l'assistant redirige vers la nouvelle collection.

### Suppression

#### Serveurs

- Retrait de l'option McAfee.

### Correctif

#### Serveurs

- Correction du message de la toast d'erreur lors de la réinstallation de serveur.

#### Bases de données

- Correction de grammaire.

## [1.11.0] - 2021-03-05

### Ajout

#### Postes et applications virtuelles

- Validation du format des utilisateurs.

### Correctif

#### Serveurs

- Correction du problème de la réinstallation de serveurs physique.
- Correction du problème qui empêchait la création de la VM.

## [1.10.0] - 2021-02-19

### Ajout

#### Postes et applications virtuelles

- Ajouter le format de l'utilisateur dans le helper du modal de collection.

### Modification

#### Postes et applications virtuelles

- Configurer le maxSessionLimit à 30.

### Suppression

#### Postes et applications virtuelles

- Retirer l'action consulter des RemoteApps.

### Correctif

#### Postes et applications virtuelles

- Corriger la taille du modal de suppression.

## [1.9.0] - 2021-02-05

### Ajout

#### Postes et applications virtuelles

- Ajout des fonctionnalités de RemoteApps dans le modal. Les remote apps peuvent être modifiées, supprimées et ajoutées depuis le modal des collections.
- Ajout des champs pour les propriétés LoadBalancing.

### Modification

#### Serveurs

- Utilisation de classes au lieu de tiers.

### Correctif

#### Portail

- Correction des nombreuses vulnérabilités de sécurité dans les packages.

#### Serveurs

- Correction d'un bogue dans le Wizard de création de serveurs.

## [1.8.0] - 2021-01-22

### Ajout

#### Postes et applications virtuelles

- Ajout de l'onglet Client.

### Modification

#### Postes et applications virtuelles

- MAJ de l'interface de la section Servers.

### Suppression

#### Postes et applications virtuelles

- Retire les champs des clientDevices legacy.
- Retire les champs de redirections legacy.

### Correctif

#### Postes et applications virtuelles

- Affiche le message d'erreur de la réponse d'échec.

## [1.7.0] - 2021-01-08

### Ajout

#### Postes et applications virtuelles

- Ajout de l'onglet UserProfileDisk.
- Ajout de l'onglet Sécurité.

### Modification

#### Postes et applications virtuelles

- Ajout du tri des collections afin de permettre un affichage plus constant.

### Correctif

#### Postes et applications virtuelles

- Corrige le terme FipsCompliant.

## [1.6.0] - 2020-12-11

### Ajout

#### Postes et applications virtuelles

- Ajout et retrait de serveurs dans une collection.
- Modification des utilisateurs/groupes d'une collection.
- Modification des paramètres généraux de la collection. Un assistant est maintenant présent sur la page de la collection. On peut modifier la description de la collection.

## [1.5.0] - 2020-11-27

### Modification

#### Postes et applications virtuelles

- Finalisation de l'assistant de création de collections. Toutes les étapes et la validation sont complétées. Une étape finale a été rajoutée. Si la création réussit, un bouton permet de naviguer vers la page des collections.

### Correctif

#### Postes et applications virtuelles

- La fonction de suppression a été corrigée pour éviter le cas où on voudrait supprimer une remoteApp immédiatement après l'avoir créé.
- La valeur par défaut de la propriété showInWebAccess a été mise à true.
- Correction d'un bogue ou l'icône de showRDWebAccess ne s'affichait pas si la propriété n'était pas mentionnée à la création, même si rdWebAccess est à vrai par défaut.
- Uniformisation du style des cartes de l'inventaire des collections.

## [1.4.0] - 2020-11-13

### Ajout

#### Portail

- Mode Beta, qui permet aux utilisateurs du groupe UL-IAC-ACCESS-UI-BETA dans l'AD d'avoir accès aux fonctionnalités Beta.

### Modification

#### Postes et applications virtuelles

- Il est maintenant possible de modifier les remoteApps.
- Une validation supplémentaire a été rajoutée sur les champs displayName (pour qu'il ne soit pas vide) et filePath (pour qu'il soit conforme aux chemin windows).

### Correctif

### Ajout

#### Portail

- Correction d'un bogue de navigation.

#### Postes et applications virtuelles

- Correction d'un bogue dans le Modal de modification, où on ne pouvait modifier un champ quand on revenait à la valeur d'origine.
- Correction de messages d'avertissements.

## [1.3.0] - 2020-10-30

### Ajout

#### Postes et applications virtuelles

- Ajout de l'assistant de création de remoteApp

### Correctif

### Ajout

#### Serveurs

- Retrait de l'ajout du nom de domaine dans la consultation des serveurs.
- Clarification des messages à la réinstallation.

## [1.2.0] - 2020-10-16

### Ajout

#### Postes et applications virtuelles

- Ajout de la fonctionnalité de suppression de remoteApp
- Ajout de la configuration des serveurs PTV

### Correctif

### Ajout

#### Postes et applications virtuelles

- Correctif pour l'obtention d'une collection

## [1.1.1] - 2020-10-02

### Correctif

#### Serveurs

- Correctif pour les vieux serveurs qui n'ont pas de type de Classe de stockage

## [1.1.0] - 2020-09-18

### Ajout

#### Serveurs

- Ajout onboard Azure.

#### Postes et applications virtuelles

- Ajout d'un Modal avec les informations sur une remoteApp spécifique.
- Ajout d'une carte des paramètres de connexions.
- Ajout d'une carte avec les sessions actives.
- Ajout de l'accordéon des propriétés.

## [1.0.0] - 2020-09-04

### Ajout

#### Serveurs

- Ajout de l'option pour exporter la liste des serveurs.
- Ajout de 2 colonnes dans l'export CSV.
- Ajout du champ 'Plage d'application des mises à jour' lors de la consultation d'une VM.

#### Postes et applications virtuelles

- Ajout des collections sur la page principale des applications PTV.
- Le menu à gauche permet d'afficher la collection désirée, ou on peut accéder directement à une collection via son URL.
- Bonification de l'affichage d'une collection.

### Modification

#### Postes et applications virtuelles

- Si les utilisateurs sont trop nombreux, ils prennent toute la place dans l'interface web. S'il y en a plus que 5, on les cache avec un Expandable, et l'usager les extrait s'il veut les voir.
- Un premier bouton d'action est ajouté à côté de chaque application dans le tableau des applications. Il servira à afficher d'autres détails dans le futur.

### Correctif

#### Serveurs

- Corrige l'option affichage Grid ou List.
- Permettre à un utilisateur de voir la liste des serveurs même s'il n'a pas accès à des solutions.
- Corrige le problème d'affichage des noms d'OS trop long.
