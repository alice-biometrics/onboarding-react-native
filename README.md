# onboarding-react-native :point_left:

ALiCE Onboarding React Native component allows the automatic capture of documents and video selfie of the user in real time from the camera of your device. It also simplifies the communication with the onboarding API to facilitate rapid integration and development. It manages the onboarding flow configuration: requested documents and order.

The main features are:

- Automatic capture of documents and video selfie of the user in real time from the camera of your device.
- Communication with the onboarding API to facilitate rapid integration and development.
- Manage the onboarding flow configuration: requested documents and order.

## Usage :wave:

### Configuration

You can configure the onboarding flow with a simple dictionary:

```js
const ONBOARDING_CONFIG = {
    "stages": [
        {"stage": "addSelfie"},
        {"stage": "addDocument", "type": "idcard"},
    ],
    "localization": {
        "language": "en"
    },
    "appearance": {
        "primaryColor": {"blue": 0.478, "alpha": 1, "green": 0.121, "red": 0.129},
        "secondaryColor": {"red": 0.509, "green": 0.509, "blue": 0.509, "alpha": 1},
        "uncheckedItemsColor": {"green": 0.47, "red": 0.47, "blue": 0.47, "alpha": 1},
        "fontRegular": "System Thin",
        "fontBold": "System Light"
    }
}
```

### Using ALiCE Onboarding on Trial

Add our React Native component in your application adding:

```js
<OnboardingWithSandbox
  sandboxToken={sandboxToken}
  email={email}
  firstName={firstName}
  lastName={lastName}
  config={ONBOARDING_CONFIG}
  onSuccess={(value) => console.log("onSuccess:" + value) }
  onFailure={(value) => console.log("onFailure:" + value) }
  onCancel={(value) => console.log("onCancel:" + value) }
/>
```

Where `sandboxToken` is a temporal token for testing the technology in a development/testing environment. 

An `email` is required to associate it to an ALiCE `user_id`.

see an example [here](app/components/OnboardingTrial/index.js)

### Using ALiCE Onboarding on Production

Add our React Native component in your application adding:

```js
<Onboarding
  userToken={userToken}
  config={ONBOARDING_CONFIG}
  onSuccess={(value) => console.log("onSuccess:" + value) }
  onFailure={(value) => console.log("onFailure:" + value) }
  onCancel={(value) => console.log("onCancel:" + value) }
/>
```

Where `userToken` is used to secure requests made by the users on their mobile devices or web clients. You should obtain it from your Backend.

see an example [here](app/components/OnboardingProduction/index.js)


## Requirements :hammer:

* Package Manager: Use [yarn](https://classic.yarnpkg.com/en/docs/install/) or [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 
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
yarn install --save
```

### iOS

Install dependencies with `cocoapods` is required:

```console
yarn cocoapods
```

or 

```console
cd ios
pod install
cd ..
```

### Android

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

### iOS

```console
react-native run-ios
```

Or just open the XCode workspace and run it manually:

```console
open ios/example.xcworkspace/
```

### Android

```console
react-native run-android
```

Or just open the Android Studio workspace and run it manually.


## Use ALiCE Onboarding in your React Native App :ok_hand:

### Add onboarding-react-native to your iOS project

* Add camera permission to your app. Find more info [here](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_ios).
* We strongly recommended to lock the orientation to portrait.


### Add onboarding-react-native to your Android project


1. Add camera permisions to your app, and Add AliceActivity.
      - Modify `android/app/src/main/AndroidManifest.xml` this:

```xml
  <manifest>
    <uses-permission android:name="android.permission.CAMERA" /> <!--Add this -->
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /> <!--Add this -->

    <uses-feature android:name="android.hardware.camera" /> <!--Add this -->
    <uses-feature android:name="android.hardware.camera.autofocus" /> <!--Add this -->
    <!-- > ... -->
    <activity android:name="com.rnalice.AliceActivity" /> <!--Add this -->
  </manifest>
```

2. We strongly recommended to lock the orientation to portrait.


3. Modify `android/build.gradle` with:

```gradle
buildscript {
    ext {
        buildToolsVersion = "28.0.3"
        minSdkVersion = 21 // Modify this (at least 21)
        compileSdkVersion = 28
        targetSdkVersion = 28
        kotlinVersion = '1.3.11' // Add this
    }
    repositories {
        google()
        jcenter()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:3.4.2")
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion" // Add this
        classpath 'com.google.gms:google-services:4.3.2' // Add this (firebase related)
    }
}
```

4. Modify `android/settings.gradle` with:

```gradle
include ':onboarding' // Add this
project(':onboarding').projectDir = new File(rootProject.projectDir,'../node_modules/onboarding-react-native/android/onboarding') // Add this
apply from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)
```

5. Modify `android/app/build.gradle` with:

```gradle
...
android {
  ...
  defaultConfig {
    ...
    multiDexEnabled true // Add this
  }
  ...
}
dependencies {
  ...
  implementation 'com.google.firebase:firebase-analytics:17.2.0' // Add this (firebase related)
}
apply plugin: 'com.google.gms.google-services' // Add this (firebase related)
```

## Documentation :page_facing_up:

For more information about ALiCE Onboarding:  https://docs.alicebiometrics.com/onboarding/

## Contact :mailbox_with_mail:

support@alicebiometrics.com
