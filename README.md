# React Redux Firebase blog

Very simple blog app developed using React Redux Firebase.  

Sample show how to create, update and delete html posts, write and delete comments.    

User management is handle using firebase providers. As example Google provider is being used.

Demo of app is available at https://redux-blog-533c0.firebaseapp.com

## Stack

- React
- React-Redux
- React-Router
- React-Router-Redux
- Redux
- Redux-Thunk
- Redux-promise
- React-toolbox for material design
- React-rte editor
- Moment
- Firebase SDK 3 with OAuth authentication
- Babel
- Immutable
- Recompose
- SASS
- PostCSS
- Webpack

## Developed using
- Eslint
- Airbnb Eslint config
- Ava
- Enzyme
- Chai
- Sinon
- Proxyquire

## Quick Start
```shell
$ git clone https://github.com/dlebedynskyi/Redux-Firebase-blog
$ cd Redux-Firebase-blog
$ npm install
$ npm run watch
```

## Deploying to Firebase
#### Prerequisites:
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

#### Configure this app with your project-specific details:
```javascript
// .firebaserc

{
  "projects": {
    "default": "your-project-id"
  }
}
```
```javascript
// src/config/config.js
export default {
  firebase:
    apiKey: 'your api key',
    authDomain: 'your-project-id.firebaseapp.com',
    databaseURL: 'https://your-project-id.firebaseio.com',
    storageBucket: 'your-project-id.appspot.com',
  }
};
```
#### Add default data sample (optional)
In your firebase console you can import `initial.data.json` into your database. File contains 1 post and 1 comment as a prototype of your db structure used by application.

#### Install firebase-tools:
```shell
$ npm install -g firebase-tools
```

#### Build and deploy the app:
```shell
$ npm run build
$ firebase login
$ firebase use default
$ firebase deploy
```


NPM Command Summary
-------------------

|Script|Description|
|---|---|
|`npm run watch`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Build app to `./dist`|
|`npm run clean`|Removes build artifact from `./dist`|
|`npm start`|Run express server  @ `localhost:3000` for './dist'.(Run `npm run build` first)|
|`npm run lint`|Lint `.js` files|
|`npm test`|Run unit tests with Ava|
|`npm run test:watch`|Run unit tests in watch mode|
