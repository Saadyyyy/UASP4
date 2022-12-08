import { View, Text , StyleSheet, Modal,TouchableOpacity} from 'react-native'
import React , {useState} from 'react'
import { color } from 'react-native-reanimated'

const List = () => {
  const [modal, setmodal] = useState(false)
  return (
    <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => setmodal(true)}>
            <Text style={styles.text1}>LOGIN </Text>
          </TouchableOpacity>
        </View>
        <Modal style={styles.modal} visible={modal} animationType={'slide'}>
          <View style={styles.modalview}>
            <Text style={styles.modaltext}>Login Selesai Selamat Datang</Text>
            <TouchableOpacity style={styles.buttonok} onPress={ ()=> setmodal(false)}>
              <Text style={{color:"white"}}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    </View>
  )
}

const styles =  StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  modal:{
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
export default List