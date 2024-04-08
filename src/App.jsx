import { Box, Flex, Container } from "@chakra-ui/react";
import Main from "./components/main";

function App() {
  return (
    <Container
      bg={"#DC143C"}
      maxW={"Container.3xl"}
      minHeight={"100vh"}
      p={"0"}
    >
      <Flex height={"full"}>
        <Box height={"full"} flex={"5"} w={["20%", "30%", "20%", "50%", "60%"]}>
          <Main />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
