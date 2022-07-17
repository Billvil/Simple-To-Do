import * as React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import TodoList from "../components/TodoList";
import { todosData } from "../data/todos";

export default function Home() {
  const [localData, setLocalData] = React.useState(
    todosData.sort((a, b) => {
      return a.isCompleted - b.isCompleted;
    })
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/931317/pexels-photo-931317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={styles.pic}
      />

      <Text style={styles.text}>Today</Text>

      <TodoList todosData={todosData.filter((todo) => todo.isToday)} />

      <Text style={styles.text}>Tomorrow</Text>

      <TodoList todosData={todosData.filter((todo) => !todo.isToday)} />
      {/* Aquí se filtra la información de todos. */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 15,
  },
  pic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: "flex-end",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 20,
    paddingTop: 10,
    color: "indigo",
  },
});
