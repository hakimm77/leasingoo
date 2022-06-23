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
  const { product, id } = match.params;
  console.log(product, id);

  const displayFields = () => {
    switch (product) {
      case "car brand":
        return (
          <AddNewProductComponent
            dbRef="carBrands"
            premadeFields={carBrandFields}
            pageTitle="Add new car brand"
            addNewProductFunc={addNewCarBrand}
            id={id}
          />
        );
      case "car":
        return (
          <AddNewProductComponent
            dbRef="cars"
            premadeFields={carFields}
            pageTitle="Add new car"
            addNewProductFunc={addNewCar}
            id={id}
          />
        );
      case "retailer":
        return (
          <AddNewProductComponent
            dbRef="retailers"
            premadeFields={retailerFields}
            pageTitle="Add new retailer"
            addNewProductFunc={addNewRetailer}
            id={id}
          />
        );
    }
  };

  return <Flex>{displayFields()}</Flex>;
};

export default AddNew;
