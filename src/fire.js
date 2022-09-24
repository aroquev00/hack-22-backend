var admin = require("firebase-admin");

var serviceAccount = require("../.env/firebase_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
