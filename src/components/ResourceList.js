import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
    const resources = useResources(resource);

    return (
        <ul>
            {resources.map(record => (
                <li key={record.id}>{record.title}</li>
            ))}
        </ul>
    );
};

export default ResourceList;

//----------

// import React from 'react';
// import axios from 'axios';

// /*
// When do we want to make an API request?
// As soon as our component is first rendered to the screen.
// */

// class ResourceList extends React.Component {
//     state = { resources: [] };

//     async componentDidMount() {
//         console.log('RESOURCELIST - componentDidMount');
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/${this.props.resource}`
//         );
//         this.setState({ resources: response.data });
//     }

//     async componentDidUpdate(prevProps) {
//         if (prevProps.resource !== this.props.resource) {
//             console.log('RESOURCELIST *** componentDidUpdate', prevProps);
//             const response = await axios.get(
//                 `https://jsonplaceholder.typicode.com/${this.props.resource}`
//             );
//             this.setState({ resources: response.data });
//         }
//     }
//     /*
//     Make the component rerender itself after a successful request.
//     To do that, we make use of state. So, we call setState with the data fetched
//     from our axios call.
//     */
//     render() {
//         return <div>{this.state.resources.length}</div>;
//     }
// }

// export default ResourceList;
