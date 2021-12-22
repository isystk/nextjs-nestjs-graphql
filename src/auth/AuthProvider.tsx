import React, { FC, createContext, Dispatch, SetStateAction, useEffect, useState, ReactNode } from 'react'
import { User } from '@/store/StoreTypes'
import client from "@/utilities/api";
import { AUTH }  from '@/common/constants/api'

type AuthContextProps = {
  currentUser: User | null | undefined
  setCurrentUset: Dispatch<SetStateAction<User | null | undefined>>;
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  login: () => undefined,
  logout: () => undefined,
})

type Props = {
  children?: ReactNode
}

const AuthProvider: VFC = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<AuthContextProps>();
  const [token, setToken] = useState<AuthContextProps>();
  const [loading, setLoading] = useState(true);
  const fetchCurrentUser = async () => {
    try {
      const { data = {} } = await client.mutate({
        mutation: AUTH,
        variables: {
          token,
        },
      });
      setCurrentUser(data.auth);
      setLoading(false);
    } catch(errors) {
      // console.log(errors)
    }
  }
  
  useEffect(() => {
    const token = localStorage.getItem('authorization')
    setToken(token)
  })

  useEffect(() => {
    if (!token) {
      setCurrentUser(null)
    }
    (async () => {
      await fetchCurrentUser()
    })()
 }, [token]);
  
  if (loading) {
    return <>Loading...</>
  }

  console.log(currentUser)

  const login = (token) => {
    setLoading(true);
    setToken(token);
    localStorage.setItem('authorization', token);
  }

  const logout = () => {
    setToken(null);
    localStorage.clear();
  }
  
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
