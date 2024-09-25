import { Button, Card, Col, Container, Image, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

function Cart() {
  const carts = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const totalPrice = carts.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc
    }, 0)
  return (
    <Container style={{flexDirection: "column"}}>
      {/* Adjust margin-top for spacing from navbar, and margin-bottom for spacing between header and table */}
      <h1 className="py-5" style={{ textAlign: "center", marginBottom: "50px" }}>
        Welcome to Cart
      </h1>
      <Button variant="primary" className="mb-3" onClick={() => {
                    dispatch(clear());
                }}>clear</Button>
                      <h5>Totle Price {totalPrice.toFixed(2)}$</h5>
      <Table striped bordered hover size="sm" >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart, index) => (
            <tr key={cart.id}>
              <td>{index + 1}</td> {/* Add numbering */}
              <td>{cart.title}</td>
              <td>
                <Image
                  src={cart.image}
                  style={{ width: "100px", height: "100px" }}
                  alt=""
                />
              </td>
              <td>{cart.price}$</td>
              <td>{cart.quantity}</td>
              <td>
                <Button variant="danger" onClick={() => {

                    dispatch(deleteFromCart(cart))
                }}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Container>
  );
}

export default Cart;
