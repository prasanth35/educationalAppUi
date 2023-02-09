import React from 'react'
import { Text, View , StyleSheet , ScrollView , TextInput , TouchableOpacity} from 'react-native'
import courseList from '../data/courseList.json'
import CourseDetailCard from './courseDetailCard'
const ProgrammingCourseList = () => {
  return (
    <View>{
      courseList && courseList.data.courses.map((data)=>{  
        if(data.type==2) return( 
        <View key={data.id}>
      <CourseDetailCard name={data.heading} hours = {data.duration.hours} minutes = {data.duration.minutes}  rating = {data.rating} icon={data.icon} />
      </View>)
      })
      }</View>
  )
}

export default ProgrammingCourseList