import React from "react";
import { ChakraProvider, Box, VStack, Grid, theme, Text, Container, Heading, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          {/* Header */}
          <Flex as="header" width="full" align="center">
            <Heading as="h1" size="lg">
              My Website
            </Heading>
            <Spacer />
            <Button colorScheme="pink" leftIcon={<FaHeart />}>
              Like
            </Button>
          </Flex>

          {/* Main Content */}
          <VStack spacing={8}>
            <Container maxW="container.md">
              <Heading as="h2" mb={4}>
                Welcome to My Website
              </Heading>
              <Text fontSize="lg" opacity={0.7}>
                This is a simple example of a website built with Chakra UI and React Icons.
              </Text>
              <Image src="https://images.unsplash.com/photo-1682687218147-9806132dc697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxsYW5kc2NhcGV8ZW58MHx8fHwxNzEwMDM5NTE5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Landscape Image" borderRadius="md" mt={4} maxH="300px" objectFit="cover" />
            </Container>
          </VStack>

          {/* Footer */}
          <Flex as="footer" width="full" align="center" justifyContent="center" mt={8}>
            <Text>&copy; {new Date().getFullYear()} My Website</Text>
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
