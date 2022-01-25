import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, UserState } from "../Reducer/userReducer";
import { getEventsReducer } from "../Reducer/eventsReducer";
import { getEventDetailReducer } from "../Reducer/eventDetailReducer";
import { getCommentReducer } from "../Reducer/commentReducer";

const reducers = combineReducers({
  userLogin: userLoginReducer,
  getEventsReducer,
  getEventDetailReducer,
  getCommentReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : undefined;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
