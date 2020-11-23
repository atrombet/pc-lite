# Instructions

## Start the API

```
cd pc-api
bundle install
rails db:create
rails db:migrate
rails db:seed
rails s
```

## Start the Front End app

```
cd pc-client
yarn
yarn start
```
Allow the react script to run the front end on a port other than  `3000`.