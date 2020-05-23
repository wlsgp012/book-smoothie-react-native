import React from 'react'
import Styled from 'styled-components/native'
import Header from '~/Screens/Todo/TodoListView/Heder'
import TodoList from '~/Screens/Todo/TodoListView/TodoList'

const Container = Styled.SafeAreaView`
  flex: 1
`

export const TodoListView = () => (
  <Container>
    <Header />
    <TodoList />
  </Container>
)
