import React, { Component } from 'react'
import { View, Text, TextInput, Button, Alert, TouchableOpacity, PermissionsAndroid } from 'react-native'
import styles from './styles'
import { withNavigation } from 'react-navigation'
import { getUserTokenWithSandbox } from 'aliceonboarding-reactnative';




class InputTrial extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			email: "", 
			sandboxToken: "", 
			firstName: "", 
			lastName: ""
		}
		requestCameraAndWritePermission();
	}

	aliceOnboarding() {
		const {sandboxToken, email, firstName, lastName} = this.state

		if (sandboxToken == "") {
			Alert.alert("Error", "Please, type your SANDBOX TOKEN to test the Onboarding")
			return
		}
		if (email == "") {
			Alert.alert("Error","Please, type a email to test the Onboarding")
			return 
		}

             getUserTokenWithSandbox(this.state.sandboxToken, this.state.email, (userToken) => {
            			
			this.props.navigation.navigate('OnboardingTrial', {
				userToken: userToken
			})
            		} , (error) => {
            			Alert.alert("Error", error)
				console.log(error)
     	    		},  (cancel) => {
            			Alert.alert("Cancel", cancel)
            			console.log(cancel)
            		})

	}


	aliceOnboardingCommands() {
		const {sandboxToken, email, firstName, lastName} = this.state

		if (sandboxToken == "") {
			Alert.alert("Error", "Please, type your SANDBOX TOKEN to test the Onboarding")
			return
		}
		if (email == "") {
			Alert.alert("Error","Please, type a email to test the Onboarding")
			return 
		}

    getUserTokenWithSandbox(this.state.sandboxToken, this.state.email, (userToken) => {
        this.props.navigation.navigate('OnboardingCommandsView', {
            userToken: userToken
            })
                } , (error) => {
                    Alert.alert("Error", error)
            console.log(error)
                },  (cancel) => {
                    Alert.alert("Cancel", cancel)
                    console.log(cancel)
                })
	}

	aliceNFCUseCase() {
		const {sandboxToken, email, firstName, lastName} = this.state

		if (sandboxToken == "") {
			Alert.alert("Error", "Please, type your SANDBOX TOKEN to test the Onboarding")
			return
		}
		if (email == "") {
			Alert.alert("Error","Please, type a email to test the Onboarding")
			return
		}

    	getUserTokenWithSandbox(this.state.sandboxToken, this.state.email, (userToken) => {
                    this.props.navigation.navigate('NFCUseCase', {
                        userToken: userToken
                        })
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

		return (
			<View style={parent}>
				<Text style={heading}> ALiCE Onboarding (Trial) </Text>
				<Text>Using ALiCE Onboarding Sandbox: The in-app Sandbox manager authenticates against ALiCE Onboarding Sandbox. The Sandbox Service will associate the alice_user_id with a given email when create the user. Then, using the alice_user_id can obtain required TOKENS.</Text>
				<TextInput 
					style={styles.input}
					placeholder="SANDBOX TOKEN (Required)"
					placeholderTextColor="gray"
					autoCapitalize = 'none'
					onChangeText={ text => this.setState({sandboxToken: text}) }
				/>
				<TextInput 
					style={input}
					placeholder="email (Required)"
					placeholderTextColor="gray"
					autoCapitalize = 'none'
					onChangeText={ text => this.setState({email: text}) }
				/>
		        <TouchableOpacity onPress={_ => this.aliceOnboarding()} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}> Run Onboarding </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={_ => this.aliceOnboardingCommands()} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}> Test commands </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={_ => this.aliceNFCUseCase()} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}> Test NFC </Text>
                 </TouchableOpacity>
			</View>
		)
	}
}

const requestCameraAndWritePermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
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

export default withNavigation(InputTrial)
