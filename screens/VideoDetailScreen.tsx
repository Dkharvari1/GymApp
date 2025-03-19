import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useEvent } from 'expo';

type VideoParams = {
    VideoDetail: {
        title: string;
        videoUrl: string;      // The URI to the video
        duration: number;      // In minutes
    };
};

export default function VideoDetailScreen() {
    // Access params passed from HomeScreen
    const route = useRoute<RouteProp<VideoParams, 'VideoDetail'>>();
    const { title, videoUrl, duration } = route.params;
    const player = useVideoPlayer(videoUrl, player => {
        player.loop = true;
        player.play();
    });
    console.log(videoUrl);

    // const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    // Convert minutes to seconds for a countdown
    const [timeLeft, setTimeLeft] = useState(duration * 60);

    // Countdown effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    Alert.alert('Finished!', 'The video duration has ended.');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (totalSecs: number) => {
        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;
        const mm = mins < 10 ? `0${mins}` : mins;
        const ss = secs < 10 ? `0${secs}` : secs;
        return `${mm}:${ss}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            {/* The timer display */}
            <Text style={styles.timer}>Time Left: {formatTime(timeLeft)}</Text>

            {/* Embedded video player */}
            <VideoView
                player={player}
                style={styles.video}
                allowsFullscreen 
                allowsPictureInPicture
                // onEnd={() => Alert.alert('Video Ended', 'You reached the end of the video!')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
    },
    timer: {
        fontSize: 16,
        marginBottom: 16,
    },
    video: {
        width: '90%',
        height: 220,
        backgroundColor: '#000',
    },
});
