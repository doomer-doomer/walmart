import { useState,useEffect } from "react"
import './../Items.css'
import {Accordion, AccordionItem, Button} from "@nextui-org/react";

export default function Items2(props){
    return(
        <div>
        <div className="itemLay">
            <div className="itemimages" style={{width: "50px"}}>
                <img src={props.img} width="100%" ></img>
            </div>
            <div className="itemcontent" style={{fontWeight: '600', padding: '3px 10px 0 20px'}}>
                <p>{props.name}</p>
            </div>
            <div className="itemprices">
                <h4><b>{props.price_online}</b></h4>
                <small>Walmart price</small>
                {/* <br></br> */}

                {/* <h4><b>{props.price_pickup}</b></h4> */}
                {/* <small>Pickup</small> */}
                
            </div>

            
        </div>
        {/* <div>
            <div className="itemButtons">
                <Button color="primary" variant="light">Remove</Button>
                <Button color="primary" variant="light">Save for later</Button>
            </div>
            
            <hr></hr>
        </div> */}
        </div>
    )
}