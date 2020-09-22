import React, { Component } from 'react'
import { View, SafeAreaView, ScrollView, Alert } from 'react-native'
import Onboarding from 'aliceonboarding-reactnative';

import styles from './styles'



const ONBOARDING_CONFIG = {
    "stages": [
        {"stage": "addSelfie"}
    ]
}
class OnboardingTrial extends Component {

	constructor(props) {
	  super(props)

	}

	backToPrevious(title, value) {
		this.props.navigation.navigate('InputTrial')
		Alert.alert(title, value)
	}

	render() {
		const {heading, input, parent} = styles
	  	const userToken = this.props.navigation.getParam("userToken", "")

		return (
			<View style={parent}>
				<SafeAreaView>
			        <ScrollView
			          contentInsetAdjustmentBehavior="automatic"
			          style={styles.scrollView}>
			          <Onboarding
			     	    userToken={userToken}
			            config={ONBOARDING_CONFIG}
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

export default OnboardingTrial