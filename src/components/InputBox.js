import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react/cjs/react.development";
import { collection, addDoc } from "firebase/firestore";

function InputBox({ list, setList }) {
  const [inputText, setInputText] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (inputText !== "" && inputText !== " ") {
      let newList = [...list, { text: inputText, starred: false }];
      setList(newList);
      setInputText("");
    }
  };
  return (
    <Box
      as="form"
      m="4"
      size="md"
      width="50vw"
      alignItems="center"
      justifyContent="center"
    >
      <InputGroup marginLeft="17%">
        <Input
          textAlign="center"
          size="md"
          borderColor="black"
          width="65%"
          borderRadius={"xl"}
          _focus={{ borderColor: "black" }}
          _hover={{ borderColor: "black" }}
          boxShadow={"xl"}
          _placeholder={{ color: "white" }}
          placeholder="Add Item"
          textColor="black"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <InputRightElement width="50%" h="100%">
          <Button
            h="100%"
            size="sm"
            borderRadius={"xl"}
            _focus={{ borderColor: "gray.800" }}
            _hover={{ borderColor: "gray.800" }}
            boxShadow={"xl"}
            onClick={addItem}
            type="submit"
          >
            {"Add"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default InputBox;
