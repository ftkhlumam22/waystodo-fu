import {
  Badge,
  Box,
  FormControl,
  Heading,
  Input,
  ScrollView,
} from "native-base";
import React, { useState } from "react";
import Colors from "../data/colors";
import Buttonform from "../components/Buttonform";

const AddCategory = () => {
  return (
    <ScrollView>
      <Box mt="60px" mx="30px">
        <Box>
          <Heading>AddCategory</Heading>
        </Box>
        <FormControl mt="15px">
          <Input
            borderRadius="5px"
            placeholder="Name"
            type="text"
            mt="10px"
            mb="30px"
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
            text="Add Category"
            color={Colors.main}
            colorp={Colors.secondary}
          />
        </FormControl>
        <Box my="30px">
          <Heading mb="20px">List Category</Heading>
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Badge
              colorScheme="success"
              alignSelf="center"
              variant="solid"
              borderRadius="5px"
              mx="2px"
              my="5px"
              _text={{ fontWeight: "semibold" }}>
              Home Work
            </Badge>
            <Badge
              colorScheme="success"
              alignSelf="center"
              variant="solid"
              borderRadius="5px"
              mx="2px"
              my="5px"
              _text={{ fontWeight: "semibold" }}>
              Home Work
            </Badge>
            <Badge
              colorScheme="success"
              alignSelf="center"
              variant="solid"
              borderRadius="5px"
              mx="2px"
              my="5px"
              _text={{ fontWeight: "semibold" }}>
              Home Work
            </Badge>
            <Badge
              colorScheme="success"
              alignSelf="center"
              variant="solid"
              borderRadius="5px"
              mx="2px"
              my="5px"
              _text={{ fontWeight: "semibold" }}>
              Home Work
            </Badge>
            <Badge
              colorScheme="success"
              alignSelf="center"
              variant="solid"
              borderRadius="5px"
              mx="2px"
              my="5px"
              _text={{ fontWeight: "semibold" }}>
              Home Work
            </Badge>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default AddCategory;
