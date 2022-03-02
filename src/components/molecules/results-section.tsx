import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Divider } from "../atoms/divider";
import { Text } from "../atoms/text";
import { Card } from "./card";
import { parseYear, renderImage } from "../../utils/utils";
import { MovieProps } from "../../types";
import { strings } from "../../strings";

type Props = {
  moviesList: Array<MovieProps>;
  isLoading: boolean;
};

const styles = StyleSheet.create({
  container: { justifyContent: "flex-start" },
  list: { paddingBottom: 200 },
});

const ResultsSection = ({ moviesList, isLoading }: Props) => (
  <View style={styles.container}>
    <FlatList
      data={moviesList}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          text={parseYear(item.date)}
          imageUrl={renderImage(item.image)}
        />
      )}
      contentContainerStyle={styles.list}
      keyExtractor={(movie: MovieProps) => movie?.id.toString()}
      ItemSeparatorComponent={() => <Divider transparent />}
    />
    {!isLoading && !moviesList.length ? (
      <Text text={strings.results.noResults} />
    ) : null}
  </View>
);

ResultsSection.defaultProps = {
  moviesList: [],
  isLoading: true,
};

export { ResultsSection };
