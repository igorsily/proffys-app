import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import giveclassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import studyIcon from "../../assets/images/icons/study.png";
import landingImg from "../../assets/images/landing.png";
import api from "../../services/api";
import styles from "./styles";
const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const [totalConnections, setTotalConnections] = useState<number>(0);

  useEffect(() => {
    api.get("connections").then((resp) => {
      const { total } = resp.data;
      setTotalConnections(total);
    });
  }, []);

  const goToGiveClasses = () => {
    navigate("GiveClasses");
  };

  const goToStudy = () => {
    navigate("Study");
  };

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={goToStudy}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={goToGiveClasses}
        >
          <Image source={giveclassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas {""}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
};

export default Landing;
