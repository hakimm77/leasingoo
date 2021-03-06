import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminPage from "./screens/AdminPage";
import AddNew from "./screens/AddNew";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AdminPage} />
          <Route path="/admin-add-new/:product/:id?" component={AddNew} />
          <Redirect from="*" exact={true} to={"/admin"} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
