import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Text,
  View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { BottomPopUp } from "./src/BottomPopUp";

const popUplist =[
    {
      id:1,
      name: "Task"
    },
    {
      id:2,
      name: "greenk"
    },
    {
      id:3,
      name: "Lee"
    }
]



export default function App() {
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };
  const onClosePopup = () => {
    popupRef.close();
  };

  return (
    <View style={styles.contBox}>
      <View style={styles.contElement}>
        <Text style={styles.txtCont}>McDonald</Text>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={onShowPopup}>
            <FontAwesome5 name="bookmark" style={styles.Icono} />
          </TouchableWithoutFeedback>
          <BottomPopUp
            title="Pop de Prueba "
            ref={(target) => (popupRef = target)}
            onTouchOutside={onClosePopup}
            data={popUplist}
          />
        </SafeAreaView>

        
      </View>
      <View style={styles.contElement}>
      <Text style={styles.txtCont}>Burger King</Text>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={onShowPopup}>
            <FontAwesome5 name="bookmark" style={styles.Icono} />
          </TouchableWithoutFeedback>
          <BottomPopUp
            title="Pop de Prueba"
            ref={(target) => (popupRef = target)}
            onTouchOutside={onClosePopup}
            data={popUplist}
          />
        </SafeAreaView>

        
      </View>
    </View>

    
    
  );
}

const styles = StyleSheet.create({
  contBox: {
    flex: 1,
    padding: 24,
    //backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
  },
  contElement:{
    padding: 10,
    backgroundColor: '#eaeaea',
    width: "100%",
    height:"10%",
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: 'between',
    marginBottom: 20,
  },

  Icono: {
    fontSize: 40,
    padding: 4,
  },
  txtCont: {
    fontSize:30,
    padding: 4,
  },
});
