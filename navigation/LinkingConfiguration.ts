import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          SignIn: {
            screens: {
              SigninScreen: 'signin',
            },
          },
          SignUp: {
            screens: {
              SignupScreen: 'signup',
            },
          },
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Account: {
            screens: {
              AccountScreen: 'account',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
