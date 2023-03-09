import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { calculate } from "../utils";

const Numbers = ({ lastAction, setLastAction }) => {
  const handleButtonPress = (action, val) => {
    setLastAction(calculate(lastAction, action, val));
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleButtonPress("number", "7")}
          style={styles.button}
        >
          <Text style={styles.textContainer}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("number", "8")}
          style={styles.button}
        >
          <Text style={styles.textContainer}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("number", "9")}
          style={styles.button}
        >
          <Text style={styles.textContainer}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("action", "/")}
          style={{ ...styles.button, ...styles.actionsButton }}
        >
          <Text style={styles.textContainer}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleButtonPress("number", "4")}
          style={styles.button}
        >
          <Text style={styles.textContainer}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("number", "5")}
          style={styles.button}
        >
          <Text style={styles.textContainer}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("number", "6")}
          style={styles.button}
        >
          <Text style={styles.textContainer}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("action", "*")}
          style={{ ...styles.button, ...styles.actionsButton }}
        >
          <Text style={styles.textContainer}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleButtonPress("number", "1")}
          style={styles.button}
        >
          <Text style={styles.textContainer}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("number", "2")}
          style={styles.button}
        >
          <Text style={styles.textContainer}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("number", "3")}
          style={styles.button}
        >
          <Text style={styles.textContainer}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("action", "-")}
          style={{ ...styles.button, ...styles.actionsButton }}
        >
          <Text style={styles.textContainer}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleButtonPress("clear", "AC")}
          style={{ ...styles.button, ...styles.clearButton }}
        >
          <Text style={styles.textContainer}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("number", "0")}
          style={styles.button}
        >
          <Text style={styles.textContainer}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("finish", "=")}
          style={{ ...styles.button, ...styles.finishButton }}
        >
          <Text style={styles.textContainer}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleButtonPress("action", "+")}
          style={{ ...styles.button, ...styles.actionsButton }}
        >
          <Text style={styles.textContainer}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "25%",
  },
  button: {
    height: "80%",
    padding: 10,
    backgroundColor: "#efefef",
    margin: 5,
    width: "22%",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    fontSize: 25,
  },
  finishButton: {
    backgroundColor: "#9cd1af",
  },
  actionsButton: {
    backgroundColor: "#fdeec1",
  },
  clearButton: {
    backgroundColor: "#fcc295",
  },
});

export default Numbers;
