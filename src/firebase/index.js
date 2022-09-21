
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDmqXoQdR__B_b8ng-M17HLVfCPy2fukyA",
  authDomain: "vue-fire-auth-ob.firebaseapp.com",
  projectId: "vue-fire-auth-ob",
  storageBucket: "vue-fire-auth-ob.appspot.com",
  messagingSenderId: "617164593802",
  appId: "1:617164593802:web:8c1cd4dc8408bb7d74eb73"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)


export{auth}



