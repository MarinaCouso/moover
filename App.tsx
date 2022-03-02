import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { Divider } from "./src/components/atoms/divider";
import { Header } from "./src/components/molecules/header";
import { MovieProps } from "./src/types";
import { ResultsSection } from "./src/components/molecules/results-section";
import { SearchForm } from "./src/components/molecules/search-form";
import { StatusBar } from "expo-status-bar";
import defaultTheme from "./src/theme/theme";
import { getMoviesFromApi } from "./src/api/api";
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
        buttonTitle={strings.search.buttonTitle}
        placeholder={strings.search.inputPlaceholder}
        setInputValue={setInputValue}
        inputValue={inputValue}
        onSearch={getMovies}
      />
      <Divider />
      <ResultsSection moviesList={moviesList} isLoading={isLoading} />
    </SafeAreaView>
  );
}
