import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../helpers/firebase/firebaseConfig";

const ProductListItem = ({ productTitle }: { productTitle: any }) => {
  return (
    <Flex
      flexDir="column"
      width="100%"
      borderRadius={5}
      backgroundColor="#1D1D1D"
      padding={5}
      justifyContent="center"
      cursor="pointer"
      mb={3}
    >
      <Text color="white" fontWeight="bold">
        {productTitle}
      </Text>
    </Flex>
  );
};

const AdminPage = () => {
  const [carBrands, setCarBrands] = useState<any>([]);
  const [cars, setCars] = useState<any>([]);
  const [retailers, setRetailers] = useState<any>([]);
  const [pages, setPages] = useState<Array<any>>([
    { name: "car brand", arr: carBrands },
    { name: "car", arr: cars },
    { name: "retailer", arr: retailers },
  ]);

  useEffect(() => {
    getDocs(collection(db, "carBrands")).then((snapchot) => {
      setCarBrands([]);
      snapchot.forEach((childSnapchot) => {
        console.log(childSnapchot.data());
        setCarBrands((p: any) => [...p, childSnapchot.data()]);
      });
    });

    getDocs(collection(db, "cars")).then((snapchot) => {
      setCars([]);
      snapchot.forEach((childSnapchot) => {
        console.log(childSnapchot.data());
        setCars((p: any) => [...p, childSnapchot.data()]);
      });
    });

    getDocs(collection(db, "retailers")).then((snapchot) => {
      setRetailers([]);
      snapchot.forEach((childSnapchot) => {
        console.log(childSnapchot.data());
        setRetailers((p: any) => [...p, childSnapchot.data()]);
      });
    });
  }, []);

  const displayPages = (pageName: string) => {
    switch (pageName) {
      case "car brand":
        return carBrands.map((arrChild: any, idx: number) => (
          <ProductListItem key={idx} productTitle={arrChild["Backend title"]} />
        ));
      case "car":
        return cars.map((arrChild: any, idx: number) => (
          <ProductListItem key={idx} productTitle={arrChild["Backend title"]} />
        ));
      case "retailer":
        return retailers.map((arrChild: any, idx: number) => (
          <ProductListItem key={idx} productTitle={arrChild["Backend title"]} />
        ));
      default:
        return <Text>List is empty...</Text>;
    }
  };

  return (
    <Flex
      flexDir="column"
      width="100%"
      height="100vh"
      backgroundColor="#cecece"
      alignItems="center"
    >
      <Heading mt={10} mb={50}>
        Admin Panel
      </Heading>

      <Flex
        flexDir="row"
        width="90%"
        justifyContent="center"
        overflow="auto"
        maxHeight="90%"
      >
        {pages.map((page, pageIdx) => (
          <Flex
            key={pageIdx}
            flexDir="column"
            width="30.33%"
            ml={5}
            padding={5}
            backgroundColor="#a7a7a7"
          >
            <Button
              backgroundColor="#1D1D1D"
              color="white"
              mb={10}
              onClick={() => {
                window.location.href = `/admin-add-new/${page.name}`;
              }}
            >
              {`Add new ${page.name}`}
            </Button>

            <Flex
              flexDir="column"
              width="100%"
              justifyContent="center"
              alignItems="center"
              overflow="auto"
              padding={2}
              maxHeight="500px"
            >
              {displayPages(page.name)}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default AdminPage;
