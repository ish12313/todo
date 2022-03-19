import React from "react";
import { Flex } from "@chakra-ui/react";
import TaskItem from "./TaskItem";

function TaskList({ list, setList }) {
  return (
    <Flex flexDir="column" alignItems="center" w="100%">
      {list.map((item, position) => {
        return (
          <TaskItem
            key={position}
            item={item}
            list={list}
            setList={setList}
            pos={position}
          />
        );
      })}
    </Flex>
  );
}

export default TaskList;
