import {
  Box,
  Container,
  Text,
  Center,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import Login from "../authentication/Login";
import SignUp from "../authentication/SignUp";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Center
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize={"4xl"} fontFamily="work sans" color={"black"}>
          Chat-With-Mern
        </Text>
      </Center>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color={'blue.800'} borderWidth="1px">
        <Tabs variant="soft-rounded" >
          <TabList mb='1em'>
            <Tab width={'50%'}>Login</Tab>
            <Tab width={'50%'}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login></Login>
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
