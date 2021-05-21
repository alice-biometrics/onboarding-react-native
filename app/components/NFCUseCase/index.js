import React, { Component } from 'react'
import { View, Text, TextInput, Button, Alert, Platform, PermissionsAndroid } from 'react-native'
import Onboarding from 'aliceonboarding-reactnative';

import { OnboardingCommands, DocumentType, DocumentSide, runOnboarding, getUserTokenWithSandbox } from 'aliceonboarding-reactnative';

import styles from './styles'


class NFCUseCase extends Component {

	constructor(props) {
	  super(props)
	  this.userToken = "";
      this.documentId = null;
      this.documentType = DocumentType.PASSPORT;
      this.issuingCountry =  "AUTO";
      this.stage = stages.FRONTCAPTURE;
      this.onboardingCommands = null;
	}

	backToPrevious() {
		this.props.navigation.navigate('InputTrial')
	}

	createDocument(callback) {
         let onboardingCommands = new OnboardingCommands(this.userToken)

         onboardingCommands.commandCreateDocument(this.documentType, this.issuingCountry, (result) => {
         	  console.log(result);
              callback(result)
            } , (error) => {
            	  console.log(error);
            	  callback(error)
            })
	}

	 addDocument(documentId, documentType, documentSide, issuingCountry) {
         var self = this;

        this.onboardingCommands.commandAddDocument(documentId, documentType, documentSide, issuingCountry, (result) => {
                    this.updateStage();
                    setTimeout(() => { self.nextStage() }, 200);
                        } , (error) => {
                            Alert.alert("Error", error)
                    console.log(error)
                        },  (cancel) => {
                            this.backToPrevious();
                        })
             console.log("commandAddDocument")
	}

	updateStage() {
	     if(this.documentType == DocumentType.PASSPORT) {
	         this.stage = stages.NFCCAPTURE;
	         return
	     }
	     if(this.stage == stages.FRONTCAPTURE) {
              this.stage = stages.BACKCAPTURE;
           } else if(this.stage == stages.BACKCAPTURE) {
               this.stage = stages.NFCCAPTURE;
           }
    }

	addDocumentNFC(documentId) {
        let onboardingCommands = new OnboardingCommands(this.userToken)

        onboardingCommands.commandAddDocumentNFC(documentId, (result) => {
                    this.backToPrevious()
                    console.log(result)
                        } , (error) => {
                          setTimeout(() => {  Alert.alert("Error", error) }, 200);
                    console.log(error)
                        },  (cancel) => {q
                            this.backToPrevious()
                            console.log(cancel)
                        })
        console.log("commandAddDocumentNFC")
	}

	nextStage() {
        if(this.documentId == null) { return }
            switch (this.stage) {
                case stages.FRONTCAPTURE:
                    this.addDocument(this.documentId, this.documentType, DocumentSide.FRONT, this.issuingCountry)
                    break;
                case stages.BACKCAPTURE:
                    this.addDocument(this.documentId, this.documentType, DocumentSide.BACK, this.issuingCountry)
                    break;
                case stages.NFCCAPTURE:
                     this.addDocumentNFC(this.documentId)
                     break;
                  }
	}

	render() {
		const {heading, input, parent} = styles
	  	this.userToken = this.props.navigation.getParam("userToken", "")

	  	this.onboardingCommands = new OnboardingCommands(this.userToken)

	  	this.createDocument((documentId) => {
           this.documentId = documentId;
           this.nextStage()
        });

		return (
			<View style={parent}>
				<Text style={heading}> ALiCE Onboarding </Text>

			</View>
		)
	}
}

export default NFCUseCase


const stages = {
	FRONTCAPTURE: "FRONTCAPTURE",
	BACKCAPTURE: "BACKCAPTURE",
	NFCCAPTURE: "NFCCAPTURE",
}
