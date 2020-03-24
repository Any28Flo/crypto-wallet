import { createContext } from 'react';

const MyContext = createContext({
    user: null,
    updateUser: (response) => { console.log(response)}
});

export default MyContext;