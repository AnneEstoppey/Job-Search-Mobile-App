## Job Search App in React Native

This repo is based primarily on the code from JavaScrip Mastery's tutorial on youtube here: <br>
https://youtu.be/mJ3bGvy0WAY?si=_FWFJpTxDoUsWyJl

This app is using the Jsearch API from RapidAPI. You can find it here: <br>
https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch/details

![mobile_app_screenshots](https://github.com/AnneEstoppey/Job-Search-Mobile-App/assets/35219455/72df43e4-bfdf-48ab-ad1f-064c5303a687)


### Note 1: 
your rapid api key will be exposed if you do follow the tutorial. This is not recommended. Please read the following article to understand the importance to hide your API keys and also several methods how to do this. <br>
https://www.smashingmagazine.com/2023/05/safest-way-hide-api-keys-react/

### Note 2: 
I chose to upgrade to Expo EAS in order to be able to build a test version.

### About Expo EAS build:
EAS Build is a hosted service for building app binaries for your Expo and React Native projects. It is the successor to the legacy build service that was previously available on Expo's servers. EAS Build is currently in beta and is free to use. It is available to all Expo users, including those on the free plan (as October 2023). <br>
https://docs.expo.dev/build/introduction/

Check text file 'how_to_upgrade_to_ExpoEAS_from_legacy_build.txt' for more details (commands I used for upgrading to Expo EAS).

It will then be possible to share a link (or QR code) for testing your app:
Screenshot showing my repo on expo.dev.

### Read the Expo EAS documentation for fully deploying your app to app store.
For Apple store: <br>
https://docs.expo.dev/submit/ios/

### Here some features I would like to add:
- choose which country to search in from a dropdown list
- adding a 'remote' button to search for remote jobs
