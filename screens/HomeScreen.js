import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../Components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavorites from '../Components/NavFavorites';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw `bg-white h-full`}>
            <View style={tw `p-5`}>
                <Image
                    style={{ 
                        width: 100, 
                        height: 100, 
                        resizeMode: 'contain' 
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder="Where Are You Traveling From?"
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    onPress={(data, details = null) => {
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            })
                        );

                        dispatch(setDestination(null));
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en'
                    }}
                />

                <NavOptions/>
                <NavFavorites/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'dodgerblue'
    }
})