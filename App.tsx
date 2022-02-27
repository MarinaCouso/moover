import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Divider } from "./src/components/atoms/divider";
import { Card } from "./src/components/molecules/card";
import { Header } from "./src/components/molecules/header";
import { SearchForm } from "./src/components/molecules/search-section";
import defaultTheme from "./src/theme/theme";
import { getMoviesFromApi } from "./src/api/api";

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: defaultTheme.$backgroundColor,
    flex: 1,
  },
});

export default function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setLoading] = useState(true);
  const [moviesList, setMoviesList] = useState([]);

  const getMovies = async () => {
    try {
      const movies = await getMoviesFromApi(inputValue);
      setMoviesList(movies);
    } catch (error) {
      console.error(error, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <Divider transparent />
      <Header />
      <Divider transparent />
      <SearchForm
        setInputValue={setInputValue}
        inputValue={inputValue}
        onSearch={getMovies}
      />
      <Divider />
      <Card />
    </SafeAreaView>
  );
}
