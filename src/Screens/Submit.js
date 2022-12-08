import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Logo from '../Assets/plus.png'
import sayembara from '../Assets/Sayembara.png'
import { useNavigation } from '@react-navigation/native'

const Submit = () => {
    const navigation = useNavigation();
  return (
    <View>
        <View style={styles.atas}>
            <Text style={styles.sayembara}>
            <Image source={sayembara}/>
            </Text>
        </View>
        <Text style={styles.upload}>Upload your files</Text>
        <View style={styles.card}>
            <View style={styles.card1}></View>
            <View style={styles.card1}></View>
            <View style={styles.card2}>
                <Image source={Logo} style={styles.plus}/>
            </View>
        </View>
        <Text style={styles.des}>
            Description
        </Text>
        <View>
            <TextInput style={styles.input}></TextInput>
        </View>
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white"
    },
    sayembara : {
        height: 60,
        width: 190,
        left: 131,
        top: 9,
        borderRadius: 0,
        fontSize: 32,
        lineHeight: 38.4,
        color: "#ffff",
        fontWeight:"700"
    },

    atas : {
        width : 414,
        height: 71,
        backgroundColor: "#1DD1A1",
    },
    upload:{
        fontSize:28,
        textAlign:'center',
        marginTop: 40,
        fontWeight:'bold',
        color : "black",
        fontStyle:'normal',
        marginBottom:50
    },
    card:{
        width:314,
        height:108,
        backgroundColor:"#C0C0C0",
        borderRadius:5,
        marginLeft:40,
        flexDirection:"row"
    },
    card1:{
        width:92,
        height:92,
        backgroundColor:"#00000080",
        flexDirection:"column",
        marginLeft:10,
        marginTop:9
    },
    card2:{
        width:92,
        height:92,
        backgroundColor:"#00000040",
        flexDirection:"column",
        marginLeft:10,
        marginTop:9,
        borderWidth:2,
    },
    des:{
        fontWeight:"bold",
        fontSize: 18,
        marginTop:22,
        marginLeft:42,
        color:"black",
        marginBottom:10
    },
    input:{
        width:314,
        height:108,
        borderWidth:1,
        marginLeft:40,
        marginBottom:40
    },
    button:{
        backgroundColor:"#1DD1A1",
        width:316,
        height:37,
        textAlign:'center',
        alignItems:'center',
        marginLeft: 40,
        justifyContent:'center'
    },
    submit:{
        fontSize:16,
        color: "white",
        fontWeight:"600",
    },
    plus:{
        marginTop: 20,
        marginLeft:20
    }
})

export default Submit