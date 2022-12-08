import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView,Image } from 'react-native'
import React from 'react'
import sayembara from '../Assets/Sayembara.png'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  return (
    <ScrollView>
        <View style={styles.akhir}>
            <View >
            <View style={styles.atas}>
            <Text style={styles.sayembara}>
            <Image source={sayembara}/>
            </Text>
        </View>
                <View>
                    <View style={styles.bulat}></View>
                </View>
                <View style={styles.semua}>
                    <View>
                        <Text style={styles.text}>
                            First Name 
                        </Text>
                        <TextInput style={styles.input}>
                        </TextInput>
                    </View>
                    <View style={styles.apa}>
                        <Text style={styles.text}>
                            Last Name 
                        </Text>
                        <TextInput style={styles.input}>
                        </TextInput>
                    </View>
                    <View style={styles.apa} >
                        <Text style={styles.text}>
                            Location 
                        </Text>
                        <TextInput style={styles.input}>
                        </TextInput>
                    </View>
                    <View style={styles.apa}>
                        <Text style={styles.text}>
                            Bank 
                        </Text>
                        <TextInput style={styles.input}>
                        </TextInput>
                    </View>
                    <View style={styles.apa}>
                        <Text style={styles.text}>
                            Account Number 
                        </Text>
                        <TextInput style={styles.input}>
                        </TextInput>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontSize:16, color:"white", fontWeight:"600"}}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white"
    },
    atas : {
        width : 414,
        height: 71,
        backgroundColor: "#1DD1A1",
    },
    sayembara : {
        height: 60,
        width: 166,
        left: 131,
        top:9,
        borderRadius: 0,
        fontSize: 32,
        lineHeight: 38.4,
        color: "#ffff",
        fontWeight:"bold"
        
    },
    bulat:{

        width: 190,
        height:190,
        top : 30,
        left:103,
        borderRadius:100,
        backgroundColor:"#C4C4C4",
        marginBottom:20
    },
    text : {
        marginLeft : 54,
        marginBottom: 7,
        fontSize: 16,
        color: "black",
        marginTop:10,
        fontWeight:"600",
        fontStyle:"normal"
    },
    input: {
        width: 290,
        height: 40,
        marginLeft:50,
        marginBottom: 20,
        paddingLeft:10,
        borderRadius: 5,
        borderColor:"white",
        borderWidth:1,
        borderColor:"#C0C0C0",
        borderStyle:'solid'

    },
    semua:{
        marginTop:25,
    },
    button:{
        backgroundColor: "#1DD1A1",
        width:290,
        height:37,
        borderRadius:5,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft:50,
        marginTop:40
    },
    akhir:{
        marginBottom:100
    }
})

export default Profile