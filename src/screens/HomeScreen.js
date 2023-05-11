import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {countries} from '../global/data';

import Header from '../components/Header';
import {Icon} from '@rneui/base';
import Slider from '../components/Slider';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const FirstScreen = ({navigation}) => {
  const [filterdata, setfilterdata] = useState([]);
  const [masterdata, setmasterdata] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();

  const [visible, setVisible] = useState(false);

  const [indexcheck, setIndexCheck] = useState('0');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [age, setage] = useState([0, 100]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(countries);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  useEffect(() => {
    fetchPosts();
    return () => {};
  }, []);

  const fetchPosts = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    // const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    // const apiURL ='https://randomuser.me/api/?result=100';

    await fetch('https://randomuser.me/api/?results=100', requestOptions)
      .then(response => response.json())
      .then(result => {
        setfilterdata(result?.results);
        setmasterdata(result?.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const onSearch = text => {
    if (text == '') {
      setfilterdata(masterdata);
    } else {
      let tempList = filterdata.filter(item => {
        return item.name.first.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setfilterdata(tempList);
    }
  };
  const inSearch = text => {
    if (text == '') {
      setfilterdata(masterdata);
    } else {
      let tempList = filterdata.filter(item => {
        return (
          item.location.country.toLowerCase().indexOf(text.toLowerCase()) > -1
        );
      });
      setfilterdata(tempList);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}>
          <View style={{marginTop: 15}}>
            <Text
              style={{
                fontSize: 24,

                color: 'black',
                marginLeft: 10,
              }}>
              Interact With your
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: '#FA2B06',
                marginLeft: 10,
              }}>
              Happiness!
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                  height: 50,
                  width: '97%',
                  borderRadius: 15,
                  borderWidth: 0.2,
                  alignSelf: 'center',
                  marginTop: 25,
                  margin: 10,
                  // shadowOpacity: 80,
                  // elevation: 5,

                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    paddingLeft: 15,
                  }}>
                  <Icon
                    name="search"
                    type="material"
                    color="grey"
                    size={20}
                    style={{marginTop: 15}}
                  />
                  <TextInput
                    ref={searchRef}
                    placeholder="Search your Partner!"
                    underlineColorAndroid="transparent"
                    value={search}
                    onChangeText={text => {
                      onSearch(text);
                      setSearch(text);
                    }}
                    style={{fontSize: 16, fontWeight: '400', color: 'black'}}
                  />
                </View>
                {search == '' ? null : (
                  <TouchableOpacity
                    style={{marginRight: 15}}
                    onPress={() => {
                      searchRef.current.clear();
                      onSearch('');
                      setSearch('');
                    }}>
                    <Image
                      source={require('../assets/clear.png')}
                      style={{
                        height: 20,
                        width: 20,
                        opacity: 0.5,
                        marginTop: 15,
                      }}
                    />
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={{paddingRight: 20, marginTop: 18}}
                  onPress={() => {
                    setVisible(true);
                  }}>
                  <Image
                    source={require('../assets/setting.png')}
                    style={{height: 18, width: 18, tintColor: 'grey'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* <Slider/> */}

          <View style={{marginTop: 15}}>
            <View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={filterdata}
                keyExtractor={(item, index) => {
                  return 'key-' + index.toString();
                }}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('DetailScreen', {detail: item});
                    }}
                    key={index}>
                    <View
                      style={{
                        width: 200,
                        // height: 220,
                        marginHorizontal: 10,
                        padding: 10,
                        paddingHorizontal: 10,

                        borderRadius: 20,
                      }}>
                      <Image
                        source={{uri: item.picture.medium}}
                        style={{height: 200, width: 200, borderRadius: 20}}
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
                            {item?.dob?.age}
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
                            {item?.name?.first}
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
                              {item?.location?.country}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View
            style={{
              alignSelf:'flex-end',
              marginTop:20,
              marginBottom:15,
              paddingRight:5,
            }}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#FA2B06'}}>
                View All
              </Text>
          </View>

          <FlatList
            numColumns={2}
            horizontal={false}
            showsVerticalScrollIndicator={true}
            data={filterdata}
            keyExtractor={(item, index) => {
              return 'key-' + index.toString();
            }}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DetailScreen', {detail: item});
                  }}
                  styles={{
                    width: 160,
                    height: 250,
                    backgroundColor: 'grey',
                    shadowOpacity: 80,
                    elevation: 15,
                    borderRadius: 20,
                  }}
                  key={index}>
                  <View
                    style={{
                      width: 160,
                      height: 250,
                      marginHorizontal: 15,
                      borderRadius: 20,
                    }}>
                    <Image
                      source={{uri: item.picture.medium}}
                      style={{height: 150, width: 160, borderRadius: 10}}
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
                          {item?.dob?.age}
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
                          {item?.name?.first}
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
                            {item?.location?.country}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            style={{marginBottom: 130}}
          />
          <View>
            {visible ? (
              <View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={visible}
                  onRequestClose={() => {
                    setVisible(false);
                  }}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setVisible(false);
                    }}>
                    <View
                      style={{
                        flex: 1,
                      }}></View>
                  </TouchableWithoutFeedback>
                  <View
                    style={{
                      // flex: 1,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                    }}>
                    <View
                      style={{
                        width: '100%',
                        height: 350,
                        shadowOpacity: 80,
                        elevation: 15,
                        // borderRadius:20,
                        backgroundColor: '#fff',
                        paddingLeft: 10,
                      }}>
                      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop: 15,}}>
                        <View style={{ paddingLeft: 20}}>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: '500',
                              color: '#000',
                            }}>
                            Filters
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={{marginRight: 15,}}
                          onPress={() => {
                            setVisible(false)
                          }}>
                          <Image
                            source={require('../assets/clear.png')}
                            style={{
                              height: 25,
                              width: 25,
                              opacity: 0.5,
                              
                              // marginTop: 10,
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        style={{
                          width: '100%',
                          height: 50,
                          borderBottomWidth: 0.2,
                          justifyContent: 'center',
                          paddingLeft: 20,
                          marginTop:15
                        }}
                        onPress={() => {
                          let tempList = filterdata.sort((a, b) =>
                            a.name.first > b.name.first ? 1 : -1,
                          );
                          setfilterdata(tempList);
                          setVisible(false);
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            // fontWeight: '500',
                            color: 'grey',
                          }}>
                          Sort by Name
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          width: '100%',
                          height: 50,
                          borderBottomWidth: 0.2,
                          justifyContent: 'center',
                          paddingLeft: 20,
                        }}
                        onPress={() => {
                          let tempList = filterdata.sort((a, b) =>
                            a.dob.age > b.dob.age ? 1 : -1,
                          );
                          setfilterdata(tempList);
                          setVisible(false);
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              fontSize: 16,
                              // fontWeight: '500',
                              color: 'grey',
                            }}>
                            Sort by age
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingLeft: 20,
                          paddingRight: 20,
                          borderBottomWidth: 0.2,
                          height: 80,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            // fontWeight: '500',
                            color: 'grey',
                          }}>
                          Location
                        </Text>
                        <TextInput
                          placeholder="search your location"
                          style={{
                            width: '75%',
                            height: 50,
                            borderRadius: 30,
                            borderWidth: 0.2,
                            alignSelf: 'center',
                            marginTop: 10,
                            fontSize: 16,
                            // fontWeight: '500',
                            paddingLeft: 20,
                          }}
                          onChangeText={text => {
                            inSearch(text);
                            setSearch(text);
                          }}></TextInput>
                      </View>

                      <TouchableOpacity
                        style={{
                          width: '100%',
                          height: 120,
                          borderBottomWidth: 0.2,
                          justifyContent: 'center',
                          paddingLeft: 20,
                        }}
                        onPress={() => {
                          let tempList = filterdata.sort((a, b) =>
                            a.dob.age > b.dob.age ? 1 : -1,
                          );
                          setfilterdata(tempList);
                          setVisible(false);
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              fontSize: 16,
                              // fontWeight: '500',
                              color: 'grey',
                              paddingLeft: 10,
                              marginTop: -40,
                            }}>
                            Age:
                          </Text>
                          <Slider />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
  TextInput2: {
    height: 60,
    width: '50%',
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
  },
  itemStyle: {
    padding: 20,
    fontSize: 24,
    color: 'blue',
  },
  smallcard: {
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 100,
    margin: 10,
    height: 120,
  },
  smallcardselected: {
    borderRadius: 30,
    backgroundColor: '#ff00ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 100,
    margin: 10,
    height: 120,
  },
  smallcardTextSelected: {
    fontWeight: 'bold',
    color: 'orange',
  },
  smallcardText: {
    fontWeight: 'bold',
    color: 'grey',
  },
  placeholderStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  selectedTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
});

export default FirstScreen;
