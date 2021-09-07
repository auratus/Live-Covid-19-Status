import Combined from "./reducer/combine.js"
import { createStore } from "redux";

let store = createStore(Combined);

export default store;