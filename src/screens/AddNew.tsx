import { Flex, Text } from "@chakra-ui/react";
import AddCarBrandComponent from "../components/admin/AddCarBrandComponent";
import AddCarComponent from "../components/admin/AddCarComponent";
import AddRetailerComponent from "../components/admin/AddRetailerComponent";

const AddNew = ({ match }: { match: any }) => {
  const { product } = match.params;

  const displayFields = () => {
    switch (product) {
      case "car brand":
        return <AddCarBrandComponent />;
      case "car":
        return <AddCarComponent />;
      case "retailer":
        return <AddRetailerComponent />;
    }
  };

  return <Flex>{displayFields()}</Flex>;
};

export default AddNew;
