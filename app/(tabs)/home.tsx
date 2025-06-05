import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const Home = () => {
    const [routines, setRoutines] = useState([
        { id: '1', title: 'Morning Workout', description: 'Start your day with a refreshing workout.' },
        { id: '2', title: 'Meditation', description: 'Take a moment to relax and meditate.' },
        { id: '3', title: 'Healthy Breakfast', description: 'Fuel your body with a nutritious breakfast.' },
        { id: '4', title: 'Reading', description: 'Spend some time reading a good book.' },
        { id: '5', title: 'Evening Walk', description: 'Enjoy a peaceful walk in the evening.' },
    ]);

    const handleRoutinePress = (routine: { id?: string; title: any; description: any; }) => {
        Alert.alert(routine.title, routine.description);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
            <Pressable onPress={() => router.back()}>
          <MaterialIcons name='arrow-back' color='#fff' size={24} />
        </Pressable>
                <Text style={styles.title}>Welcome Home</Text>
                <Text style={styles.subtitle}>Melhore sua vida</Text>
                <Text style={styles.description}>
                AQUI ESTÁ ALGUMAS COISAS ATRELADAS DE ROTINAS QUE OFERECEMOS
                </Text>
            </View>
            <FlatList
                data={routines}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.routineItem} onPress={() => handleRoutinePress(item)}>
                        <Text style={styles.routineTitle}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                style={styles.routineList}
            />
        </View>
    );
};
    





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6C63FF', // modern purple background
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#6C63FF',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#4e4b66',
        marginBottom: 15,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: '#7d7a99',
        textAlign: 'center',
        lineHeight: 22,
    },
    routineList: {
        width: '100%',
    },
    routineItem: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    routineTitle: {
        fontSize: 18,
        color: '#6C63FF',
    },
});

export default Home;
