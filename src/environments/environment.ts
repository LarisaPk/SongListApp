// Larisa Pyykölä, student number 1702357

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// added firebase entry with data copied from firebase console
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCnpHm08_nngBIFJOMBP42l41PT5X89HDY",
    authDomain: "songlistapp-3aeb6.firebaseapp.com",
    databaseURL: "https://songlistapp-3aeb6.firebaseio.com",
    projectId: "songlistapp-3aeb6",
    storageBucket: "songlistapp-3aeb6.appspot.com",
    messagingSenderId: "591719612151"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
