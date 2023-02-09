import React from 'react'
import { TextInput, View,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from './colors'

interface TextInputWithIconPropType{
    placeHolder:string;
    icon?:string;
    iconColor?:string;
    showIcon?:boolean;
    setValue:any;
}
const TextInputWithIcon = (props:TextInputWithIconPropType) => {
    const { placeHolder ,icon ,iconColor ,showIcon,setValue} = props
  return (
    <View style={styles.mainCointainer}>
    {showIcon ? <Icon style={styles.Icon}  name={icon || 'ios-search'} size={20} color={iconColor || '#272323'}/> : <></>}
    <TextInput
        style={styles.input}
        placeholder={placeHolder}
        onChangeText={setValue}
        underlineColorAndroid="transparent"
    />
</View>
  )
}

const styles = StyleSheet.create({
    mainCointainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:12,
        borderColor:colors.common,
        borderWidth:2,
    },
    Icon: {
        padding: 10,
        opacity:0.5
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        fontWeight:'500',
        color:'black',
    },
})

export default TextInputWithIcon