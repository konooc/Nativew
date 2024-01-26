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
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  Icono: {
    fontSize: 30,
    backgroundColor: "white",

    position: "relative",
    fontSize: 30,
    fontFamily: "FontAwesome5Free-Regular",
    fontWeight: "normal",
    fontStyle: "normal",
  },
});
