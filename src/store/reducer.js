import {combineReducers} from "redux";
import {favoriteData} from "./favorite-data/favorite-data";
import {mainData} from "./main-data/main-data";
import {propertyData} from "./property-data/property-data";
import {userData} from "./user-data/user-data";

export const NameSpace = {
  MAIN: `MAIN`,
  PROPERTY: `PROPERTY`,
  FAVORITE: `FAVORITE`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.MAIN]: mainData,
  [NameSpace.PROPERTY]: propertyData,
  [NameSpace.FAVORITE]: favoriteData,
  [NameSpace.USER]: userData
});

