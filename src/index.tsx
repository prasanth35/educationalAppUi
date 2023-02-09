import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import  Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import Home from './screens/home'
import MyCourses from './screens/mycourses'
import MyProfile from './screens/myprofile'
import Saved from './screens/saved'
import { colors } from './utils/colors'


const Index = () => {


    //Screen Names
    const homeName = 'Home'
    const myCoursesName = 'MyCourses'
    const myProfileName = 'MyProfile'
    const savedName = 'Saved'

    const Tab = createBottomTabNavigator();

  return (
<NavigationContainer>
    <Tab.Navigator
        initialRouteName={homeName}
        backBehavior="initialRoute"
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        screenOptions={
            ({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    let iconName = 'home'
                    let routeName = route.name

                    if(routeName === homeName){
                        iconName = focused ? 'home':'home-outline'
                    }else  if(routeName === myCoursesName){
                        iconName = focused ? 'play-circle':'play-circle-outline'
                    }else  if(routeName === myProfileName){
                        iconName = focused ? 'person':'person-outline'
                    }else  if(routeName === savedName){
                        iconName = focused ? 'book':'book'
                    }
                    return <Icon name={iconName} size={size} color={focused ? colors.common :color} />
                }

            })
        }
    >
        <Tab.Screen name={homeName} component={Home} options={{headerShown:false}}/>
        <Tab.Screen name={myCoursesName} component={MyCourses} options={{headerShown:false}}/>
        <Tab.Screen name={savedName} component={Saved} options={{headerShown:false}}/>
        <Tab.Screen name={myProfileName} component={MyProfile} options={{headerShown:false}}/>
    </Tab.Navigator>
</NavigationContainer>
  )
}

export default Index