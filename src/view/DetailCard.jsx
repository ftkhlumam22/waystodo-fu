import React from "react";
import { Badge, Box, Heading, HStack, Text, ScrollView } from "native-base";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Colors from "../data/colors";
import RandomColors from "../data/random";

const DetailCard = () => {
  const random = Math.floor(Math.random() * RandomColors.length);
  return (
    <ScrollView mt="60px" mx="30px">
      <Box
        width="full"
        bg={RandomColors[random]}
        px="15px"
        py="15px"
        my="10px"
        borderRadius="5px">
        <HStack>
          <Box width="2/3" justifyContent="center">
            <Heading fontSize="22px">Study - Golang</Heading>
          </Box>
          <Box
            width="1/3"
            display="flex"
            justifyContent="flex-start"
            alignItems="center">
            <Badge
              colorScheme="success"
              alignSelf="center"
              variant="solid"
              borderRadius="5px"
              _text={{ fontWeight: "semibold" }}>
              Home Work
            </Badge>
            <Box mt="15px">
              <FontAwesome name="circle" size={50} color={Colors.desc} />
            </Box>
          </Box>
        </HStack>
        <Text fontSize="10px" textAlign="justify" color={Colors.desc} mt="20px">
          Learn Golang to improve fundamentals and familiarize with coding.{" "}
          {"\n\n"}
          Advantages of Go{"\n"}Go has advantages over other languages,
          including: {"\n\n"}Supports concurrency at the language level with
          fairly easy application {"\n"}Supports data processing with multiple
          processors at the same time (parallel processing) {"\n"}Have a garbage
          collector {"\n"}The compilation process is very fast {"\n"}It's not a
          hierarchical programming language and it's not strict OOP, giving
          developers the freedom to how to write code. {"\n\n"}Listing Material
          : {"\n\n"}1.Installation {"\n"}2.Setup Go Modules {"\n"}3.Setup Gopath
          & Workspace {"\n"}4.Go Command {"\n"}5.Hello World {"\n"}6.Variable
          Tipe Data Konstanta {"\n"}7.Operator {"\n"}8.Condition
          {"\n"}9.Loops
        </Text>
        <Box mt="20px">
          <Text fontSize="10px" color={Colors.desc}>
            <AntDesign name="calendar" size={12} color={Colors.desc} /> 19 Juli
            2022
          </Text>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default DetailCard;
