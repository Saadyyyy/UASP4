import { View, Text, StyleSheet, TextInput, TouchableOpacity,ScrollView, Image } from 'react-native'
import React from 'react'
import sayembara from '../Assets/Sayembara.png'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
    const navigation = useNavigation();
  return (
    
    <ScrollView style={styles.scroll}>
        <View>
            <View style={styles.akhir}>
            <View style={styles.atas}>
            <Text style={styles.sayembara}>
            <Image source={sayembara}/>
            </Text>
        </View>
                <ScrollView style={styles.input}>
                    <TextInput style={styles.catagory} placeholder="Category" placeholderTextColor="black">
                    </TextInput>
                    <TextInput style={styles.find} placeholder="Find Contest" placeholderTextColor="#E5E5E5"></TextInput>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontSize:16, color:"white", fontWeight:"500"}}>Search</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles.card}>
                    <View>
                        <Text style={{fontSize:12, paddingLeft:20, paddingTop:10}}>Posted 5 min ago                                        <Text style={{fontSize:12, color: "red"}}>Due ate :</Text></Text>
                        
                        <Text style={styles.sunday}>Sunday, 28 july 2022 </Text>
                    </View>
                    <View>
                    <Text style={styles.design}>Logo Design Content</Text>
                    </View>
                    <Text style={{marginLeft:20, fontSize:10}}>by <Text style={{fontSize:11, fontWeight:"500",}}>Pertamina</Text></Text>
                    <Text style={{marginLeft:20, fontSize:14, marginTop:5}}>IDR 15.000.000</Text>
                    <Text style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Praesent nec volutpat massa, ut tempor massa. Maecenas ...</Text>
                    <View>
                        <TouchableOpacity style={styles.apply} onPress={() => navigation.navigate ('ContentDetail')}>
                            <Text style={{textAlign:'center',fontWeight:"600",paddingTop:10, color:"white",fontSize:16}}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.card}>
                    <View>
                        <Text style={{fontSize:12, paddingLeft:20, paddingTop:10}}>Posted 5 min ago                                        <Text style={{fontSize:12,color:"red"}}>Due ate :</Text></Text>
                        
                        <Text style={styles.sunday}>Sunday, 28 july 2022 </Text>
                    </View>
                    <View>
                    <Text style={styles.design}>Logo Design Content</Text>
                    </View>
                    <Text style={{marginLeft:20, fontSize:10}}>by Pertamina</Text>
                    <Text style={{marginLeft:20, fontSize:14, marginTop:5}}>IDR 15.000.000</Text>
                    <Text style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Praesent nec volutpat massa, ut tempor massa. Maecenas ...</Text>
                    <View style={styles.card2}>
                    <TouchableOpacity style={styles.apply}>
                            <Text style={{textAlign:'center',fontWeight:"600",paddingTop:10, color:"white",fontSize:16}}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.card}>
                    <View>
                        <Text style={{fontSize:12, paddingLeft:20, paddingTop:10}}>Posted 5 min ago                                        <Text style={{fontSize:12,color:"red"}}>Due ate :</Text></Text>
                        
                        <Text style={styles.sunday}>Sunday, 28 july 2022 </Text>
                    </View>
                    <View>
                    <Text style={styles.design}>Logo Design Content</Text>
                    </View>
                    <Text style={{marginLeft:20, fontSize:10}}>by Pertamina</Text>
                    <Text style={{marginLeft:20, fontSize:14, marginTop:5}}>IDR 15.000.000</Text>
                    <Text style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Praesent nec volutpat massa, ut tempor massa. Maecenas ...</Text>
                    <View style={styles.card2}>
                    <TouchableOpacity style={styles.apply}>
                            <Text style={{textAlign:'center',fontWeight:"600",paddingTop:10, color:"white",fontSize:16}}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor:"white"
    },
    scroll:{
        width:'100%'

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
        top: 8,
        borderRadius: 0,
        fontSize: 32, 
        lineHeight: 38.4,
        color: "#ffff", 
        fontWeight: "700"
    },
    input:{
        marginTop : 30,

    },
    catagory:{
        width: 330,
        height: 40,
        marginLeft:30,
        marginBottom: 10,
        paddingLeft:10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor:"#C0C0C0",

        borderStyle:'solid'
    },
    find:{
        width: 330,
        height: 40,
        marginLeft:30,
        marginBottom: 10,
        paddingLeft:10,
        borderRadius: 5,
        borderWidth:1,
        borderColor:"#C0C0C0",
        borderStyle:'solid'


    },
    button:{
        backgroundColor: "#1DD1A1",
        width: 330,
        height: 40,
        borderRadius:5,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft:30,
        marginTop:5
    },
    card:{
        width:300,
        height:243,
        borderRadius:10,
        marginLeft: 45,
        marginTop: 40,
        borderWidth:1,
        borderColor:"#C0C0C0",
        borderStyle:'solid'
    },
    date:{
        weight: 700,
        fontSize:12,
        lineHeight: 14.4,
        textAlign: 'right',
    },
    sunday:{
        fontSize:12,
        lineHeight:14.4,
        textAlign:'right',
        marginRight: 17,
        color: "red"
    },
    design:{
        fontSize: 22,
        marginLeft:20,
        color: "#1DD1A1",
        marginBottom:5
    },
    lorem:{
        marginTop:10,
        marginLeft:20,
    },
    apply:{
        width: 300,
        height:45,
        marginTop:22,
        borderRadius:5,
        backgroundColor:"#1DD1A1"
    },
    card2:{
        marginBottom:200
    },
    akhir:{
        marginBottom:100,
    }
})

export default Home