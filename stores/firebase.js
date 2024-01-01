import { addDoc, collection } from "firebase/firestore";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";

import { defineStore } from 'pinia';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: config.public.apiKey,
//   authDomain: config.public.authDomain,
//   projectId: config.public.projectId,
//   storageBucket: config.public.storageBucket,
//   messagingSenderId: config.public.messagingSenderId,
//   appId: config.public.appId,
//   measurementId: config.public.measurementId
// };
export const useFirebaseStore = defineStore('firebase', {

  state: () => ({
    count: 0,
    app: null,
    database: null,
  }),
  actions: {
    init() {
      const config = useRuntimeConfig();
      const firebaseConfig = {
        apiKey: config.public.apiKey,
        authDomain: config.public.authDomain,
        projectId: config.public.projectId,
        storageBucket: config.public.storageBucket,
        messagingSenderId: config.public.messagingSenderId,
        appId: config.public.appId,
        measurementId: config.public.measurementId
      }
      console.log(firebaseConfig)
      this.app = initializeApp(firebaseConfig);
      console.log(this.app)

      this.database = getFirestore(this.app);
      // const analytics = getAnalytics(this.app);
      // console.log(analytics)

    },
    async createRoom(roomId='342') {
      try {
        const docRef = await addDoc(collection(this.database, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    decrement() {
      this.count--;
    },
  },
});