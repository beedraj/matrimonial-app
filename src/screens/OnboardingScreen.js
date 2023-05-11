import { View, Text, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'



const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#FFFFFF',paddingLeft:10,paddingRight:10}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',alignItems:'center',marginTop:15,}}>
      {/* <View style={{flexDirection:'row',alignContent:'center',alignItems:'center'}}> */}
       <View>
       <Image source={require('../assets/StandardCollection27.png')}
          style={{marginRight:5,height:34.16,width:33}}
        />
       </View>
        {/* <View>
        <Image source={require('../assets/AppLogo.png')}
          style={{height:25,width:90,}}
        />
        </View> */}
      {/* </View> */}
      <View>
                
                <TouchableOpacity style={{alignContent:'center',alignItems:'center',height:35,width:70,borderRadius:15,backgroundColor:'#DFDFDF'}} onPress={ () =>{navigation.navigate('Signin')}}>
                    <Text style={{...styles.link1,marginTop:7}}>Skip</Text>
                </TouchableOpacity>
                
      </View>

      </View>
      <View style={{flex:1,justifyContent:"center"}}>
        <Swiper autoplay={false}
        showsPagination={false}
        ref={(swiper) => { this.swiper = swiper; }}>
            <View>
            <View style={{marginLeft:10,marginTop:25}}>
              <Text style={{fontSize:25,fontWeight:"500",color:'#310060'}}>Find best place</Text>
              <View style={{flexDirection:'row',marginTop:8,}}>
                <View>

                <Text style={{fontSize:25,fontWeight:"500",color:'#310060'}}>to stay in</Text>
                </View>
                <View>
                  <Text style={{fontSize:25,fontWeight:"800",color:'#310060'}}> good price. </Text>
                </View>
              </View>
              
            </View>
            <View style={{marginLeft:10,marginTop:20}}>
            <Text style={{fontSize:12,fontWeight:"400",color:'#53587A'}}>React Native provides a unified way of managing images and other media assets in your Android and iOS apps.</Text>
            </View>

            <View >
            <View style={{marginTop:25,}}>
            <Image
                source={require('../assets/matrimonial1.jpg')}
                style={{height:502,width:"98%",borderRadius:40,borderWidth:2}}
             />
             <View style={{position:'absolute',bottom:30,marginLeft:70}}>
             <TouchableOpacity style={styles.button} onPress={() => { this.swiper.scrollBy(1); }}>
                    <Text style={styles.link}>Next</Text>
                </TouchableOpacity>
             </View>
             
            </View>

            </View>
            </View>
            <View>
            <View style={{marginLeft:10,marginTop:25}}>
              <Text style={{fontSize:25,fontWeight:"500",color:'#310060'}}>Fast sell your property</Text>
              <View style={{flexDirection:'row',marginTop:8,}}>
                <View>

                <Text style={{fontSize:25,fontWeight:"500",color:'#310060'}}>in just </Text>
                </View>
                <View>
                  <Text style={{fontSize:25,fontWeight:"800",color:'#310060'}}>one click </Text>
                </View>
              </View>
              
            </View>
            <View style={{marginLeft:10,marginTop:20}}>
            <Text style={{fontSize:12,fontWeight:"500",color:'#53587A'}}>React Native provides a unified way of managing images and other media assets in your Android and iOS apps.</Text>
            </View>

            <View >
            <View style={{marginTop:25,}}>
            <Image
                source={require('../assets/matrimonial2.jpg')}
                style={{height:502,width:"98%",borderRadius:40,borderWidth:2}}
             />
             <View style={{position:'absolute',bottom:30,marginLeft:30}}>
             <View style={{flexDirection:'row',alignContent:'center',alignItems:'center'}}>
             <TouchableOpacity style={{alignContent:'center',alignItems:'center',marginRight:20,height:50,width:50,borderRadius:25,backgroundColor:'white'}}
             onPress={() => { this.swiper.scrollBy(); }}>
             <Image source={require('../assets/Vector.png')}
              style={{height:18,width:18,marginTop:15}}
             />
             </TouchableOpacity>
             <TouchableOpacity style={styles.button} onPress={() => { this.swiper.scrollBy(2); }}>
                    <Text style={styles.link}>Next</Text>
                </TouchableOpacity>
             </View>
             </View>
            
           
            </View>

            </View>
            </View>
            <View>
            <View style={{marginLeft:10,marginTop:25}}>
              
              <View style={{flexDirection:'row',marginTop:8,}}>
                <View>

                <Text style={{fontSize:25,fontWeight:"500",color:'#310060'}}>Find </Text>
                </View>
                <View>
                  <Text style={{fontSize:25,fontWeight:"800",color:'#310060'}}>perfect choice </Text>
                </View>
                <View>

                <Text style={{fontSize:25,fontWeight:"500",color:'#310060'}}>for </Text>
                </View>
              </View>
              <Text style={{fontSize:25,fontWeight:"500",color:'#310060'}}>your future house</Text>
              
            </View>
            <View style={{marginLeft:10,marginTop:20}}>
            <Text style={{fontSize:12,fontWeight:"500",color:'#53587A'}}>React Native provides a unified way of managing images and other media assets in your Android and iOS apps.</Text>
            </View>

            <View >
            <View style={{marginTop:25,}}>
            <Image
                source={require('../assets/matrimonial3.jpg')}
                style={{height:502,width:"98%",borderRadius:40,borderWidth:2}}
             />
             <View style={{position:'absolute',bottom:30,marginLeft:30}}>
             <View style={{flexDirection:'row',alignContent:'center',alignItems:'center'}}>
             <TouchableOpacity style={{alignContent:'center',alignItems:'center',marginRight:20,height:50,width:50,borderRadius:25,backgroundColor:'white'}}
             onPress={() => { this.swiper.scrollBy(1); }}>
             <Image source={require('../assets/Vector.png')}
              style={{height:18,width:18,marginTop:15}}
             />
             </TouchableOpacity>
             <TouchableOpacity style={styles.button} onPress={() => { this.swiper.scrollBy(); }}>
                    <Text style={styles.link}>Next</Text>
                </TouchableOpacity>
             </View>
             </View>
             
            </View>

            </View>
            </View>
            
        </Swiper>
      </View>

     
    
   </View>
  
  )
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  inputContainer:{
    width:'70%',
  },
  input:{
    fontSize:40,
    fontWeight:"bold",
    color:'yellow',
    marginBottom:50,
    
  },
  input1:{
    fontSize:24,
    color:'white',
    marginBottom:20
  },
 
  buttonConatiner:{
    
    width:'50%',
    justifyContent:'center',
    alignItems:'center',
  
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0D0140',
    width:200,
    height:54,

    
    borderRadius:15,
  },
  // buttonConatiner1:{
  //  heigth:4,
  //  width:175,
  //   justifyContent:'center',
  //   alignItems:'center',
  
  // },
  // button1:{
  //   justifyContent:'center',
  //   alignItems:'center',
  //   backgroundColor:'#DFDFDF',
  //   width:'40%',
  //   heigth:12,

  //   padding:10,
  //   borderRadius:25,
  // },
  button2:{
    backgroundColor:'white',
    width:'70%',
    marginTop:20,
    padding:10,
    borderRadius:10,
  },
  link:{
    
    color:'white',
    fontSize:20,
 },
  
  
  link1:{
    
     color:'black',
     fontSize:14,
     
  }
})
export default HomeScreen