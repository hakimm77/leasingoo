import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const AdminPage = () => {
  const [pages, setPages] = useState(["car brand", "car", "retailer"]);
  const [carBrands, setCarBrands] = useState<any>([]);
  const [cars, setCars] = useState<any>([]);
  const [retailers, setRetailers] = useState<any>([]);

  useEffect(() => {}, []);

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
        {pages.map((page) => (
          <Flex
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
              {`Add new ${page}`}
            </Button>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default AdminPage;
