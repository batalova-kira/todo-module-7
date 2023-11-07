// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { filtersReducer, taskReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
export const store = configureStore({
    reducer: { tasks: taskReducer, filters: filtersReducer },
});
