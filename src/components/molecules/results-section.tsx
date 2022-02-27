import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Divider } from "../atoms/divider";
import { Text } from "../atoms/text";
import { Card } from "./card";
import { parseYear } from "../../utils/utils";

type MovieProps = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type Props = {
  moviesList: Array<MovieProps>;
  isLoading: boolean;
};

const styles = StyleSheet.create({
  container: { justifyContent: "flex-start" },
});

const ResultsSection = ({ moviesList, isLoading }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={moviesList}
        renderItem={({ item }) => (
          <Card title={item.title} text={parseYear(item.release_date)} />
        )}
        keyExtractor={(movie: MovieProps) => movie?.id.toString()}
        ItemSeparatorComponent={() => <Divider transparent />}
      />
      {!isLoading && !moviesList.length ? (
        <Text text="There are no results" />
      ) : null}
    </View>
  );
};

ResultsSection.defaultProps = {
  moviesList: [],
  isLoading: true,
};

export { ResultsSection };
