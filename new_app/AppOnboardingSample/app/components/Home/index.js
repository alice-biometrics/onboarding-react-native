import React, { Component } from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import styles from './styles'
import { withNavigation } from 'react-navigation'



class Home extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			email: "", 
			sandboxToken: "", 
			firstName: "", 
			lastName: ""
		}
	}

	showInputScreen(screenId) {
		console.log(screenId)
		this.props.navigation.navigate(screenId)
	}

	render() {
		const {heading, input, parent} = styles
		return (
			<View style={parent}>
				<Text style={heading}> ALiCE Onboarding </Text>
				<Button title={"Sandbox Integration"} onPress={_ => this.showInputScreen('InputTrial')}/>
				<Button title={"Production Integration"} onPress={_ => this.showInputScreen('InputProduction')}/>
			</View>
		)
	}
}

export default withNavigation(Home)
