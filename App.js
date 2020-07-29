import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home';
import DetailRepo from './src/screen/DetailRepo';



const Stack = createStackNavigator();

function App() {
	return (

		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} options={{
					title: '',
					headerTransparent: true,
					headerLeft: false
				}} />
				<Stack.Screen name="DetailRepo" component={DetailRepo} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;