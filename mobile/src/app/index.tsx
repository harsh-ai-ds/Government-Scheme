import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🏛️</Text>

      <Text style={styles.title}>
        Government Scheme AI
      </Text>

      <Text style={styles.subtitle}>
        Find Government Schemes in Seconds
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F4C81",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    fontSize: 80,
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 12,
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
  },
});