import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAhBGasedvefJA7khfHAfh00x9jTJn4XqQ',
  authDomain: 'gb-1756.firebaseapp.com',
  projectId: 'gb-1756',
  storageBucket: 'gb-1756.appspot.com',
  messagingSenderId: '18594498597',
  appId: '1:18594498597:web:5f6aeae7dbea7bfb58d7cc',
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(firebase);

export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');

export const getChatListById = (id: string) => ref(db, `chats/${id}`);

export const getMessagesRefId = (chatId: string) =>
  ref(db, `messages/${chatId}`);

export const getMessagesListRefId = (chatId: string, msgId: string) =>
  ref(db, `messages/${chatId}/messageList/${msgId}`);
