import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CheckIcon,
  FormControl,
  Heading,
  HStack,
  Input,
  ScrollView,
  Select,
  Text,
} from "native-base";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Colors from "../data/colors";
import Card from "../components/Card";

const Homepage = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [service, setService] = React.useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    console.log(date);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <ScrollView>
      <Box mt="60px" mx="30px">
        <HStack>
          <Box width="1/2">
            <Heading>Hi, Maharani</Heading>
            <Text color={Colors.main}>3 List</Text>
          </Box>
          <Box width="1/2" alignItems="flex-end">
            <Avatar bg="green.500">MH</Avatar>
          </Box>
        </HStack>
        <FormControl my="35px">
          <Input
            borderRadius="5px"
            mb="15px"
            placeholder="Seacrh List..."
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
          <HStack space={2} alignItems="center" justifyContent="center">
            <Button
              onPress={showDatepicker}
              borderRadius="5px"
              width="1/3"
              bg={Colors.form}
              px="10px"
              py="12px"
              _text={{ color: `${Colors.text_form}` }}>
              Choose Date
            </Button>
            <Select
              borderRadius="5px"
              selectedValue={service}
              bg={Colors.form}
              minWidth="105px"
              width="1/3"
              accessibilityLabel="Category"
              placeholder="Category"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setService(itemValue)}>
              <Select.Item label="Work" value="work" />
              <Select.Item label="Study" value="study" />
            </Select>
            <Select
              borderRadius="5px"
              selectedValue={service}
              bg={Colors.form}
              minWidth="105px"
              width="1/3"
              accessibilityLabel="Status"
              placeholder="Status"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(itemValue) => setService(itemValue)}>
              <Select.Item label="Ongoing" value="ongoing" />
              <Select.Item label="Done" value="done" />
            </Select>
          </HStack>
        </FormControl>
        <Card name="Golang" navigation={navigation} />
        <Card name="Javascript" navigation={navigation} />
        <Card name="C++" navigation={navigation} />
      </Box>
    </ScrollView>
  );
};

export default Homepage;
