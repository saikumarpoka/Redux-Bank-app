import {createStore, combineReducers} from "redux";

import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";

import { deposit, withdrawl, requestLoan, payLoan } from "./features/accounts/AccountSlice";
import { updateName, createCustomer } from "./features/customers/CustomerSlice";




const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})


const store = createStore(rootReducer);



store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdrawl(200));
console.log(store.getState());

store.dispatch(requestLoan(5000, "Hostel Fees"));
store.dispatch(createCustomer("Sai Kumar", "DDOPP6873G"));
console.log(store.getState());

store.dispatch(payLoan());
store.dispatch(updateName("Poka Venkata Sai Kumar"))
console.log(store.getState());

