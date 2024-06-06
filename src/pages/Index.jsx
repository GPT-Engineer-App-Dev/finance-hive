import { Box, Container, Flex, Heading, Text, VStack, Image, Stack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#f3f2ef">
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        {/* Main Content */}
        <Box flex="3" p={4}>
          <Heading as="h1" size="2xl" mb={4}>
            Financial Times
          </Heading>
          <Box mb={8}>
            <Image src="https://via.placeholder.com/800x400" alt="Main News" mb={4} />
            <Heading as="h2" size="lg" mb={2}>
              Main News Headline
            </Heading>
            <Text fontSize="md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Secondary News Headline
              </Heading>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Secondary News Headline
              </Heading>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50" borderRadius="md" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h4" size="md" mb={2}>
                Sidebar Item 1
              </Heading>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={2}>
                Sidebar Item 2
              </Heading>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;