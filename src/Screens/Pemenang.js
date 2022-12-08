import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import sayembara from '../Assets/Sayembara.png'
import { useNavigation } from '@react-navigation/native'

const Pemenang = () => {
  return (
    <View>
        <View style={styles.atas}>
            <Text style={styles.sayembara}>
            <Image source={sayembara}/>
            </Text>
        </View>
        <View style={styles.viewtext}>
            <Text style={styles.text}>Congratulations! you are the winner!</Text>
            <Text style={{fontSize:16, color:"#1DD1A1", marginTop:20}}>
                laode Saady 
            </Text>
            <Text style={{color:"black"}}>Bank: <Text style={{fontWeight:"700"}}>BCA 1234567890</Text> </Text>
            <Text style={{color:"black"}}>Amount: <Text style={{fontWeight:"700"}}>IDR.5.000.000</Text></Text>
        </View>
        <View style={styles.sent}>
            <Text>Payment Sent</Text>
        </View>
            
    </View>
  )
}
const styles = StyleSheet.create({
    container : {   
        flex : 1,
        backgroundColor : "#ffff",
        alignItems  : "center"
    },
    Logo :{
        width : 412,
        height : 242,
        top : 100
    },
    sayembara : {
        height: 60,
        width: 166,
        left: 135,
        top: 5,
        borderRadius: 0,
        fontSize: 32,
        lineHeight: 38.4,
        color: "#ffff",
        fontWeight:"700",
    },
    atas : {
        width : 414,
        height: 71,
        backgroundColor: "#1DD1A1",
    },
    text:{
        fontSize:32,
        color:"black",
        fontWeight:'700',
        textAlign:'center'
    },
    viewtext:{
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        top: 100,
        margin:50,
    },
    sent:{
        marginTop:100,
        backgroundColor:"#1DD1A140",
        width:340,
        height:102,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        marginLeft: 30,
        borderRadius:9,
        borderWidth:1,
        borderColor:"#1DD1A1",
        borderStyle:'solid'
    },
})

export default Pemenang