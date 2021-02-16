import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <Image
        source={require("../assets/success.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <BodyText>
        Your phone needed <Text style = {styles.highlight}> {props.roundsNumber}</Text> rounds to guess the
        number <Text style = {styles.highlight}> {props.userNumber} </Text>
      </BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 300,
    borderRadius: 10,
    marginVertical: 20,
    
  },
  highlight: {
    color: Colors.primary,
  }
});

export default GameOverScreen;
