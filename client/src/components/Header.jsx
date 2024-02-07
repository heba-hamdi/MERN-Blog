import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import { AiOutlineSearch } from "react-icons/ai";


const Header = () => {
    const path=useLocation().pathname
    console.log(path);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href={<Home />} className="space-x-2  ">
        <Button gradientDuoTone="purpleToPink" >Heba</Button>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
         Blog
        </span>
      </Navbar.Brand>
      <form>
        <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch }
            className="hidden lg:inline"
        />
      </form>
      <Button className="lg:hidden" color="gray" pill><AiOutlineSearch/></Button>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={'div'} active={path==="/"}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link as={'div'} active={path==="/about"}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link as={'div'} active={path==="/projects"}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <Button gradientDuoTone="purpleToBlue">Sign in</Button>

    </Navbar>
  );
};

export default Header;
