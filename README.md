# onboarding-react-native  <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/react-native.png" width="30"> [![npm version](https://img.shields.io/npm/v/aliceonboarding-reactnative.svg?style=flat)](https://www.npmjs.com/package/aliceonboarding-reactnative) [![doc](https://img.shields.io/badge/doc-onboarding-51CB56)](https://docs.alicebiometrics.com/onboarding/)

<img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/alice_header.png" width=auto>

ALiCE Onboarding React Native component allows the automatic capture of documents and video selfie of the user in real time from the camera of your device. It also simplifies the communication with the onboarding API to facilitate rapid integration and development. It manages the onboarding flow configuration: requested documents and order.

The main features are:

- Automatic capture of documents and video selfie of the user in real time from the camera of your device.
- Communication with the onboarding API to facilitate rapid integration and development.
- Manage the onboarding flow configuration: requested documents and order.


## Table of Contents
- [Requirements :hammer:](#requirements-hammer)
- [Installation :computer:](#installation-computer)
- [Demos :rocket:](#demos-rocket)
- [Integration :chart_with_upwards_trend:](#integration-chart_with_upwards_trend)
  * [Setup](#setup)
  * [Import the library](#import-the-library)
  * [Configuration](#configuration)
  * [Run ALiCE Onboarding](#run-alice-onboarding)
- [Authentication :closed_lock_with_key:](#authentication-closed_lock_with_key)
  * [Trial](#trial)
  * [Production](#production)
- [Onboarding Commands :wrench:](#onboarding-commands-wrench)
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

> iOS <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/ios.png" width="16">

Installing dependencies with `cocoapods` is required:

```console
yarn cocoapods # equivalent to cd ios; pod install; cd ..
```

:new:

If your Podfile `post_install` does not set the `BUILD_LIBRARY_FOR_DISTRIBUTION` flag to `YES`, you need to set it for both `Alamofire` and `Yams` pods at their `Build Options` settings.

<img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/ios_sdk_yams_build_options_settings.png" width=auto>



## Demos :rocket:

We recommend you to start by testing the demos. 

> iOS <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/ios.png" width="16">

```console
yarn ios # or npx react-native run-ios
```

Or just open the XCode workspace and run it manually:

```console
open ios/AppOnboardingSample.xcworkspace/
```

---

> Android <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/android.png" width="16">

```console
npx react-native run-android
```

Or just open the Android Studio workspace and run it manually.

> React Native Server <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/react-native.png" width="16">

Plase note that a react-native server running is required for both platforms. Run it manually with:

```console
yarn start # react-native start
```

## Integration :chart_with_upwards_trend:

### Setup

> iOS <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/ios.png" width="16">

Considerations: 
* Add camera permission to your app. Find more info [here](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_ios).
* We strongly recommended to lock app orientation to portrait.
* Update AppOnboardingSample/ios/Podfile in order to fit iOS minimum deployment target. Additionaly, add use_frameworks! to your Podfile.

  ```
  use_frameworks!
  platform :ios, '11.0'
  ```

---

> Android <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/android.png" width="16">

```gradle
allprojects {
    repositories {
        maven {
            url  "https://dl.bintray.com/alice-biometrics/alicebiometrics"
        }
    }
```

Considerations:

* The SDK requires at least API 21. So remember to set `minSdkVersion = 21`.
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

You can also specify the `issuingCountry`, otherwise user can select it with a menu.

```js
const ONBOARDING_CONFIG = {
    "stages": [
        {"stage": "addSelfie"},
        {"stage": "addDocument", "type": "idcard", "issuingCountry": "ESP"},
    ]
}
```

**Available Stages:** 
* `addSelfie`: It includes a selfie capturer.
* `addDocument`: It includes a document capturer. Additionally, you can configure the `type` of document and the `issuingCountry`.
	* `type` (**required**): Available documents (*idcard, driverlicense, passport, residencepermit*).
	* `issuingCountry` (**optional**): 
		You can select an `issuingCountry` from those supported by ALiCE Onboarding. Please, check code and available countries  [here](https://docs.alicebiometrics.com/onboarding/supported_docs.html). 
		Otherwise, if no `issuingCountry`is passed, it will be requested from the user via a pop-up menu.


Please note that the `passport` type does not require specification of `issuingCountry`.

### Run ALiCE Onboarding

Add our React Native component in your application adding:

```html
<Onboarding
  userToken={userToken}
  config={ONBOARDING_CONFIG}
  onSuccess={(userStatusJson) => console.log("onSuccess:" + userStatusJson) }
  onFailure={(failureJson) => console.log("onFailure:" + failureJson) }
  onCancel={(value) => console.log("onCancel:" + value) }
/>
```

Where:
 * `userToken` is used to secure requests made by the users on their mobile devices or web clients. You should obtain it from your Backend (see [Authentication :closed_lock_with_key:](#authentication-closed_lock_with_key)).
 * `userStatusJson` is a json with user status information, here you can find the `user_id` and information about a successful onboarding. 
 * `failureJson` is a json with information about an unexpected failure.

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
  onSuccess={(userStatusJson) => console.log("onSuccess:" + userStatusJson) }
  onFailure={(failureJson) => console.log("onFailure:" + failureJson) }
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
  onSuccess={(userStatusJson) => console.log("onSuccess:" + userStatusJson) }
  onFailure={(failureJson) => console.log("onFailure:" + failureJson) }
  onCancel={(value) => console.log("onCancel:" + value) }
/>
```

## Onboarding Commands :wrench:

ALiCE Onboarding Client SDK can be used in two different ways, by commands (OnboardingCommands) or by full flow (Onboarding).
The commands allow you to open the grabber and do a series of operations independently. Available operations are as follows:

* Get User Status
* Add Selfie
* Create Document
* Add Document
* Get Supported Documents
* Authenticate
* Get Supported Documents

Please, see [Onboarding Commands Documentation](doc/OnboardingCommands.md) for more info.

## Customisation :gear:

To improve the onboarding experience into your look and feel, ALiCE onboarding allows you to customise onboarding stages using your style.

You can use a general configuration, to a rapid customisation both in Android and iOS:

* [iOS Customisation](https://docs.alicebiometrics.com/onboarding/sdk/ios/customisation.html) <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/ios.png" width="16">
* [Android Customisation](https://docs.alicebiometrics.com/onboarding/sdk/android/customisation.html) <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/android.png" width="16">


## Documentation :page_facing_up:

For more information about ALiCE Onboarding:  https://docs.alicebiometrics.com/onboarding/

## Contact :mailbox_with_mail:

support@alicebiometrics.com
