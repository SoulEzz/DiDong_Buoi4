import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons'; 

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        
          <View style={{flexDirection:'row'}}>
              <Image style={{marginLeft:'10px', marginTop:'10px'}} source={require('./assets/book.png')}/>
        <View style={{marginLeft:'15px', marginTop:'10px'}}>
          <Text style={{fontWeight:'bold'}}>Nguyên hàm tích phân và        ứng   dụng</Text>
          <Text style={{fontWeight:'bold', marginTop:'5px'}}>Cung cấp bởi Tiki Trading</Text>
          <Text style={{marginTop:'5px', color:'red', fontWeight:'bold'}}>141.800 đ</Text>
          <Text style={{textDecorationLine:'line-through',color:'#808080',
          fontSize:'12px', marginTop:'5px'}}>141.800 đ </Text>
          <View style={{flexDirection:'row'}}>
            <AntDesign name="minussquareo" size={24} color="black" />
            <Text style={{fontWeight:'bold', marginLeft:'10px', marginTop:'3px'}}>1</Text>
            <AntDesign name="plussquareo" size={24} color="black" style={{marginLeft:'10px'}} />
            <Text style={{color:'#134FEC', fontWeight:'bold', marginTop:'5px',marginLeft:'90px'}}> Mua sau</Text>
          </View>
        </View>
          </View>
        
        <View style={{flexDirection:'row', marginTop:'10px',marginLeft:'10px'}}>
          
          <Text style={{fontWeight:'bold'}}>Mã giảm giá đã lưu</Text>
          <Text style={{fontWeight:'bold', color:'#134FEC', marginLeft:'30px'}}>Xem tại đây</Text>
        </View>

        <View style={{flexDirection:'row'}}>

          

          </View>


      </View>
      
      <View style={styles.nav}>

      </View>
      
      <View style={styles.body}>

      </View>

      <View style={styles.footer}>

      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:'#a9a9a9',
      width:'360px',
      height:'640px',
      

  },
  header: {
    backgroundColor : 'white',
    width:'100%',
    height:'283px',


  },
  nav: {
    width:'100%',
    height:'50px',
    marginTop:'20px',
    backgroundColor:'white'
  },
  body: {
    width:'100%',
    height:'50px',
    backgroundColor:'white',
    marginTop:'20px'
  },
  footer: {
    width:'100%',
    height:'120px',
    backgroundColor :'white',
    marginTop:'120px',
    
  },

  
});
