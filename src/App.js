import React from "react";
import "./App.css";
import { Flex } from "@chakra-ui/react";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";
import { useState, useEffect } from "react/cjs/react.development";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [list, setList] = useState(
    localStorage.getItem("todos") != null
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
    return () => {};
  }, [list]);

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().text}`);
      console.log(doc.data());
    });
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="column"
      background={"#FFD92D"}
      height="100vh"
    >
      <InputBox list={list} setList={setList} />
      <TaskList list={list} setList={setList} />
    </Flex>
  );
}

export default App;
