const {
  NEXT_PUBLIC_REACT_APP_API_URL,
  NEXT_PUBLIC_REACT_APP_IMAGEKIT_URL,
  NEXT_PUBLIC_REACT_APP_IMAGEKIT_PUBLIC_KEY,
  NEXT_PUBLIC_REACT_APP_IMAGEKIT_AUTH_URL,
  NEXT_PUBLIC_REACT_APP_IMAGEKIT_DELETE_URL,
  NEXT_PUBLIC_REACT_APP_URL,
  NEXT_PUBLIC_REACT_APP_FIREBASE_API_KEY,
  NEXT_PUBLIC_REACT_APP_FIREBASE_AUTH_DOMAIN,
  NEXT_PUBLIC_REACT_APP_FIREBASE_PROJECT_ID,
  NEXT_PUBLIC_REACT_APP_FIREBASE_STORAGE_BUCKET,
  NEXT_PUBLIC_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_REACT_APP_FIREBASE_APP_ID,
  NEXT_PUBLIC_REACT_APP_FIREBASE_MEASUREMENT_ID,
  // cookies
  NEXT_PUBLIC_REACT_APP_LANGUAGE,
  // map box
  NEXT_PUBLIC_REACT_APP_MAPBOX_API,
} = process.env;

const config = {
  url: NEXT_PUBLIC_REACT_APP_URL,
  imagekitUrl: NEXT_PUBLIC_REACT_APP_IMAGEKIT_URL,
  imagekitPublicKey: NEXT_PUBLIC_REACT_APP_IMAGEKIT_PUBLIC_KEY,
  imagekitAuthUrl: NEXT_PUBLIC_REACT_APP_IMAGEKIT_AUTH_URL,
  imagekitDeleteUrl: NEXT_PUBLIC_REACT_APP_IMAGEKIT_DELETE_URL,
  firebaseConfig: {
    apiKey: NEXT_PUBLIC_REACT_APP_FIREBASE_API_KEY,
    authDomain: NEXT_PUBLIC_REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: NEXT_PUBLIC_REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: NEXT_PUBLIC_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: NEXT_PUBLIC_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: NEXT_PUBLIC_REACT_APP_FIREBASE_APP_ID,
    measurementId: NEXT_PUBLIC_REACT_APP_FIREBASE_MEASUREMENT_ID,
  },
  // cookie
  language: NEXT_PUBLIC_REACT_APP_LANGUAGE,
  apiUrl: NEXT_PUBLIC_REACT_APP_API_URL,
  // map box api
  mapBoxAPI: NEXT_PUBLIC_REACT_APP_MAPBOX_API,
};

export default config;
