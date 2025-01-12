import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { FeaturedCard } from "@/components/Cards";
import NoResults from "@/components/NoResults";

interface FeaturedProps {
  data: any[];
  loading: boolean;
  onPress: (id: string) => void;
}

// 🟢 React.memo prevents re-rendering unless data/props change
const Featured: React.FC<FeaturedProps> = React.memo(
  ({ data, loading, onPress }) => {
    if (loading) {
      return <ActivityIndicator size="large" className="text-primary-300" />;
    }

    if (!data || data.length === 0) {
      return <NoResults />;
    }

    return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <FeaturedCard item={item} onPress={() => onPress(item.$id)} />
        )}
        keyExtractor={(item) => item.$id}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="flex gap-5 mt-5"
      />
    );
  }
);

export default Featured;
