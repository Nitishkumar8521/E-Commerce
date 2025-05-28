import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { useToast, Box, Button, Checkbox, Flex, FormControl, FormLabel, Image, Input, Select, Text, Textarea, Wrap, WrapItem } from '@chakra-ui/react';

const Add = ({ token }) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const toast = useToast();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, { headers: { token } });

      if (response.data.success) {
        toast({ title: response.data.message, status: 'success', position: 'top' });
        setName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');
      } else {
        toast({ title: response.data.message, status: 'error', position: 'top' });
      }
    } catch (error) {
      console.log(error);
      toast({ title: error.message, status: 'error', position: 'top' });
    }
  };

  const toggleSize = (size) => {
    setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size]);
  };

  return (
    <Box as="form" onSubmit={onSubmitHandler} display="flex" flexDirection="column" gap={4}>
      <FormControl>
        <FormLabel>Upload Images</FormLabel>
        <Flex gap={2} flexWrap="wrap">
          {[1, 2, 3, 4].map((num) => {
            const img = eval(`image${num}`);
            const setImg = eval(`setImage${num}`);
            return (
              <label key={num}>
                <Image 
                  src={!img ? assets.upload_area : URL.createObjectURL(img)} 
                  w="80px" 
                  cursor="pointer" 
                  borderRadius="md" 
                  border="1px solid" 
                  borderColor="gray.300"
                />
                <Input
                  type="file"
                  hidden
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </label>
            );
          })}
        </Flex>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Product Name</FormLabel>
        <Input placeholder="Type here" value={name} onChange={(e) => setName(e.target.value)} maxW="500px" />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Product Description</FormLabel>
        <Textarea placeholder="Write content here" value={description} onChange={(e) => setDescription(e.target.value)} maxW="500px" />
      </FormControl>

      <Flex gap={6} flexWrap="wrap">
        <FormControl>
          <FormLabel>Product Category</FormLabel>
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Sub Category</FormLabel>
          <Select value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Product Price</FormLabel>
          <Input type="number" placeholder="25" value={price} onChange={(e) => setPrice(e.target.value)} w="120px" />
        </FormControl>
      </Flex>

      <FormControl>
        <FormLabel>Product Sizes</FormLabel>
        <Wrap>
          {["S", "M", "L", "XL", "XXL"].map(size => (
            <WrapItem key={size}>
              <Text
                px={3} py={1}
                cursor="pointer"
                bg={sizes.includes(size) ? "pink.100" : "gray.200"}
                borderRadius="md"
                onClick={() => toggleSize(size)}
              >
                {size}
              </Text>
            </WrapItem>
          ))}
        </Wrap>
      </FormControl>

      <Checkbox isChecked={bestseller} onChange={() => setBestseller(prev => !prev)}>
        Add to bestseller
      </Checkbox>

      <Button type="submit" colorScheme="blackAlpha" w="28" mt={4}>ADD</Button>
    </Box>
  );
};

export default Add;

