import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import RecipeComponent from '../components/RecipeComponent';

export default function DessertsScreen({ route, navigation }) {

  const { desertRecipes } = route.params;
  console.log(desertRecipes);

  console.log(desertRecipes[0].ingredients);
  return (
    <ScrollView>
      <View style={styles.container}>
        {desertRecipes.map((item) => (<RecipeComponent
          key={item.id}
          navigation={navigation}
          recipe={item}
        />))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
})