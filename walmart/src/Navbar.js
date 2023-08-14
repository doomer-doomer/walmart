import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Image} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import "boxicons"
import walmart_logo from '../src/walmart-logo.png'

export default function Nav(){
    return(
        <Navbar position="static">
      <NavbarBrand>
        <Image src={walmart_logo} width={100}></Image>
        
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
            <Input
            type="text"
            placeholder="Search Here"
            labelPlacement="outside"
            endContent={
                <box-icon name='search' ></box-icon>
            }
            />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem >
          <div style={{borderRadius: '100%', overflow: "hidden"}}>
          <img src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" width="45px"></img>
          </div>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" href="#" variant="flat">
            Sign out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    )
}