import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { Icon, Image } from 'react-native-elements'
import UserAvatar from 'react-native-user-avatar';
import auth from '@react-native-firebase/auth';

const AccountScreen = ({navigation}) => {
  const user = auth().currentUser;

  const handleSignout=()=>{
    auth()
  .signOut()
  .then(() => alert('User signed out!'));
  }

  if (user) {
    // User is signed in
    const username = user.email ? user.email : user.phoneNumber;
    console.log(`Username: ${username}`);
  } else {
    // No user is signed in
    console.log('No user is signed in');
  }
  return (
    <View style={{flex:1,}}>
     <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{padding:10,width:'100%',backgroundColor:'#000',height:150}}>
        <TouchableOpacity  onPress={ () =>{navigation.navigate('First')}} style={{height:50,width:50,borderRadius:25,backgroundColor:'#fff'}}>
        <Image source={require('../assets/Vector.png')}
        style={{height:20,width:20,alignSelf:'center',marginLeft:12,marginTop:15}}
        />
      
        </TouchableOpacity>
      </View>
      <View style={{alignItems:'center',}}>
      {/* <Image source={require('../assets/image2.jpeg')}
        style={{height:140,width:140,borderRadius:100,marginTop:-70}}
        /> */}
        <UserAvatar size={100} name={user.email}
           style={{height:140,width:140,borderRadius:100,marginTop:-70}}
        />
        <Text style={{fontSize:25,fontWeight:"bold",padding:10,color:'black'}}>{user.email}</Text>
        <Text style={{fontSize:15,fontWeight:"bold",padding:10,color:'grey'}}>25, Male</Text>
      </View>
      <View style={{alignSelf:'center',flexDirection:'row',justifyContent:'center',backgroundColor:'#fff',width:'90%',padding:20,paddingBottom:22,borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20}}>
      <Icon
          name="work"
          iconStyle ={{color:'black'}}
          type="material"
        />
         <Text style={{fontSize:15,color:'#818181',fontWeight:'bold',marginLeft:10}}>Product Designer</Text>
      </View>
      <View style={{alignSelf:'center',flexDirection:'row',justifyContent:'center',backgroundColor:'#fff',width:'90%',padding:20,paddingBottom:22,borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20}}>
      <Icon
          name="place"
          iconStyle ={{color:'black'}}
          type="material"
        />
         <Text style={{fontSize:15,color:'#818181',fontWeight:'bold',marginLeft:10}}>Chandigarh,Punjab,India</Text>
      </View>
      <View style={{alignSelf:'center',flexDirection:'row',justifyContent:'center',backgroundColor:'#fff',width:'90%',padding:20,paddingBottom:22,borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20,marginBottom:40}}>
      <Icon
          name="share"
          iconStyle ={{color:'black'}}
          type="material"
        />
         <Text  style={{fontSize:15,color:'#818181',fontWeight:'bold',marginLeft:10}}>Share</Text>
      </View>
      <TouchableOpacity onPress={handleSignout} style={{alignSelf:'center',flexDirection:'row',justifyContent:'center',backgroundColor:'#0D0140',width:'90%',padding:20,paddingBottom:22,borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20,marginBottom:40}}>
      <Icon
          name="logout"
          iconStyle ={{color:'#fff'}}
          type="material"
        />
         <Text  style={{fontSize:15,color:'#fff',fontWeight:'bold',marginLeft:10}}>Logout</Text>
      </TouchableOpacity>
     </ScrollView>
    </View>
  )
}

export default AccountScreen