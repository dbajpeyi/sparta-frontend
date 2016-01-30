# sparta-frontend

Article news frontend consuming apis from [sparta-server](https://github.com/dbajpeyi/sparta-server)

## Build & development

Run `grunt` for building and `grunt serve` for preview.

##Goal
Get hands dirty with session-less token based Auth using JWT

##How does it work

User signs up and server sets a jwt toke, using a serverside secret. You enter your username and password and get back a JWT in response.
I am using [satellizer](https://github.com/sahat/satellizer) to set the token in the head of XHR requests, and has other very handy auth functions 
