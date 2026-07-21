import React, { useState } from "react";
import { HelperText, TextInput } from "react-native-paper";

interface Props {
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
}: Props) {
  const [secureText, setSecureText] = useState(true);

  return (
    <>
      <TextInput
        label={label}
        mode="outlined"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureText}
        error={error}
        right={
          <TextInput.Icon
            icon={secureText ? "eye-off" : "eye"}
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