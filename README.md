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
  * [iOS](#ios)
  * [Android](#android)
- [Demos :rocket:](#demos-rocket)
  * [Demo iOS](#demo-ios)
  * [Demo Android](#demo-android)
- [Integration :chart_with_upwards_trend:](#integration-chart_with_upwards_trend)
  * [Setup for iOS](#setup-for-ios)
  * [Setup for Android](#setup-for-android)
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

### iOS

Install dependencies with `cocoapods` is required:

```console
yarn cocoapods # equivalent to cd ios; pod install; cd ..
```

### Android

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


## Demos :rocket:

We recommend you to start by testing the demos. 

### Demo iOS

```console
yarn ios # or npx react-native run-ios
```

Or just open the XCode workspace and run it manually:

```console
open ios/AppOnboardingSample.xcworkspace/
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

## Integration :chart_with_upwards_trend:

### Setup for iOS

Consider: 
* Add camera permission to your app. Find more info [here](https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/requesting_authorization_for_media_capture_on_ios).
* We strongly recommended to lock app orientation to portrait.
* Update AppOnboardingSample/ios/Podfile in order to fit iOS minimum deployment target. Additionaly, add use_frameworks! to your Podfile.

  ```
  use_frameworks!
  platform :ios, '11.0'
  ```

### Setup for Android

```gradle
allprojects {
    repositories {
        maven {
            url  "https://dl.bintray.com/alice-biometrics/alicebiometrics"
        }
    }
```

Consider:

* Please remember to add to the project a valid Firebase Credentials (see [Android installation](#android)).
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

Please note that the `passport` type does not require specification of `issuingCountry`.

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

## Onboarding Commands :wrench:

ALiCE Onboarding Client SDK can be used in two different ways, by commands (OnboardingCommands) or by full flow (Onboarding).
The commands allow you to open the grabber and do a series of operations independently. Available operations are as follows:

* Get User Status
* Add Selfie
* Create Document
* Add Document
* Get supported documents
* Authenticate a User already enrolled and authorized
* Get Documents supported

### Get status command

Return a ALiCE Onboarding User Status

- Parameter onSuccess: This handler will give you call back inside block when success response with the user status.
- Parameter onError: This handler will give you call back inside block when error response is recieved.

```js
let onboardingCommands = new OnboardingCommands(userToken)
onboardingCommands.commandGetUserStatus( (status) => { // onSuccess
	console.log(status)
}, (error) => { // onError
	console.log(error)
})
```

### Adding selfie command

Present a ALiCE Onboarding Selfie Capture View sending a video directly to ALiCE Onboarding platform.

- Parameter onSuccess: This handler will give you call back inside block when the Selfie was added.
- Parameter onCancel: This handler will give you call back inside block when user cancel the stage.

```js
let onboardingCommands = new OnboardingCommands(userToken)
onboardingCommands.commandAddSelfie( (result) => { // onSuccess
	console.log(result)
} , (error)  => { // onError
	console.log(error)
},  (cancel) => { //onCancel
	console.log(cancel)
})
```      

### Create document command

Creates a document given the type and the issuingCountry:

- Parameter documentType: DocumentType.
- Parameter issuingCountry: String value. You can check supported documents with the command getDocumentsSupported.
- Parameter callback: This handler will give you call back inside block when response is recieved.

 On onSuccess, it returns a result with the document_id on the success content.
 This identifier (documentId) is neccessary to add documents.

```js
let onboardingCommands = new OnboardingCommands(userToken)
let documentType = DocumentType.IDCARD
let issuingCountry = "ESP"
onboardingCommands.commandCreateDocument(DocumentType.IDCARD, issuingCountry, (result) => {  //onSuccess
	console.log(result)
} , (error) => { // onError
	console.log(error)
})
```    

### Add document command

Present a ALiCE Onboarding Document Capture View sending images to ALiCE Onboarding platform

- Parameter documentId: Document identifier given by createDocument command
- Parameter documentType: DocumentType.
- Parameter issuingCountry: String value. You can check supported documents with the command getDocumentsSupported.
- Parameter side: DocumentSide.
- Parameter onSuccess: This handler will give you call back inside block when response the document was captured.
- Parameter onCancel: This handler will give you call back inside block when user cancel the stage.

```js
let documentId = "document identifier given by createDocument command"
let documentType = DocumentType.IDCARD;
let side = DocumentSide.BACK;
let issuingCountry = "ESP"
let onboardingCommands = new OnboardingCommands(userToken)
onboardingCommands.commandAddDocument(documentId, documentType, side, issuingCountry, (result) => { // onSuccess
	console.log(result)
} , (error) => { // onError
	console.log(error)
},  (cancel) => { // onCancel
	console.log(cancel)
})
``` 

### Authenticate command

Present a ALiCE Onboarding Authenticate Capture View sending a video directly to ALiCE Onboarding platform and checking if user is Login allowed or not.

- Parameter onSuccess: This handler will give you call back inside block when the authentication is done.
- Parameter onError: This handler will give you call back inside block when errors response is recieved.
- Parameter onCancel: This handler will give you call back inside block when user cancel the stage.

```js
     let onboardingCommands = new OnboardingCommands(userToken)
     onboardingCommands.commandAuthenticate( (result) => {   //onSuccess
            			console.log(result)
            } , (error) => {   //onError
            			console.log(error)
     	      },  (cancel) => {  //onCancel
            			console.log(cancel)
            })
``` 

### Get supported documents

Returnas a ALiCE Onboarding supported documents (hierarchically ordered).

- Parameter onSuccess: This handler will give you call back inside block when success response is recieved.
- Parameter onError: This handler will give you call back inside block when error response is recieved.

```js
    let onboardingCommands = new OnboardingCommands(userToken)
    onboardingCommands.commandGetDocumentsSupported( (result) => { //onSuccess
            			console.log(result)
            } , (error) => {   //onError
            			console.log(error)
            })
``` 



## Customisation :gear:

To improve the onboarding experience into your look and feel, ALiCE onboarding allows you to customise onboarding stages using your style.

You can use a general configuration, to a rapid customisation both in Android and iOS:

* [iOS Customisation](https://docs.alicebiometrics.com/onboarding/sdk/ios/customisation.html) <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/ios.png" width="16">
* [Android Customisation](https://docs.alicebiometrics.com/onboarding/sdk/android/customisation.html) <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/android.png" width="16">


## Documentation :page_facing_up:

For more information about ALiCE Onboarding:  https://docs.alicebiometrics.com/onboarding/

## Contact :mailbox_with_mail:

support@alicebiometrics.com
