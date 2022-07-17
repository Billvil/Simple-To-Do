import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { Foundation } from "@expo/vector-icons";

export default function Checkbox({ id, text, isCompleted, isToday, hour }) {
  return isToday ? (
    <TouchableOpacity style={isCompleted ? styles.checked : styles.Unchecked}>
      {isCompleted && <Foundation name="check" size={16} color="#FAFAFA" />}
    </TouchableOpacity>
  ) : (
    <View style={styles.isToday} />
  );
}

const styles = StyleSheet.create({
  checked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    backgroundColor: "indigo",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  Unchecked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderWidth: 2,
    borderColor: "indigo",
    borderRadius: 6,
    backgroundColor: "white",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  isToday: {
    width: 10,
    height: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "indigo",
    marginRight: 13,
    marginLeft: 15,
  },
});
