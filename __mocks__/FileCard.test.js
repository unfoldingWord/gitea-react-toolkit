import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FileCard from '../src/components/file/FileCard';
import { findByAttribute, checkProps } from './testUtils';

Enzyme.configure({
    adapter: new Adapter(),
});

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

test('FileForm PropTypes', () => {
    const conformingProps = {
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
        isAuthenticated: true,
    }
    checkProps(FileCard, conformingProps);
});

// render tests
describe('render fileCard elements',() => {
    test('render fileCard', () => {
        const wrapper = setupWrapper();
        const fileCard = findByAttribute(wrapper, 'component-fileCard');
        expect(fileCard.length).toBe(1);
    });
    
    test('render cardHeader', () => {
        const wrapper = setupWrapper();
        const cardHeader = findByAttribute(wrapper, 'cardHeader');
        expect(cardHeader.length).toBe(1);
    });
    
    test('render blockEditable', () => {
        const wrapper = setupWrapper();
        const blockEditable = findByAttribute(wrapper, 'blockEditable');
        expect(blockEditable.length).toBe(1);
    });
    
    test('render previewButton', () => {
        const wrapper = setupWrapper();
        const previewButton = findByAttribute(wrapper, 'previewButton');
        expect(previewButton.length).toBe(1);
    });
    
    test('render saveButton', () => {
        const wrapper = setupWrapper();
        const saveButton = findByAttribute(wrapper, 'saveButton');
        expect(saveButton.length).toBe(1);
    });

    test('render deleteButton', () => {
        const wrapper = setupWrapper();
        const deleteButton = findByAttribute(wrapper, 'deleteButton');
        expect(deleteButton.length).toBe(1);
    });

    test('render closeButton', () => {
        const wrapper = setupWrapper();
        const closeButton = findByAttribute(wrapper, 'closeButton');
        expect(closeButton.length).toBe(1);
    });
});