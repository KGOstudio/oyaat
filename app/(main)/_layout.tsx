import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { colors } from '@/assets/colors';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs screenOptions={{
        tabBarActiveTintColor: colors.deepSpace,
        tabBarInactiveTintColor: colors.satelliteGray,
        tabBarStyle: {
            backgroundColor: colors.whiteSmoke,
            borderTopWidth: 0,
            shadowColor: 'black',
            elevation: 5,
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 30,
            borderRadius: 15,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            width: '90%',
            alignSelf: 'center',
            marginLeft: 20,
            
        },
        tabBarLabelStyle: {
            fontSize: 12,
        },
        headerStyle: {
            backgroundColor: colors.whiteSmoke,
            borderBottomWidth: 0,
            shadowColor: 'black',
            elevation: 0,
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            color: colors.deepSpace,
        },
        headerTintColor: colors.deepSpace,
        
    }}>
        <Tabs.Screen name="index" options={{ 
            headerShown: false,
           
            title: 'Home',
           
            tabBarIcon: (props: {
                color: string;
                size: number;
                focused: boolean;
            }) => <Ionicons name="home" size={24} color={colors.deepSpace} />

        }}/>
        <Tabs.Screen name="staticlp" options={{ 
            headerShown: false,
           
            title: 'Stats',
           
            tabBarIcon: (props: {
                color: string;
                size: number;
                focused: boolean;
            }) => <Ionicons name="stats-chart-outline" size={24} color={colors.deepSpace} />

        }}/>
        <Tabs.Screen name="addlp" options={{ 
            headerShown: false,
            title: "",
           
            tabBarIcon: (props: {
                color: string;
                size: number;
                focused: boolean;
            }) => <Ionicons name="add-circle" size={30} color={colors.satelliteGray} />

        }}/>
        <Tabs.Screen name="settinglp" options={{ 
            headerShown: false,
           
            title: 'Settings',
           
            tabBarIcon: (props: {
                color: string;
                size: number;
                focused: boolean;
            }) => <Ionicons name="settings" size={24} color={colors.deepSpace} />

        }}/>
        <Tabs.Screen name="profilelp" options={{ 
            headerShown: false,
           
            title: 'Chat',
           
            tabBarIcon: (props: {
                color: string;
                size: number;
                focused: boolean;
            }) => <Ionicons name="chatbox-ellipses" size={24} color={colors.deepSpace} />

        }}/>
        
        
      </Tabs>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
