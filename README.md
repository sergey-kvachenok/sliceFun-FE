# Install dependencies
  ### `yarn (or npm install)`

## Add environment variables to .env (template: .env.tmpl)

## Start the app in dev mode
  ### `yarn start`

  or

## Start the app in production mode (to install server-worker and test PWA)
  ### `yarn run serve`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Description
The app is a `React` application. As a centralized data storage used `Redux-toolkit`. For data retrieving was used `RTK-Query` (`https://redux-toolkit.js.org/rtk-query/usage/queries`) which helps to separate data and view representation. RTK-query saves the data to the redux-store and caches BE-requests, which helps to avoid redundant calls.
For styling was used `styled-components` and `material-UI` as components-library.
The app contains a custom implementation of `audio-player` which is active during route change.
In `production` mode the app registers the `service-worker` and can work as `PWA`. It caches static files, dynamic data, and images retrieved from AWS S3-bucket.

As a BE AWS lambda functions were used.

# Claudfront deployment
https://d2wqj3bui5g2q1.cloudfront.net

# Repositories
  FE: https://github.com/sergey-kvachenok/sliceFun-FE
  BE: https://github.com/sergey-kvachenok/sliceFun-BE

# For push notifications testing
 - go to Postman
 - send a POST request to the endpoint
   `https://pwa-scheduler-push-server.herokuapp.com/app/notify`
 - as a body use template

  ```{
    "title": "This is test notification",
    "content": "I hope it works"
  }```