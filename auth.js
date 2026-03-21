const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } = require('firebase/auth');
const { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs, deleteDoc, arrayUnion } = require('firebase/firestore');

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
const db = getFirestore(app);

async function signUp(email, password, name) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
  // Create user doc in Firestore
  await setDoc(doc(db, 'users', cred.user.uid), {
    name, email, role: 'student', createdAt: new Date().toISOString(),
    classCode: null, grade: null, testHistory: []
  });
  return { uid: cred.user.uid, email: cred.user.email, name };
}

async function logIn(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  const displayName = cred.user.displayName || '';
  const name = displayName.includes('|') ? displayName.split('|')[0] : displayName;
  return { uid: cred.user.uid, email: cred.user.email, name };
}

async function logOut() { await signOut(auth); }

function getCurrentUser() {
  return new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, (user) => {
      unsub();
      if (user) {
        const displayName = user.displayName || '';
        const name = displayName.includes('|') ? displayName.split('|')[0] : displayName;
        resolve({ uid: user.uid, email: user.email, name });
      } else { resolve(null); }
    });
  });
}

// ── FIRESTORE TEACHER/STUDENT FUNCTIONS ──

async function createClass(teacherUid, teacherName) {
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  await setDoc(doc(db, 'classes', code), {
    teacherUid, teacherName, code, createdAt: new Date().toISOString(), students: []
  });
  await updateDoc(doc(db, 'users', teacherUid), { role: 'teacher', classCode: code });
  return code;
}

async function getClass(code) {
  const snap = await getDoc(doc(db, 'classes', code));
  return snap.exists() ? snap.data() : null;
}

async function joinClass(studentUid, studentName, code) {
  const classData = await getClass(code);
  if (!classData) throw new Error('Invalid class code');
  await updateDoc(doc(db, 'classes', code), {
    students: arrayUnion({ uid: studentUid, name: studentName, joinedAt: new Date().toISOString() })
  });
  await updateDoc(doc(db, 'users', studentUid), { classCode: code }).catch(() => {
    setDoc(doc(db, 'users', studentUid), { name: studentName, classCode: code, role: 'student', testHistory: [] });
  });
  return classData;
}

async function getStudents(code) {
  const classData = await getClass(code);
  if (!classData) return [];
  const students = [];
  for (const s of classData.students || []) {
    const userSnap = await getDoc(doc(db, 'users', s.uid));
    const userData = userSnap.exists() ? userSnap.data() : {};
    students.push({ ...s, ...userData });
  }
  return students;
}

async function saveTestScore(uid, subject, score, total, grade) {
  try {
    await updateDoc(doc(db, 'users', uid), {
      testHistory: arrayUnion({
        subject, score, total, grade,
        date: new Date().toISOString()
      }),
      lastActive: new Date().toISOString()
    });
  } catch (e) {
    // User doc might not exist yet
    await setDoc(doc(db, 'users', uid), {
      testHistory: [{ subject, score, total, grade, date: new Date().toISOString() }],
      lastActive: new Date().toISOString()
    }, { merge: true });
  }
}

async function getTeacherClass(teacherUid) {
  const userSnap = await getDoc(doc(db, 'users', teacherUid));
  if (!userSnap.exists()) return null;
  const code = userSnap.data().classCode;
  if (!code) return null;
  return await getClass(code);
}

module.exports = {
  signUp, logIn, logOut, getCurrentUser,
  createClass, getClass, joinClass, getStudents, saveTestScore, getTeacherClass
};
