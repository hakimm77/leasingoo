import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminPage from "./screens/AdminPage";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/admin-page" component={AdminPage} />
          <Redirect from="*" exact={true} to={"/admin-page"} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
