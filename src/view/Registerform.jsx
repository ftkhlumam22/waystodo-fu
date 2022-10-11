import {
  Box,
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

const Registerform = () => {
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
          <Heading mb="30px">Register</Heading>
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
            placeholder="Name"
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
          <Buttonform
            text="Register"
            color={Colors.main}
            colorp={Colors.secondary}
          />
        </FormControl>
        <Text fontSize="12px" fontWeight="semibold">
          Joined Us Before ? <Text color={Colors.main}>Login</Text>
        </Text>
      </Box>
    </View>
  );
};

export default Registerform;
