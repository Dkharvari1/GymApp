// RootLayout.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

// Screens
import HomeScreen from '../screens/HomeScreen';
import WorkoutsScreen from '../screens/WorkoutsScreen';
import NutritionScreen from '../screens/NutritionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScanScreen from '../screens/ScanScreen';

// Type your tab names
type TabRouteName = 'Home' | 'Workouts' | 'Scan' | 'Nutrition' | 'Profile';

// Map route names to Ionicons
const icons: Record<TabRouteName, keyof typeof Ionicons.glyphMap> = {
    Home: 'home',
    Workouts: 'barbell',
    Scan: 'qr-code',     // or 'barcode' if you prefer
    Nutrition: 'calendar',
    Profile: 'person',
};

const Tab = createBottomTabNavigator();

export default function RootLayout() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    // We'll override the Scan icon separately (below).
                    if (route.name === 'Scan') {
                        return null; // We'll build a custom button for it
                    }
                    const iconName = icons[route.name as TabRouteName];
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FF5722',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            {/* Regular Tabs */}
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Workouts" component={WorkoutsScreen} />

            {/* The Middle "Scan" Button */}
            <Tab.Screen
                name="Scan"
                component={ScanScreen}
                options={{
                    tabBarLabel: '',
                    // We override the entire button
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            style={styles.scanButtonContainer}
                        >
                            <View style={styles.scanButton}>
                                <Ionicons name="qr-code" size={28} color="#fff" />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />

            {/* Remaining Tabs */}
            <Tab.Screen name="Nutrition" component={NutritionScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    // Moves the button up a bit & centers it above the tab bar
    scanButtonContainer: {
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Style for the red circle
    scanButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Add a shadow on Android
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});
