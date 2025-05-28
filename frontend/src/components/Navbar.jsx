import React, { useContext } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <Flex align="center" justify="space-between" py={5} fontWeight="medium">
      {/* Logo */}
      <RouterLink to="/">
        <Image src={assets.logo} w={36} alt="Company Logo" />
      </RouterLink>

      {/* Desktop Navigation */}
      <List
        display={{ base: "none", sm: "flex" }}
        gap={5}
        fontSize="sm"
        color="gray.700"
      >
        {["/", "/collection", "/about", "/contact"].map((path) => (
          <ListItem key={path}>
            <NavLink
              to={path}
              style={({ isActive }) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                borderBottom: isActive ? "1.5px solid #374151" : "none",
              })}
            >
              <Text>{path === "/" ? "HOME" : path.slice(1).toUpperCase()}</Text>
            </NavLink>
          </ListItem>
        ))}
      </List>

      {/* Icons */}
      <Flex align="center" gap={6}>
        {/* Search Icon */}
        <Image
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="Search"
          w={5}
          cursor="pointer"
        />

        {/* Profile Dropdown */}
        <Box
          position="relative"
          _hover={{ ".dropdown-menu": { display: "block" } }}
        >
          <Image
            onClick={() => !token && navigate("/login")}
            src={assets.profile_icon}
            alt="Profile"
            w={5}
            cursor="pointer"
          />
          {token && (
            <Box
              className="dropdown-menu"
              display="none"
              position="absolute"
              right={0}
              pt={4}
            >
              <Flex
                direction="column"
                gap={2}
                w={36}
                py={3}
                px={5}
                bg="gray.50"
                color="gray.500"
                borderRadius="md"
              >
                <Text cursor="pointer" _hover={{ color: "black" }}>
                  My Profile
                </Text>
                <Text
                  onClick={() => navigate("/orders")}
                  cursor="pointer"
                  _hover={{ color: "black" }}
                >
                  Orders
                </Text>
                <Text
                  onClick={logout}
                  cursor="pointer"
                  _hover={{ color: "black" }}
                >
                  Logout
                </Text>
              </Flex>
            </Box>
          )}
        </Box>

        {/* Cart Icon */}
        <RouterLink to="/cart" position="relative">
          <Box position="relative">
            <Image src={assets.cart_icon} w={5} minW={5} alt="Cart" />
            {getCartCount() > 0 && (
              <Text
                position="absolute"
                right="-0.5" 
                bottom="-0.5" 
                w={4}
                h={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="black"
                color="white"
                borderRadius="full"
                fontSize="xs"
                lineHeight={1}
              >
                {getCartCount()}
              </Text>
            )}
          </Box>
        </RouterLink>

        {/* Mobile Menu Toggle */}
        <Image
          onClick={onToggle}
          src={assets.menu_icon}
          w={5}
          cursor="pointer"
          display={{ base: "block", sm: "none" }}
          alt="Menu"
        />
      </Flex>

      {/* Mobile Menu */}
      <Box
        position="fixed"
        top={0}
        right={0}
        bottom={0}
        bg="white"
        w={isOpen ? "full" : 0}
        overflow="hidden"
        transition="all 0.3s ease"
        zIndex={10}
      >
        <Flex direction="column" color="gray.600">
          <Flex onClick={onClose} align="center" gap={4} p={3} cursor="pointer">
            <Image
              src={assets.dropdown_icon}
              h={4}
              transform="rotate(180deg)"
              alt="Close"
            />
            <Text>Back</Text>
          </Flex>
          {["/", "/collection", "/about", "/contact"].map((path) => (
            <NavLink
              key={path}
              onClick={onClose}
              to={path}
              style={({ isActive }) => ({
                padding: "8px 24px",
                borderBottom: "1px solid #E2E8F0",
                backgroundColor: isActive ? "#F7FAFC" : "transparent",
              })}
            >
              {path === "/" ? "HOME" : path.slice(1).toUpperCase()}
            </NavLink>
          ))} 
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
