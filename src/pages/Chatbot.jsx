import React, { useState } from "react";
import { Box, VStack, Text, Input, Button } from "@chakra-ui/react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };

  return (
    <Box p={5}>
      <Text fontSize="xl">Welcome to the Chatbot!</Text>
      <VStack spacing={4} align="stretch">
        <VStack spacing={3} align="stretch" flexGrow={1} overflowY="auto" maxHeight="md" paddingY={4}>
          {messages.map((message, index) => (
            <Box key={index} bg="gray.100" p={3} borderRadius="md">
              {message.text}
            </Box>
          ))}
        </VStack>
        <Box>
          <Input placeholder="Type your message here..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} />
          <Button onClick={handleSendMessage} colorScheme="blue" mt={2}>
            Send
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default Chatbot;
