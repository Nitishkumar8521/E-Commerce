// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { toast } from 'react-toastify'
// import axios from 'axios'

// const Login = () => {

//   const [currentState, setCurrentState ] = useState('Login')
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

//   const [name, setName ] = useState('')
//   const [password, setPassword ] = useState('')
//   const [email, setEmail ] = useState('')
  
//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     try {
//       if(currentState === 'Sign Up'){
//         const response = await axios.post(backendUrl + '/api/user/register', {name, email, password})
//         if(response.data.success){
//           setToken(response.data.token)
//           localStorage.setItem('token', response.data.token)
//         }else{
//           toast.error(response.data.message)
//         }
//       }else{
//         const response = await axios.post(backendUrl + '/api/user/login', {email, password})
//         if(response.data.success){
//           setToken(response.data.token)
//           localStorage.setItem('token', response.data.token)
//         }else{
//           toast.error(response.data.message)
//         }
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   useEffect(()=>{
//     if(token){
//       navigate('/')
//     }
//   },[token])

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//         <p className='prata-regular text-3xl'>{currentState}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
//       </div>
//       {currentState == 'Sign Up' && <input onChange={(e)=> setName(e.target.value)} value={name} required placeholder='Name' type="text" className='w-full px-3 py-2 border border-gray-800' />}
//       <input onChange={(e)=> setEmail(e.target.value)} value={email} required placeholder='Email' type="Email" className='w-full px-3 py-2 border border-gray-800' />
//       <input onChange={(e)=> setPassword(e.target.value)} value={password} required placeholder='Password' type="password" className='w-full px-3 py-2 border border-gray-800' />
//       <div className='w-full flex justify-between text-sm mt-[-8px]'>
//         <p className='cursor-pointer'>Forgot your password</p>
//         {
//           currentState === 'Login'
//           ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
//           : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
//         }
//       </div>
//       <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ?'Sign In' : 'Sign Up'}</button>
//     </form>
//   )
// }

// export default Login

import React, { useContext, useEffect, useState } from 'react'
import { 
  Box, 
  Flex, 
  Text, 
  Input, 
  Button, 
  FormControl,
  useToast
} from '@chakra-ui/react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
  const toast = useToast()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if(currentState === 'Sign Up'){
        const response = await axios.post(backendUrl + '/api/user/register', {name, email, password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }else{
          toast({
            title: 'Error',
            description: response.data.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }
      }else{
        const response = await axios.post(backendUrl + '/api/user/login', {email, password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }else{
          toast({
            title: 'Error',
            description: response.data.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }
      }
    } catch (error) {
      console.log(error)
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
    if(token){
      navigate('/')
    }
  }, [token])

  return (
    <FormControl 
      as="form" 
      onSubmit={onSubmitHandler}
      display="flex"
      flexDirection="column"
      alignItems="center"
      w={['90%', '96']}
      m="auto"
      mt={14}
      gap={4}
      color="gray.800"
    >
      <Flex alignItems="center" gap={2} mb={2} mt={10}>
        <Text fontFamily="Prata" fontSize="3xl">{currentState}</Text>
        <Box border="none" h="1.5px" w={8} bg="gray.800" />
      </Flex>

      {currentState == 'Sign Up' && (
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
          placeholder="Name"
          type="text"
          w="full"
          px={3}
          py={2}
          border="1px"
          borderColor="gray.800"
        />
      )}

      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        placeholder="Email"
        type="email"
        w="full"
        px={3}
        py={2}
        border="1px"
        borderColor="gray.800"
      />

      <Input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
        placeholder="Password"
        type="password"
        w="full"
        px={3}
        py={2}
        border="1px"
        borderColor="gray.800"
      />

      <Flex w="full" justify="space-between" fontSize="sm" mt={-2}>
        <Text cursor="pointer">Forgot your password</Text>
        {currentState === 'Login' ? (
          <Text onClick={() => setCurrentState('Sign Up')} cursor="pointer">
            Create account
          </Text>
        ) : (
          <Text onClick={() => setCurrentState('Login')} cursor="pointer">
            Login Here
          </Text>
        )}
      </Flex>

      <Button
        type="submit"
        bg="black"
        color="white"
        fontWeight="light"
        px={8}
        py={2}
        mt={4}
        _hover={{ bg: 'gray.800' }}
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </Button>
    </FormControl>
  )
}

export default Login