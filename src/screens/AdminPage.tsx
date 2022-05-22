import { Flex, Heading, Text } from "@chakra-ui/react";

const AdminPage = () => {
  return (
    <Flex
      flexDir="column"
      width="100%"
      height="100vh"
      backgroundColor="#cecece"
      alignItems="center"
    >
      <Heading mt={10}>Admin Panel</Heading>
    </Flex>
  );
};

export default AdminPage;
