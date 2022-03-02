import { FlatList, StyleSheet, View } from "react-native";
import { parseYear, renderImage } from "../../utils/utils";

import { Card } from "./card";
import { Divider } from "../atoms/divider";
import { MovieProps } from "../../types";
import React from "react";
import { Text } from "../atoms/text";
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
