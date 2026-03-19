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

async function signUp(email, password, name, dob) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: `${name}|${dob}` });
  return { uid: cred.user.uid, email: cred.user.email, name, dob };
}

async function logIn(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  const parts = (cred.user.displayName || '|').split('|');
  return { uid: cred.user.uid, email: cred.user.email, name: parts[0] || '', dob: parts[1] || '' };
}

async function logOut() {
  await signOut(auth);
}

function getCurrentUser() {
  return new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, (user) => {
      unsub();
      if (user) {
        const parts = (user.displayName || '|').split('|');
        resolve({ uid: user.uid, email: user.email, name: parts[0] || '', dob: parts[1] || '' });
      } else {
        resolve(null);
      }
    });
  });
}

module.exports = { signUp, logIn, logOut, getCurrentUser };
