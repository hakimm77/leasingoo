import { Button, Flex, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { deleteItem } from "../../helpers/admin/deleteProduct";
import { db } from "../../helpers/firebase/firebaseConfig";
import { additionalFieldsType } from "../../types/additionalFieldsType";
import { AddNewProductType } from "../../types/productTypes";

const AddNewProductComponent = ({
  dbRef,
  premadeFields,
  pageTitle,
  addNewProductFunc,
  id,
}: AddNewProductType) => {
  const [additionalFields, setAdditionalFields] =
    useState<additionalFieldsType[]>(premadeFields);

  const addField = () => {
    setAdditionalFields((previousFields) => [
      ...previousFields,
      { key: "", value: "", order: additionalFields.length + 1 },
    ]);
  };

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

  useEffect(() => {
    if (id) {
      getDoc(doc(db, `${dbRef}/${id}`)).then(async (productElement) => {
        setAdditionalFields([]);
        let productObj: any = productElement.data();
        let additionalFieldsArr = Object.entries(productObj);

        additionalFieldsArr.forEach((elementArr: any) => {
          setAdditionalFields((previousFields) => [
            ...previousFields,
            {
              key: elementArr[1].key,
              value: elementArr[1].value,
              order: elementArr[1].order,
            },
          ]);
        });
      });
    }
  }, []);

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
        {pageTitle}
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
        {additionalFields
          .sort((a, b) => a.order - b.order)
          .map((field, idx) => (
            <Flex
              key={idx}
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
                  disabled={field.key === "id"}
                  placeholder="Field key"
                  borderColor="gray"
                  value={field.key}
                  onChange={(e: any) => {
                    onChangeField("key", idx, e.target.value);
                  }}
                />
                <Input
                  width="49%"
                  disabled={field.key === "id"}
                  borderColor="gray"
                  placeholder="Field value"
                  value={field.value}
                  onChange={(e: any) => {
                    onChangeField("value", idx, e.target.value);
                  }}
                />
              </Flex>

              {field.key !== "id" && (
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
              )}
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

        <Flex flexDir="row" alignItems="center" justifyContent="space-between">
          <Button
            backgroundColor="#1D1D1D"
            color="white"
            onClick={() => {
              addNewProductFunc(dbRef, additionalFields, id);
            }}
          >
            {id ? "Save changes" : pageTitle}
          </Button>

          {id && (
            <Button
              backgroundColor="#1D1D1D"
              color="white"
              onClick={() => {
                deleteItem(dbRef, id);
              }}
              margin={10}
            >
              Delete item
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AddNewProductComponent;
