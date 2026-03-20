const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyCzigxOCPGs0WEiuQvWykPkkNjd59JBlWA",
  authDomain: "school-sign-in-project.firebaseapp.com",
  projectId: "school-sign-in-project",
  storageBucket: "school-sign-in-project.firebasestorage.app",
  messagingSenderId: "153730552434",
  appId: "1:153730552434:web:2856ce40417f617d1fa8eb",
  measurementId: "G-BPCLX2YS3G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function signUp(email, password, name) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
  return { uid: cred.user.uid, email: cred.user.email, name };
}

async function logIn(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  // Handle old accounts that stored name|dob
  const displayName = cred.user.displayName || '';
  const name = displayName.includes('|') ? displayName.split('|')[0] : displayName;
  return { uid: cred.user.uid, email: cred.user.email, name };
}

async function logOut() {
  await signOut(auth);
}

function getCurrentUser() {
  return new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, (user) => {
      unsub();
      if (user) {
        const displayName = user.displayName || '';
        const name = displayName.includes('|') ? displayName.split('|')[0] : displayName;
        resolve({ uid: user.uid, email: user.email, name });
      } else {
        resolve(null);
      }
    });
  });
}

module.exports = { signUp, logIn, logOut, getCurrentUser };
