
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";


export function PaymentList() {

  const state = useSelector((state) => state);
  console.log(state);

  return (
    <>
      <div style={{ height: "200vh", backgroundColor: "#d9ecd0" }}>
        <div className="row">
          <div className="col-3 col-md-2 d-none d-md-block"></div>
          <div className="col-12 col-md-8">
            <h3 className="alert alert-primary text-center">Payment List</h3>


            <Table striped bordered hover variant="primary">
              <tr style={{ backgroundColor: "#89c4ff" }}>
                {/* <th scope="col">paymentId</th> */}
                <th scope="col">cardName</th>
                <th scope="col">cardNumber</th>
                <th scope="col">cvv</th>
                <th scope="col">expiryDate</th>
                <th scope="col">billAmount</th>
              </tr>

              
              <tbody>
                {[...state.payment.list].map((item, index) => (
                  <tr key={index}>
                    {/* <th scope="row">{item.paymentId}</th> */}
                    <td>{item.cardName}</td>
                    <td>{item.cardNumber}</td>
                    <td>{item.cvv}</td>
                    <td>{item.expiryDate}</td>
                    <td>{item.billAmount}</td>
                  </tr>
                ))}
              </tbody>
              
            </Table>

          </div>
          <div className="col-3 col-md-2 d-none d-md-block"></div>
        </div>
      </div>
    </>
  );
}
