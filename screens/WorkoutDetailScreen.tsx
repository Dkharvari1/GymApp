import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

type Workout = {
    name: string;
    duration: number; // in minutes, for example
    instructions: string;
};

type ParamList = {
    WorkoutDetail: {
        workout: Workout;
    };
};

export default function WorkoutDetailScreen() {
    // Access the workout data passed from HomeScreen
    const route = useRoute<RouteProp<ParamList, 'WorkoutDetail'>>();
    const { workout } = route.params; // destructure the workout

    // Convert duration (minutes) to seconds for the timer
    const initialSeconds = workout.duration * 60;

    // Local state for the timer
    const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);

    // Start a countdown timer when the screen mounts
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    Alert.alert('Workout Complete!', 'You have finished the workout.');
                    return 0; // no time left
                }
                return prev - 1;
            });
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(timer);
    }, []);

    // Format seconds into mm:ss
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        const minsString = mins < 10 ? `0${mins}` : `${mins}`;
        const secsString = secs < 10 ? `0${secs}` : `${secs}`;
        return `${minsString}:${secsString}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{workout.name}</Text>
            <Text style={styles.timer}>Time Left: {formatTime(timeLeft)}</Text>
            <Text style={styles.instructionsHeader}>How to Perform:</Text>
            <Text style={styles.instructions}>{workout.instructions}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    timer: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 12,
        textAlign: 'center',
    },
    instructionsHeader: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8,
    },
    instructions: {
        fontSize: 16,
        lineHeight: 22,
    },
});
