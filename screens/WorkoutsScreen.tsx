import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';  // <-- Import navigation hook

type WorkoutData = {
    id: string;
    title: string;
    type: string;
    duration: string;
    level: string;
};

// 🏋️‍♂️ **Workout Data with Types**
const WORKOUTS_DATA: WorkoutData[] = [
    { id: '1', title: 'Upper Body Strength', type: 'Strength', duration: '30 mins', level: 'Intermediate' },
    { id: '2', title: 'Lower Body Power', type: 'Strength', duration: '45 mins', level: 'Advanced' },
    { id: '3', title: 'Yoga Stretch', type: 'Flexibility', duration: '20 mins', level: 'Beginner' },
    { id: '4', title: 'HIIT Cardio Burn', type: 'Cardio', duration: '25 mins', level: 'Advanced' },
    { id: '5', title: 'Pilates Core', type: 'Flexibility', duration: '35 mins', level: 'Intermediate' },
];

// 🎯 **Workout Categories**
const WORKOUT_TYPES = ['All', 'Strength', 'Cardio', 'Flexibility'];

export default function WorkoutsScreen() {
    const navigation = useNavigation();            // <-- Use navigation
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('All');

    // 🔍 **Filter Workouts Based on Search & Type**
    const filteredWorkouts = WORKOUTS_DATA.filter(
        (workout) =>
            (selectedType === 'All' || workout.type === selectedType) &&
            workout.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle press event to navigate (or do something else)
    const handleWorkoutPress = (workout: WorkoutData) => {
        // Example of navigating to a detail screen, passing the workout data
        navigation.navigate('WorkoutDetail', {
            name: workout.title,
            duration: parseInt(workout.duration),
            instructions: 'No instructions provided',
        });
    };

    // 🎥 **Render Workout Cards**
    const renderItem = ({ item }: { item: WorkoutData }) => (
        <TouchableOpacity
            style={styles.workoutCard}
            onPress={() => handleWorkoutPress(item)} // <-- make entire card clickable
        >
            <Text style={styles.workoutTitle}>{item.title}</Text>
            <Text style={styles.workoutDetails}>Type: {item.type}</Text>
            <Text style={styles.workoutDetails}>Duration: {item.duration}</Text>
            <Text style={styles.workoutDetails}>Level: {item.level}</Text>

            {/* If you'd rather only make the Start Workout button clickable, 
                you can place the onPress here instead: */}
            <TouchableOpacity
                style={styles.startButton}
                onPress={() => handleWorkoutPress(item)} // <-- or just the button
            >
                <Text style={styles.startButtonText}>Start Workout</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* 🏋️‍♂️ HEADER */}
            <Text style={styles.headerText}>Workouts</Text>

            {/* 🔍 SEARCH BAR */}
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color="#777" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search workouts..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            {/* 🎯 WORKOUT TYPE FILTERS */}
            <View style={styles.filterContainer}>
                {WORKOUT_TYPES.map((type) => (
                    <TouchableOpacity
                        key={type}
                        style={[styles.filterButton, selectedType === type && styles.activeFilter]}
                        onPress={() => setSelectedType(type)}
                    >
                        <Text
                            style={[
                                styles.filterText,
                                selectedType === type && styles.activeFilterText
                            ]}
                        >
                            {type}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* 🏋️‍♂️ WORKOUT LIST */}
            <FlatList
                data={filteredWorkouts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContentContainer}
            />
        </View>
    );
}

// ──────────────────────────────────────────
// 🎨 **Styles**
// ──────────────────────────────────────────
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 12,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 12,
    },
    filterButton: {
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 20,
        backgroundColor: '#E5E7EB',
    },
    activeFilter: {
        backgroundColor: '#7B52AB',
    },
    filterText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#555',
    },
    activeFilterText: {
        color: '#FFF',
        fontWeight: 'bold',
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
    startButton: {
        marginTop: 10,
        backgroundColor: '#7B52AB',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
    },
    startButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
});
