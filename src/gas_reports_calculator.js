const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const db = getFirestore();

exports.calculate = async () => {
  db.collection("users")  
  const cityRef = db.collection('users').doc('cSnIcYzLDZhv4p0K7TCY');
  const doc = await cityRef.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());
  }
};
