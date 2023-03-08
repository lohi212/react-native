import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Numbers from "./src/components/Numbers";
import Preview from "./src/components/Preview";

export default function App() {
  const [lastAction, setLastAction] = useState({
    previous: {
      action: "",
      val: 0,
    },
    current: {
      action: "",
      val: 0,
    },
  });

  return (
    <View>
      <SafeAreaView>
        <View style={{ height: "50%" }}>
          <Preview lastAction={lastAction} />
        </View>
        <View style={{ height: "50%" }}>
          <Numbers setLastAction={setLastAction} lastAction={lastAction} />
        </View>

        {/* <StatusBar style="auto" /> */}
      </SafeAreaView>
    </View>
  );
}
