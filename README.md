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

### iOS

Install dependencies with `cocoapods` is required:

```console
cd ios
pod install
cd ..
```

**Add onboarding-react-native to your iOS project**

* Add camera permission to your app. Find more info [here](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_ios).
* We strongly recommended to lock the orientation to portrait.



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

**Add onboarding-react-native to your Android project**


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

Or just open the Android Studio workspace and run it manually:

## Documentation :page_facing_up:

For more information about ALiCE Onboarding:  https://docs.alicebiometrics.com/onboarding/

## Contact :mailbox_with_mail:

support@alicebiometrics.com
