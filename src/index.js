import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import TodoList from './TodoList';

ReactDOM.render(
    <AppContainer>
        <TodoList />
    </AppContainer>, 
    document.getElementById('root')
);
if (module.hot) {
    module.hot.accept('./TodoList', () => {
        const NewHello = require('./TodoList').default;
        ReactDOM.render(
            <AppContainer>
                <NewHello />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}
