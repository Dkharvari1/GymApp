import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../app/_layout';
import AppleHealthKit, { HealthInputOptions, HealthValue } from 'react-native-health';


type HomeScreenNavProp = StackNavigationProp<RootStackParamList, 'Tabs'>;

export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavProp>();

    // Handle navigation to VideoDetail
    const handleVideoPress = () => {
        navigation.navigate('VideoDetail', {
            title: '2 Hour Bulking Trainer',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            duration: 45,
        });
    };

    return (
        <ScrollView style={styles.container}>
            {/* -- HEADER / GREETING -- */}
            <View style={styles.headerContainer}>
                <View style={styles.userInfo}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/100?img=5' }}
                        style={styles.profileImage}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.greeting}>Hi, Jane</Text>
                        <Text style={styles.dateText}>Aug 12, 2021</Text>
                    </View>
                </View>

                {/* Notification Icon */}
                <View style={styles.notificationIcon}>
                    <Ionicons name="notifications-outline" size={24} color="#333" />
                    <View style={styles.notificationBadge} />
                </View>
            </View>

            {/* -- DASHBOARD: Daily Progress -- */}
            <Text style={styles.sectionTitle}>Daily Progress</Text>
            <View style={styles.dashboardContainer}>
                <View style={styles.statCard}>
                    <Ionicons name="footsteps-outline" size={28} color="#7B52AB" />
                    <Text style={styles.statValue}>8,250</Text>
                    <Text style={styles.statLabel}>Steps</Text>
                </View>
                <View style={styles.statCard}>
                    <Ionicons name="flame-outline" size={28} color="#FF6B6B" />
                    <Text style={styles.statValue}>1,540</Text>
                    <Text style={styles.statLabel}>Calories</Text>
                </View>
                <View style={styles.statCard}>
                    <Ionicons name="barbell-outline" size={28} color="#34D399" />
                    <Text style={styles.statValue}>3</Text>
                    <Text style={styles.statLabel}>Workouts</Text>
                </View>
            </View>

            {/* -- UPCOMING GYM BOOKINGS -- */}
            <Text style={styles.sectionTitle}>Upcoming Gym Bookings</Text>
            <View style={styles.bookingCard}>
                <Ionicons name="calendar-outline" size={24} color="#333" />
                <View>
                    <Text style={styles.bookingTitle}>Personal Training Session</Text>
                    <Text style={styles.bookingTime}>March 2, 2025 - 5:30 PM</Text>
                </View>
            </View>

            {/* -- AI-DRIVEN INSIGHTS -- */}
            <Text style={styles.sectionTitle}>AI-Powered Recommendations</Text>
            <View style={styles.aiCard}>
                <Ionicons name="sparkles-outline" size={24} color="#fff" />
                <Text style={styles.aiText}>Recommended Workout: HIIT Circuit</Text>
            </View>

            {/* -- FITNESS VIDEO -- */}
            <Text style={styles.sectionTitle}>Fitness Video</Text>
            <TouchableOpacity style={styles.videoCard} onPress={handleVideoPress}>
                <Image
                    source={{ uri: 'https://i.ibb.co/PCLg7g5/fitness-video-placeholder.jpg' }}
                    style={styles.videoImage}
                    resizeMode="cover"
                />
                <View style={styles.videoInfo}>
                    <Text style={styles.videoLabel}>Transformation</Text>
                    <Text style={styles.videoTitle}>2 Hour Bulking Trainer</Text>
                    <View style={styles.videoMeta}>
                        <Text style={styles.videoDifficulty}>Beginner</Text>
                        <Text style={styles.videoTime}>45 Min</Text>
                    </View>
                </View>
                <View style={styles.playButton}>
                    <Ionicons name="play" size={20} color="#fff" />
                </View>
            </TouchableOpacity>

            {/* -- COMMUNITY POSTS (Social Feature) -- */}
            <Text style={styles.sectionTitle}>Community Updates</Text>
            <View style={styles.postCard}>
                <Text style={styles.postAuthor}>@fitness_john</Text>
                <Text style={styles.postText}>
                    Just finished a killer HIIT session! Feeling pumped. 💪🔥
                </Text>
            </View>
        </ScrollView>
    );
}

// ──────────────────────────────────────────
// Updated Styles
// ──────────────────────────────────────────
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    headerContainer: {
        flexDirection: 'row',
        marginTop: 40,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 46,
        height: 46,
        borderRadius: 23,
    },
    greeting: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 12,
        color: '#777',
    },
    notificationIcon: {
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        right: -2,
        top: -2,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 16,
        marginTop: 20,
        marginBottom: 12,
    },
    dashboardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    statCard: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 16,
        flex: 1,
        marginHorizontal: 4,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 4,
    },
    statLabel: {
        fontSize: 12,
        color: '#777',
    },
    bookingCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
    },
    bookingTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
    bookingTime: {
        fontSize: 12,
        color: '#777',
        marginLeft: 10,
    },
    aiCard: {
        backgroundColor: '#7B52AB',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    aiText: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 10,
    },
    videoCard: {
        marginHorizontal: 16,
        borderRadius: 16,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    videoImage: {
        width: 130,
        height: 100,
    },
    videoInfo: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    playButton: {
        position: 'absolute',
        right: 10,
        backgroundColor: '#7B52AB',
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    postCard: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
    },
    postAuthor: {
        fontWeight: 'bold',
    },
    postText: {
        marginTop: 4,
    },
    videoLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#888',  // Subtle gray for label
        textTransform: 'uppercase',
        letterSpacing: 1,
    },

    videoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // Dark color for visibility
        marginVertical: 4,
    },

    videoMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },

    videoDifficulty: {
        fontSize: 14,
        fontWeight: '600',
        color: '#7B52AB', // Purple to highlight
    },

    videoTime: {
        fontSize: 14,
        fontWeight: '500',
        color: '#555', // Subtle dark gray
    },

});