import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import RecipeComponent from '../components/RecipeComponent';

function MainDishesScreen({ route, navigation }) {

  const { mainRecipes } = route.params;

  console.log(mainRecipes[0].ingredients);
  return (
    <ScrollView>
      <View style={styles.container}>
        {mainRecipes.map((item) => (<RecipeComponent
          key={item.id}
          navigation={navigation}
          recipe={item}
        />))}
      </View>
    </ScrollView>
  );
}

export default MainDishesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
})