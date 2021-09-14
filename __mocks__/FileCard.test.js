import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FileCard from '../src/components/file/FileCard';
import { findByAttribute, checkProps } from './testUtils';

Enzyme.configure({
    adapter: new Adapter(),
});

const mockSetPreview = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}))

import { useState } from 'react';

const defaultProps = {
    repository: {
        owner: {
            username: 'username',
            avatar_url: 'avatar_url',
        },
        name: 'name',
        avatar_url: 'avatar_url',
        permissions: {
            push: true,
        },
        full_name: 'full_name',
        default_branch: 'default_branch'
    },
    file:{
        name: 'file.name',
        path: 'file.path',
        sha: 'file.sha',
        content: 'file.content',
        branch: 'file.branch',
        filepath: 'filepath',
        save: () => {},
        dangerouslyDelete: () => {},
        close: () => {}
    },
    isAuthenticated: true
}

const setupWrapper = (props = {}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<FileCard {...setupProps}/>)
}

describe('switch the preview state',() => {    
    test('switch the preview state from true to false', () => {
        useState.mockReturnValue([true, mockSetPreview]);
        const wrapper = setupWrapper();
        const blockEditable = findByAttribute(wrapper, 'blockEditable');
        expect(blockEditable.props().preview).toBeTruthy();
        const previewButton = findByAttribute(wrapper, 'previewButton');
        previewButton.simulate('click');
        expect(mockSetPreview).toBeCalledWith(false);
    });

    test('switch the preview state from false to true', () => {
        useState.mockReturnValue([false, mockSetPreview]);
        const wrapper = setupWrapper();
        const blockEditable = findByAttribute(wrapper, 'blockEditable');
        const previewButton = findByAttribute(wrapper, 'previewButton');
        previewButton.simulate('click');
        expect(mockSetPreview).toBeCalledWith(true);
    });
})
