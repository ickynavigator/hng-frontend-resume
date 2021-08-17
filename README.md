# [OBIFORTUNE.TECH](https://obifortune.tech/)

My Personal / portfolio site and the admin page for viewing the contact forms.

#### CLIENT

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d5f8d97-3bad-473b-9f94-bc99b7df0cd9/deploy-status)](https://app.netlify.com/sites/hng-frontend-stage2/deploys)

![web image](./client/public/assets/images/projects/profile.png)

#### ADMIN

[![Netlify Status](https://api.netlify.com/api/v1/badges/486b8a56-64c7-4851-ad16-a8147be890e1/deploy-status)](https://app.netlify.com/sites/admin-obifortune/deploys)

![web image](./client/public/assets/images/projects/profile-admin.png)

The two sites were created with [Create React App](https://github.com/facebook/create-react-app)

I hosted them statically on [Netlify](http://netlify.com/)

### INSTRUCTIONS

##### Clone repo

#### CLIENT

1. Edit `/task3/src/constants.js` file with the details you want on the site

2. Create an `/task3/.env` file

3. Add the faunadb secret for your database `FAUNADB_SECRET = `

4. `cd task3`

5. `yarn install`

6. `yarn run start`

#### ADMIN

1. Create an `/admin/.env` file

2. Add the faunadb secret for your database `FAUNADB_SECRET = `

3. Add the User login secret for your site `USER_LOGIN = `

4. `cd admin`

5. `yarn install`

6. `yarn run start`
