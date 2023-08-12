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
          <Button variant="light" color="default" href="#">Login</Button>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    )
}