import React, { useState } from 'react'
import { Text, View , StyleSheet , TouchableOpacity} from 'react-native'
import { colors } from '../utils/colors'
import TextInputWithIcon from '../utils/textInputWithIcon'

const ContactUs = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
  return (
    <View style={styles.mainContainer}>
        {/* Contact Us */}
        <Text style={styles.header}>Contact Us</Text>
        {/* Name Input */}
        <View style={styles.holder}>
            <View style={styles.textBoxContainer}>
            <Text style={{marginBottom:10,color:colors.common}}>Name</Text>
          <TextInputWithIcon placeHolder={'Enter your name'} setValue={setName}/>
            </View>
        {/* Email Address Input */}
        <View style={styles.textBoxContainer}>
            <Text style={{color:colors.common,marginBottom:10}}>Email Address</Text>
            <TextInputWithIcon placeHolder={'Enter email address'} icon={'mail-outline'} iconColor={colors.common} showIcon setValue={setEmail}/>
            
            </View>
            {/* Send Button */}
        <TouchableOpacity style={styles.sendButton}>
                <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
                    
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'column',
        height:250,
    },
    sendButton:{
        height:40,
        width:'70%',
        backgroundColor:'#66328E',
        alignItems:'center',
        borderRadius:14,
        justifyContent:'center'
    },
    holder:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'column',
    },
    textBoxContainer:{
        width:'90%',
        justifyContent:'space-around',
        padding:10,
    },
    sendText:{
        color:'white',
    },
    header:{
        fontWeight:'700',
        fontSize:18,
        color:'#272323',
        lineHeight:26
   },
   subHeader:{
        lineHeight:24,
        fontSize:11,
        fontWeight:'500',
        color:colors.common
   }
})
export default ContactUs