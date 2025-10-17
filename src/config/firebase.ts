import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

// Export Firebase services directly
// React Native Firebase auto-initializes the default app
export { auth, firestore, storage };

// If you need the app instance
export { default as app } from '@react-native-firebase/app';