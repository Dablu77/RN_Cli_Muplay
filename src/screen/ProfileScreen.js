import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Components/ReusableComponets/Header'
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions'
import Colors from '../Components/utils/Colors'

export default function ProfileScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                height={heightPixel(40)}
                width={widthPixel(40)}
                onePressIcone={() => navigation.navigate("Notifications")}
                Image={require('../assets/Ellipse.png')}
            // onPress={() => navigation.goBack('')}
            />
            {/* <Text style={{ color: '#000' }}>ProfileScreen</Text> */}
            <View style={{ alignItems: "center", marginTop: 15, }}>
                <View style={{ alignItems: "center", justifyContent: 'center', borderWidth: 1, borderColor: Colors.Balck, height: heightPixel(110), width: widthPixel(110), borderRadius: 100 }}>
                    <Image source={require('../assets/man2.png')} style={{ height: heightPixel(108), width: widthPixel(108), borderRadius: 100, resizeMode: "center" }} />
                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: "center", marginTop: 10 }}>
                <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: "500" }}>Niraj Kumar</Text>
                <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: "500", top: 5 }}>938348748</Text>
            </View>
            <View>
                <View style={{ marginHorizontal: 10, marginVertical: 30 }}>
                    <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: "500" }}>User Mobile</Text>
                    <TextInput
                        placeholder='7746747483'
                        placeholderTextColor={Colors.Balck}
                        style={{ borderBottomWidth: 1 }} />
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: "500" }}>Name</Text>
                    <TextInput
                        placeholder='SUNNY MAYANK'
                        placeholderTextColor={Colors.Balck}
                        style={{ borderBottomWidth: 1 }} />
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: "500" }}>Email ID</Text>
                    <TextInput
                        placeholder='sunny231@gmail.com'
                        placeholderTextColor={Colors.Balck}
                        style={{ borderBottomWidth: 1 }} />
                </View>
                <View style={{ marginHorizontal: 10, }}>
                    {/* <Text style={{ color: Colors.Balck, fontSize: fontPixel(18), fontWeight: "500" }}>Email ID</Text> */}
                    <TextInput
                        placeholder='To'
                        placeholderTextColor={Colors.Balck}
                        style={{ borderBottomWidth: 1 }} />
                </View>
            </View>
            <View style={{ marginHorizontal: 20, alignItems: 'flex-end' }}>
                <TouchableOpacity style={{
                    backgroundColor: "green",
                    marginVertical: 30,
                    paddingVertical: 10,
                    // height: heightPixel(50),
                    width: widthPixel(100),
                    alignItems: 'center',
                    // justifyContent: 'flex-end',
                    borderRadius: 25

                }}>
                    <Text style={{ color: Colors.Withe }}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}