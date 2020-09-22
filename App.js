import { setContext } from "@apollo/client/link/context";
import React, { useState } from "react";
import AppNavigator from "./AppNavigator";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { AppRegistry } from "react-native";
import fetch from "cross-fetch";

import NewPackagesScreen from "./src/screens/NewPackagesScreen";
import NewLoginScreen from "./src/screens/NewLoginScreen";
import NewUserSettingScreen from "./src/screens/NewUserSettingScreen";

const httpLink = new HttpLink({
  uri: "http://192.168.11.2:4000/",
  fetch,
});
const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem("token");
  const token = "";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  const [loginScreenOpen, setLoginScreenOpen] = useState(true);
  const [packageScreenOpen, setPackageScreenOpen] = useState(false);
  const [userSettingScreenOpen, setUserSettingScreenOpen] = useState(false);
  const [idFromLoggedUser, setIdFromLoggedUser] = useState(null);
  const handleLoginScreenClose = (userObj) => {
    console.log("closed");
    setLoginScreenOpen(false);
    setPackageScreenOpen(true);
    setIdFromLoggedUser(userObj);
    console.log("userObj:", userObj);
  };

  const switchToUserSetting = () => {
    setPackageScreenOpen(false);
    setUserSettingScreenOpen(true);
  };
  const switchToPackages = () => {
    setUserSettingScreenOpen(false);
    setPackageScreenOpen(true);
  };
  return (
    <ApolloProvider client={client}>
      {loginScreenOpen && <NewLoginScreen close={handleLoginScreenClose} />}
      {packageScreenOpen && (
        <NewPackagesScreen
          userId={idFromLoggedUser.id}
          close={switchToUserSetting}
        />
      )}
      {userSettingScreenOpen && (
        <NewUserSettingScreen
          user={idFromLoggedUser}
          close={switchToPackages}
        />
      )}
    </ApolloProvider>
  );
};

AppRegistry.registerComponent("App", () => App);

export default App;
