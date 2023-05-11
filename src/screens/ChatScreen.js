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
  Touchable,
} from 'react-native';
import React, {useState} from 'react';
import {ProfileData} from '../global/data';
import {Icon} from '@rneui/base';

const ChatScreen = () => {
  const [indexcheck, setIndexCheck] = useState('0');
  const [search, setSearch] = useState('');
  const ItemSeparatorView = () => {
    return (
      <View
        style={{height: 1, width: '100%', backgroundColor: '#c8c8c8'}}></View>
    );
  };
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={{flex: 0.3}}>
          <View style={{ paddingVertical: 3}}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontFamily: 'bold',
                marginTop: 10,
                marginLeft: 10,
              }}>
              MATCHES
            </Text>
          </View>
          <FlatList
            style={{height:400}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={ProfileData}
            keyExtractor={item => item.id}
            extraData={indexcheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexcheck === item.id
                      ? {...styles.smallcardselected}
                      : {...styles.smallcard}
                  }>
                  <Image
                    style={{height: 90, width: 90, borderRadius: 45}}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={
                        indexcheck === item.id
                          ? {...styles.smallcardTextSelected}
                          : {...styles.smallcardText}
                      }>
                      {item.name}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={
                        indexcheck === item.id
                          ? {...styles.smallcardTextSelected}
                          : {...styles.smallcardText}
                      }>
                      {item.age}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
          </View>
        <TextInput
          style={{
            height: 50,
            width: '90%',
            borderRadius: 10,
            borderWidth: 1,
            paddingLeft: 20,
            marginBottom:20,
            margin: 10,
            borderColor: '#009688',
            backgroundColor: 'white',
          }}
          value={search}
          placeholder="search"
          underlineColorAndroid="transparent"
          onChangeText={text => searchfilter(text)}
        />
        

     
      <View style={{flex: 0.7,marginLeft: 10,}}>
        <View style={{ paddingVertical: 5}}>
          <Text
            style={{
              fontSize: 24,
              color: 'black',
              fontFamily: 'bold',
              
            }}>
            Chat
          </Text>
        </View>
        <FlatList
          style={{}}
          data={ProfileData}
          keyExtractor={item => item.id}
          extraData={indexcheck}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                setIndexCheck(item.id);
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{height: 90, width: 90, borderRadius: 45}}
                  source={item.image}
                />
                <View>
                  <Text
                    style={
                      indexcheck === item.id
                        ? {...styles.smallcardTextSelected}
                        : {...styles.smallcardText}
                    }>
                    {item.name}
                  </Text>
                </View>
                <View>
                  <Text
                    style={
                      indexcheck === item.id
                        ? {...styles.smallcardTextSelected}
                        : {...styles.smallcardText}
                    }>
                    {item.age}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  itemStyle: {
    padding: 20,
    fontSize: 24,
    color: 'blue',
  },
  smallcard: {
    borderRadius: 30,
    // backgroundColor:"white",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    // width:100,
    margin: 10,
    // height:150,
  },
  smallcardselected: {
    borderRadius: 30,
    // backgroundColor:"#ff00ff",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    // width:100,
    margin: 10,
    // height:150,
  },
  smallcardTextSelected: {
    fontWeight: 'bold',
    color: 'red',
  },
  smallcardText: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ChatScreen;
