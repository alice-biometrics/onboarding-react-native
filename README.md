# onboarding-react-native  <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/react-native.png" width="30"> 

[![npm version](https://img.shields.io/npm/v/aliceonboarding-reactnative.svg?style=flat)](https://www.npmjs.com/package/aliceonboarding-reactnative)
[![doc](https://img.shields.io/badge/doc-onboarding-51CB56)](https://docs.alicebiometrics.com/onboarding/)

ALiCE Onboarding React Native component allows the automatic capture of documents and video selfie of the user in real time from the camera of your device. It also simplifies the communication with the onboarding API to facilitate rapid integration and development. It manages the onboarding flow configuration: requested documents and order.

The main features are:

- Automatic capture of documents and video selfie of the user in real time from the camera of your device.
- Communication with the onboarding API to facilitate rapid integration and development.
- Manage the onboarding flow configuration: requested documents and order.


## Table of Contents
- [Requirements :hammer:](#requirements-hammer)
- [Installation :computer:](#installation-computer)
  * [Installation iOS](#installation-ios)
  * [Installation Android](#installation-android)
- [Getting Started :chart_with_upwards_trend:](#getting-started-chart_with_upwards_trend)
  * [Import the library](#import-the-library)
  * [Configuration](#configuration)
  * [Run ALiCE Onboarding](#run-alice-onboarding)
- [Authentication :closed_lock_with_key:](#authentication-closed_lock_with_key)
  * [Trial](#trial)
  * [Production](#production)
- [Demo :rocket:](#demo-rocket)
  * [Demo iOS](#demo-ios)
  * [Demo Android](#demo-android)
- [Customisation :gear:](#customisation-gear)
- [Documentation :page_facing_up:](#documentation-page_facing_up)
- [Contact :mailbox_with_mail:](#contact-mailbox_with_mail)

## Requirements :hammer:

* Package Manager: Use [yarn](https://classic.yarnpkg.com/en/docs/install/) or [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 
* [react-native](https://facebook.github.io/react-native/docs/getting-started)
* iOS specific:
  * [cocoapods](https://guides.cocoapods.org/using/getting-started.html)
  * All versions of iOS are supported since iOS 11.0 (Swift 5.0)
* Android specific:
  * [firebase credentials](https://firebase.google.com/docs/android/setup) (google-services.json)
  * All versions of Android are supported since Android 5.0 (LOLLIPOP).

## Installation :computer:

Add the ALiCE Onboarding React Native Component:

```console
yarn add aliceonboarding-reactnative
```

or just add the following code to your package.json

```json
"aliceonboarding-reactnative": "{VERSION}",
                                    ^
                                    |_____ Set the version
```

Then, install it as usual:

```console
yarn install
```

### Installation iOS

Install dependencies with `cocoapods` is required:

```console
yarn cocoapods # equivalent to cd ios; pod install; cd ..
```

Consider: 
* Add camera permission to your app. Find more info [here](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_ios).
* We strongly recommended to lock app orientation to portrait.
* Update AppOnboardingSample/ios/Podfile in order to fit iOS minimum deployment target. Additionaly, add use_frameworks! to your Podfile.

  ```
  use_frameworks!
  platform :ios, '11.0'
  ``

### Installation Android

```gradle
allprojects {
    repositories {
        maven {
            url  "https://dl.bintray.com/alice-biometrics/alicebiometrics"
        }
    }
```

For Android application is required to add to the project a valid Firebase Credentials. Please, create your credentials for your application (associate your credentials with an `applicationId`):

Copy your google-services.json file for the example application inside the android/app module.

```console
cp ~/Downloads/google-services.json android/app/
```

Your `google-services.json` should have an `applicationId` associated. Please, change in `android/app/build.gradle`

```gradle
android {
 defaultConfig {
     applicationId "<ADD-HERE-YOUR-APPLICATION-ID"
}
```

Consider:
* Add camera permisions to your app, and Add AliceActivity.
   - Modify `android/app/src/main/AndroidManifest.xml` this:

       ```xml
       <manifest>
         <uses-permission android:name="android.permission.CAMERA" /> 
         <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /> 
         <uses-feature android:name="android.hardware.camera" />
         <uses-feature android:name="android.hardware.camera.autofocus" /> 
        
         <application
          <activity android:name="com.rnalice.AliceActivity" />
        </application>
       </manifest>
       ```

* We strongly recommended to lock app orientation to portrait.
* Add Firebase plugin required.

  ```gradle
  dependencies {
      classpath 'com.google.gms:google-services:4.3.2' 
  }
  ```

  ```gradle
  apply plugin: 'com.google.gms.google-services'
  ```

## Getting Started :chart_with_upwards_trend:

### Import the library

```js
import Onboarding from 'aliceonboarding-reactnative';
```

### Configuration

You can configure the onboarding flow with a simple dictionary:

```js
const ONBOARDING_CONFIG = {
    "stages": [
        {"stage": "addSelfie"},
        {"stage": "addDocument", "type": "idcard"},
    ]
}
```

### Run ALiCE Onboarding

Add our React Native component in your application adding:

```html
<Onboarding
  userToken={userToken}
  config={ONBOARDING_CONFIG}
  onSuccess={(value) => console.log("onSuccess:" + value) }
  onFailure={(value) => console.log("onFailure:" + value) }
  onCancel={(value) => console.log("onCancel:" + value) }
/>
```

Where `userToken` is used to secure requests made by the users on their mobile devices or web clients. You should obtain it from your Backend (see [Authentication :closed_lock_with_key:](#authentication-closed_lock_with_key)).

see an example [here](app/components/OnboardingProduction/index.js)

## Authentication :closed_lock_with_key:

How can we get the `userToken` to start testing ALiCE Onboarding technology?

`AliceOnboarding` can be used with two differnet authentication modes:

* Trial (Using ALiCE Onboarding Sandbox): Recommended only in the early stages of integration.
    - Pros: This mode does not need backend integration.
    - Cons: Security compromises. It must be used only for develpment and testing.
* Production (Using your Backend): In a production deployment we strongly recommend to use your backend to obtain required TOKENS.
    - Pros: Full security level. Only your backend is able to do critical operations.
    - Cons: Needs some integration in your backend.

### Trial

If you want to test the technology without integrate it with your backend, you can use our Sandbox Service. This service associates a user mail with the ALiCE Onboarding `user_id`. You can create a user and obtain his `USER_TOKEN` already linked with the email.

Add our React Native component in your application adding:

```html
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
Where `sandboxToken` is a temporary token for testing the technology in a development/testing environment. 

An `email` is required to associate it to an ALiCE Onboarding `user_id`. You can also add some additional information from your user as `firstName` and `lastName`.

see an example [here](app/components/OnboardingTrial/index.js)

For more information about the Sandbox, please check the following [doc](https://docs.alicebiometrics.com/onboarding/access.html#using-alice-onboarding-sandbox).

### Production

On the other hand, for production environments we strongly recommend to use your backend to obtain the required `USER_TOKEN`.

```html
<Onboarding
  userToken={this.getUserTokenFromMyBackend()}
  config={ONBOARDING_CONFIG}
  onSuccess={(value) => console.log("onSuccess:" + value) }
  onFailure={(value) => console.log("onFailure:" + value) }
  onCancel={(value) => console.log("onCancel:" + value) }
/>
```

## Demo :rocket:

### Demo iOS

```console
yarn ios # or npx react-native run-ios
```

Or just open the XCode workspace and run it manually:

```console
open ios/example.xcworkspace/
```

### Demo Android

```console
npx react-native run-android
```

Or just open the Android Studio workspace and run it manually.


**React Native Server**

Plase note that a react-native server running is required for both platforms. Run it manually with:

```console
yarn start # react-native start
```

## Customisation :gear:

### Appareance

To improve the user experience, ALiCE Onboarding allows the customization of the theme in a very simple way. Just define

* onboardingPrimary: Defines button colors and main text.
* onboardingSecondary: Define secondary text (Helping info).
* onboardingUncheckedItems: Define the background of unchecked icons.

Modify the OnboardingConfig:

```js
const ONBOARDING_CONFIG = {
    "stages": [
        {"stage": "addSelfie"},
        {"stage": "addDocument", "type": "idcard"},
    ],
    "appearance": {
        "primaryColor": {"blue": 0.478, "alpha": 1, "green": 0.121, "red": 0.129},
        "secondaryColor": {"red": 0.509, "green": 0.509, "blue": 0.509, "alpha": 1},
        "uncheckedItemsColor": {"green": 0.47, "red": 0.47, "blue": 0.47, "alpha": 1},
        "fontRegular": "System Thin",
        "fontBold": "System Light"
    }
}
```



### Localization

ALiCE Onboarding SDK already come with two automatic translations for the following locales:
* English (en)
* Spanish (es)

By default, the SDK infers what is the default language to use. If locale does not exist, it uses English.

In addition, you can also provide custom translations (or different texts) to clarify whatever you want in your app. For that, you need to add an additionl file inside your resource folder for required locale, the file name should be the ISO 639-1 language code.

```js
const ONBOARDING_CONFIG = {
    "stages": [
        {"stage": "addSelfie"},
        {"stage": "addDocument", "type": "idcard"},
    ],
    "localization": {
        "language": "en"
    }
}
```

## Documentation :page_facing_up:

For more information about ALiCE Onboarding:  https://docs.alicebiometrics.com/onboarding/

## Contact :mailbox_with_mail:

support@alicebiometrics.com
