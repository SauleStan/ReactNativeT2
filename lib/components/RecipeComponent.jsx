import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RecipeComponent({ navigation, recipe }) {

    const onPress = () => navigation.navigate('Details', { details: recipe });
    console.log(recipe.ingredients);
    return (
        <TouchableOpacity
            style={styles.recipeContainer}
            onPress={onPress}>
            <View>
                <Text style={styles.recipeName}>{recipe.title}</Text>
                <Image source={{ uri: recipe.img }}
                    style={styles.image}
                />
                <View style={styles.recipeInfo}>
                    <Text style={styles.text}>Time: {recipe.time}</Text>
                    <Text style={styles.text}>Ingredients: </Text>
                    {recipe.ingredients.map((item) => {
                        return (
                            <Text style={styles.ingredient} key={item.id}> - {item}</Text>
                        );
                    })}
                </View>
                <View style={styles.icon}>
                    <Icon
                        name="comment"
                        size={30}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    recipeContainer: {
        marginTop: 10,
        borderWidth: 3,
        borderRadius: 20,
        paddingTop: 10,
        width: "90%",
        // textAlign: "center",
        // alignContent: 'center',
        alignSelf: "center",
        // backgroundColor: 'black',
    },
    recipeName: {
        textAlign: "center",
        paddingBottom: 10,
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    recipeInfo: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        // backgroundColor: 'orange',
    },
    ingredient: {
        // backgroundColor: 'green',
        marginLeft: 20,
        fontSize: 20,
        color: 'black'
    },
    text: {
        fontSize: 20,
        color: 'black'
    },
    image: {
        width: "80%",
        height: 200,
        resizeMode: "cover",
        alignSelf: "center",
    },
    icon: {
        display: "flex",
        alignItems: 'flex-end',
        paddingRight: 10,
        // backgroundColor: 'green',
        marginBottom: 10,
    }
})