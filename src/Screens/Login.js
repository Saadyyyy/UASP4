import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal} from 'react-native'
import React, {useState} from 'react'
import Logo from '../Assets/Login.png'
import sayembara from '../Assets/Sayembara.png'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation();
    const [modal, setmodal] = useState(false)
  return (
    <View style={styles.container} >
        <View style={styles.atas}>
            <Text style={styles.sayembara}>
            <Image source={sayembara}/>
            </Text>
        </View>
        <View style={styles.banner1}>
            <Text style={{fontSize: 30,fontWeight:"700", color: "black"}}>Sign To Your Account</Text>
        </View>
        <View>
            <Image source={Logo} style={styles.Logo}></Image>
        </View>
        <View style={styles.inputemail}>
            <Text style={styles.email}> Email</Text>
                <TextInput
                    style={styles.input}
                />
             <Text style={{marginLeft: 5 , marginTop : 5, fontSize:16, marginBottom:2 , color: "black", fontWeight:"bold"}}> Password</Text>
                <TextInput
                    style={styles.input}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setmodal(true)}
                >
                    <Text style={styles.textButton}>Sign Here</Text>
                </TouchableOpacity>
                <Modal style={styles.modal} transparent={true} visible={modal} animationType={'slide'} >
                    <View style={styles.modalview}>
                        <Text style={styles.modaltext}>Login Berhasil </Text>
                        <TouchableOpacity style={styles.buttonok} onPress={ ()=> setmodal(false)}>
                        <Text style={{color:"white"}}
                        onPress={()=> navigation.navigate ('Homepage')}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Text style={styles.text}>Don't have an account?
                    <Text
                        style={{ fontWeight: 'bold', color: "#1DD1A1" }}
                        onPress={() => navigation.navigate('RegisterScreen')}
                    > Register Now</Text>
                </Text>
                
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
    banner1 : {
        position: 'absolute',
        height: 38,
        width: 325,
        left: 45,
        top: 100,
        fontWeight:"500"
    },
    inputemail:{
        marginTop:115,

    },
    email :{
        width:50,
        marginLeft: 5,
        fontSize: 16,
        marginBottom :2,
        color:"black",
        fontWeight:"bold",
    },
    input :{
        width: 277,
        height:37,
        borderRadius: 5,
        marginBottom: 20 ,
        marginLeft: 9,
        borderColor:"white",
        paddingLeft:10,
        borderWidth:1,
        borderBottomColor:"#C4C4C4"

      },
    button:{
        backgroundColor: "#1DD1A1",
        width:276,
        height:37,
        borderRadius:5,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft:9,
        marginTop:10
    },
    textButton:{
        fontSize:16,
        color: "white",
        fontWeight:"600",
    },
    text:{
        marginTop:20,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight:"500"
    },
    modalview:{
      alignItems:'center',
      width:300,
      backgroundColor:"gray",
      height:80,
      top: 300,
      left:50,
      borderRadius:5
    },
    modaltext:{
      fontSize:20,
      color:"white",
      justifyContent:'center',
      alignItems:'center',
      marginTop:10
    },
    buttonok:{
      borderWidth: 2,
      width:80,
      alignItems:'center',
      marginTop:10,
      borderColor:"white"
    }
  
})

export default Login