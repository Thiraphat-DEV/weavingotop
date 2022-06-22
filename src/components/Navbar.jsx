
import { Link } from "react-router-dom";
import { chakra } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <chakra.div w='100%' py='30px' px='0' mb='80px'>
      <chakra.ul display='flex' mx='auto' my='0' alignItems='center' justifyItems='flex-end' listStyleType='none' borderBottom='4px solid #40ade4'  >
        <chakra.li fontWeight='700' display='flex' alignItems='center' mr='auto'>
          <chakra.img src="" alt=""  mr='10px' filter='invert(20%)' w='40px' mt='8px' />
          <span>LOGO</span>
        </chakra.li>

        <chakra.li fontWeight='700' m='20px' >
          <Link to='/signup'>Signup</Link>
        </chakra.li>
        <chakra.li  fontWeight='700' m='20px'>
          <Link to='/login'>Login</Link>
        </chakra.li>

	<chakra.button px='3' py='2' bg='green.200' rounded='lg' mr='5'>Logout</chakra.button>
      </chakra.ul>
    </chakra.div>
  );
};

export default Navbar;
