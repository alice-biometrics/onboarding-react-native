import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './app/components/Home';
import OnboardingTrial from './app/components/OnboardingTrial';

const RootStack = createStackNavigator(
	{
	  Home: Home,
	  Onboarding: OnboardingTrial
	  //Onboarding: OnboardingProduction 
	}
)

const App = createAppContainer(RootStack);

export default App;
