import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 40,
    padding: 40,
  },
});

const Preview = ({ lastAction }) => {
  return (
    <View>
      <Text style={styles.textContainer}>
        {lastAction.current.val || lastAction.previous.val}
      </Text>
    </View>
  );
};

export default Preview;
