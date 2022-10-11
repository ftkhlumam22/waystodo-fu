import React from "react";
import { Badge, Box, Heading, HStack, Pressable, Text } from "native-base";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Colors from "../data/colors";
import RandomColors from "../data/random";

const Card = ({ name, navigation }) => {
  const random = Math.floor(Math.random() * RandomColors.length);

  return (
    <Pressable onPress={() => navigation.navigate("DetailCard")}>
      <Box
        width="full"
        bg={RandomColors[random]}
        px="15px"
        py="15px"
        my="10px"
        borderRadius="5px"
        height="120px">
        <HStack>
          <Box width="2/3">
            <Heading fontSize="15px" mb="10px">
              Study - {name}
            </Heading>
            <Text
              fontSize="10px"
              height="45px"
              textAlign="justify"
              color={Colors.desc}
              overflow="hidden">
              Learn Golang to improve fundamentals and familiarize with coding.
              Advantages of Go Go has advantages over other languages,
              including: Supports concurrency at the language level with fairly
              easy application Supports data processing with multiple processors
              at the same time (parallel processing) Have a garbage collector
              The compilation process is very fast It's not a hierarchical
              programming language and it's not strict OOP, giving developers
              the freedom to how to write code. Listing Material : Installation
              Setup Go Modules Setup Gopath & Workspace Go Command Hello World
              Variable Tipe DataKonstanta Operator Condition Loops
            </Text>
            <Box height="1/4" justifyContent="flex-end">
              <Text fontSize="10px" color={Colors.desc}>
                <AntDesign name="calendar" size={12} color={Colors.desc} /> 19
                Juli 2022
              </Text>
            </Box>
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
      </Box>
    </Pressable>
  );
};

export default Card;
