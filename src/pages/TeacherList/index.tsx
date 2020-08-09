import { Feather as Icon } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import {
  BorderlessButton,
  FlatList,
  RectButton,
  TextInput,
} from "react-native-gesture-handler";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import api from "../../services/api";
import styles from "./styles";

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
}
const TeacherList: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const [teachers, setTeachers] = useState<Array<Teacher>>([]);

  useEffect(() => {
    api.get("classes").then((resp) => {
      setTeachers(resp.data);
    });
  }, []);

  const handleToogleFiltersVisible = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponiveis"
        headerRight={
          <BorderlessButton onPress={handleToogleFiltersVisible}>
            <Icon name="filter" size={24} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Materia</Text>
            <TextInput
              placeholderTextColor="#C1BCCC"
              style={styles.input}
              placeholder="Qual a materia?"
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dai da semana</Text>
                <TextInput
                  placeholderTextColor="#C1BCCC"
                  style={styles.input}
                  placeholder="Qual o dia?"
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Qual Horario</Text>
                <TextInput
                  placeholderTextColor="#C1BCCC"
                  style={styles.input}
                  placeholder="Qual o horario?"
                />
              </View>
            </View>

            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <FlatList
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
        data={teachers}
        keyExtractor={(teacher) => String(teacher.id)}
        renderItem={({ item }) => <TeacherItem teacher={item} />}
      />
    </View>
  );
};

export default TeacherList;
