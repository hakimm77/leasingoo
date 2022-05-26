import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../helpers/firebase/firebaseConfig";

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
      snapchot.forEach((childSnapchot) => {
        //not updating
        setCarBrands((p: any) => [...p, childSnapchot.data()]);
      });
    });

    getDocs(collection(db, "cars")).then((snapchot) => {
      snapchot.forEach((childSnapchot) => {
        setCars((p: any) => [...p, childSnapchot.data()]);
      });
    });

    getDocs(collection(db, "retailers")).then((snapchot) => {
      snapchot.forEach((childSnapchot) => {
        setRetailers((p: any) => [...p, childSnapchot.data()]);
      });
    });
  }, []);

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

      <Flex flexDir="row" width="90%" alignItems="center">
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
              mb={5}
              onClick={() => {
                window.location.href = `/admin-add-new/${page}`;
              }}
            >
              {`Add new ${page.name}`}
            </Button>

            {page.arr.map((arrChild: any, idx: number) => (
              <Flex
                key={idx}
                flexDir="column"
                width="95%"
                borderRadius={5}
                backgroundColor="#000"
                padding={5}
                justifyContent="center"
              >
                <Text color="white">{arrChild.name}</Text>
              </Flex>
            ))}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default AdminPage;
