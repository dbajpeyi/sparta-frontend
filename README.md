# sparta-frontend

Sports article news frontend consuming apis from [sparta-server](https://github.com/dbajpeyi/sparta-server)

## Build & development

- Make sure [nodejs](https://nodejs.org/en/download/) is installed

- sudo gem install compass

- `sudo npm install -g grunt-cli bower`

- Clone this project

- `cd sparta-frontend`    

- `npm install  && bower install`

- Run `grunt` to build 

- Run `grunt serve` ; this will start a local server at 9000, go to http://localhost:9000/login and try it out!



##Goal
Get hands dirty with session-less token based Auth using JWT

##How does it work

User signs up and server sets a jwt toke, using a serverside secret. You enter your username and password and get back a JWT in response.
I am using [satellizer](https://github.com/sahat/satellizer) to set the token in the head of XHR requests, and has other very handy auth functions 
