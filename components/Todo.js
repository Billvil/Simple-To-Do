import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Checkbox from "./Checkbox";

export default function Todo({ id, text, isCompleted, isToday, hour }) {
  return (
    <View style={styles.container}>
      <Checkbox
        id={id} 
        text={text}
        isCompleted={isCompleted}
        isToday={isToday}
        hour={hour}
      />
      <View>
        <Text
          style={
            isCompleted
              ? [
                  styles.text,
                  {
                    textDecorationLine: "line-through",
                    color: "mediumpurple",
                  },
                ]
              : styles.text
          }
        >
          {text}
        </Text>
        <Text
          style={
            isCompleted
              ? [
                  styles.textHour,
                  {
                    textDecorationLine: "line-through",
                    color: "#a3a3a3",
                  },
                ]
              : styles.textHour
          }
        >
          {hour}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "indigo",
  },
  textHour: {
    fontSize: 13,
    fontWeight: "500",
    color: "#a3a3a3",
  },
});
