import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import NewLoginScreen from "./src/screens/NewLoginScreen";
import NewPackagesScreen from "./src/screens/NewPackagesScreen";
import NewUserSettingScreen from "./src/screens/NewUserSettingScreen";

const navigator = createStackNavigator(
  {
    Login: NewLoginScreen,
    Packages: NewPackagesScreen,
    UserSetting: NewUserSettingScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default navigator;
//export default createAppContainer(navigator);
