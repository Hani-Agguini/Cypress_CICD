Feature: Ajout d'un cas de test

    Scenario: Ajout d'un cas de test 

        Given je suis sur le site "https://fonctionnel.thrundrz.fr/"
        When je saisi l email "teams1@gmail.com"
        And je saisi le password "Teams2025@"
        And je click sur se connecter
        Then je suis redirege vers la page principale 
        When je click sur projet sauce demo 
        Then je suis redirege vers page projet sauce demo 
        When je click sur + cas de test
        Then je suis redirege vers Nouveau cas de test
        When je saisi titre "Login valide"
        And je selectionne Statut "En revue"
        And je saisi User Story / Exigence "US-01"
        And je selectionne Module / Fonctionnalité "login"
        And je saisi Regle(s) de gestion "RG6"
        And je selectionne Priorite "Haute"
        And je selectionne Type "IHM"
        And je coche la Plateformes "Web"
        And je saisie l objectif "Login valide"
        And je saisie Préconditions "Des identifiants valide"
        And je saisi Données de test "Standard_user""secret_sauce""
        And je saisie Postconditions "je suis dans la page inventory"
        And je saisie dans etape1 Action:"Visiter" le site" Donnees:"https://www.saucedemo.com/" Resultat:"Redirection vers la page inventory"
        And je click sur ajouter une etape 
        Then je vois 2 dans etapes
        And je saisie dans etape2 Action:"je saisie username" Donnees:"Standard_user" Resultat:"champ remplie"
        And je click sur ajouter une etape 
        Then je vois 3 dans etapes
        And je saisie dans etape3 Action:"je saisie password" Donnees:"secret_sauce" Resultat:"champ remplie"
        And je click sur ajouter une etape 
        Then je vois 4 dans etapes
        And je saisie dans etape4 Action:"je click sur login " Donnees:"" Resultat:"rediretion vers inventory"

