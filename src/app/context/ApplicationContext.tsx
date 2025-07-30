import React, { createContext, useContext, useState, ReactNode } from 'react';
import {Application} from "../model/application";

type ApplicationContextType = {
    application: Application;
    setApplication: (data: Application) => void;
};

const defaultApplication: Application = {
    basicInformation: {
        idNumber: '',
        email: '',
        mobileNumber: '',
    },
    personalInformation: {
        // add default values for personal info
        Name: '',
        surname: '',
        dateOfBirth: '',
    },
    reference: '',
};

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export const ApplicationProvider = ({ children }: { children: ReactNode }) => {
    const [application, setApplication] = useState<Application>(defaultApplication);

    return (
        <ApplicationContext.Provider value={{ application, setApplication }}>
    {children}
    </ApplicationContext.Provider>
);
};

export const useApplicationContext = () => {
    const context = useContext(ApplicationContext);
    if (!context) {
        throw new Error('useApplicationContext must be used within ApplicationProvider');
    }
    return context;
};
