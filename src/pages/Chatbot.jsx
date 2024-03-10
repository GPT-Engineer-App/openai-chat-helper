import React, { useState } from "react";
import { Box, VStack, Text, Input, Button } from "@chakra-ui/react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const generateSmartResponse = (userMessage) => {
    const responses = {
      hello: "Hello there! How can I assist you today?",
      hi: "Hi! What can I do for you?",
      help: "Sure, I'm here to help. What do you need assistance with?",
      question: "What's your question? I'll try my best to answer it.",
      default: "I'm not quite sure how to respond to that, but I'm here to learn!",
    };

    const lowerCaseMessage = userMessage.toLowerCase();
    let botResponse = responses.default;

    Object.keys(responses).forEach((key) => {
      if (lowerCaseMessage.includes(key)) {
        botResponse = responses[key];
      }
    });

    return { text: `Bot: ${botResponse}`, sender: "bot" };
    return { text: botResponse, sender: "bot" };
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = { text: `You: ${inputValue}`, sender: "user" };
      const botMessage = generateSmartResponse(inputValue);

      setMessages([...messages, userMessage, botMessage]);
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
