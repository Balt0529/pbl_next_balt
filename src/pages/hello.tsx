import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

type AcoProps = {
  question: string;
  children: React.ReactNode;
};

const Aco = ({ question, children }: AcoProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box w={"400px"}>
      <Heading
        bg="teal.300"
        color="white"
        padding="6"
        cursor="pointer"
        onClick={() => setIsOpen(!isOpen)}
        transition="0.5s"
        _hover={{
          opacity: "0.5"
        }}
      >
        {question}
      </Heading>
      <Box
        maxHeight={isOpen ? "100px" : "0"}
        overflow="hidden"
        transition="0.5s"
      >
        <Text padding="10" bg="cyan.100">
          {children}
        </Text>
      </Box>
    </Box>
  );
};

export default function App() {
  return (
    <div className="App">
      <VStack spacing="10" padding={"10"}>
        <Text fontSize='50px' color='tomato'>
        <h1>Question</h1>
        </Text>
        <Aco question={"問題１:1+1"}>2</Aco>
        <Aco question={"問題２:2×3"}>6</Aco>
        <Aco question={"問題３:6÷3"}>2</Aco>
      </VStack>
    </div>
  );
}