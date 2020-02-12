# onboarding-react-native

ALiCE Onboarding React Native component allows the automatic capture of documents and video selfie of the user in real time from the camera of your device. It also simplifies the communication with the onboarding API to facilitate rapid integration and development. It manages the onboarding flow configuration: requested documents and order.

The main features are:

- Automatic capture of documents and video selfie of the user in real time from the camera of your device.
- Communication with the onboarding API to facilitate rapid integration and development.
- Manage the onboarding flow configuration: requested documents and order.

## Requirements :hammer:

* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/)
* [react-native](https://facebook.github.io/react-native/docs/getting-started)
* iOS specific:
  * [cocoapods](https://guides.cocoapods.org/using/getting-started.html)
* Android specific:
  * [firebase credentials](https://firebase.google.com/docs/android/setup) (google-services.json)
  * All versions of Android are supported since Android 5.0 (LOLLIPOP).

## Installation :computer:

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

For Android application is required to add to the project a valid Firebase Credentials. Please, create your credentials for your application (associate your credentials with an `applicationId`):

Copy your google-services.json file for the example application inside the android/app module.

```console
cp google-services.json android/app
```

Your `google-services.json` should have a bundleId associate. Please, change in `android/app/build.gradle`

```gradle
android {
    ...

    defaultConfig {
        applicationId "<ADD-HERE-YOUR-APPLICATION-ID"
        ...
    }
    
...
```


## Run App Example :calling:

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

# Documentation

For more information about ALiCE Onboarding:  https://docs.alicebiometrics.com/onboarding/
