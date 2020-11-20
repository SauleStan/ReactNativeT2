import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import ButtonComponent from '../components/ButtonComponent';
import RecipeData from '../data/recipeData';
import DessertData from '../data/dessertData';


function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ButtonComponent title="Main dishes" onPress={() => { navigation.navigate('Main Dishes', { mainRecipes: RecipeData }) }} />
            <ButtonComponent title="Desserts" onPress={() => { navigation.navigate('Desserts', { desertRecipes: DessertData }) }} />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
})