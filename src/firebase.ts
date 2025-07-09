import { initializeApp, getApps, FirebaseConfig } from 'firebase/app';
import { 
  getFirestore, 
  enableIndexedDbPersistence, 
  enableMultiTabIndexedDbPersistence, 
  connectFirestoreEmulator,
  FirestoreError
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);

// Try to enable multi-tab persistence first
const initializePersistence = async () => {
  try {
    await enableMultiTabIndexedDbPersistence(db)
      .catch(async (err: FirestoreError) => {
        console.warn('Multi-tab persistence failed, falling back to single-tab persistence');
        // If multi-tab fails, try single-tab persistence
        await enableIndexedDbPersistence(db)
          .catch((err: FirestoreError) => {
            if (err.code === 'failed-precondition') {
              console.warn('Firebase persistence failed: Multiple tabs open');
            } else if (err.code === 'unimplemented') {
              console.warn('Firebase persistence failed: Browser not supported');
            } else {
              console.error('Firebase persistence failed:', err);
            }
          });
      });
  } catch (error) {
    console.error('Error initializing Firebase persistence:', error);
  }
};

// Use emulator in development
if (import.meta.env.DEV) {
  try {
    connectFirestoreEmulator(db, 'localhost', 8080);
  } catch (error) {
    console.warn('Failed to connect to Firestore emulator:', error);
  }
}

// Initialize persistence
initializePersistence().catch(console.error);

export { db, storage }; 