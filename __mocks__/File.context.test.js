import React, {useContext} from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AuthenticationContextProvider, FileContextProvider, RepositoryContextProvider } from "../src";
import { FileContext } from '../src/components/file/File.context';



const FileContextCustomer = () => {
    const fileContextValues = useContext(FileContext);
    const fileContextKeysArray = Object.keys(fileContextValues);

    return(
        <div 
            data-testid="test"
        >
            {
               fileContextKeysArray.map((key)=>(`${key}/`)) 
            }
        </div>
    )
}




describe('FileContextProvider', () => {
    test('FileContextProvider renders correctly', () => {
        render(
            <AuthenticationContextProvider>
                <RepositoryContextProvider
                    onRepository={()=>{}}
                >
                    <FileContextProvider>
                        <FileContextCustomer text="text" data-testid="test"/>
                    </FileContextProvider>
                </RepositoryContextProvider>
            </AuthenticationContextProvider>
        );
        const test = screen.getByTestId('test');
        expect(test).toHaveTextContent('state/stateValues/actions/component/components/config');
    });
})