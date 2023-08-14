import { useState,useEffect } from "react"
import Cart_Item_list from "./../Cart_Item_list"
import Items from "./../ItemLayouts/ItemLayout2"
import './../Cart.css'
import { Button } from "@nextui-org/react"
import { Outlet, Link } from "react-router-dom";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Tabs, Tab} from "@nextui-org/react";

export default function Final(){

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] = useState('blur')

    const handleOpen = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
      }

    const items = Cart_Item_list.map(abc=>{
        return <Items
            name={abc.Name}
            img = {abc.Image}
            price_online = {abc.Price_Online}
            price_pickup = {abc.Price_Pickup}
        />
    })

    const sumOfPriceOnline = Cart_Item_list.reduce((sum, item) => {
        const price = parseFloat(item.Price_Online.replace('$', ''));
        return sum + price;
    }, 0);

    return (
        <div style={{display: 'flex'}}>
        <div style={{borderRight: '4px dashed black', paddingRight: '30px', marginRight: '40px'}}>
        <div className="walmartinfo" style={{paddingLeft: '40px'}}>
        <p style={{fontSize: '30px', fontFamily: 'monospace'}}>Order Info</p>
        <br />
        <span style={{display: 'flex', justifyContent: 'space-between', width: '700px'}}><span style={{fontWeight: '700'}}>Date : </span><span>14/07/2023</span></span><p></p>
        <span style={{display: 'flex', justifyContent: 'space-between', width: '700px'}}><span style={{fontWeight: '700'}}>Time slot : </span><span>2pm to 4pm</span></span><p></p>
        <span style={{display: 'flex', justifyContent: 'space-between', width: '700px'}}><span style={{fontWeight: '700'}}>walmart Id : </span><span>1234</span></span><p></p>
        <span style={{display: 'flex', justifyContent: 'space-between', width: '700px'}}><span style={{fontWeight: '700'}}>Walmart Address : </span><span>A/block road, shahad fatak, ulhasnagar-1</span></span><p></p>
        </div>
            <div style={{padding: '40px 0 40px 40px'}} >
                {/* <p></p> */}
                <div className="cartItemsList">
                    <p><b>Your Cart : {items.length}</b> items</p>
                    {items}
                </div>
                {/* <hr class="vertical-hr"/> */}
                
                {/* <div className="checkoutlay">
                    <h1><b>Checkout</b></h1>
                    <br></br>
                    <div className="checkoutitems">
                        <p>Subtotal ({items.length} items)</p>
                        <p><b>${sumOfPriceOnline}</b></p>

                        <p>Est. taxes and fees</p>
                        <p><b>${((18 * sumOfPriceOnline)/100).toFixed(2)}</b></p>
                    </div>
                    <br></br>
                    <hr></hr>

                    <br></br> */}
                    {/* <p><b>Est. total</b></p>
                    <div className="checkoutitems">
                        <p>With delivery</p>
                        <p><b>${(sumOfPriceOnline + ((10*sumOfPriceOnline)/100)).toFixed(2)}</b></p>
                        <p>With pickup</p>
                        <p><b>${(sumOfPriceOnline + ((5*sumOfPriceOnline)/100)).toFixed(2)}</b></p>
                    </div>
                    <small>Save <b>${((sumOfPriceOnline + ((10*sumOfPriceOnline)/100))-(sumOfPriceOnline + ((5*sumOfPriceOnline)/100))).toFixed(2)}</b></small>
                     */}
                    {/* <br></br>
                    <br></br>
                    <div>
                            <Button onClick={handleOpen} color="primary">Place Order</Button>   
                    </div>
                    <br></br>
                    <div className="extra">
                    <small>Free Delivery Available</small>
                    <Button size="sm" color="default" variant="light">Learn More</Button>
                     
                    </div>
                    <br></br> */}
                    {/* <div>
                            <Button onClick={handleOpen} color="primary">Offline Cart</Button>   
                    </div>
                    <br></br>
                    <div className="extra">
                    <small>Want to buy more, but confused? book an offline cart</small>
                    <Button size="sm" color="default" variant="light">Learn More</Button>
                     
                    </div> */}
                    
                {/* </div> */}
                
            </div>
            <div className="walmartinfo" style={{paddingLeft: '40px'}}>
        <span style={{display: 'flex', justifyContent: 'space-between', width: '700px'}}><span style={{fontWeight: '700'}}>Total Price : </span><span>$ 24.24</span></span><p></p>
        <span style={{display: 'flex', justifyContent: 'space-between', width: '700px'}}><span style={{fontWeight: '700'}}>Discount : </span><span>$ 4.2</span></span><p></p>
        <span style={{display: 'flex', justifyContent: 'space-between', width: '700px'}}><span style={{fontWeight: '700'}}>Estimated Price : </span><span>$ 20.04</span></span><p></p>
        </div>
        
            </div>
            <div><p style={{fontSize: '30px', fontFamily: 'monospace'}}>Qr Code </p><div style={{padding: '30px', border: '2px solid black', marginTop: '30px'}}><img src="https://i.stack.imgur.com/O6PbK.png" width='300px' alt="" /></div><small>same qr code has also been sent to your gmail</small></div>
            </div>
    )
}