import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  Heading,
  Input,
  Select,
  TextArea,
  ScrollView,
} from "native-base";
import React, { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Colors from "../data/colors";
import Buttonform from "../components/Buttonform";

const AddList = () => {
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
        <Box>
          <Heading>AddList</Heading>
        </Box>
        <FormControl mt="15px">
          <Input
            borderRadius="5px"
            placeholder="Name"
            type="text"
            my="5px"
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
            onPress={showDatepicker}
            borderRadius="5px"
            bg={Colors.form}
            px="10px"
            py="12px"
            my="5px"
            _text={{ color: `${Colors.text_form}`, alignSelf: "flex-end" }}>
            Choose Date
          </Button>
          <Select
            borderRadius="5px"
            selectedValue={service}
            bg={Colors.form}
            minWidth="105px"
            accessibilityLabel="Category"
            placeholder="Category"
            my="5px"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            onValueChange={(itemValue) => setService(itemValue)}>
            <Select.Item label="Work" value="work" />
            <Select.Item label="Study" value="study" />
          </Select>
          <TextArea
            py="20px"
            placeholder="Description"
            borderRadius="5px"
            bg={Colors.form}
            mt="5px"
            mb="40px"
            _input={{
              fontSize: "15px",
            }}
            _focus={{
              borderColor: `${Colors.black_tranparent}`,
              bg: `${Colors.form}`,
              fontSize: "18px",
            }}
          />
          <Buttonform
            text="Add List"
            color={Colors.main}
            colorp={Colors.secondary}
          />
        </FormControl>
      </Box>
    </ScrollView>
  );
};

export default AddList;
