import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import CommentComponent from '../components/CommentComponent';

function DetailsScreen({ route }) {

  const { details } = route.params;
  console.log(details.comments);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleFont}>{details.title}</Text>
        </View>
        <View style={styles.ingredients}>
          <Image source={{ uri: details.img }}
            style={styles.image}
          />
          <Text style={styles.text}>Time: {details.time}</Text>
          <Text style={styles.text}>Ingredients: </Text>
          {details.ingredients.map((item) => {
            return (
              <Text style={styles.ingredientFont} key={item.id}> - {item}</Text>
            );
          })}
        </View>
        <View style={styles.recipe}>
          <Text style={styles.recipeFont}>{details.recipe}</Text>
        </View>

        {/* Comment section */}
        <CommentComponent comments={details.comments} />

      </View>
    </ScrollView>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'grey',
    margin: 10,
    elevation: 1,
  },
  title: {
    width: "90%",
    marginTop: 20,
    marginBottom: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  titleFont: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  ingredients: {
    // backgroundColor: 'green',
    padding: 10,
    borderWidth: 1,
    width: "90%",
    marginBottom: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
  ingredientFont: {
    fontSize: 18,
  },
  image: {
    width: "80%",
    height: 200,
    resizeMode: "cover",
    alignSelf: "center",
  },
  recipe: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  recipeFont: {
    fontSize: 18,
    padding: 10,
  },

})