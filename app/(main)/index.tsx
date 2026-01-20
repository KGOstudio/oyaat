import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import { colors } from '../(start)';

export default function index() {
  return (
    <View 
        style={{flex: 1, backgroundColor: colors.deepSpace, }}
    >





        {/* main page */}
        <View 
           style={{marginTop: 75, marginHorizontal: 24}}
        >
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Text style={{color: colors.whiteSmoke, fontSize: 20, fontWeight: 'bold'}}>
                welcome back,{"\n"}<Text style={{color: colors.satelliteGray}}>Mustafa</Text>
                </Text>

                <FontAwesome5 name="user-circle" size={30} color={colors.whiteSmoke} />
            </View>

            <View style={{padding: 1, backgroundColor: colors.starlightGray, borderRadius: 12, marginTop: 20}}>

            </View>

        </View>

        {/* search bar */}
        <View style={{marginTop: 30, marginHorizontal: 24}}>
            <TextInput 
                placeholder="Search for products, brands and more"
                placeholderTextColor={colors.satelliteGray}
                style={{backgroundColor: colors.starlightGray, borderRadius: 12, paddingHorizontal: 20, paddingVertical: 12, color: colors.whiteSmoke}}
            />
        </View>

        {/* content */}
        <View>
            <Image 
            
            />
        </View>

        {/* category items */}
            

        <ScrollView style={{flexDirection: "row", gap: 10, maxHeight: 40, marginTop: 30}} horizontal showsHorizontalScrollIndicator={false}>
            <View style={{backgroundColor: colors.satelliteGray, padding: 7, borderRadius: 7, gap: 7, alignItems: 'center', flexDirection: "row", justifyContent: "space-between", marginLeft: 15}}>
                <FontAwesome5 name="laptop" size={24} color={colors.deepSpace} />
                <Text style={{color: colors.deepSpace, fontSize: 12}}>Electronics</Text>
            </View>
            <View style={{backgroundColor: colors.satelliteGray, padding: 5, borderRadius: 7, gap: 7, alignItems: 'center', flexDirection: "row", justifyContent: "space-between", marginLeft: 15}}>
                <FontAwesome5 name="tshirt" size={24} color={colors.deepSpace} />
                <Text style={{color: colors.deepSpace, fontSize: 12}}>Fashion</Text>
            </View>
            <View style={{backgroundColor: colors.satelliteGray, padding: 5, borderRadius: 7, gap: 7, alignItems: 'center', flexDirection: "row", justifyContent: "space-between", marginLeft: 15}}>
                <FontAwesome5 name="couch" size={24} color={colors.deepSpace} />
                <Text style={{color: colors.deepSpace, fontSize: 12}}>Furniture</Text>
            </View>
            <View style={{backgroundColor: colors.satelliteGray, padding: 5, borderRadius: 7, gap: 7, alignItems: 'center', flexDirection: "row", justifyContent: "space-between", marginLeft: 15}}>
                <FontAwesome5 name="book" size={24} color={colors.deepSpace} />
                <Text style={{color: colors.deepSpace, fontSize: 12}}>Books</Text>
            </View>
            <View style={{backgroundColor: colors.satelliteGray, padding: 5, borderRadius: 7, gap: 7, alignItems: 'center', flexDirection: "row", justifyContent: "space-between", marginLeft: 15}}>
                <FontAwesome5 name="more" size={24} color={colors.deepSpace} />
                <Text style={{color: colors.deepSpace, fontSize: 12}}>More</Text>
            </View>
        </ScrollView>





        <View>

        </View>



    </View>
  )
}