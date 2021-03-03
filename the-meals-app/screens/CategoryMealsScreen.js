import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";

import MealList from "../components/MealList";
import React from "react";
import {useSelector} from 'react-redux'

const CategoryMealsScreen = (props) => {
  

  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <MealList  listData = {displayedMeals} navigation = {props.navigation} />
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default CategoryMealsScreen;
