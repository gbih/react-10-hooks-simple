import { useState, useEffect } from 'react';
import axios from 'axios';

//------------------------------
/*
This function has no tie to any specific component. 
We can reuse this anywhere else in our project.
*/
const useResources = resource => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        (async resource => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`
            );
            setResources(response.data);
        })(resource);
    }, [resource]);

    return resources;
};

export default useResources;
