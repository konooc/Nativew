import {
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import React from "react";

const deviceHeight = Dimensions.get("window").height;

export class BottomPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };
  renderOutsideTouchable(onTouch) {
    const view = <View style={{ flex: 1, width: "100%",}} />;

    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: "100%" }}
      >
        {view}
      </TouchableWithoutFeedback>
    );
  }
  

  render() {
    let { show } = this.state;
    const { onTouchOutside, title } = this.props;

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      >
        <View
         style={{
          flex: 1,
          backgroundColor: "#000000AA",
          justifyContent: "center",
          alignItems: "center", // Añadido para centrar horizontalmente
        }}
        >
          {this.renderOutsideTouchable(onTouchOutside)}
          
          
          <View
            style={{
              backgroundColor: "#FFFFFF",
              width: "90%",
              height: "20%",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              paddingHorizontal: 10,
            }}
              
          >
            
            <View>
              <Text
                 style={{
                  color: "#182E44",
                  fontSize: 20,
                  fontWeight: "500",
                  margin: 15,
                }}
              >
                {title}
              </Text>
            </View>

           
          </View>
          
        </View>
      </Modal>
    );
  }
}
