![Header Graphic](https://github.com/alice-biometrics/custom-emojis/blob/master/images/alice_header.png)

# Alice Onboarding React-Native SDK

![Version](https://img.shields.io/github/v/release/alice-biometrics/onboarding-react-native?style=flat)
[![API Doc](https://img.shields.io/github/v/release/alice-biometrics/onboarding-react-native?label=API%20doc&color=green&style=flat)](https://docs.alicebiometrics.com/onboarding/sections/mobile_client_side_sdks/react_native/)
![License](https://img.shields.io/npm/l/aliceonboarding-reactnative.svg?style=flat)
[![NPM](https://img.shields.io/npm/v/aliceonboarding-reactnative.svg?style=flat)](https://www.npmjs.com/package/aliceonboarding-reactnative)

This repository serves as an example of how to integrate Alice Onboarding React-Native SDK into an application.

Alice Onboarding React-Native SDK is a collection of software development tools to make easier the integration of Alice Onboarding service.

Its main features are:

- Automatic capture of documents and video selfie of the user in real time from the camera of your device.
- Communication with the onboarding API to facilitate rapid integration and development.
- Management of the onboarding flow configuration: requested documents and order.

## Quickstart

At the project's root

```console
yarn install
brew install ios-deploy
cd ios
pod install --repo-update
```
 
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


