import { Ionicons as Icon } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Favorites from "../pages/Favorites";
import TeacherList from "../pages/TeacherList";
const { Navigator, Screen } = createBottomTabNavigator();
const StudyTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#FAFAFC",
        activeBackgroundColor: "#EBEBF5",
        inactiveTintColor: "#C1BCCC",
        activeTintColor: "#8257E5",
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-easel" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-heart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default StudyTabs;
