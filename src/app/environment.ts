// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

//export const environment = {
//  production: false,
//  API: '//localhost:3002/api',
//  WS: '//localhost:3002', // para websocket
//  APIStatusCheck: false
//};

export const environment = {
    production: false,
    firebase: {
        apiKey: "",
        authDomain: "andes-citas.firebaseapp.com",
        databaseURL: "https://andes-citas.firebaseio.com/",
        projectId: "andes-citas",
        storageBucket: "andes-citas.appspot.com",
        messagingSenderId: "324973719356"
    }
};