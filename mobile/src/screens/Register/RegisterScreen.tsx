import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { Button, Text } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../services/firebase";
import { Colors } from "../../theme/colors";

import CustomInput from "../../components/auth/CustomInput";
import PasswordInput from "../../components/auth/PasswordInput";

import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validation";

export default function RegisterScreen() {
  // ==========================
  // Form State
  // ==========================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ==========================
  // Error State
  // ==========================

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] =
    useState("");

  // ==========================
  // Loading
  // ==========================

  const [loading, setLoading] = useState(false);

  // ==========================
  // Validate Form
  // ==========================

  const validateForm = () => {
    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    const confirmErr = validateConfirmPassword(
      password,
      confirmPassword
    );

    setNameError(nameErr);
    setEmailError(emailErr);
    setPasswordError(passwordErr);
    setConfirmPasswordError(confirmErr);

    return !(
      nameErr ||
      emailErr ||
      passwordErr ||
      confirmErr
    );
  };

  // ==========================
  // Register User
  // ==========================

  const handleRegister = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      Alert.alert(
        "Registration Successful",
        "Your account has been created successfully."
      );

      // Clear Form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // TODO:
      // router.replace("/login")
      // OR
      // navigation.navigate("Login")

    } catch (error: any) {
      switch (error.code) {
        case "auth/email-already-in-use":
          Alert.alert(
            "Registration Failed",
            "This email is already registered."
          );
          break;

        case "auth/invalid-email":
          Alert.alert(
            "Registration Failed",
            "Please enter a valid email address."
          );
          break;

        case "auth/weak-password":
          Alert.alert(
            "Registration Failed",
            "Password is too weak."
          );
          break;

        default:
          Alert.alert(
            "Registration Failed",
            error.message
          );
      }
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // UI
  // ==========================

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text variant="headlineMedium" style={styles.title}>
        Government Scheme
      </Text>

      <Text variant="titleMedium" style={styles.subtitle}>
        Create Account
      </Text>

      <CustomInput
        label="Full Name"
        value={name}
        onChangeText={setName}
        error={!!nameError}
        errorMessage={nameError}
      />

      <View style={styles.space} />

      <CustomInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        error={!!emailError}
        errorMessage={emailError}
      />

      <View style={styles.space} />

      <PasswordInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        error={!!passwordError}
        errorMessage={passwordError}
      />

      <View style={styles.space} />

      <PasswordInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        error={!!confirmPasswordError}
        errorMessage={confirmPasswordError}
      />

      <Button
        mode="contained"
        style={styles.button}
        contentStyle={styles.buttonContent}
        loading={loading}
        disabled={loading}
        onPress={handleRegister}
      >
        Register
      </Button>

      <Text style={styles.footer}>
        Already have an account? Login
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: Colors.background,
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 8,
    color: Colors.primary,
  },

  subtitle: {
    textAlign: "center",
    marginBottom: 30,
  },

  space: {
    height: 10,
  },

  button: {
    marginTop: 25,
    borderRadius: 8,
  },

  buttonContent: {
    paddingVertical: 8,
  },

  footer: {
    textAlign: "center",
    marginTop: 25,
    color: "gray",
  },
});