import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import DefaultText from '../components/DefaultText'
import React from "react";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <Text style = {styles.title} numberOfLines = {1} >{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity}</DefaultText>
            <DefaultText>{props.affordability}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
  }, 
  mealItem: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "89%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: 'center'
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});

export default MealItem;
