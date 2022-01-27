import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {appMessages, message} from "../../assets/static_resources/strings";

class Spinner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
            style={styles.messageStyle}
          >
          {this.props.message?this.props.message:appMessages.wait}
        </Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
  },messageStyle:{
    position: "relative",
    color: "#00bfe9",
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    textAlign: "center"
}
});

export default Spinner;