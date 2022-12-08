import { View, Text, StyleSheet, ScrollView,TouchableOpacity , Image } from 'react-native'
import Logo from '../Assets/back-button.png'
import React from 'react'
import sayembara from '../Assets/Sayembara.png'
import { useNavigation } from '@react-navigation/native'

const Content = () => {
    const navigation = useNavigation();
  return (  
    <ScrollView>
        <View style={styles.container}>
        <View style={styles.atas}>
            <Text style={styles.sayembara}>
            <Image source={sayembara}/>
            </Text>
        </View>
        <View style={styles.viewbuttonback}>
        <TouchableOpacity onPress={() => navigation.navigate ('ContentDetail')} >
            <Image style={styles.logoback} source={Logo}
            />
        </TouchableOpacity>
        </View>
            <View style={styles.logo}>
                <Text style={styles.design}>Logo Design Contest</Text>
            </View>
            <View style={styles.text}>
                <Text style={{fontSize:16, color:"black",fontWeight:"450"}}>Status: <Text style={{fontWeight:"bold"}}>Open</Text></Text>
                <Text style={{fontSize:16, color:"black",fontWeight:"450"}}>Winner Prize: <Text style={{fontWeight:"bold"}}>IDR 15.000.000</Text></Text>
                <Text style={{fontSize:16, color:"black",fontWeight:"450"}}>Due Date: <Text style={{fontWeight:"bold"}}>Sunday, 28 July 2022</Text></Text>
                <Text style={{fontSize:16, color:"black",fontWeight:"450"}}>Announcement: <Text style={{fontWeight:"bold"}}>Sunday, 5 Agustus 2022</Text></Text>
            </View>
            <View style={styles.isinya}>
                <Text style={styles.tulisan}>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Praesent nec volutpat massa, ut tempor massa. 
                    Maecenas eu efficitur elit, ac ornare mi. Cras nulla 
                    purus, consequat at aliquam nec, vehicula id eros. 
                    Maecenas in dapibus arcu, a dignissim enim. 
                    Suspendisse potenti. Curabitur feugiat tincidunt 
                    mollis. Quisque vel rutrum elit. Vestibulum sed 
                    ipsum scelerisque, ornare quam pretium, tristique 
                    arcu. Aenean 
                </Text>
                <Text style={styles.tulisan2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Praesent nec volutpat massa, ut tempor massa. 
                    Maecenas eu efficitur elit, ac ornare mi. Cras nulla 
                    purus, consequat at aliquam nec, vehicula id eros. 
                    Maecenas in dapibus arcu, a dignissim enim. 
                    Suspendisse potenti. Curabitur feugiat tincidunt 
                    mollis. Quisque vel rutrum elit. Vestibulum sed 
                    ipsum scelerisque, ornare quam pretium, tristique 
                    arcu. Aenean 
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Sumbit')}>
                    <Text style={{fontSize:16, fontWeight:"700",lineHeight:19.2, color:"white"}}>Submit your work</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.sub}>Submissions</Text>
            <View style={styles.card}>
                <View style={styles.card1}>
                </View>
                <View style={styles.card2}>
                        <Text style={styles.card2A}>Logo Design of XYZ restaurant</Text>
                        <Text style={styles.card2B}>lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum...</Text>
                    </View>
            </View>
            <View style={styles.card}>
                <View style={styles.card1}>
                </View>
                <View style={styles.card2}>
                        <Text style={styles.card2A}>Logo Design of XYZ restaurant</Text>
                        <Text style={styles.card2B}>lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum...</Text>
                    </View>
            </View>
            <View style={styles.card}>
                <View style={styles.card1}>
                </View>
                <View style={styles.card2}>
                        <Text style={styles.card2A}>Logo Design of XYZ restaurant</Text>
                        <Text style={styles.card2B}>lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum...</Text>
                    </View>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:100,
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
        top: 5,
        borderRadius: 0,
        fontSize: 32,
        lineHeight: 38.4,
        color: "#ffff",
        fontWeight:"bold"  
    },
    design:{
        fontSize:28, 
        textAlign:'center',
        fontWeight:"bold",
        color:"black"
    },
    logo:{
        marginTop:30,
        marginBottom:25
    },
    text:{
        alignItems:'center',
    },
    isinya:{
    },
    tulisan:{
        marginLeft:29,
        marginTop:29,
        fontSize:16,
        fontWeight:"500",
        marginRight:12
    },
    tulisan2:{
        marginLeft:29,
        marginTop:15,
        fontSize:16,
        fontWeight:"500",
        marginRight:12
    },
    button:{
        width:176,
        height:37,
        backgroundColor:"#1DD1A1",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:115,
        marginTop:35,
        borderRadius:5
    },
    sub:{
        textAlign:'center',
        marginTop:50,
        fontSize: 28,
        color: "black",
        fontWeight:"700",
        marginBottom:30,
    },
    card:{
        width:300,
        height:300,
        marginLeft:45,
        borderWidth:1,
        bordercolor:"#C0C0C0",
        marginTop: 40
    },
    card1:{
        backgroundColor:"#C4C4C4",
        width:297,
        height:180,
        justifyContent:'center',
        alignItems:'center'
    },
    card2:{
        paddingLeft:10,
        marginTop:15
    },
    card2A:{
        fontSize: 16,
        fontWeight:'bold',
        color:"#1DD1A1",
        marginBottom:10

    },
    card2B:{
        fontSize:16
    },
    logoback:{
        width:20,
        height:20,
        marginLeft:10,
        marginTop:10
    }
    
})
export default Content