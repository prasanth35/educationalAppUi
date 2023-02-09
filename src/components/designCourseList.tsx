import React from 'react'
import { Text, View , StyleSheet , ScrollView , TextInput , TouchableOpacity} from 'react-native'
import courseList from '../data/courseList.json'
import CourseDetailCard from './courseDetailCard'
const DesignCourseList = () => {
  return (
    <View>{
        courseList && courseList.data.courses.map((data)=>{  if(data.type===1) return <CourseDetailCard key={data.id} name={data.heading} hours = {data.duration.hours} minutes = {data.duration.minutes}  rating = {data.rating} icon={data.icon} image={data.imagePath}/>})
        }</View>
  )
}

export default DesignCourseList