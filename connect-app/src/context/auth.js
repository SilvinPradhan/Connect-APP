import React, {createContext} from 'react';

const AuthContext = createContext({
    user: null,
    login: (data) => {},
    logout: () => {}
})