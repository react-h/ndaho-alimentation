import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addToCart } from "../lib/actions"

const Modal = ({ item }) => {

    const [qty, setQty] = useState(1);

    const dispatch = useDispatch()

    const handleAddTocart = (item, quantity) => {
        dispatch(
            addToCart(item, quantity))
    }

    return (
        <div className="modal fade"
            id={item.ref} tabIndex="-1"
            aria-labelledby="itemDetailLabel"
            role="dialog"
            aria-hidden="true"
            data-backdrop="static"
        >
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="itemDetailLabel">{item.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <img
                                    width="170"
                                    height="170"
                                    src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`}
                                    alt={item.name}
                                />
                            </div>
                            <div className="col-sm">
                                <p className="lead">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                                <h3 className="price">€{item.price}/{item.unit}</h3>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-secondary" onClick={() => qty > 1 ? setQty(qty - 1) : 1}>-</button>
                                    <span className="btn btn-light qty">{qty}</span>
                                    <button type="button" className="btn btn-secondary" onClick={() => setQty(qty + 1)}>+</button>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => handleAddTocart(item, qty)}>Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Modal