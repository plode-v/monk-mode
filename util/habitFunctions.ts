
interface Habits {
    id: number;
    title: string;
    completed: boolean;
}

const addHabit = (habits: Habits[], setHabits: React.Dispatch<React.SetStateAction<Habits[]>>, newHabit: string) => {
    if (newHabit) {
        setHabits([...habits, { id: Date.now(), title: newHabit, completed: false }]);
    }
}

const toggleHabit = (habits: Habits[], setHabits: React.Dispatch<React.SetStateAction<Habits[]>>, id: number) => {
    setHabits(
        habits.map((habit) => (
            habit.id === id ? { ...habit, completed: !habit.completed } : habit
        ))
    )
}

export { addHabit, toggleHabit };