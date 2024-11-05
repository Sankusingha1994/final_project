import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from './src/screen/auth/Splash'
import SignUp from './src/screen/auth/SignUp'
import Login from './src/screen/auth/Login'
import StackNavigation from './src/navigation/StackNavigation'
import UserProfile from './src/screen/main/UserProfile'
import ProductsList from './src/screen/main/ProductsList'
import Input2 from './src/components/Input2'
import Registration from './src/components/Reg'
// import './gesture-handler';


const App = () => {
  return (
    // <Splash/>
    // <SignUp/>
    // <Login/>
    <StackNavigation/>
    // <ProductsList/>
    // <UserProfile/>
    // <Input2/>
    // <Registration/>
  )
}

export default App

const styles = StyleSheet.create({})