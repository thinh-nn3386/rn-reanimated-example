import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { HomeScreen } from './HomeScreen';
import { View } from 'react-native';
import { EXAMPLES, EXAMPLE_SCREENS } from './examples';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerTitle: '🐎 Reanimated examples',
                  title: 'Reanimated examples',
                  headerLeft: undefined
                }}
              />
              {EXAMPLES.map((name) => (
                <Stack.Screen
                  key={name}
                  name={name}
                  component={EXAMPLE_SCREENS[name].screen}
                  options={{
                    headerTitle: EXAMPLE_SCREENS[name].title,
                    title: EXAMPLE_SCREENS[name].title,
                    headerBackTitleVisible: false
                  }}
                />
              ))}
            </Stack.Navigator>
          </NavigationContainer>
        </View>

      </SafeAreaView>
    </GestureHandlerRootView>

  );
}

export default App;
