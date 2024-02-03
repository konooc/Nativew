import React, { useState } from 'react';
import Constants from 'expo-constants';
import {TouchableWithoutFeedback, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//importacion del icono
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
//importacion de componenetes
import  CustomButton  from "./Button";
import ModalComponent from './Modal';
import ApiURL from '../data/apiRest';
import Cuponeslist from './Cuponeslist';
import theme from './theme';

//importaciones de las panatallas
import CupSave from '../../screens/cupSave';
import CupInfo from '../../screens/cupInfo';



const Stack = createStackNavigator();

export default function Main () {
 
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cuppo" component={InicioScreen} />
        <Stack.Screen name="Guardados" component={CupSave} />
        <Stack.Screen name="Informacion" component={CupInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



function InicioScreen({ navigation }) {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
    setShowModal(!showModal); }

  return (
    <View style={styles.container}>
         <Cuponeslist/>
    {/*<View style={styles.contTitle}>
        <Text style={styles.title}>Cuppo</Text>
      </View>
      <View style={styles.contBody}>

        {<View style={styles.contElement}>

          <Text style={styles.txtCont}>McDonald</Text>
            <TouchableWithoutFeedback onPress={toggleModal}> 
            <FontAwesome5 name="bookmark" style={styles.bookmarkIcon} />
            </TouchableWithoutFeedback> 
            <ModalComponent visible={showModal} onClose={toggleModal} />

        </View>}

         
      </View>

      <View style={styles.contbtn}>
        <CustomButton txt="Ver guardados" onClick={() => navigation.navigate('Guardados')} />
        </View>*/}
        
    </View>
  );
}


const styles  = StyleSheet.create({
  //contenedor principal
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    
    //padding:20,
    //marginBottom: 40,
     backgroundColor: theme.colors.tertiary,
    //justifyContent: "space-around",
  },
  //contenido "Header"
  contTitle: {
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  //contenido "Body"
  contBody: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  contElement: {
    padding: 10,
    backgroundColor: "#eaeaea",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "between",
    marginBottom: 20,
  },
  bookmarkIcon: {
    fontSize: 40,
    padding: 4,
  },
  txtCont: {
    fontSize: 30,
    padding: 4,
  },
  //contenido "Footer"

  contbtn: {
    alignItems: "center",
  },
});
