import { View, Text, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Image ,TextInput, ScrollView} from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { Icon } from '@rneui/base';
import { LeftCircleOutlined } from '@ant-design/icons';

const SigninScreen = ({navigation}) => {
  const [phone,setPhone]=useState('');
  const signInWithPhoneNumber=async () =>{
  const confirmation = await auth().signInWithPhoneNumber('+91' + phone);
    // setConfirm(confirmation);
  console.log(confirmation);
  }

  return (
   
     <View style={{flex:1,backgroundColor:'white',paddingLeft:15,paddingRight:15}}>
     <ScrollView>
      <View style={{flex:0.5,marginTop:17}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View><Image source={require('../assets/matrimonial1.jpg')}
            style={{height:174,width:171,borderRadius:20}}
          /></View>
          <View><Image source={require('../assets/matrimonial2.jpg')}
             style={{height:174,width:171,borderRadius:20}}
          /></View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
          <View><Image source={require('../assets/matrimonial3.jpg')}
            style={{height:174,width:171,borderRadius:20}}
          /></View>
          <View><Image source={require('../assets/matrimonial1.jpg')}
             style={{height:174,width:171,borderRadius:20}}
          /></View>
        </View>
        
      </View>
      <View style={{flex:0.5,marginTop:40}}>
        <View style={{flexDirection:'row'}}>
        <View>
        <Text style={{fontSize:24,fontWeight:500,color:'#310060'}}>Ready to</Text>
        </View>
        <View style={{marginLeft:8}}>
        <Text style={{fontSize:24,fontWeight:800,color:'#310060',}}>Explore</Text>
        </View>
        </View>
        <View style={styles.container }
            behavior="padding">
            <View  style={styles.inputContainer}>
            <TextInput placeholder="mobile number"
              keyboardType={'number-pad'}
              value={phone}
              onChange={text =>setPhone(text)}
              style={styles.input}
            />
            </View>
            </View>
          <View style={styles.buttonConatiner}>
      
            <TouchableOpacity  style={styles.button} onPress= {signInWithPhoneNumber}>
            <Text style={styles.buttonText}>continue with Phone Number</Text>
            </TouchableOpacity>


          </View>
          <View style={styles.buttonConatiner}>
      
          <TouchableOpacity  style={styles.button} onPress={ () =>{navigation.navigate('Login')}}>
          <Text style={styles.buttonText}>continue with Email</Text>
          </TouchableOpacity>


        </View>
          <View style={{alignItems:'center',alignContent:'center',marginTop:30}}>
            <Text style={{fontSize:16,color:'black'}}>or</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}} >
            <View>
             <TouchableOpacity style={{height:70,width:158.5,borderRadius:20,alignContent:'center',alignItems:'center',backgroundColor:'#DFDFDF'}}>
             <Image source={require('../assets/google.png')}
              style={{alignSelf:'center',height:30,width:25,marginTop:20}}
             /> 
             </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={{height:70,width:158.5,borderRadius:20,alignContent:'center',alignItems:'center',backgroundColor:'#DFDFDF'}}>
             <Image source={require('../assets/Vector1.png')}
              style={{alignContent:'center',alignItems:'center',marginTop:23}}
             /> 
             </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:20,marginBottom:20}}>
            <Text style={{fontSize:12,fontWeight:400,color:'#1F4C6B'}}>Don't have an account?</Text>
            <TouchableOpacity onPress={ () =>{navigation.navigate('Register')}}>
              <Text style={{fontSize:12,fontWeight:700,color:'#1F4C6B'}}>Register</Text>
            </TouchableOpacity>
          </View>
       </View>
       </ScrollView>
    </View>
   
  )
}
const styles =StyleSheet.create({
  container:{
    marginTop:40,
     justifyContent:'center',
     alignItems:'center',
     
   },
   inputContainer:{
     width:'90%',
    
   },
   input:{
     backgroundColor:'#DFDFDF',
     paddingHorizontal:15,
     paddingVertical:10,
     borderRadius:10,
     borderColor:'black',
     borderWidth:2,
     marginTop:5,
     color:'#310060',
     fontSize:20
     
   },
  buttonConatiner:{
   
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
  },
  button:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#0D0140',
    width:300,
    height:63,
 
    padding:10,
    borderRadius:10,
  },
  buttonText:{
    alignContent:'center',
    alignItems:'center',
    color:'white',
    marginTop:7,
    fontSize:16,
  },
  })
export default SigninScreen