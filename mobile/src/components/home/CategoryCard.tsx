import React, { useRef } from "react";
import {
  StyleSheet,
  Animated,
  Pressable,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CategoryCardProps {
  title: string;
  icon: string;
  color: string;
  onPress?: () => void;
}

export default function CategoryCard({
  title,
  icon,
  color,
  onPress,
}: CategoryCardProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const pressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const pressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.card,
        {
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <Pressable
        style={styles.pressable}
        onPress={onPress}
        onPressIn={pressIn}
        onPressOut={pressOut}
        android_ripple={{ color: "#E3F2FD" }}
      >
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: `${color}20` },
          ]}
        >
          <MaterialCommunityIcons
            name={icon as any}
            size={32}
            color={color}
          />
        </View>

        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "47%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
    overflow: "hidden",
  },

  pressable: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },

  iconContainer: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },
});