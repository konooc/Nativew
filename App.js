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
      name: "Big Mac"
    },
    {
      id:2,
      name: "Triple hamburguesa con queso"
    },
    {
      id:3,
      name: "Mc Nuggets"
    }
]
const popUplist2 =[
  {
    id:1,
    name: "Whopper con queso"
  },
  {
    id:2,
    name: "Doble Texas"
  },
  {
    id:3,
    name: "Chiken TENDERCRISP"
  }
]



export default function App() {
 
  let popupRef1 = React.createRef();
  let popupRef2 = React.createRef();

  const onShowPopup = () => {
    popupRef1.current.show();
  };
  const onClosePopup = () => {
    popupRef1.current.close();
  };

  const onShowPopup2 = () => {
    popupRef2.current.show();
  };
  const onClosePopup2 = () => {
    popupRef2.current.close();
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
            title="McMenu "
            ref={popupRef1}
            onTouchOutside={onClosePopup}
            data={popUplist}
          />
        </SafeAreaView>

        
      </View>
      <View style={styles.contElement}>
      <Text style={styles.txtCont}>Burger King</Text>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={onShowPopup2}>
            <FontAwesome5 name="bookmark" style={styles.Icono} />
          </TouchableWithoutFeedback>
          <BottomPopUp
            title="Decreto del rey"
            ref={popupRef2}
            onTouchOutside={onClosePopup2}
            data={popUplist2}
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
