// ScheduleScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

type ScheduleItem = {
  id: string;
  day: string;
  time: string;
  workout: string;
};

// Sample schedule data
const SCHEDULE_DATA: ScheduleItem[] = [
  { id: '1', day: 'Mon', time: '9:00 AM', workout: 'Chest & Triceps' },
  { id: '2', day: 'Tue', time: '6:00 PM', workout: 'Cardio HIIT' },
  { id: '3', day: 'Wed', time: '9:00 AM', workout: 'Back & Biceps' },
  { id: '4', day: 'Thu', time: '5:30 PM', workout: 'Leg Day' },
];

export default function ScheduleScreen() {
  const renderItem = ({ item }: { item: ScheduleItem }) => (
    <View style={styles.scheduleItem}>
      <Text style={styles.scheduleText}>{`${item.day}, ${item.time}: ${item.workout}`}</Text>
    </View>
  );

  const handleAddWorkout = () => {
    // Navigate to a "Create/Edit Workout" screen or show a modal.
    // For now, just a placeholder:
    console.log('Add Workout pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Workout Schedule</Text>
      <FlatList
        data={SCHEDULE_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />

      <TouchableOpacity onPress={handleAddWorkout} style={styles.button}>
        <Text style={styles.buttonText}>Add Workout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  scheduleItem: {
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  scheduleText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#FF5722',
    padding: 14,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
