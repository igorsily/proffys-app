import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import styles from "./styles";

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Favorites" />
      <FlatList
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
        data={["", "", ""]}
        renderItem={() => <TeacherItem />}
      />
    </View>
  );
};

export default Favorites;
