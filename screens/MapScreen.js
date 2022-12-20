import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../Components/Map'
import MapView from 'react-native-maps'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../Components/NavigateCard'
import RideOptionsCard from '../Components/RideOptionsCard'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
    const Stack = createStackNavigator()
    const navigation = useNavigation()

    return (
        <View>
            <TouchableOpacity 
                onPress={() => navigation.navigate("HomeScreen")}
                style={tw`absolute top-16 left-4 bg-gray-100 z-50 p-3 rounded-full shadow-lg`}
            >
                <Icon name="menu"/>
            </TouchableOpacity>
            <View style={tw`h-1/2`}>
                <Map/>
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})