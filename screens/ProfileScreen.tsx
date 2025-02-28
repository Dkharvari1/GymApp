// ProfileScreen.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  // Placeholder function for editing profile
  const handleEditProfile = () => {
    console.log('Edit Profile button pressed');
    // You could navigate to an "Edit Profile" screen or show a modal, etc.
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/300' }} // Replace with your user's avatar URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      {/* Information Card */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>john.doe@example.com</Text>

        <Text style={styles.infoLabel}>Membership:</Text>
        <Text style={styles.infoValue}>Gold</Text>

        <Text style={styles.infoLabel}>Height:</Text>
        <Text style={styles.infoValue}>6'0"</Text>

        <Text style={styles.infoLabel}>Weight:</Text>
        <Text style={styles.infoValue}>180 lbs</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

// ---- Styles ----
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 16,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
    marginTop: 8,
  },
  infoValue: {
    fontSize: 16,
    color: '#555',
  },
  editButton: {
    backgroundColor: '#FF5722',
    padding: 14,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
