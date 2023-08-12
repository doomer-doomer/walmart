import { useState,useEffect } from "react"
import './Items.css'
import {Accordion, AccordionItem, Button} from "@nextui-org/react";

export default function Items(props){
    return(
        <div>
        <div className="itemLay">
            <div className="itemimages">
                <img src={props.img} width="100px" ></img>
            </div>
            <div className="itemcontent">
                <h1>{props.name}</h1>
                <Accordion defaultExpandedKeys={["2"]}>
                    <AccordionItem
                        key="2"
                        aria-label="Add on Services"
                        subtitle={
                        <span>
                            Select Options
                        </span>
                        }
                        title="Add on Services"
                    >
                            <p>Available options: <br></br>Walmart Protection Plus</p>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="itemprices">
                <h4><b>{props.price_online}</b></h4>
                <small>2-days Delivery</small>
                <br></br>

                <h4><b>{props.price_pickup}</b></h4>
                <small>Pickup</small>
                
            </div>

            
        </div>
        <div>
            <div className="itemButtons">
                <Button color="primary" variant="light">Remove</Button>
                <Button color="primary" variant="light">Save for later</Button>
            </div>
            
            <hr></hr>
        </div>
        </div>
    )
}