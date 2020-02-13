import React, { Component } from 'react'
import { View, SafeAreaView, ScrollView, Alert } from 'react-native'
import Onboarding from 'onboarding-react-native';

import styles from './styles'

const ONBOARDING_CONFIG = {
    "stages": [
        {"stage": "addSelfie"},
        {"stage": "addDocument", "type": "idcard"},
    ],
    "localization": {
        "language": "es"
    },
    "appearance": {
        "primaryColor": {"blue": 0.478, "alpha": 1, "green": 0.121, "red": 0.129},
        "secondaryColor": {"red": 0.509, "green": 0.509, "blue": 0.509, "alpha": 1},
        "uncheckedItemsColor": {"green": 0.47, "red": 0.47, "blue": 0.47, "alpha": 1},
        "fontRegular": "System Thin",
        "fontBold": "System Light"
    }
}

class OnboardingProduction extends Component {

	constructor(props) {
	  super(props)

	}

	backToHome(title, value) {
		this.props.navigation.navigate('InputProduction')
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
			            onSuccess={(value) => this.backToHome("onSuccess", value) }
			            onFailure={(value) => this.backToHome("onFailure", value) }
			            onCancel={(value) => this.backToHome("onCancel", value) }
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

export default OnboardingProduction