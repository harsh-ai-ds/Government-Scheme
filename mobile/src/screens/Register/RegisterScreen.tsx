import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../services/firebase";
import { Colors } from "../../theme/colors";

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
   );
      Alert.alert(
        "Success",
        "Account created successfully!"
      );

      // Later we will navigate to Login or Home screen.
    } catch (error: any) {
        console.log("Firebase Error Code:", error.code);
        console.log("Firebase Error Message:", error.message);

        Alert.alert(error.code, error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Create Account
      </Text>

      <TextInput
        label="Full Name"
        mode="outlined"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />

      <TextInput
        label="Email"
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TextInput
        label="Confirm Password"
        mode="outlined"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
      />

      <Button
        mode="contained"
        style={styles.button}
        onPress={handleRegister}
      >
        Register
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: Colors.background,
  },
  title: {
    textAlign: "center",
    marginBottom: 25,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 10,
    paddingVertical: 6,
  },
});