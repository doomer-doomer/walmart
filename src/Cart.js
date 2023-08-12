import { useState,useEffect } from "react"
import Cart_Item_list from "./Cart_Item_list"
import Items from "./ItemLayout"
import './Cart.css'
import { Button } from "@nextui-org/react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Tabs, Tab} from "@nextui-org/react";

export default function Cart(){

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
        
            <div className="cartItemsListLay">
                <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">Payment Options</ModalHeader>
                        <ModalBody>
                        <Tabs size="md" color="primary" variant={"underlined"} aria-label="Tabs variants">
                            <Tab size='md' key="Online" title="Online">
                                <p>Add online debit/credit card</p>
                            </Tab>
                            <Tab size='md' key="Pickup" title="Pickup">
                                <p>Add physical pickup option</p>
                                
                            </Tab>
                            <Tab size='md' key="Book a Cart" title="Book a Cart">
                                <p>Add booking of cart</p>
                                
                            </Tab>
                        </Tabs>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onClick={onClose}>
                            Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                            Next
                            </Button>
                        </ModalFooter>
                        </>
                    )}
                    </ModalContent>
                </Modal>
                <div className="cartItemsList">
                    <h1><b>Your Cart : {items.length}</b> items</h1>
                    {items}
                </div>
                <hr class="vertical-hr"/>
                <div className="checkoutlay">
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

                    <br></br>
                    <p><b>Est. total</b></p>
                    <div className="checkoutitems">
                        <p>With delivery</p>
                        <p><b>${(sumOfPriceOnline + ((10*sumOfPriceOnline)/100)).toFixed(2)}</b></p>
                        <p>With pickup</p>
                        <p><b>${(sumOfPriceOnline + ((5*sumOfPriceOnline)/100)).toFixed(2)}</b></p>
                    </div>
                    <small>Save <b>${((sumOfPriceOnline + ((10*sumOfPriceOnline)/100))-(sumOfPriceOnline + ((5*sumOfPriceOnline)/100))).toFixed(2)}</b></small>
                    
                    <br></br>
                    <br></br>
                    <div>
                            <Button onClick={handleOpen} color="primary">Pay Now</Button>   
                    </div>
                    <br></br>
                    <div className="extra">
                    <small>Free Delivery Available</small>
                    <Button size="sm" color="default" variant="light">Learn More</Button>
                     
                    </div>
                    
                </div>
                
            </div>
           
        
        
    )
}