
/Users/alyssaschilke/REMOVED-firebase-adminsdk-a395w-64c0c729e8.json

const admin = require('firebase-admin');

let serviceAccount = require('../REMOVED-firebase-adminsdk-a395w-64c0c729e8.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
