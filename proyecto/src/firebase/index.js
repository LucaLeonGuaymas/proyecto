import { initializeApp } from 'firebase/app';
// import { getAuth } from '../firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyBFlWOXF2AFkMDSNnyOFSePj4fomKSXlfU',
  authDomain: 'transitar-8d84f.firebaseapp.com',
  projectId: 'transitar-8d84f',
  storageBucket: 'transitar-8d84f.appspot.com',
  messagingSenderId: '376552801646',
  appId: '1:376552801646:web:6826eb1b6de40a1ff3ed7f'
};
const app = initializeApp(firebaseConfig);
// const auth = getAuth (app);
export { app };