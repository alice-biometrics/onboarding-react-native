# onboarding-react-native

ALiCE Onboarding React Native 
=============================

ALiCE Onboarding Client React Native allows the automatic capture of documents and video selfie of the user in real time from the camera of your device. It also simplifies the communication with the onboarding API to facilitate rapid integration and development. It manages the onboarding flow configuration: requested documents and order.

The main features are:

- Automatic capture of documents and video selfie of the user in real time from the camera of your device.
- Communication with the onboarding API to facilitate rapid integration and development.
- Manage the onboarding flow configuration: requested documents and order.


Getting Started with this npm module
-------------------------------------


We provide a NPM Module with android ios react native in this package. 


onboarding-react-native.tgz


# Example App

This is a example project as a real example for an integration with the onboarding-react-native module.


First of all, you have to download the onboarding-react-native module into root project.

```bash
cp ../module/onboarding-react-native.tgz ./
```

**NOTE**: you can just copy it using your prefered file browser.


Then, make the following command in root folder, this command will install all need dependencies:


```bash
npm install --save
```


Now, you should be ready to test the application.


# Considerations


## Supported Android versions

All versions of Android are supported since Android 5.0 (LOLLIPOP).


## Google Firebase

The Onboarding Client SDK uses Google Firebase so when you integrate it in you application you will need to [register it](https://firebase.google.com/docs/android/setup) as a Firebase project and add the Firebase configuration file to your project.

We provide a `google-services.json` file for the sample application inside the `android/app` module.



# Documentation

For more information about ALiCE Onboarding:  https://docs.alicebiometrics.com/onboarding/