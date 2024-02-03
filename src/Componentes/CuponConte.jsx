import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback} from "react-native";
import StyleTxt from './StyleTxt';
import theme from './theme';
//importacion del icono
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ModalComponent from './Modal';



const CuponConte  = props =>{
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
    setShowModal(!showModal); }
    

    return(
        <View style={styles.contElement}>
            <StyleTxt fontSizes = 'subHeding' >{props.titulo}</StyleTxt>
            <TouchableWithoutFeedback onPress={toggleModal}> 
                <FontAwesome5 name="bookmark" style={styles.bookmarkIcon} />
            </TouchableWithoutFeedback> 
            <ModalComponent visible={showModal} onClose={toggleModal} />
        </View>
    )
}

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
  })
export default CuponConte
