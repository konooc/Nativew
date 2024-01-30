import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import CupInfo from '../../screens/cupInfo';
import CustomButton from "./Button";


const ModalComponent = ({ visible, onClose }) => {

  const navigation = useNavigation();

  const handleVerPantalla = () => {
    onClose(); // Cierra el modal antes de navegar a la pantalla
    navigation.navigate('Informacion'); // Navega a la pantalla 'Pantalla'
  };
  return (
    <Modal

      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.textStyle}>Haz Guardado</Text>
          
            
          
           <View style={{marginTop: 40,
            alignItems: 'center'}}>
            <CustomButton txt="Ver Info" onClick={handleVerPantalla} />
           </View>
           <View style={{marginTop: 40,
            alignItems: 'center'}}>
            <CustomButton txt="Regresar" onClick={onClose} />
           </View>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: { //fuera del modal 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000AA',
  },
  modalView: { //diseño del modal
    backgroundColor: '#6E7B8B',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  
  textStyle: {
    color: '#00f',
    fontSize: 50, 
    fontWeight: 'bold'
  },
});

export default ModalComponent;
