import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

type MealData = {
    id: string;
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
};

// 🍽 **Pre-logged Meals**
const MEALS_DATA: MealData[] = [
    { id: '1', name: 'Oatmeal & Berries', calories: 350, protein: 10, carbs: 55, fats: 8 },
    { id: '2', name: 'Grilled Chicken & Rice', calories: 600, protein: 45, carbs: 70, fats: 10 },
    { id: '3', name: 'Protein Shake', calories: 250, protein: 30, carbs: 12, fats: 5 },
];

// 💧 **Water Intake**
const WATER_GOAL = 3000; // in mL

export default function NutritionScreen() {
    const [waterIntake, setWaterIntake] = useState(1500);
    const [newMeal, setNewMeal] = useState('');
    const [barcodeScanned, setBarcodeScanned] = useState(false);

    // 🧮 **Calculate Daily Macros**
    const totalCalories = MEALS_DATA.reduce((sum, meal) => sum + meal.calories, 0);
    const totalProtein = MEALS_DATA.reduce((sum, meal) => sum + meal.protein, 0);
    const totalCarbs = MEALS_DATA.reduce((sum, meal) => sum + meal.carbs, 0);
    const totalFats = MEALS_DATA.reduce((sum, meal) => sum + meal.fats, 0);

    // ➕ **Add Water Intake**
    const handleAddWater = (amount: number) => {
        setWaterIntake((prev) => Math.min(WATER_GOAL, prev + amount));
    };

    // 📸 **Handle Barcode Scanner**
    const handleScanBarcode = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setBarcodeScanned(true);
            alert('Barcode scanned! Food item logged.');
        }
    };

    // 🎥 **Render Meals**
    const renderMeal = ({ item }: { item: MealData }) => (
        <View style={styles.mealCard}>
            <Text style={styles.mealTitle}>{item.name}</Text>
            <Text style={styles.mealDetails}>Calories: {item.calories} kcal</Text>
            <Text style={styles.mealDetails}>Protein: {item.protein}g | Carbs: {item.carbs}g | Fats: {item.fats}g</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            {/* 🍽 HEADER */}
            <Text style={styles.headerText}>Nutrition</Text>

            {/* 🔍 **Daily Macro Overview** */}
            <View style={styles.macroOverview}>
                <View style={styles.macroCard}>
                    <Text style={styles.macroLabel}>Calories</Text>
                    <Text style={styles.macroValue}>{totalCalories} kcal</Text>
                </View>
                <View style={styles.macroCard}>
                    <Text style={styles.macroLabel}>Protein</Text>
                    <Text style={styles.macroValue}>{totalProtein}g</Text>
                </View>
                <View style={styles.macroCard}>
                    <Text style={styles.macroLabel}>Carbs</Text>
                    <Text style={styles.macroValue}>{totalCarbs}g</Text>
                </View>
                <View style={styles.macroCard}>
                    <Text style={styles.macroLabel}>Fats</Text>
                    <Text style={styles.macroValue}>{totalFats}g</Text>
                </View>
            </View>

            {/* 🍲 **Meal Logging Section** */}
            <Text style={styles.sectionTitle}>Meal Logging</Text>
            <FlatList
                data={MEALS_DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderMeal}
                contentContainerStyle={styles.listContentContainer}
                nestedScrollEnabled={true}
            />

            {/* ➕ **Add New Meal** */}
            <View style={styles.addMealContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Log a meal..."
                    value={newMeal}
                    onChangeText={setNewMeal}
                />
                <TouchableOpacity style={styles.addMealButton}>
                    <Ionicons name="add-circle" size={28} color="#7B52AB" />
                </TouchableOpacity>
            </View>

            {/* 🔍 **Barcode Scanner** */}
            <TouchableOpacity style={styles.scanButton} onPress={handleScanBarcode}>
                <Ionicons name="barcode-outline" size={28} color="#FFF" />
                <Text style={styles.scanButtonText}>Scan Barcode</Text>
            </TouchableOpacity>

            {/* 💧 **Water Intake Tracker** */}
            <Text style={styles.sectionTitle}>Water Intake</Text>
            <View style={styles.waterContainer}>
                <Text style={styles.waterText}>
                    {waterIntake} mL / {WATER_GOAL} mL
                </Text>
                <TouchableOpacity style={styles.waterButton} onPress={() => handleAddWater(250)}>
                    <Ionicons name="water-outline" size={28} color="#FFF" />
                    <Text style={styles.waterButtonText}>+250mL</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },
    listContentContainer: {
        paddingBottom: 20,
    },
    macroOverview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    macroCard: {
        flex: 1,
        backgroundColor: '#E0F2F1',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 4,
    },
    macroLabel: {
        fontSize: 14,
        color: '#333',
    },
    macroValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    mealCard: {
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
    },
    mealTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    mealDetails: {
        fontSize: 14,
        color: '#757575',
    },
    addMealContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 12,
        paddingVertical: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
    },
    addMealButton: {
        padding: 8,
    },

    // 🔍 Barcode Scanner Button
    scanButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7B52AB',
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 16,
    },
    scanButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },

    // 💧 Water Intake Tracker
    waterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
    },
    waterText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    waterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#34D399',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    waterButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        marginLeft: 6,
    },
});

