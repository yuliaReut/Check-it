import {NameSpace} from "../reducer";

const getAuthorizationStatus = (state) => state[NameSpace.USER].status;

const storeUserData = (state) => state[NameSpace.USER].user;

export {getAuthorizationStatus, storeUserData};

