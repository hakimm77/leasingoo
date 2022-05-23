import { Button, Flex, Heading, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { addNewCarBrand } from "../../helpers/admin/addNewProduct";

const AddCarBrandComponent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Flex
      flexDir="column"
      width="100%"
      height="100vh"
      alignItems={"center"}
      backgroundColor="#cecece"
    >
      <Heading mt={5} mb={20}>
        Add new car brand
      </Heading>

      <Flex
        flexDir="column"
        width="60%"
        borderRadius={10}
        backgroundColor="#f7f7f7"
        padding={5}
        justifyContent="center"
        alignItems="center"
      >
        <Input
          placeholder="Name"
          width="80%"
          mb={10}
          borderColor="gray"
          onChange={(e: any) => {
            setName(e.target.value);
          }}
        />
        <Textarea
          placeholder="Description"
          width="80%"
          borderColor="gray"
          onChange={(e: any) => {
            setDescription(e.target.value);
          }}
          mb={10}
        />

        <Button
          backgroundColor="#1D1D1D"
          color="white"
          onClick={() => {
            addNewCarBrand(name, description);
          }}
        >
          Add car brand
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddCarBrandComponent;
