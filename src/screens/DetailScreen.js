import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/base';

const DetailScreen = ({navigation, route}) => {
  const {detail} = route.params;
  return (
    <View style={{flex: 1, paddingLeft: 15, paddingRight: 15, backgroundColor:'white'}}>
      <ScrollView>
        <View style={{marginTop:20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('First');
            }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: '#DFDFDF',
            }}>
            <Image
              source={require('../assets/Vector.png')}
              style={{
                height: 20,
                width: 20,
                alignSelf: 'center',
                marginTop: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <Image
            source={{uri: detail?.picture?.large}}
            style={{height: 250, width: 360, borderRadius: 20}}
          />
        <View>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center',marginTop:8}}>
                          <Text
                            style={{
                              color: '#000',
                              // fontWeight: '700',
                              fontSize: 16,
                            }}>
                            Age:
                          </Text>
                          <Text
                            style={{
                              color: '#310060',
                              // fontWeight: '700',
                              fontSize: 14,
                              paddingLeft: 5,
                            }}
                            numberOfLines={2}>
                            {detail?.dob?.age}
                          </Text>
                        </View>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text
                            style={{
                              color: '#000',

                              fontSize: 16,
                            }}>
                            Name:
                          </Text>
                          <Text
                            style={{
                              color: '#310060',
                              paddingLeft: 5,
                              fontSize: 14,
                            }}
                            numberOfLines={2}>
                            {detail?.name?.first}{' '}{detail?.name?.last}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              color: '#000',

                              fontSize: 16,
                            }}>
                            Location:
                          </Text>
                          <View style={{flexDirection: 'row', paddingLeft: 5}}>
                            <Icon
                              name="place"
                              type="material"
                              color="black"
                              size={16}
                              style={{marginTop: 3, paddingRight: 3}}
                            />
                            <Text
                              style={{
                                fontSize: 14,
                                color: '#310060',
                                // fontWeight: '700',
                              }}
                              numberOfLines={2}>
                              {detail?.location?.city}{' , '}{detail?.location?.state}{' , '}{detail?.location?.country}
                            </Text>
                          </View>
                        </View>
                      </View>
        </View>
        
      
      <View style={{marginTop:10}}>
        <Text style={{fontSize: 16,  color: '#000'}}>Hi thank you for  visiting my profile.I would describe myself as Honest and Someone who believes in Simplicity.Ihave an understanding and caring nature .</Text>
      <Text style={{fontSize: 16,  color: '#000'}}>My interest includes travelling and spend quality time with loves one</Text>
      </View>
      <View style={{marginTop:20}}>
        <Text style={{fontSize: 24,  color: '#310060'}}>Basic Information</Text>
        <Text style={{fontSize: 16,  color: '#000'}}>Name ={detail?.name?.first}{' '}{detail?.name?.last}</Text>
        <Text style={{fontSize: 16,  color: '#000'}}>Location = {detail?.location?.city}{' '}{detail?.location?.country}</Text>
        <Text style={{fontSize: 16,  color: '#000'}}>DOB = {detail?.dob?.date}</Text>
        <Text style={{fontSize: 16,  color: '#000'}}>Phone ={detail?.phone}</Text>
        <Text style={{fontSize: 16,  color: '#000'}}>Email = {detail?.email}</Text>
      </View>
      <View style={{marginBottom:20,marginTop:20}}>
        <Text style={{fontSize: 24, color: '#310060'}}>Description</Text>
        <Text style={{fontSize: 14, color: '#000'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>
      </ScrollView>
      <View style={{flexDirection:'row',justifyContent:'space-between',bottom:10}}>
      <View style={{height:50,width:"45%",backgroundColor:'#4100AF',borderRadius:20}}>
        <Text style={{alignSelf:'center',fontSize:20,color:'white',marginTop:10}}>Send Interest</Text>
      </View>
      <View style={{height:50,width:"45%",backgroundColor:'#D80053',borderRadius:20}}>
        <Text style={{alignSelf:'center',fontSize:20,color:'white',marginTop:10}}>ShortList</Text>
      </View>  
      </View>
    </View>
  );
};

export default DetailScreen;
