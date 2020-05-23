import React, {createContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

interface Props {
  children: JSX.Element | Array<JSX.Element>
}

const TodoListContext = createContext<ITodoListContext>({
  todoList: [],
  addTodoList: (todo: string): void => {},
  removeTodoList: (index: number): void => {},
})

const TodoListContextProvider = ({children}: Props) => {
  const [todoList, setTodoList] = useState<Array<string>>([])

  const addTodoList = (todo: string): void => {
    const list = [...todoList, todo]
    setTodoList(list)
    AsyncStorage.setItem('todoList', JSON.stringify(list))
  }

  const removeTodoList = (index: number): void => {
    const list = todoList.filter((_, i) => index !== i)
    setTodoList(list)
    AsyncStorage.setItem('todoList', JSON.stringify(list))
  }

  const initData = () => {
    AsyncStorage.getItem('todoList')
      .then(list => {
        setTodoList(JSON.parse(list || '[]'))
        return list
      })
      .catch(console.log)
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <TodoListContext.Provider value={{todoList, addTodoList, removeTodoList}}>
      {children}
    </TodoListContext.Provider>
  )
}

export {TodoListContextProvider, TodoListContext}
