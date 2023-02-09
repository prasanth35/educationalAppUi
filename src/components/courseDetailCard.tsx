import React from 'react'
import { Text, View , StyleSheet , ScrollView , TextInput , TouchableOpacity, Image} from 'react-native'
import  Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../utils/colors';

interface CourseDetailCardPropTypes{
  name:string;
  hours:number;
  minutes:number;
  rating:number;
  icon:string;
}
const CourseDetailCard = (props:CourseDetailCardPropTypes) => {
  const { name , hours , minutes , rating , icon} = props
  console.log(props)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconHolder}>
      <Icon name={icon} size={38} color={colors.common}/>
      </View>
      <View style={styles.courseDetailHolder}>
        <Text style={{fontWeight:'700',fontSize:14,color:'black',lineHeight:18}}>{name}</Text>
        <View style={styles.durationStarHolder}>
          <View style={styles.iconWithTextHolder}>
          <Icon name='star' color={colors.rating}  size={20}/>
          <Text>{rating}</Text>
          </View>
          <View style={styles.iconWithTextHolder}>
          <Icon name='time' size={20} color={colors.duration}/>
          <Text>{`${hours}h ${minutes}`}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'80%',
    alignSelf:'center',
    alignItems:'center',
    padding:2,
    height:80,
  },
  courseDetailHolder:{
    flexDirection:'column',
    width:'80%',
    padding:7
  },
  durationStarHolder:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'50%',

  },
  iconWithTextHolder:{
    gap:3,
    flexDirection:'row',
    alignItems:'center'
  },
  iconHolder:{
    height:52,
    width:52,
    backgroundColor:'#EEE8F6',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  }
})

export default CourseDetailCard