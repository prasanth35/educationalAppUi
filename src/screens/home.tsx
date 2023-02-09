import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ContactUs from '../components/contactUs';
import CourseTab from '../components/courseTab';
import {colors} from '../utils/colors';
import TextInputWithIcon from '../utils/textInputWithIcon';

const Home = () => {
  const [search,setSearch] = useState("")
  return (
    <ScrollView scrollEnabled>
      <View style={styles.mainContainerStyle}>
        {/* Header */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Icon name="grid" size={30} color={colors.common} />
          <Icon name="person-circle" size={30} color={colors.common} />
        </View>
        {/* Welcome Text */}
        <View style={{flexDirection: 'column', marginTop: 25,gap:10}}>
          <Text style={styles.welcomeFont}>Hello,Habibah</Text>
          <Text style={styles.questionText}>What do you whant to learn?</Text>
          <TextInputWithIcon placeHolder={'Search'} icon={'ios-search'} showIcon setValue={setSearch}/>
        </View>
        {/* New Course Image Container */}
        <Image
          source={require('../assets/course.jpg')}
          resizeMode="cover"
          style={styles.newCourseImage}
        />
        {/* Course Tab */}
        <View style={styles.courseViewAll}>
          <Text style={styles.courseHeaderText}>Course</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <CourseTab />
        {/* Image 2 */}
        <Image
          source={require('../assets/classroom.jpg')}
          resizeMode="cover"
          style={styles.newCourseImage}
        />
        {/* Contact us */}
        <ContactUs />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    margin: 10,
    marginBottom: 50,
    flex: 1,
  },
  courseViewAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newCourseImage: {
    height: 350,
    width: '100%',
    borderRadius: 14,
    marginVertical: 20,
    marginBottom: 20,
    borderWidth:1,
    borderColor:'transparent'
  },
  welcomeFont: {
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'poppins',
    color: 'black',
  },
  questionText: {
    color: '#272323',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'poppins',
    opacity: 0.5,
    marginTop: 10,
  },
  courseHeaderText: {
    fontFamily: 'poppins',
    fontWeight: '700',
    fontSize: 18,
    color: '#272323',
  },
  viewAllText: {
    fontWeight: '400',
    color: '#272323',
    opacity: 0.5,
    fontSize: 18,
  },
});
export default Home;
