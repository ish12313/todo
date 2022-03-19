import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { DeleteIcon, StarIcon } from "@chakra-ui/icons";

function TaskItem({ item, pos, setList, list }) {
  const deleteItem = () => {
    let copy = [...list];
    copy.splice(pos, 1);
    setList(copy);
  };

  const starItem = () => {
    let copy = [...list];
    let currentItem = copy[pos];
    currentItem.starred = !currentItem.starred;
    copy[pos] = currentItem;

    const starred = [];
    const unstarred = [];

    for (let i = 0; i < copy.length; i++) {
      if (copy[i].starred) {
        starred.push(copy[i]);
      } else {
        unstarred.push(copy[i]);
      }
    }

    setList([...starred, ...unstarred]);
  };

  return (
    <Flex w="50%" justifyContent="center" marginLeft="20px" alignItems="center">
      <Flex
        bg={item.starred ? "black" : "white"}
        color={item.starred ? "white" : "black"}
        w="65%"
        margin="10px"
        marginLeft="45px"
        padding="8px"
        borderRadius="xl"
        boxShadow={"xl"}
      >
        <Text w="100%">{item.text}</Text>
      </Flex>
      <DeleteIcon onClick={deleteItem} color="red.500" w={6} h={6} />
      <StarIcon
        onClick={starItem}
        color={item.starred ? "black" : "white"}
        w={6}
        h={6}
        marginLeft="10px"
      />
    </Flex>
  );
}

export default TaskItem;
