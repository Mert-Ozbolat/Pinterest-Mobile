import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import AddPage from '../Screens/AddPage';
import Card from '../Screens/Card';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const NativeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Card" component={Card} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const Bottom = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#121212' },
                headerStyle: {
                    backgroundColor: '#121212',
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
            }}
            initialRouteName='Home'>
            <Tab.Screen name="Home" component={NativeStack} />
            <Tab.Screen name="AddPage" component={AddPage} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

