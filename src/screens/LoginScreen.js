import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/base';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState({});

  const getErrors = (email, password) => {
    const errors = {};
    if (!email) {
      errors.email = 'please enter email';
    } else if (!email.includes('@') || !email.includes('.com')) {
      errors.email = 'please enter valid email';
    }
    if (!password) {
      errors.password = 'Enter password';
    } else if (password.length < 6) {
      errors.password = 'Enter password of 6 characters';
    }
    return errors;
  };

  const handleLogin = () => {
    const errors = getErrors(email, password);
    if (Object.keys(errors).length > 0) {
      setShowErrors(true);
      setErrors(showErrors && errors);
      console.log(errors);
    } else {
      setErrors({});
      setShowErrors(false);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          alert('User signed in', user.email);
          navigation.navigate('RootClientTab');
        })
        .catch(error => {
          if (error.code === 'auth/operation-not-allowed') {
            alert('Enable anonymous in your firebase console.');
          }

          alert.error(error);
        });
    }
  };

  // const navigation = useNavigation()
  //   useEffect(() =>{
  //     const login=auth.onAuthStateChanged(user =>{
  //       if(user){
  //         navigation.navigate("Home")
  //       }
  //     })
  //     return login;
  //   }, [])

  //  const handleLogin = () =>{

  //  }
  const forgetPassword = () => {
    if (!email) {
      alert('Email is required');
    } else {
    auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      alert('password reset email sent');
    })
    .catch(error => {
      alert(error);
    });
  }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
      }}>
      <View style={{marginTop: 24}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signin');
          }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: 'grey',
          }}>
          <Image
            source={require('../assets/Vector.png')}
            style={{height: 20, width: 20, alignSelf: 'center', marginTop: 15}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <Text style={{fontSize: 25, fontWeight: 500, color: '#310060'}}>
          Lets
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 800,
            color: '#310060',
            marginLeft: 9,
          }}>
          Sign In
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 12, fontWeight: 400, color: '#310060'}}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
      </View>
      <View style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          {errors.email && (
            <Text style={{fontSize: 14, fontWeight: '400', color: 'red'}}>
              {errors.email}
            </Text>
          )}
        </View>
        <View style={{...styles.inputContainer, marginTop: 15}}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          {errors.password && (
            <Text style={{fontSize: 14, fontWeight: '400', color: 'red'}}>
              {errors.password}
            </Text>
          )}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{marginLeft: 20}}>
          <TouchableOpacity onPress={forgetPassword}>
            <Text style={{fontSize: 12, fontWeight: 600, color: '#310060'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginRight: 20}}>
          <TouchableOpacity>
            <Text style={{fontSize: 12, fontWeight: 600, color: '#310060'}}>
              Show Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonConatiner}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{alignItems: 'center', alignContent: 'center', marginTop: 30}}>
        <Text style={{fontSize: 16, color: 'black'}}>or</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <View>
          <TouchableOpacity
            style={{
              height: 70,
              width: 158.5,
              borderRadius: 20,
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: '#DFDFDF',
            }}>
            <Image
              source={require('../assets/google.png')}
              style={{
                alignSelf: 'center',
                height: 30,
                width: 25,
                marginTop: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              height: 70,
              width: 158.5,
              borderRadius: 20,
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: '#DFDFDF',
            }}>
            <Image
              source={require('../assets/Vector1.png')}
              style={{
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 23,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
        <Text style={{fontSize: 12, fontWeight: 400, color: '#1F4C6B'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={{fontSize: 12, fontWeight: 700, color: '#1F4C6B'}}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    backgroundColor: '#DFDFDF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 5,
    color: '#310060',
    fontSize: 20,
  },
  buttonConatiner: {
    width: '90%',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 42,
  },
  button: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0140',
    width: 278,
    height: 63,

    padding: 10,
    borderRadius: 10,
    marginLeft: 30,
  },
  buttonOutLine: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: 'blue',
    borderWidth: 2,
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    alignContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 400,
    fontSize: 20,
    marginTop: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    fontSize: 24,
    color: 'black',
  },
  buttonOutLineText: {
    color: 'black',
    fontWeight: 500,
    fontSize: 20,
  },
  link: {
    fontSize: 20,
    color: 'purple',
  },
});

export default LoginScreen;
