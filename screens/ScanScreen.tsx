// MembershipQrScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function ScanScreen() {
    // This could be a user ID, membership ID, or any unique string you want to encode
    const membershipId = 'GOLD-123456-USERID';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Gym Membership</Text>

            {/* 
        Example usage of react-native-qrcode-svg.
        It encodes `membershipId` into a QR code image.
      */}
            <QRCode
                value={membershipId}
                size={200}
                color="black"
                backgroundColor="white"
            />

            <Text style={styles.info}>
                Show this code at the entrance to verify your membership.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 16,
    },
    info: {
        marginTop: 16,
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
    },
});
