import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentDoneAction} from "../redux/PaymentReducer";

export function PaymentUpsert() {


  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const [successOperation, setSuccessOperation] = useState(false);

  //adding card details
  //const [paymentId, setPaymentId] = useState(state.payment.refemp.paymentId);
  const [billAmount, setBillAmount] = useState(state.payment.refemp.billAmount);
  const [cardName, setCardName] = useState(state.payment.refemp.cardName);
  const [cardNumber, setCardNumber] = useState(state.payment.refemp.cardNumber);
  const [cvv, setCvv] = useState(state.payment.refemp.cvv);
  const [expiryDate, setExpiryDate] = useState(state.payment.refemp.expiryDate);

 // update card details
  //const updatePaymentId = (e) => setPaymentId(e.target.value);
  const updateBillAmount = (e) => setBillAmount(e.target.value);
  const updateCardName = (e) => setCardName(e.target.value);
  const updateCardNumber = (e) => setCardNumber(e.target.value);
  const updateCvv = (e) => setCvv(e.target.value);
  const updateExpiryDate = (e) => setExpiryDate(e.target.value);

  const PaymentDone = (e) => {
    e.preventDefault();
    console.log( billAmount, cardName, cardNumber, cvv, expiryDate);

    // Validations
    // const re = /^[0-9]+$/;
    // if (!re.test(paymentId)) {
    //   alert("Invalid paymentId");
    //   return;
    // }

    const re1 = /^[0-9]+$/;
    if (!re1.test(billAmount)) {
      alert("Invalid billAmount");
      return;
    }

    const re2 = /^[0-9]{16}$/;
    if (!re2.test(cardNumber)) {
      alert("Invalid Card Number");
      return;
    }

    const re3 = /^[0-9]{3}$/;
    if (!re3.test(cvv)) {
      alert("Invalid Cvv");
      return;
    }

    const re4 = /^[A-Za-z ]+$/;
    if (!re4.test(cardName)) {
     alert("Invalid Card Name");
     return;
    }

    const re5 = /^(?:0[1-9]|1[0-2])\/[0-9]{2}$/;
    if (!re5.test(expiryDate)) {
      alert("Invalid Expiry Date");
      return;
    }

    // THIS IS REDUX ACTION CALLING
    dispatch(
      paymentDoneAction({
        
        billAmount,
        cardName,
        cardNumber,
        cvv,
        expiryDate,
      })
    );

    // A1 success
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    //setPaymentId("");
    setBillAmount("");
    setCardName("");
    setCardNumber("");
    setCvv("");
    setExpiryDate("");
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#f3ead2" }}>
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="text-center alert alert-primary">
            payment
          </h3>

          {successOperation && (
            <div className="alert alert-success">Payment Successful</div>
          )}

          
          {/* <div className="mb-1">
            <input
              type="number"
              value={paymentId}
             onChange={(e) => updatePaymentId(e)}
              className="form-control mb-2"
              placeholder="Enter Payment Id"
              maxLength="6"
              minLength="1"
              required
            />
          </div> */}


          <div className="mb-1">
            <input
              type="number"
              value={billAmount}
              onChange={(e) => updateBillAmount(e)}
              className="form-control mb-2"
              placeholder="Enter Bill Amount"
              required
            />
          </div>

      
          <h6>Enter Card Details</h6>
          <div className="mb-1">
            <input
              type="text"
              value={cardName}
              onChange={(e) => updateCardName(e)}
              className="form-control mb-2"
              placeholder="Enter Card Name"
              maxLength="25"
              minLength="4"
              required
             />
          </div>


          <div className="mb-1">
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => updateCardNumber(e)}
              className="form-control mb-2"
              placeholder="Enter Card Number"
              maxLength="16"
              minLength="16"
              required
            />
          </div>


          <div className="mb-1">
            <input
              type="password"
              value={cvv}
              onChange={(e) => updateCvv(e)}
              className="form-control mb-2"
              placeholder="Enter CVV"
              maxLength="3"
              minLength="3"
              required
            />
          </div>


          <div className="mb-1">
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => updateExpiryDate(e)}
              className="form-control mb-2"
              placeholder="Enter Expiry Date"
              required
            />
          </div>

          <div className="mb-1">
            
              <input
                type="button"
                className="btn btn-warning w-100"
                value="Pay"
                onClick={(e) => PaymentDone(e)}
              />
          </div>

      
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
}
