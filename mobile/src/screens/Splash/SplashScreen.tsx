import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "../../theme/colors";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🏛️</Text>

      <Text style={styles.title}>
        Government Scheme AI
      </Text>

      <Text style={styles.subtitle}>
        Find Government Schemes in Seconds
      </Text>
      <ActivityIndicator
        size="large"
        color="red"
        animating={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    fontSize: 90,
    marginBottom: 25,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
  },

  subtitle: {
    marginTop: 12,
    fontSize: 18,
    color: Colors.white,
    textAlign: "center",
  },
});