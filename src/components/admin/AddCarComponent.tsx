import { Button, Flex, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { addNewCar } from "../../helpers/admin/addNewProduct";
import { additionalFieldsType } from "../../types/additionalFieldsType";

const AddCarComponent = () => {
  const [additionalFields, setAdditionalFields] = useState<
    additionalFieldsType[]
  >([
    { key: "Bilmärke", value: "" },
    { key: "Namn", value: "" },
    { key: "Beskrivning", value: "" },
    { key: "Drivning", value: "" },
    { key: "Drivlåda", value: "" },
    { key: "Drivlåda", value: "" },
    { key: "Pris", value: "" },
    { key: "Avtalslängd", value: "" },
    { key: "Mil / år", value: "" },
    { key: "Serviceavtal", value: "" },
    { key: "Nybilsgaranti", value: "" },
    { key: "CO2", value: "" },
    { key: "Motorstyrka", value: "" },
    { key: "Utsläpp Blandad Körning", value: "" },
    { key: "Utsläpp Landsväg", value: "" },
    { key: "Hjul & Fälg", value: "" },
    { key: "Dragkrok", value: "" },
    { key: "Bagageutrymme", value: "" },
    { key: "Acceleration", value: "" },
    { key: "Fakturaavgift", value: "" },
    { key: "Uppläggningsavgift", value: "" },
    { key: "Övermilskostnad", value: "" },
  ]);

  const onChangeField = async (
    changeType: "key" | "value",
    fieldIndex: number,
    newText: string
  ) => {
    let fieldsArr = [...additionalFields];

    switch (changeType) {
      case "key":
        fieldsArr[fieldIndex].key = newText;
        break;
      case "value":
        fieldsArr[fieldIndex].value = newText;
        break;
    }

    setAdditionalFields(fieldsArr);
  };

  const deleteField = async (fieldIndex: number) => {
    let newFieldsArr = [...additionalFields];
    newFieldsArr.splice(fieldIndex, 1);

    setAdditionalFields(newFieldsArr);
  };

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
      overflowY="auto"
    >
      <Heading mt={5} mb={20}>
        Add new car
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
        {additionalFields.map((field, idx) => (
          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="center"
            width="83%"
          >
            <Flex
              flexDir="row"
              alignItems="center"
              justifyContent="space-around"
              width="80%"
              mb="20px"
              key={idx}
            >
              <Input
                width="49%"
                placeholder="Field key"
                borderColor="gray"
                value={field.key}
                onChange={(e: any) => {
                  onChangeField("key", idx, e.target.value);
                }}
              />
              <Input
                width="49%"
                borderColor="gray"
                placeholder="Field value"
                value={field.value}
                onChange={(e: any) => {
                  onChangeField("value", idx, e.target.value);
                }}
              />
            </Flex>

            <Text
              color="red"
              onClick={() => {
                deleteField(idx);
              }}
              fontWeight="bold"
              cursor="pointer"
              padding={2}
              mt={-5}
            >
              Delete
            </Text>
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
            addNewCar(additionalFields);
          }}
        >
          Add car brand
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddCarComponent;
