
import * as React from 'react';
import { Text,View,StyleSheet,Image,ImageBackground} from 'react-native';
import { Container, Header, Title, Left, Right, Body, Content} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import About from './components/About';
import Courses from './components/Courses';
import ApartmentDetails from './components/ApartmentDetails';
import Sign from './components/Signin';
import background from './assets/bg.jpg';

function HomeScreen({navigation}) {
  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
    <View>
      <Button style={styles.topButton}
        icon={
          <Icon
            name="bank"
            size={15}
            color="white"
          />
        }
        buttonStyle={{backgroundColor: '#008b8b',width:120}}
        title="Sign in/up"
        onPress={() => {
          navigation.navigate('Sign');
        }}
      />

      <Text style = {styles.text}>Welcome to Wentao Li's Home Page</Text>
      <Image
        source={require('./assets/wentao.jpeg')}
        style={{ height: 376, width: 500, marginTop: 15, marginBottom: 2}} />
    </View>
    <View style={styles.bottom}>
      <Button
        icon={
          <Icon
            name="book"
            size={15}
            color="white"
          />
        }
        style={styles.button}
        buttonStyle={{backgroundColor: 'black',width:200,height:50}}
        title="Courses"
        onPress={() => {
          navigation.navigate('Course Have Taken');
        }}
      />
    
      <Button
        icon={
          <Icon
            name="info"
            size={15}
            color="white"
          />
        }
        style={styles.button}
        buttonStyle={{backgroundColor: 'black',width:200,height:50}}
        title="About"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
    </View>
    </ImageBackground>
  );
}

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Course Have Taken" component={Courses} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Sign" component={Sign}/>
        <Stack.Screen name="ApartmentDetails" component={ApartmentDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  topButton: {
    flexDirection: 'row-reverse',
  },
  button: {
    flexDirection: 'row',
  },
  bottom:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  text: {
    color:'black',
    fontSize:15,
    fontFamily:'Chalkduster, fantasy',
    fontWeight:'normal',
    marginTop: 10,
    marginRight:10,
    marginLeft:20,
    marginBottom:20,
    textAlign: 'center'
  },
  backgroundImage: {
    height:'100%',
    width:'100%',
  },
});
