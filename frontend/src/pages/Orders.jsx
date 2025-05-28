// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext.jsx'
// import Title from '../components/Title.jsx'
// import { toast } from 'react-toastify'
// import axios from 'axios'

// const Orders = () => {

//   const { backendUrl,token, currency } = useContext(ShopContext)
//   const [orderData, setorderData ] = useState([])

//   const loadOrderData = async () => {
//     try {
//       if(!token){
//         return null
//       }

//       const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
//       if(response.data.success){
//         let allOrdersItem = []
//         response.data.orders.map((order)=>{
//           order.items.map((item)=>{
//             item['status'] = order.status 
//             item['payment'] = order.payment 
//             item['paymentMethod'] = order.paymentMethod 
//             item['date'] = order.date 
//             allOrdersItem.push(item)
//           })
//         })
//         setorderData(allOrdersItem.reverse())
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   useEffect(()=>{
//     loadOrderData()
//   },[token])

//   return (
//     <div className='border-t pt-16'>

//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       <div>
//         {
//           orderData.map((item, index)=>(
//             <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//               <div className='flex items-start gap-6 text-sm'>
//                 <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.name}</p>
//                   <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
//                       <p className='text-lg'>{currency}{item.price}</p>
//                       <p>Quantity:{item.quantity}</p>
//                       <p>Size: {item.size}</p>
//                   </div>
//                   <p className='mt-2'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
//                   <p className='mt-2'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
//                 </div>
//               </div>

//               <div className='md:w-1/2 flex justify-between'>
//                 <div className='flex items-center gap-2'>
//                   <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                   <p className='text-sm md:text-base'>{item.status}</p>
//                 </div>
//                 <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>track order</button>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Orders

import React, { useContext, useEffect, useState } from 'react'
import { 
  Box, 
  Flex, 
  Text, 
  Image, 
  Button, 
  useToast,
  Divider
} from '@chakra-ui/react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext)
  const [orderData, setOrderData] = useState([])
  const toast = useToast()

  const loadOrderData = async () => {
    try {
      if(!token) return null

      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      )
      
      if(response.data.success) {
        let allOrdersItem = []
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date
            })
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <Box borderTop="1px" borderColor="gray.200" pt={16}>
      <Box mb={6}>
        <Title text1={'MY'} text2={'ORDERS'} />
      </Box>

      <Box>
        {orderData.map((item, index) => (
          <Flex
            key={index}
            py={4}
            borderTop="1px"
            borderBottom="1px"
            borderColor="gray.200"
            color="gray.700"
            direction={['column', 'row']}
            align={['flex-start', 'center']}
            justify="space-between"
            gap={4}
          >
            <Flex align="flex-start" gap={6} fontSize="sm">
              <Image 
                src={item.image[0]} 
                alt={item.name}
                w={['50px', '80px']}
              />
              <Box>
                <Text fontSize={['sm', 'md']} fontWeight="medium">
                  {item.name}
                </Text>
                <Flex align="center" gap={3} mt={2} fontSize="md" color="gray.700">
                  <Text fontSize="lg">{currency}{item.price}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                  <Text>Size: {item.size}</Text>
                </Flex>
                <Text mt={2}>
                  Date: <Text as="span" color="gray.400">
                    {new Date(item.date).toDateString()}
                  </Text>
                </Text>
                <Text mt={2}>
                  Payment: <Text as="span" color="gray.400">
                    {item.paymentMethod}
                  </Text>
                </Text>
              </Box>
            </Flex>

            <Flex 
              w={['full', '50%']} 
              justify="space-between" 
              mt={[4, 0]}
              align="center"
            >
              <Flex align="center" gap={2}>
                <Box 
                  minW={2} 
                  h={2} 
                  borderRadius="full" 
                  bg={item.status === 'Delivered' ? 'green.500' : 'yellow.500'}
                />
                <Text fontSize={['sm', 'md']}>{item.status}</Text>
              </Flex>
              <Button 
                onClick={loadOrderData}
                variant="outline"
                px={4}
                py={2}
                fontSize="sm"
                fontWeight="medium"
                borderRadius="sm"
                _hover={{ bg: 'gray.100' }}
              >
                Track Order
              </Button>
            </Flex>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}

export default Orders