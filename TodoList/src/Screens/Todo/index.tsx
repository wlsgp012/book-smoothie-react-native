import React from 'react'
import Styled from 'styled-components/native'
import {TodoListView} from '~/Screens/Todo/TodoListView'
import AddTodo from '~/Screens/Todo/AddTodo'

const Container = Styled.View`
  flex: 1;
`

export const Todo = () => (
  <Container>
    <TodoListView />
    <AddTodo />
  </Container>
)
