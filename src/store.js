import { createStore,applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducers from "./reducers";


const logger = createLogger({collapsed:true})
const middleware=[logger]

const store = createStore(
reducers,
applyMiddleware(...middleware)
)

export default store;