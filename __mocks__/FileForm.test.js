import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import FileForm from '../src/components/file/FileForm';
import { checkProps } from './testUtils';

const defaultProps = { onSubmit: () => {} }

// render tests
describe('FileForm',() => {
    test('render fileForm', () => {
        render(<FileForm {...defaultProps} />);
    });
    test('text inputs changes', () => {
        render(<FileForm {...defaultProps} />);
        const branchTextField = screen.queryByTestId('branch-textField');
        fireEvent.change(branchTextField, {target: {value: 'branch'}});
        expect(branchTextField.value).toBe('branch');
        
        const filepathTextField = screen.queryByTestId('filepath-textField');
        fireEvent.change(filepathTextField, {target: {value: 'filepath'}});
        expect(filepathTextField.value).toBe('filepath');

        const defaultContentTextField = screen.queryByTestId('defaultContent-textField');
        fireEvent.change(defaultContentTextField, {target: {value: 'defaultContent'}});
        expect(defaultContentTextField.value).toBe('defaultContent');
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
