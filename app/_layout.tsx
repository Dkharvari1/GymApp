// AppNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RootLayout from '../navigation/RootLayout';
import VideoDetailScreen from '../screens/VideoDetailScreen';

// 1. Define the ParamList for your stack
export type RootStackParamList = {
  Tabs: undefined;  // No params for "Tabs"
  VideoDetail: {
    title: string;
    videoUrl: string;
    duration: number;
  };
};

// 2. Create your stack using the typed param list
const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={RootLayout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VideoDetail"
        component={VideoDetailScreen}
        options={{ title: 'Video Detail' }}
      />
    </Stack.Navigator>
  );
}
