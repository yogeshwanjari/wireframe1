// import React from 'react'
// import { View, Text } from 'react-native'
// import { Header } from 'react-native-elements'

// export default function Home() {
//     return (
//         <View>
//          <Header
//   placement="left"
//   leftComponent={{ icon: 'menu', color: '#fff' }}
//   rightComponent={{ icon: 'home', color: '#fff' }}
// />

//         </View>
//     )
// }

import React, {Component} from 'react';
import ApiView from '../ApiView';
import axios from 'axios';
import styles from '../ApiStyles';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fromFetch: false,
      fromAxios: false,
      dataSource: [],
      axiosData: null,
    };
  }
  goForFetch = () => {
    this.setState({
      fromFetch: true,
      loading: true,
    });
    fetch('https://gorest.co.in/public/v1/users')
      .then(response => response.json())
      .then(responseJson => {
        console.log('getting data from fetch', responseJson);
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
      })
      .catch(error => console.log(error));
  };
  goForAxios = () => {
    this.setState({
      fromFetch: false,
      loading: true,
    });
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('getting data from axios', response.data);
        this.setState({
          loading: false,
          axiosData: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  FlatListSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };
  renderItem = data => {
    return (
      <TouchableOpacity style={styles.list}>
        {/* <Text style={styles.lightText}>{data.item.email}</Text> */}
        <Text style={styles.lightText}>{data.item.name}</Text>
        <Text style={styles.lightText}>{data.item.email}</Text>
        <Text style={styles.lightText}>{data.item.id}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {dataSource, fromFetch, fromAxios, loading, axiosData, FetchData} =
      this.state;
    return (
      <ApiView
        goForFetch={this.goForFetch}
        goForAxios={this.goForAxios}
        dataSource={dataSource}
        loading={loading}
        fromFetch={fromFetch}
        fromAxios={fromAxios}
        axiosData={axiosData}
        FetchData={FetchData}
        FlatListSeparator={this.FlatListSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}

export default Home;
