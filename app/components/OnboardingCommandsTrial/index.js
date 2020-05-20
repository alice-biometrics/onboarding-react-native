import React, { Component } from 'react'
import { View, SafeAreaView, ScrollView, Alert } from 'react-native'
import { GetUserTokenWithSandbox } from 'aliceonboarding-reactnative';

import styles from './styles'



class OnboardingCommandsTrial extends Component {

	constructor(props) {
	  super(props)

	}

	backToPrevious(title, value) {
		this.props.navigation.navigate('OnboardingCommandsView', {
			userToken: value,
		})

	}

	render() {
		const {heading, input, parent} = styles
	  	const sandboxToken = this.props.navigation.getParam("sandboxToken", "").replace(/(\r\n|\n|\r)/gm,"")
	  	const email = this.props.navigation.getParam("email", "")
	  	const firstName = this.props.navigation.getParam("firstName", "")
	  	const lastName = this.props.navigation.getParam("lastName", "")

		return (
			<View style={parent}>
				<SafeAreaView>
			        <ScrollView
			          contentInsetAdjustmentBehavior="automatic"
			          style={styles.scrollView}>
			          <GetUserTokenWithSandbox
			            sandboxToken={sandboxToken}
			            email={email}
			            firstName={firstName}
			            lastName={lastName}
			            onSuccess={(value) => this.backToPrevious("onSuccess", value) }
			            onFailure={(value) => this.backToPrevious("onFailure", value) }
			            onCancel={(value) => this.backToPrevious("onCancel", value) }
			          />
			          {global.HermesInternal == null ? null : (
			            <View style={styles.engine}>
			              <Text style={styles.footer}>Engine: Hermes</Text>
			            </View>
			          )}
			        </ScrollView>
		      </SafeAreaView>
			</View>
		)
	}
}

export default OnboardingCommandsTrial