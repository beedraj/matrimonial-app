import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import UserAvatar from 'react-native-user-avatar';
import {Icon, withBadge} from '@rneui/base';
import auth from '@react-native-firebase/auth';
const user = auth().currentUser;
if (user) {
  // User is signed in
  const username = user.email ? user.email : user.phoneNumber;
  console.log(`Username: ${username}`);
} else {
  // No user is signed in
  console.log('No user is signed in');
}

// const BadgeIcon = withBadge(2)(Icon);


const Header = ({navigation}) => {
  return (
    <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      marginTop: 20,
    }}>
    <View>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('AccountScreen');
        }}
        style={{marginRight: 10, marginLeft: 12}}>
        <UserAvatar
          size={50}
          name={user.email}
          style={{
           
            height: 50,
            width: 50,
            borderRadius: 25,
          }}
        />
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      onPress={() => {}}
      style={{
        marginRight: 20,heigth:50,width:50,backgroundColor:'#DFDFDF',borderRadius:25
      }}>
      <Icon
        type="material"
        name="notifications"
        size={25}
        style={{marginTop: 12}}
      />
    </TouchableOpacity>
  </View>

  )
}

export default Header
