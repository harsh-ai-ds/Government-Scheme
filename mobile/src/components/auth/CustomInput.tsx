import React from "react";
import { HelperText, TextInput } from "react-native-paper";

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "email-address";
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  error?: boolean;
  errorMessage?: string;
}

export default function CustomInput({
  label,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  autoCapitalize = "none",
  error = false,
  errorMessage = "",
}: Props) {
  return (
    <>
      <TextInput
        label={label}
        mode="outlined"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        error={error}
      />

      {error && (
        <HelperText type="error">
          {errorMessage}
        </HelperText>
      )}
    </>
  );
}