Feature: Ajout d'un cas de test

    Scenario: Ajout d'un cas de test 

        Given je suis sur le site "https://fonctionnel.thrundrz.fr/"
        When je saisi l email "teams1@gmail.com"
        And je saisi le password "Teams2025@"
        And je click sur se connecter
        Then je suis redirege vers la page principale "https://fonctionnel.thrundrz.fr/"
        When je click sur projet sauce demo 
        Then je suis redirege vers page projet sauce demo "https://fonctionnel.thrundrz.fr/projects/2"