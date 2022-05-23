import { Flex, Heading } from "@chakra-ui/react";

const AddRetailerComponent = () => {
  return (
    <Flex
      flexDir="column"
      width="100%"
      height="100vh"
      alignItems={"center"}
      backgroundColor="#cecece"
    >
      <Heading mt={5} mb={20}>
        Add new retailer
      </Heading>
    </Flex>
  );
};

export default AddRetailerComponent;
