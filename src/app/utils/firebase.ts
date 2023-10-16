import admin from 'firebase-admin';

const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;
if (!firebasePrivateKey) {
  throw new Error('FIREBASE_PRIVATE_KEY is not set in the environment variables');
}

if (!admin.apps.length) {admin.initializeApp({
      
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: Buffer.from(firebasePrivateKey, 'base64').toString(),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL
    }),
  });
}

export default admin;
