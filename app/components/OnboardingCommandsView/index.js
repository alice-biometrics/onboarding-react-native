import React, { Component } from 'react'
import { View, Text, TextInput, Button, Alert, Platform, PermissionsAndroid } from 'react-native'
import styles from './styles'
import { withNavigation } from 'react-navigation'

import { OnboardingCommands, DocumentType, DocumentSide, runOnboarding, getUserTokenWithSandbox } from 'aliceonboarding-reactnative';



class OnboardingCommandsView extends Component {

	constructor(props) {
		super(props)
		this.userToken = ""
		this.environment = "SANDBOX"
		requestCameraPermission();
	}

    componentDidMount() {
        this.onboardingCommands = new OnboardingCommands(this.userToken, this.environment)
    }

	getStatus() {
            this.onboardingCommands.commandGetUserStatus( (status) => {
            			Alert.alert("Status", status)
            } , (error) => {
            			Alert.alert("Error", error)
            })

            console.log("commandGetUserStatus")
	}

	getDocumentsSupported() {
         let onboardingCommands = new OnboardingCommands(this.userToken, this.environment)
         onboardingCommands.commandGetDocumentsSupported( (result) => {
            			Alert.alert("Result", result)
            } , (error) => {
            			Alert.alert("Error", error)
            })
            console.log("commandGetDocumentsSupported")
	}

    createDocument() {
         console.log(this.userToken)
         let onboardingCommands = new OnboardingCommands(this.userToken, this.environment)

         onboardingCommands.commandCreateDocument(DocumentType.DRIVERLICENSE, "ESP", (result) => {
            			Alert.alert("Result", result)
            } , (error) => {
            			Alert.alert("Error", error)
            })
            console.log("commandCreateDocument")
	}

   addSelfie() {
          let onboardingCommands = new OnboardingCommands(this.userToken, this.environment)
          onboardingCommands.commandAddSelfie( (result) => {
            			Alert.alert("Result", result)
            			console.log(result)
            } , (error) => {
            			Alert.alert("Error", error)
            			console.log(error)
            },  (cancel) => {
            			Alert.alert("Cancel", cancel)
            			console.log(cancel)
	   })
            console.log("commandAddSelfie")
	}

	addDocument() {
	     let type = DocumentType.PASSPORT;
	     let side = DocumentSide.FRONT;
	     let issuingCountry = "AUTO"
             let onboardingCommands = new OnboardingCommands(this.userToken, this.environment)

             onboardingCommands.commandCreateDocument(type, issuingCountry, (resultDocumentId) => {
				let documentId = resultDocumentId;
            			onboardingCommands.commandAddDocument(documentId, type, side, issuingCountry, (result) => {
            								Alert.alert("Result", result)
									console.log(result)
            							} , (error) => {
            								Alert.alert("Error", error)
									console.log(error)
     	    							},  (cancel) => {
            								Alert.alert("Cancel", cancel)
            								console.log(cancel)
            							})

            		} , (error) => {
            			Alert.alert("Error", error)
            		})

             console.log("commandAddDocument")
	}

	addDocumentNFC() {
	     let type = DocumentType.PASSPORT;
	     let side = DocumentSide.FRONT;
	     let issuingCountry = "AUTO"
             let onboardingCommands = new OnboardingCommands(this.userToken, this.environment)

 
            			onboardingCommands.commandAddDocumentNFC("documentId", (result) => {
            								Alert.alert("Result", result)
									console.log(result)
            							} , (error) => {
            								Alert.alert("Error", error)
									console.log(error)
     	    							},  (cancel) => {
            								Alert.alert("Cancel", cancel)
            								console.log(cancel)
            							})


             console.log("commandAddDocumentNFC")
	}

	authenticate() {
         let onboardingCommands = new OnboardingCommands(this.userToken, this.environment)
         onboardingCommands.commandAuthenticate( (result) => {
            			Alert.alert("Result", result)
				console.log(result)
            } , (error) => {
            			Alert.alert("Error", error)
				console.log(error)
     	    },  (cancel) => {
            			Alert.alert("Cancel", cancel)
            			console.log(cancel)
            })
	}

	runOnboarding() {
		const ONBOARDING_CONFIG = {
			"environment": "SANDBOX",
    			"stages": [
        		{"stage": "addSelfie"},
        		{"stage": "addDocument", "type": "idcard"},
    			]
		}
         runOnboarding(this.userToken, ONBOARDING_CONFIG , (result) => {
            			Alert.alert("Result", result)
				console.log(result)
            } , (error) => {
            			Alert.alert("Error", error)
				console.log(error)
     	    },  (cancel) => {
            			Alert.alert("Cancel", cancel)
            			console.log(cancel)
            })
	}

	render() {

		const {heading, input, parent} = styles
        	this.userToken = this.props.navigation.getParam("userToken", "")

		return (
			<View style={parent}>
				<Text style={heading}> ALiCE Onboarding </Text>
				<Button title={"Get status"} onPress={_ => this.getStatus()}/>
				<Button title={"Get supported documents"} onPress={_ => this.getDocumentsSupported()}/>
				<Button title={"Create document"} onPress={_ => this.createDocument()}/>
				<Button title={"Add Selfie"} onPress={_ => this.addSelfie()}/>
				<Button title={"Add Document (frontal idcard)"} onPress={_ => this.addDocument()}/>
				<Button title={"Authenticate"} onPress={_ => this.authenticate()}/>
				<Button title={"Add NFC Document"} onPress={_ => this.addDocumentNFC()}/>
				<Button title={"Run Onboarding"} onPress={_ => this.runOnboarding()}/>
			</View>
		)
	}
}


const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.CAMERA]);
   
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

export default withNavigation(OnboardingCommandsView)