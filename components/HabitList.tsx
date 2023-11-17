import React from 'react'
import { FlatList } from 'react-native'
import HabitItem from './HabitItem';

interface HabitListProps {
    habits: { id: number; title: string; completed: boolean }[];
    toggleHabit: (id: number) => void;
}

export default function HabitList({ habits, toggleHabit }: HabitListProps) {
  return (
    <FlatList
        data={habits}
        renderItem={({ item }) => <HabitItem habit={item} toggleHabits={toggleHabit} />}
        keyExtractor={(item) => item.id.toString()}
    />
  )
}