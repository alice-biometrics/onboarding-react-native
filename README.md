# onboarding-react-native

ALiCE Onboarding React Native 
=============================

ALiCE Onboarding Client React Native allows the automatic capture of documents and video selfie of the user in real time from the camera of your device. It also simplifies the communication with the onboarding API to facilitate rapid integration and development. It manages the onboarding flow configuration: requested documents and order.

The main features are:

- Automatic capture of documents and video selfie of the user in real time from the camera of your device.
- Communication with the onboarding API to facilitate rapid integration and development.
- Manage the onboarding flow configuration: requested documents and order.

## Requirements 

* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/)
* [react-native](https://facebook.github.io/react-native/docs/getting-started)
* iOS specific:
  * [cocoapods](https://guides.cocoapods.org/using/getting-started.html)
* Android specific:
  * [firebase credentials](https://firebase.google.com/docs/android/setup) (google-services.json)
  * All versions of Android are supported since Android 5.0 (LOLLIPOP).

## Installation

We provide a npm module (`onboarding-react-native.tgz`) with a react-native component. Native frameworks (Android and iOS) are included in the package.

First of all, copy the package to your project. To check the npm module, you can use this app:

```console
cp ~/Downloads/onboarding-react-native.tgz .
```

Install with npm:

```console
npm install --save
```

#### iOS

Install dependencies with `cocoapods` is required:

```console
cd ios
pod install
cd ..
```

#### Android


## Run App Example

#### iOS

```console
react-native run-ios
```

Or just open the XCode workspace and run it manually:

```console
open ios/example.xcworkspace/
```

#### Android

```console
react-native run-android
```

Or just open the Android Studio workspace and run it manually:

```console
# open android studio project
```

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
