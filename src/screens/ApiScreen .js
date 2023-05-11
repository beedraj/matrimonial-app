import { View, Text, Button, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const ApiScreen  = () => {
  const [data,setData] =useState([]);
  

    const baseURL="http://9ccb-112-196-2-146.ngrok.io/data/"
    const getApi =()=>{
        axios({
            method:"GET",
            url:`${baseURL}/posts`
        }).then(res=>setData(res.data))
        .catch(err =>console.log(err))
    }
    
  return (
    <View style={{flex:1,marginTop:20,textAlign:"center",justifyContent:"center"}}>
      
      <TouchableOpacity style={{alignItems:"center",marginLeft:120,width:100,heigth:50,backgroundColor:"black",}} onPress={getApi}>
        <Text style={{fontSize:24,fontWeight:"bold",color:"white"}}>Get</Text>
      </TouchableOpacity>
      
      


      <FlatList
        data={data}  ListEmptyComponent={()=>(
        <Text style={{fontSize:24,fontWeight:"bold",}}>No DAta</Text>)}

        renderItem={({item})=><View>
          <Text style={{fontSize:24,fontWeight:"bold",}}>Contact:{item.contact} {','} {item.qualification.toUpperCase()} </Text>
        </View>}

      />
    </View>
  )
}

export default ApiScreen 