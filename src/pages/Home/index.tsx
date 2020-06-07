import React, { useState } from "react";
import { Feather as Icon } from '@expo/vector-icons';
import { View, Image, Text, ImageBackground, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const Home = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const navigation = useNavigation();

  function handleNavigationToPoints() {
    navigation.navigate('Points', { uf, city });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ImageBackground
        style={styles.container}
        source={require('../../assets/home-background.png')}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require("../../assets/logo.png")} />
          <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
          <Text style={styles.description}>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </Text>
        </View>

        <View style={styles.footer}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Digite a UF"
              value={uf}
              onChangeText={setUf}
              maxLength={2}
              autoCapitalize="characters"
              autoCorrect={false} />
            <TextInput
              style={styles.input}
              placeholder="Digite a Cidade"
              value={city}
              onChangeText={setCity}
              autoCorrect={false} />
          </View>

          <RectButton style={styles.button} onPress={handleNavigationToPoints}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>
              Entrar
          </Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>

  );
};

export default Home;
