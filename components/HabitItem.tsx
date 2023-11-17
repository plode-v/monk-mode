import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

interface HabitItemProps {
    habit: {
        id: number;
        title: string;
        completed: boolean;
    }
    toggleHabits: (id: number) => void;
}


const HabitItem = ({ habit, toggleHabits }: HabitItemProps) => {
  return (
    <TouchableOpacity onPress={() => toggleHabits(habit.id)}>
        <View style={styles.habitItem}>
            <Text style={habit.completed ? {textDecorationLine: "line-through"} : {}}>
                {habit.title}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default HabitItem

const styles = StyleSheet.create({
    habitItem: {
              
    }
})