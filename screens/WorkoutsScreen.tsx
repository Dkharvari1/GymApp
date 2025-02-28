// WorkoutsScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type WorkoutData = {
    id: string;
    title: string;
    duration: string;
    level: string;
};

const WORKOUTS_DATA: WorkoutData[] = [
    { id: '1', title: 'Upper Body Strength', duration: '30 mins', level: 'Intermediate' },
    { id: '2', title: 'Lower Body Power', duration: '45 mins', level: 'Advanced' },
    { id: '3', title: 'Yoga Stretch', duration: '20 mins', level: 'Beginner' },
    { id: '4', title: 'HIIT Cardio Burn', duration: '25 mins', level: 'Advanced' },
    { id: '5', title: 'Pilates Core', duration: '35 mins', level: 'Intermediate' },
];

export default function WorkoutsScreen() {
    const renderItem = ({ item }: { item: WorkoutData }) => (
        <View style={styles.workoutCard}>
            <Text style={styles.workoutTitle}>{item.title}</Text>
            <Text style={styles.workoutDetails}>Duration: {item.duration}</Text>
            <Text style={styles.workoutDetails}>Level: {item.level}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Workouts</Text>
            <FlatList
                data={WORKOUTS_DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContentContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    listContentContainer: {
        paddingBottom: 20,
    },
    workoutCard: {
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
    },
    workoutTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
    workoutDetails: {
        fontSize: 14,
        color: '#757575',
    },
});
