import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          marginBottom: 20,
        }}
      >
        Hello React Native !!
      </Text>
      <Image source={require("../assets/images/react-logo.png")} />
    </View>
  );
}
