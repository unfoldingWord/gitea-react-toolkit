import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FileForm from '../src/components/file/FileForm';
import { findByAttribute, checkProps } from './testUtils';

Enzyme.configure({
    adapter: new Adapter(),
});

const defaultProps = { onSubmit: () => {} }

const setupWrapper = (props = {}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<FileForm {...setupProps}/>)
}

const mockSetBranch = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState, mockSetBranch]
}))

// render tests
describe('render fileForm elements',() => {
    test('render fileForm', () => {
        const wrapper = setupWrapper();
        const fileForm = findByAttribute(wrapper, 'component-fileForm');
        expect(fileForm.length).toBe(1);
    });
    
    test('render branch-textField', () => {
        const wrapper = setupWrapper();
        const branch = findByAttribute(wrapper, 'branch-textField');
        expect(branch.length).toBe(1);
    });
    
    test('render filepath-textField', () => {
        const wrapper = setupWrapper();
        const filepath = findByAttribute(wrapper, 'filepath-textField');
        expect(filepath.length).toBe(1);
    });
    
    test('render defaultContent-textField', () => {
        const wrapper = setupWrapper();
        const defaultContent = findByAttribute(wrapper, 'defaultContent-textField');
        expect(defaultContent.length).toBe(1);
    });
    
    test('render submit-button', () => {
        const wrapper = setupWrapper();
        const submit = findByAttribute(wrapper, 'submit-button');
        expect(submit.length).toBe(1);
    });
});

// PropTypes tests
test('FileForm PropTypes', () => {
    const conformingProps = {
        submitText: "text",
        onSubmit: () => {},
        branch: 'branch',
        filepath: 'filepath',
        defaultContent: 'defaultContent',
    }
    checkProps(FileForm, conformingProps)
});


// input text 
describe('text input change',() => {
    test('update the state with the input value of branch', () => {
        const wrapper = setupWrapper();
        const textField = findByAttribute(wrapper, 'branch-textField');
        const mockEvent = { target: { value: 'branch' } };
        textField.simulate('change', mockEvent);
        expect(mockSetBranch).toBeCalledWith('branch')
    });

    test('update the state with the input value of filepath', () => {
        const wrapper = setupWrapper();
        const textField = findByAttribute(wrapper, 'filepath-textField');
        const mockEvent = { target: { value: 'filepath' } };
        textField.simulate('change', mockEvent);
        expect(mockSetBranch).toBeCalledWith('filepath')
    });

    test('update the state with the input value of defaultContent', () => {
        const wrapper = setupWrapper();
        const textField = findByAttribute(wrapper, 'defaultContent-textField');
        const mockEvent = { target: { value: 'defaultContent' } };
        textField.simulate('change', mockEvent);
        expect(mockSetBranch).toBeCalledWith('defaultContent')
    });
})