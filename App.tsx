import React, { useState } from "react"
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from "react-native"
import HabitList from "./components/HabitList";
import HabitItem from "./components/HabitItem";
import { addHabit, toggleHabit } from "./util/habitFunctions";

const MonkModeApp = () => {

  const [habits, setHabits] = useState<{id: number, title: string, completed: boolean}[]>([]);
  const [newHabit, setNewHabit] = useState<string>('')


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your habit"
          value={newHabit}
          onChangeText={setNewHabit}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addHabit(habits, setHabits, newHabit)}
        >
          <Text style={styles.buttonText}>
            Add
          </Text>
        </TouchableOpacity>
      </View>

      <HabitList habits={habits} toggleHabit={(id) => toggleHabit(habits, setHabits, id)} />
    </SafeAreaView>
  )
}

export default MonkModeApp;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" && 50,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    alignItems: 'center'
  }, 
  inputContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  input: {
    flex: 0.8,
    height: 40,
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  addButton: {
    flex: 0.2,
    backgroundColor: 'violet',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },

})