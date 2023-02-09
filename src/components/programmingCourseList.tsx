import React from 'react'
import { Text, View , StyleSheet , ScrollView , TextInput , TouchableOpacity} from 'react-native'
import courseList from '../data/courseList.json'
import CourseDetailCard from './courseDetailCard'
const ProgrammingCourseList = () => {
  return (
    <View>{
      courseList && courseList.data.courses.map((data)=>{  if(data.type===2) return <CourseDetailCard key={data.id} name={data.heading} hours = {data.duration.hours} minutes = {data.duration.minutes}  rating = {data.rating} icon={data.icon} />})
      }</View>
  )
}

export default ProgrammingCourseList