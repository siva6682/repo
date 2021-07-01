const initState = {
  list: [],

  refemp: {},
  sampleList: [""],
};

// ACTION TYPES
const PAYMENT_DONE = "PAYMENT_DONE";


// ACTIONS :: Components are interacting with this action

export function paymentDoneAction(payload) {
  

  // MAKE SURE redux-thunk is installed.
  return async (dispatch) => {

    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:9797/api/pay/card";
    const requestBody = { ...payload, age: 30 };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: PAYMENT_DONE, payload: payload });

    
  };
}



// REDUCER LOGIC
export function PaymentReducer(state = initState, action) {
  switch (action.type) {

    case PAYMENT_DONE:
      return { ...state, list: [action.payload, ...state.list] };
  
    default:
      return state;
  }
}
