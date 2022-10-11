import React from "react";
import { View, Box, Image, Text, Heading, Button } from "native-base";
import Colors from "../data/colors";
import Buttonform from "../components/Buttonform";

const Welcomepage = (props) => {
  console.log(props);
  return (
    <View>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="full"
        marginX="20px">
        <Image
          source={require("../../assets/welcome_home.png")}
          alt="welcome"
        />
        <Heading fontSize="35px" marginBottom="30px">
          Ways{" "}
          <Heading fontSize="35px" color={Colors.secondary}>
            To
            <Heading fontSize="35px" color={Colors.main}>
              Do
            </Heading>
          </Heading>
        </Heading>
        <Text
          marginBottom="70px"
          textAlign="center"
          fontSize="12px"
          fontWeight="semibold"
          width="280px">
          Write your activity and finish your activity. Fast, Simple and Easy to
          Use
        </Text>
        <Button
          onPress={() => props.navigation.navigate("Login", props)}
          _pressed={{ bg: `${Colors.secondary}` }}
          _text={{ fontSize: "20px", fontWeight: "semibold" }}
          bg={Colors.main}
          type="submit"
          size="lg"
          width="full"
          borderRadius="10px"
          padding="10px"
          marginY="5px">
          Login
        </Button>
        <Button
          onPress={() => props.navigation.navigate("Register", props)}
          _pressed={{ bg: `${Colors.shadow}` }}
          _text={{ fontSize: "20px", fontWeight: "semibold" }}
          bg={Colors.black_tranparent}
          type="submit"
          size="lg"
          width="full"
          borderRadius="10px"
          padding="10px"
          marginY="5px">
          Register
        </Button>
      </Box>
    </View>
  );
};

export default Welcomepage;
