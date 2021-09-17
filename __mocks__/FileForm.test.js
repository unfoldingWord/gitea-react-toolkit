import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileForm from '../src/components/file/FileForm';
import { checkProps } from './testUtils';

const defaultProps = { onSubmit: () => {} }

// render tests
describe('TextFields',() => {
    test('TextFields are inside the document', () => {
        render(<FileForm {...defaultProps} />);
        const branchTextField = screen.getByTestId('branch-textField');
        expect(branchTextField).toBeInTheDocument();

        const filepathTextField = screen.getByTestId('filepath-textField');
        expect(filepathTextField).toBeInTheDocument();

        const defaultContentTextField = screen.getByTestId('defaultContent-textField');
        expect(defaultContentTextField).toBeInTheDocument();
    });

    test('TextFields are visible', () => {
        render(<FileForm {...defaultProps} />);
        const branchTextField = screen.getByTestId('branch-textField');
        expect(branchTextField).toBeVisible();

        const filepathTextField = screen.getByTestId('filepath-textField');
        expect(filepathTextField).toBeVisible();

        const defaultContentTextField = screen.getByTestId('defaultContent-textField');
        expect(defaultContentTextField).toBeVisible();
    });

    test('TextFields handle input change correctly', () => {
        render(<FileForm {...defaultProps} />);
        const branchTextField = screen.getByTestId('branch-textField');
        fireEvent.change(branchTextField, {target: {value: 'branch'}});
        expect(branchTextField.value).toBe('branch');
        
        const filepathTextField = screen.getByTestId('filepath-textField');
        fireEvent.change(filepathTextField, {target: {value: 'filepath'}});
        expect(filepathTextField.value).toBe('filepath');

        const defaultContentTextField = screen.getByTestId('defaultContent-textField');
        fireEvent.change(defaultContentTextField, {target: {value: 'defaultContent'}});
        expect(defaultContentTextField.value).toBe('defaultContent');
    });
});

describe('submit button',() => {
    test('submit button is inside the document', () => {
        render(<FileForm {...defaultProps} />);
        const button = screen.getByTestId('button');
        expect(button).toBeInTheDocument();
    });
    test('submit button is visible', () => {
        render(<FileForm {...defaultProps} />);
        const button = screen.getByTestId('button');
        expect(button).toBeVisible();
    });
    test('submit button is disabled initially ', () => {
        render(<FileForm {...defaultProps} />);
        const button = screen.getByTestId('button');
        expect(button).toBeDisabled();
    });
    test('submit button is is enabled after typing the branch and the filePath', () => {
        render(<FileForm {...defaultProps} />);
        const button = screen.getByTestId('button');
        const branchTextField = screen.getByTestId('branch-textField');
        const filepathTextField = screen.getByTestId('filepath-textField');
        fireEvent.change(filepathTextField, {target: {value: 'filepath'}});
        fireEvent.change(branchTextField, {target: {value: 'branch'}});
        expect(button).toBeEnabled();
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
