import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet, Text, View } from 'react-native'

import HeaderButton from "../components/HeaderButton";
import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'
import React from 'react'
import {useSelector} from 'react-redux'

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)
    if (favMeals.length === 0 || !favMeals) {
      return <View style = {{justifyContent: 'center', alignItems: 'center',flex: 1}}>
        <Text>Không có dữ liệu</Text>
      </View>
    }
    return (
        <MealList listData = {favMeals} navigation = {props.navigation}/>
    )
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
      headerTitle: "Meal Categories",
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Menu" iconName="ios-menu" onPress = {() => {
            navData.navigation.toggleDrawer();
          }}/>
        </HeaderButtons>
      ),
    }
    
  };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
})

export default FavoritesScreen
