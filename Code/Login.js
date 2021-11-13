import React, {Component} from 'react';
import {Text, View, Image, Button} from 'react-native';
import {Appbar, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

const Login = ({navigation}) => {
  return (
    <View style={{ borderTopStartRadius: 5}}>
      <View style={{alignItems: 'center', paddingTop: 60}}>
        <Image
          style={{
            width: 300,
            height: 150,
            backgroundColor:"white",
             margin: 1,
             borderTopRightRadius: 10,
            borderTopLeftRadius: 5,
             borderBottomRightRadius: 1,
          }}
          source={require('../assets/Book.png')}
        />
      </View>
      <View style={{paddingTop: 50, padding: 15, borderTopLeftRadius: 1}}>
        <View style={{}}>
        <Text style={{fontWeight:'bold',color:'black'}}>E-Mail Address</Text>
          <TextInput
            // label="Email"
            mode="outlined"
            left={<TextInput.Icon name="email" />}
          />
          <View style={{paddingTop: 15}}>
              <Text style={{fontWeight:'bold',color:'black'}}>Password</Text>
            <TextInput
            //   label="password"
              mode="outlined"
              secureTextEntry={true}
              left={<TextInput.Icon name="lock" />}
            />
          </View>

          <Text
            style={{
              paddingTop: 1,
              color: 'blue',
              fontSize: 15,
              paddingTop: 5,
              textAlign: 'right',
            }}>
            Forgot Password?
          </Text>
          <View style={{margin:40}}>
            <Button
              title="Login"
              color="indigo"
              accessibilityLabel="Learn more about this purple button"
              onPress={navigate => navigation.navigate('MyTab')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
