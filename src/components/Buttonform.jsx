import { Button } from "native-base";
import React from "react";

const Buttonform = ({ text, color, colorp, login }) => {
  return (
    <Button
      onPress={login}
      _pressed={{ bg: `${colorp}` }}
      _text={{ fontSize: "20px", fontWeight: "semibold" }}
      bg={color}
      type="submit"
      size="lg"
      width="full"
      borderRadius="10px"
      padding="10px"
      marginY="5px">
      {text}
    </Button>
  );
};

export default Buttonform;
