# Onboarding-Commands :wrench:

<img src="https://github.com/alice-biometrics/custom-emojis/blob/master/images/alice_header.png" width=auto>

ALiCE Onboarding Client SDK can be used in two different ways, by commands (OnboardingCommands) or by full flow (Onboarding).
The commands allows you to open the capturer and do a series of operations independently. Available operations are as follows:

## Commands
- [Get User Status](#get-user-status)
- [Add Selfie](#add-selfie)
- [Create Document](#create-document)
- [Add Document](#add-document)
- [Authenticate](#authenticate)
- [Get Supported Documents](#get-supported-documents)


### Get User Status

Returns the ALiCE Onboarding User Status

```js
let onboardingCommands = new OnboardingCommands(userToken)
onboardingCommands.commandGetUserStatus( (status) => { // onSuccess
	console.log(status)
}, (error) => { // onError
	console.log(error)
})
```

> Responses

- `onSuccess`: This handler will give you call back inside block when success response with the user status.
- `onError`: This handler will give you call back inside block when error response is recieved.

### Add Selfie

Presents a ALiCE Onboarding Selfie Capture View sending a video directly to ALiCE Onboarding platform.

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

> Responses

- `onSuccess`: This handler will give you call back inside block when the Selfie was added.
- `onError`: This handler will give you call back inside block when error response is recieved.
- `onCancel`: This handler will give you call back inside block when user cancel the stage.

### Create Document

Creates a document given the type and the issuingCountry:



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

> Input parameters

- `documentType`: DocumentType (options IDCARD, DRIVERLICENSE, RESIDENCEPERMIT, PASSPORT)
- `issuingCountry`: String value. You can check supported documents with the command `getDocumentsSupported`.
- Parameter callback: This handler will give you call back inside block when response is recieved.

> Responses

 On `onSuccess`, it returns a result with the `document_id` on the success content. This identifier (`documentId`) is neccessary to add documents.


### Add Document

Presents a ALiCE Onboarding Document Capture View sending images to ALiCE Onboarding platform

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

> Input parameters

- `documentId`: Document identifier given by createDocument command
- `documentType`: DocumentType.
- `issuingCountry`: String value. You can check supported documents with the command getDocumentsSupported.
- `side`: DocumentSide (options FRONT, BACK)

> Responses

- `onSuccess`: This handler will give you call back inside block when response the document was captured.
- `onCancel`: This handler will give you call back inside block when user cancel the stage.

### Authenticate

Authenticate (by Face Verification) an enrolled and authorized user. 

Present a ALiCE Onboarding Authenticate Capture View sending a video directly to ALiCE Onboarding platform as long as the user is authorized to do so.

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

> Responses

- `onSuccess`: This handler will give you call back inside block when the authentication is done.
- `onError`: This handler will give you call back inside block when errors response is recieved.
- `onCancel`: This handler will give you call back inside block when user cancel the stage.


### Get Supported Documents

Returns a ALiCE Onboarding supported documents (hierarchically ordered).

```js
    let onboardingCommands = new OnboardingCommands(userToken)
    onboardingCommands.commandGetDocumentsSupported( (result) => { //onSuccess
            			console.log(result)
            } , (error) => {   //onError
            			console.log(error)
            })
``` 

> Responses

- `onSuccess`: This handler will give you call back inside block when success response is recieved.
- `onError`: This handler will give you call back inside block when error response is recieved.
