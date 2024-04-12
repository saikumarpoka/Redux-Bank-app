const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: ''
};

export default function accountReducer(state = initialStateAccount, action) {
    switch(action.type) {
        case "action/deposit":
            return {...state, balance: state.balance + action.payload};
        case "action/withdrawl":
            return {...state, balance: state.balance - action.payload};
        case "action/requestLoan":
            if (state.loan > 0) return state;
            return {...state, loan: action.payload.amount, loanPurpose: action.payload.purpose, balance: state.balance + action.payload.amount};
        case "action/payLoan":
            return {...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan};

        default:
            return state;
    }
}


export function deposit(amount) {
    return {type: "action/deposit", payload: amount}
}
export function withdrawl(amount) {
    return {type: "action/withdrawl", payload: amount}
}
export function requestLoan(amount, purpose) {
    return {type: "action/requestLoan", payload: {amount, purpose}}
}
export function payLoan() {
    return {type: "action/payLoan"}
}