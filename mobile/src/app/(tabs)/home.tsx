import Header from "../../components/home/Header";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CategoryCard from "../../components/home/CategoryCard";
import { categories } from "../../constants/categories";

export default function HomeScreen() {
  return (
    <ScrollView
  style={styles.container}
  showsVerticalScrollIndicator={false}
>
  <Header />

  <Text style={styles.heading}>
    Categories
  </Text>

  {/* Your category cards remain here */}

      <View style={styles.grid}>
        {categories.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});