import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import StyleTxt from "./StyleTxt";
import theme from "./theme";
//importacion del icono
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ModalComponent from "./Modal";

const CuponConte = (props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (id) => {
    setShowModal(!showModal);
    // let comId = id;
    // console.log(comId);
  };

  return (
    <View style={styles.contElement}>
      <StyleTxt fontSizes="subHeding">{props.title}</StyleTxt>
      <TouchableWithoutFeedback onPress={() => toggleModal(props.id)}>
        <FontAwesome5 name="bookmark" style={styles.bookmarkIcon} />
      </TouchableWithoutFeedback>
      <ModalComponent visible={showModal} onClose={toggleModal} id={props.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  contElement: {
    padding: 10,
    backgroundColor: theme.colors.primary,
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
});
export default CuponConte;
