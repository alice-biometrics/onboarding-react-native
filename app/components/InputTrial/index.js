import React, { Component } from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import styles from './styles'
import { withNavigation } from 'react-navigation'



class InputTrial extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			email: "", 
			sandboxToken: "", 
			firstName: "", 
			lastName: ""
		}
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

		this.props.navigation.navigate('OnboardingTrial', {
			sandboxToken: this.state.sandboxToken,
			email: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName
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

		this.props.navigation.navigate('OnboardingCommandsTrial', {
			sandboxToken: this.state.sandboxToken,
			email: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName
		})

	}



	render() {
		const {heading, input, parent} = styles
		return (
			<View style={parent}>
				<Text style={heading}> ALiCE Onboarding (Trial) </Text>
				<Text>Using ALiCE Onboarding Sandbox: The in-app Sandbox manager authenticates against ALiCE Onboarding Sandbox. The Sandbox Service will associate the alice_user_id with a given email when create the user. Then, using the alice_user_id can obtain required TOKENS.</Text>
				<TextInput 
					style={input} 
					placeholder="SANDBOX TOKEN (Required)" 
					     autoCapitalize = 'none'
					onChangeText={ text => this.setState({sandboxToken: text}) }
				/>
				<TextInput 
					style={input}  
					placeholder="email (Required)"
					autoCapitalize = 'none'
					onChangeText={ text => this.setState({email: text}) }
				/>
				<TextInput 
					style={input} 
					placeholder="First Name (Optional)" 
					onChangeText={ text => this.setState({firstName: text}) }
				/>
				<TextInput 
					style={input} 
					placeholder="Last Name (Optional)" 
					onChangeText={ text => this.setState({lastName: text}) }
				/>
				<Button title={"Test"} onPress={_ => this.aliceOnboarding()}/>
				<Button title={"Test commands"} onPress={_ => this.aliceOnboardingCommands()}/>

			</View>
		)
	}
}

export default withNavigation(InputTrial)
