import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarStyle:{
                height: 80,
                backgroundColor: '#000',
                paddingTop: 20
            },
            headerStyle: {
                backgroundColor: '#000',
            }
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: '',
                    headerTitle: 'Home',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            

            
            <Tabs.Screen
                name="Rotinas"
                options={{
                    title: '',
                    headerTitle: 'Rotinas',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="map-o" color={color} />,
                }}
            />

            <Tabs.Screen
                name="Alos"
                options={{
                    title: '',
                    headerTitle: 'Alos',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />

            
        </Tabs>
    );
}