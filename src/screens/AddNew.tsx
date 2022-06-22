import { Flex, Text } from "@chakra-ui/react";
import AddNewProductComponent from "../components/admin/AddNewProductComponent";
import {
  addNewCar,
  addNewCarBrand,
  addNewRetailer,
} from "../helpers/admin/addNewProduct";
import {
  carBrandFields,
  carFields,
  retailerFields,
} from "../helpers/admin/fieldsArrs";

const AddNew = ({ match }: { match: any }) => {
  const { product } = match.params;

  const displayFields = () => {
    switch (product) {
      case "car brand":
        return (
          <AddNewProductComponent
            premadeFields={carBrandFields}
            pageTitle="Add new car brand"
            addNewProductFunc={addNewCarBrand}
          />
        );
      case "car":
        return (
          <AddNewProductComponent
            premadeFields={carFields}
            pageTitle="Add new car"
            addNewProductFunc={addNewCar}
          />
        );
      case "retailer":
        return (
          <AddNewProductComponent
            premadeFields={retailerFields}
            pageTitle="Add new retailer"
            addNewProductFunc={addNewRetailer}
          />
        );
    }
  };

  return <Flex>{displayFields()}</Flex>;
};

export default AddNew;
