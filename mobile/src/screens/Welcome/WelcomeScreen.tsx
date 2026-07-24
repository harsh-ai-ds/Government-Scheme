import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "../../theme/colors";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>

      <MaterialCommunityIcons
        name="shield-account"
        size={90}
        color={Colors.primary}
      />

      <Text variant="headlineLarge" style={styles.title}>
        Government Scheme
      </Text>

      <Text variant="titleMedium" style={styles.ai}>
        Powered by Sahayak AI 🤖
      </Text>

      <Text style={styles.description}>
        Discover Central and State Government Schemes across India.
      </Text>

      <Button
        mode="contained"
        style={styles.loginButton}
        onPress={() => {}}
      >
        Login
      </Button>

      <Button
        mode="outlined"
        style={styles.registerButton}
        onPress={() => {}}
      >
        Create Account
      </Button>

      <Text style={styles.footer}>
        Secure • Trusted • Free
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  title: {
    fontWeight: "bold",
    color: Colors.primary,
    marginTop: 20,
  },

  ai: {
    marginTop: 10,
    color: "#555",
  },

  description: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    paddingHorizontal: 15,
  },

  loginButton: {
    marginTop: 40,
    width: "100%",
    borderRadius: 12,
    paddingVertical: 6,
  },

  registerButton: {
    marginTop: 15,
    width: "100%",
    borderRadius: 12,
    paddingVertical: 6,
  },

  footer: {
    marginTop: 40,
    color: "#888",
  },
});