import React, { useState } from 'react'
import { Text, View , StyleSheet , ScrollView , TextInput , TouchableOpacity} from 'react-native'
import { colors } from '../utils/colors'
import AllCourseList from './allCourseList'
import DesignCourseList from './designCourseList'
import ProgrammingCourseList from './programmingCourseList'

const CourseTab = () => {
  const [selectedItem,setSelectedItem] = useState(1)
  const items =[
    {
      id:1,
      name:"All"
    },
    {
      id:2,
      name:"Design"
    },
    {
      id:3,
      name:"Programming"
    }
  ]


  const handleItemPress = (id:number) =>{
    setSelectedItem(id)
  }


  const getComponent = (id:number) =>{
    return{
      1:<AllCourseList/>,
      2:<DesignCourseList/>,
      3:<ProgrammingCourseList/>
    } [id] || <AllCourseList/>
  }
  
  return (
    <View style={{alignItems:'center'}}>
      <View style={styles.mainContainer}>
        {
          items.map((data)=>{
            return(
              <TouchableOpacity style={selectedItem === data.id ? styles.selectedStyle : styles.unSelectedStyle} onPress={()=>handleItemPress(data.id)} key={data.id.toString()} hitSlop={{top:20,bottom:20}}>
                <Text style={selectedItem === data.id ? styles.selectedText : styles.unSelectedStyle}>{data.name}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
        {getComponent(selectedItem)}
    </View>
  )
}

const  styles = StyleSheet.create({
  mainContainer:{
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
    marginTop:10,
    gap:30,
    padding:5
  },
  selectedStyle:{
    borderRadius:18,
    backgroundColor:colors.common,
    minWidth:40,
    alignItems:'center',
  },
  unSelectedStyle:{
    backgroundColor:'white'
  },
  unselectedText:{
    color:'#272323',
    opacity:0.5,
    fontSize:12,
    lineHeight:18
  },
  selectedText:{
    color:'white',
    padding:7,
    fontSize:12,
    fontWeight:'500',
    lineHeight:18,
  }
})

export default CourseTab