# onboarding-react-native  <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/react-native.png" width="30"> [![npm version](https://img.shields.io/npm/v/aliceonboarding-reactnative.svg?style=flat)](https://www.npmjs.com/package/aliceonboarding-reactnative) [![doc](https://img.shields.io/badge/doc-onboarding-51CB56)]([https://docs.alicebiometrics.com/onboarding/sections/mobile_client_side_sdks/react_native/])

<img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/alice_header.png" width=auto>

Alice React Native SDK is a collection of software development tools to integrate Alice Onboarding.

Its main features are:

- Automatic capture of documents and video selfie of the user in real time from the camera of your device.
- Communication with the onboarding API to facilitate rapid integration and development.
- Management of the onboarding flow configuration: requested documents and order.

This repository serves as an example of how to integrate Alice's SDK into an application.

## Installation :computer:

At the project's root

```console
yarn install
brew install ios-deploy
cd ios
pod install --repo-update
```
 
## Run the Project:
### For iOS: <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/ios.png" width="30">

```console
npx react-native run-ios
```

### For Android: <img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/android.png" width="30">

```console
npx react-native run-android
```

#### Troubleshooting :hammer:	

If the installation fails and your phone displays a `Could not connect to development server` error:

1. Please make sure your device is in the same network that your computer.
2. Shake your device, a dialog should pop-up.
3. Go to `Settings>Debug server host&port for device`.
4. Introduce your local IP and port 8081.


## Documentation :page_facing_up:

Refer to https://docs.alicebiometrics.com/onboarding/sections/mobile_client_side_sdks/react_native/

## Contact :mailbox_with_mail:

support@alicebiometrics.com


