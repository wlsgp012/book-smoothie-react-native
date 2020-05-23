import React, {useContext} from 'react'
import Styled from 'styled-components/native'
import {FlatList} from 'react-native'
import {TodoListContext} from '~/Context/TodoListContext'
import TodoItem from '~/Screens/Todo/TodoListView/TodoList/TodoItem'
import EmptyItem from '~/Screens/Todo/TodoListView/TodoList/EmptyItem'

const Container = Styled(FlatList)`
`

const TodoList = () => {
  const {todoList, removeTodoList} = useContext<ITodoListContext>(
    TodoListContext,
  )
  return (
    <Container
      data={todoList}
      keyExtractor={(item, index) => `todo-${index}`}
      ListEmptyComponent={<EmptyItem />}
      renderItem={({item, index}) => (
        <TodoItem
          text={item as string}
          onDelete={() => removeTodoList(index)}
        />
      )}
      contentContainerStyle={todoList.length === 0 && {flex: 1}}
    />
  )
}
export default TodoList
