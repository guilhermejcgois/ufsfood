// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCACdCvtf9-v9EF6_2HJdP0-6HuvTp9KnY',
    authDomain: 'ufsfood-ce233.firebaseapp.com',
    databaseURL: 'https://ufsfood-ce233.firebaseio.com',
    projectId: 'ufsfood-ce233',
    storageBucket: 'ufsfood-ce233.appspot.com',
    messagingSenderId: '62531985938'
  },
  facebook: {
    appId      : '669964396546095',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  }
};
