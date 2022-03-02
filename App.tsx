import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Divider } from "./src/components/atoms/divider";
import { Header } from "./src/components/molecules/header";
import { SearchForm } from "./src/components/molecules/search-section";
import { ResultsSection } from "./src/components/molecules/results-section";
import defaultTheme from "./src/theme/theme";
import { getMoviesFromApi } from "./src/api/api";
import { StatusBar } from "expo-status-bar";
import { MovieProps } from "./src/types";
import { strings } from "./src/strings";

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: defaultTheme.$backgroundColor,
    flex: 1,
  },
});

export default function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(true);
  const [moviesList, setMoviesList] = useState<MovieProps[]>([]);

  const getMovies = async () => {
    const data = await getMoviesFromApi(inputValue);
    if (data.success) {
      setMoviesList(data.results);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar backgroundColor={defaultTheme.$backgroundColor} />
      <Header title={strings.header.title} subtitle={strings.header.subtitle} />
      <SearchForm
        setInputValue={setInputValue}
        inputValue={inputValue}
        onSearch={getMovies}
      />
      <Divider />
      <ResultsSection moviesList={moviesList} isLoading={isLoading} />
    </SafeAreaView>
  );
}
