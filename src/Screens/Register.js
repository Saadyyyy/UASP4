import { View, Text,TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import sayembara from '../Assets/Sayembara.png'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
         <View style={styles.atas}>
            <Text style={styles.sayembara}>
            <Image source={sayembara}/>
            </Text>
        </View>
        <View>
            <Text style={{fontSize: 32, textAlign: 'center', marginTop:40, marginBottom:40 , color: "black", fontWeight:"bold"}}>
                Create an account
            </Text>
        </View>
        <View>
            <View>
                <Text style={styles.text}>
                    Full Name 
                </Text>
                <TextInput style={styles.input}>
                </TextInput>
            </View>
            <View>
                <Text style={styles.text}>
                    Email
                </Text>
                <TextInput style={styles.input}>
                </TextInput>
            </View>
            <View>
                <Text style={styles.text}>
                    Password 
                </Text>
                <TextInput style={styles.input}>
                </TextInput>
            </View>
            <View>
                <Text style={styles.text}>
                    Verify Password 
                </Text>
                <TextInput style={styles.input}>
                </TextInput>
            </View>
        </View>
        <View>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{fontSize:16, color: "white", fontWeight:"600"}}
                >Join</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.signin}>
            <Text style={{fontWeight: "600"}}>Already have an account? <Text style={{color:"#1DD1A1", fontWeight:"600"}}
            onPress={() => navigation.navigate('LoginScreen')}>Sign Here</Text></Text>
            
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
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
        top: 9,
        borderRadius: 0,
        fontSize: 32,
        lineHeight: 38.4,
        color: "#ffff",
        fontWeight:"bold"
        
    },
    text : {
        marginLeft : 50,
        marginBottom: 10,
        fontSize: 16,
        color: "black",
        fontWeight:"500"
    },
    input: {
        width: 277,
        height:37,
        borderRadius: 5,
        marginBottom: 20 ,
        marginLeft: 50,
        borderColor:"white",
        paddingLeft:10,
        borderWidth:1,
        borderBottomColor:"#C4C4C4",
    },
    button:{
        backgroundColor: "#1DD1A1",
        width:290,
        height:37,
        borderRadius:5,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft:50,
        marginTop:20
    },
    signin:{
        alignItems: 'center',
        marginTop: 40
    }
    
})
export default Register