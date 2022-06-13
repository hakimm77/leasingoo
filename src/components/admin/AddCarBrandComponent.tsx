import { Button, Flex, Heading, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { addNewCarBrand } from "../../helpers/admin/addNewProduct";
import { additionalFieldsType } from "../../types/additionalFieldsType";

const AddCarBrandComponent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [additionalFields, setAdditionalFields] = useState<
    additionalFieldsType[]
  >([]);

  const addField = () => {
    setAdditionalFields((previousFields) => [
      ...previousFields,
      { key: "", value: "" },
    ]);
  };

  return (
    <Flex
      flexDir="column"
      width="100%"
      height="100vh"
      alignItems={"center"}
      backgroundColor="#cecece"
      overflowY="hidden"
    >
      <Heading mt={5} mb={20}>
        Add new car brand
      </Heading>

      <Flex
        flexDir="column"
        width="60%"
        maxHeight="400px"
        overflowY="auto"
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

        {additionalFields.map((field, idx) => (
          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="space-around"
            width="80%"
            mb="20px"
            key={idx}
          >
            <Input
              width="48%"
              placeholder="Field key"
              borderColor="gray"
              value={field.key}
              onChange={(e: any) => {
                console.log(e.target.value);
              }}
            />
            <Input
              width="48%"
              borderColor="gray"
              placeholder="Field value"
              value={field.value}
              onChange={(e: any) => {
                console.log(e.target.value);
              }}
            />
          </Flex>
        ))}

        <Flex width="80%">
          <Button
            backgroundColor="#1D1D1D"
            color="white"
            mb="40px"
            width={200}
            onClick={addField}
          >
            Add new key value pair
          </Button>
        </Flex>

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
