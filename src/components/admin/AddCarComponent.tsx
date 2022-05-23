import { Flex, Heading } from "@chakra-ui/react";

const AddCarComponent = () => {
  return (
    <Flex
      flexDir="column"
      width="100%"
      height="100vh"
      alignItems={"center"}
      backgroundColor="#cecece"
    >
      <Heading mt={5} mb={20}>
        Add new car
      </Heading>
    </Flex>
  );
};

export default AddCarComponent;
