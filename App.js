import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './app/components/Home';
import InputTrial from './app/components/InputTrial';
import OnboardingTrial from './app/components/OnboardingTrial';
import InputProduction from './app/components/InputProduction';
import OnboardingProduction from './app/components/OnboardingProduction';
import OnboardingCommandsView from './app/components/OnboardingCommandsView';


const RootStack = createStackNavigator(
	{
	  Home: Home,
	  InputTrial: InputTrial,
	  InputProduction: InputProduction,
	  OnboardingTrial: OnboardingTrial,
	  OnboardingProduction: OnboardingProduction,
	  OnboardingCommandsView: OnboardingCommandsView
	}
)

const App = createAppContainer(RootStack);

export default App;
