import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial89082Navigator from '../features/Tutorial89082/navigator';
import NotificationList89054Navigator from '../features/NotificationList89054/navigator';
import Settings89053Navigator from '../features/Settings89053/navigator';
import Settings89045Navigator from '../features/Settings89045/navigator';
import UserProfile89043Navigator from '../features/UserProfile89043/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial89082: { screen: Tutorial89082Navigator },
NotificationList89054: { screen: NotificationList89054Navigator },
Settings89053: { screen: Settings89053Navigator },
Settings89045: { screen: Settings89045Navigator },
UserProfile89043: { screen: UserProfile89043Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
