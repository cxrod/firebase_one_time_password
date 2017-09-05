const admin = require("firebase-admin");
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://react-native-one-time-pa-1a410.firebaseio.com"
  });

exports.createUser = functions.https.onRequest(createUser);
