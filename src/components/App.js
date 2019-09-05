import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    // Apply the useState function

    /*
    'posts' is the initial value, setResource is a function used to update the data,
    and resource is the current piece of data
    When we call setResource(), that causes our component to rerender.
    Anything we pass to setResource will be assigned to the variable resource.
    */
    const [resource, setResource] = useState('posts');

    return (
        <div>
            <UserList />
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            {/* resource is our piece of component-level state. 
            it will be a string of 'posts' or 'todos' */}
            <ResourceList resource={resource} />
        </div>
    );
};

export default App;
