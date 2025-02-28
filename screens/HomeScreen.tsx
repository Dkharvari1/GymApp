// HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <Text style={styles.headerText}>Welcome to Gym & Fitness</Text>

            {/* Quick Stats */}
            <View style={styles.statsContainer}>
                <View style={styles.statsCard}>
                    <Text style={styles.statsTitle}>Workouts Completed</Text>
                    <Text style={styles.statsNumber}>42</Text>
                </View>
                <View style={styles.statsCard}>
                    <Text style={styles.statsTitle}>Calories Burned</Text>
                    <Text style={styles.statsNumber}>1200</Text>
                </View>
            </View>

            {/* Featured Workouts */}
            <Text style={styles.sectionTitle}>Featured Workouts</Text>
            {['Full Body HIIT', 'Leg Day Blast', 'Core Burner'].map((workout, i) => (
                <TouchableOpacity key={i} style={styles.workoutCard}>
                    <Text style={styles.workoutTitle}>{workout}</Text>
                    <Text style={styles.workoutDetails}>Duration: 30 mins</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    statsCard: {
        flex: 1,
        backgroundColor: '#FCE4EC',
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 4,
        alignItems: 'center',
    },
    statsTitle: {
        fontSize: 14,
        marginBottom: 4,
    },
    statsNumber: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
    },
    workoutCard: {
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        padding: 16,
        marginBottom: 10,
    },
    workoutTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    workoutDetails: {
        fontSize: 14,
        color: '#757575',
        marginTop: 4,
    },
});
