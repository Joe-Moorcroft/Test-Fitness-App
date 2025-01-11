import { Tabs } from "expo-router";
import Icoicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return(
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
            headerStyle: {
                backgroundColor: '#25292e',
            },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: {
                backgroundColor: '#25292e',
            },
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                    <Icoicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                ),
            }}
        />
        <Tabs.Screen
            name="nutrition"
            options={{
                title: 'Nutrition',
                tabBarIcon: ({ color, focused }) => (
                    <Icoicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                ),
            }}
        />
        <Tabs.Screen
            name="workouts"
            options={{
                title: 'Workouts',
                tabBarIcon: ({ color, focused }) => (
                    <Icoicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                ),
            }}
        />
        <Tabs.Screen
            name="about"
            options={{
                title: 'About',
                tabBarIcon: ({ color, focused }) => (
                    <Icoicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                ),
            }}
        />
    </Tabs>
  );
}
