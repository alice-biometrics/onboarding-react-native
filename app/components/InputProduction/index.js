import React, { Component } from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import styles from './styles'
import { withNavigation } from 'react-navigation'



class InputProduction extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			userToken: "", 
		}
	}

	aliceOnboarding() {
		const {userToken: userToken} = this.state

		if (userToken == "") {
			Alert.alert("Error", "Please, type your USER TOKEN to test the Onboarding")
			return
		}
		this.props.navigation.navigate('OnboardingProduction', {
			userToken: this.state.userToken,
		})

	}

	render() {
		const {heading, input, parent} = styles
		return (
			<View style={parent}>
				<Text style={heading}> ALiCE Onboarding (Production) </Text>
				<Text>Using your Backend: Your own Backend manages the authentication. We recommend to associate your user_id with alice_user_id in a repository (database).</Text>
				<TextInput 
					style={input} 
					placeholder="USER TOKEN (Required)" 
					     autoCapitalize = 'none'
					onChangeText={ text => this.setState({userToken: text}) }
				/>
				<Button title={"Test"} onPress={_ => this.aliceOnboarding()}/>
			</View>
		)
	}
}

export default withNavigation(InputProduction)
