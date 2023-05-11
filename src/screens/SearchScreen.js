import { View, Text, SafeAreaView,StyleSheet,TextInput, Image, ImageBackground } from 'react-native'
import React,{useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import {data} from '../global/data';

const SearchScreen = () => {
  const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };
  // const [search, setSearch] = useState('');

  // const searchfilter = ({text}) => {
  //   if (text) {
  //     const newData = masterdata.filter(item => {
  //       const itemData = item.title
  //         ? item.title.toUpperCase()
  //         : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setfilterdata(newData);
  //     setSearch(text);
  //   } else {
  //     setfilterdata(masterdata);
  //     setSearch(text);
  //   }
  // };
  return (
   
     <View style={styles.container}>
      <View style={{flex:0.4,}}>
      <View >
        <ImageBackground
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTK074GG5egaWh_pJ3OyxnimeCL8SmCcPgQ&usqp=CAU"}}
        style={{height:"100%",width:'100%'}}>
        <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',marginLeft:20,marginTop:20}}>
          <Image
           source={{uri:"https://media.istockphoto.com/id/672406456/vector/two-hearts-bride-and-groom-holding-hands-making-selfie-wedding.jpg?s=612x612&w=0&k=20&c=jrfZFzkmYtuMOQYR023G16E86Dq6WNAY6m2gpP16yzc="}}
           style={{height:50,width:50,borderRadius:20,borderColor:'black',}}
           />
           <Text style={{fontSize:24,marginLeft:10,fontWeight:'bold',color:'#C53018'}}>Matrimonial</Text>
        </View>
        <View style={{marginLeft:20,marginTop:20}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>find Your</Text>
          <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>Consultation?</Text>
        </View>
        <View style={{ flexDirection:"row",justifyContent:'space-between',marginTop:10}}>
        <View style={{width:'40%',backgroundColor:'white',borderRadius:10,marginLeft:10}}>
        <Dropdown
          // style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          // placeholderStyle={styles.placeholderStyle}
          // selectedTextStyle={styles.selectedTextStyle}
          // inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "I'm looking for" : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
        </View>
        <View style={{width:'40%',backgroundColor:'white',borderRadius:10,marginRight:10}}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Mother Tongue' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
        </View>
        </View>
        <View style={{justifyContent:'center',marginTop:10,width:'80%',borderRadius:10,backgroundColor:'white',marginLeft:30}}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Religion' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
        </View>
        
        </ImageBackground>
        
      </View>
      

      </View>
     </View>
      
   
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    
  },
  dropdown: {
    height: 50,
    
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    fontWeight:'bold'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})
export default SearchScreen