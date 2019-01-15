# 35mm :clapper:
A personal movie catalog

## About
This project was made as part of a job application test for Anthor and uses:
* NodeJS + Express for a RESTful server
* MongoDB as the database
* React + Redux for the web client
* Material-UI as a CSS library/framework

This project is somewhat simple and can most of the challenge come from the
bonus features (using a foreign API and auth). A basic CRUD server for the
movies and a web client are enough for this features and intended use.

With enough time I'll would think of this project as group shared catalogue of
movies and TV shows, enabling users to recommend movies and schedule times to
watch their favorite shows together. Something more suited for family, groups 
of close friends or individual use.

## Using
The API and the web client are all here. You have to setup both.

**API**
```bash
cd src/api
# Edit the config.json file as suited or leave it be
npm i
npm run populate # Populate with the seed data
npm start
```

**CLIENT**
```bash
cd src/client
npm i
# If you changed the API port or ip address, you have to edit src/actions/actionCreators.js
npm start
```