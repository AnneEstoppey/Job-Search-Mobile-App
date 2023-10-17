Job Search App in React Native

This repo is based primarily on the code from JavaScrip Mastery's tutorial on youtube here:
https://youtu.be/mJ3bGvy0WAY?si=_FWFJpTxDoUsWyJl

This app is using the Jsearch API from RapidAPI. You can find it here:
https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch/details



I did a few minor changes:
- I used the @env package to store the API key in a .env file (not included in this repo)
- I had to update to Expo EAS build

About Expo EAS build:
EAS Build is a hosted service for building app binaries for your Expo and React Native projects. It is the successor to the legacy build service that was previously available on Expo's servers. EAS Build is currently in beta and is free to use. It is available to all Expo users, including those on the free plan (as October 2023).
https://docs.expo.dev/build/introduction/




Here some features I would like to add:
- choose which country to search in from a dropdown list
- adding a 'remote' button to search for remote jobs




# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)

test