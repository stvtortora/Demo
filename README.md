## Overview

This demo has been adapted from a prototype I began building for a startup earlier this year. In addition to removing company-related content and other code that was unnecessary for this demo, I have modified on the project in a couple notable ways. 

First, I replaced the original apis with Node.js apis. Originally, the app was communicating with Golang apis, which were doing things like scraping user stats from the Twitch api and CRUD for campaigns. I mimicked the stats functionality in Node by creating a stats table in mysql and sending those records to the frontend instead. For campaigns, I simply hardcoded a few values on the frontend.

Second, I added the Manage Themes feature on both sides of the stack. The purpose of the feature was to demonstrate CRUD methods. It's also just fun to play with colors. 

The original prototype has been replaced with two apps: one for the app itself, and one for a component library which is used in the first app. The component library expands upon the CoreUI directory of this project. 

## Start the app

To start the app, first initialize the database: 

```bash
cd server

mysql -u root -p < database.sql
```

Next, run the backend:

```bash
npm install

npm run dev
```

Finally, run the frontend:

```bash
cd ../app

npm install

npm run dev
```

You may also need to update your password in the `server/db/db_connection` in order to connect to the database in your local env.