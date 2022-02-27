import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Divider } from "./src/components/atoms/divider";
import { Header } from "./src/components/molecules/header";
import { SearchForm } from "./src/components/molecules/search-section";
import defaultTheme from "./src/theme/theme";

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: defaultTheme.$backgroundColor,
    flex: 1,
  },
});

export default function App() {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <SafeAreaView style={styles.appContainer}>
      <Divider transparent />
      <Header />
      <Divider transparent />
      <SearchForm
        setInputValue={setInputValue}
        inputValue={inputValue}
        onSearch={() => console.log(inputValue)}
      />
      <Divider />
    </SafeAreaView>
  );
}
