import { FirebaseApp } from '@firebase/app';
import { Firestore } from '@firebase/firestore';
import { FirebaseStorage } from '@firebase/storage';

declare module 'firebase/app' {
  export interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  }

  export function initializeApp(config: FirebaseConfig): FirebaseApp;
  export function getApps(): FirebaseApp[];
}

declare module 'firebase/firestore' {
  export function getFirestore(app: FirebaseApp): Firestore;
  export function enableIndexedDbPersistence(db: Firestore): Promise<void>;
}

declare module 'firebase/storage' {
  export function getStorage(app: FirebaseApp): FirebaseStorage;
} 