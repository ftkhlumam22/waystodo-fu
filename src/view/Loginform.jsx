import {
  Box,
  Button,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
  View,
} from "native-base";
import React from "react";
import Colors from "../data/colors";
import Buttonform from "../components/Buttonform";
import { Pressable } from "react-native";
import "../../global";

const Loginform = (props) => {
  const handleLogin = () => {
    props.navigation.navigate("Main");
  };

  return (
    <View>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="full"
        marginX="20px">
        <Image source={require("../../assets/login_icon.png")} alt="welcome" />
        <FormControl mt="50px" mb="15px">
          <Heading mb="30px">Login</Heading>
          <Input
            borderRadius="10px"
            mb="15px"
            placeholder="Email"
            type="text"
            _input={{
              fontSize: "15px",
              bg: `${Colors.form}`,
            }}
            _focus={{
              borderColor: `${Colors.black_tranparent}`,
              bg: "white",
              fontSize: "18px",
            }}
          />
          <Input
            borderRadius="10px"
            mb="15px"
            placeholder="Password"
            type="password"
            _input={{
              fontSize: "15px",
              bg: `${Colors.form}`,
            }}
            _focus={{
              borderColor: `${Colors.black_tranparent}`,
              bg: "white",
              fontSize: "18px",
            }}
          />
          <Button
            onPress={handleLogin}
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
        </FormControl>
        <Pressable onPress={() => props.navigation.navigate("Register")}>
          <Text fontSize="12px" fontWeight="semibold">
            New User ? <Text color={Colors.main}>Register</Text>
          </Text>
        </Pressable>
      </Box>
    </View>
  );
};

export default Loginform;
