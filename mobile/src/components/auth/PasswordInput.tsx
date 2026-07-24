import React, { useState } from "react";
import { TextInput, HelperText } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
interface PasswordInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: boolean;
  errorMessage?: string;
}

export default function PasswordInput({
  label,
  value,
  onChangeText,
  error = false,
  errorMessage = "",
}: PasswordInputProps) {
  const [secureText, setSecureText] = useState(true);

  return (
    <>
      <TextInput
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureText}
        error={error}

        right={
          <TextInput.Icon
            icon={() => (
              <MaterialCommunityIcons
                name={secureText ? "eye-off" : "eye"}
                size={24}
              />
            )}
            onPress={() => setSecureText(!secureText)}
          />
      }
      />

      {error && (
        <HelperText type="error">
          {errorMessage}
        </HelperText>
      )}
    </>
  );
}