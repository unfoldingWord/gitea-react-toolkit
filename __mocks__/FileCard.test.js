import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileCard from '../src/components/file/FileCard';
import { checkProps } from './testUtils';
import { authenticate } from '../src/core/gitea-api/authentication';




jest.mock('markdown-translatable/dist/components/block-editable/BlockEditable', () => 
({preview, markdown, onEdit, editable}) => (
    <input
        data-testid="blockEditable"
        value={markdown}
        onChange={(event) => {
            if(editable){
                onEdit(event.target.value)
            }
        }}
        readOnly
    />
));




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

describe('cardHeader',() => {
    test('cardHeader is inside the document and visible', () => {
        render(<FileCard {...defaultProps} />);
        const cardHeader = screen.getByTestId('cardHeader');
        expect(cardHeader).toBeInTheDocument();
        expect(cardHeader).toBeVisible();
    });
})

describe('blockEditable', () => {
    test('blockEditable is inside the document', () => {
        render(<FileCard {...defaultProps} />);
        const blockEditable = screen.getByTestId('blockEditable');
        expect(blockEditable).toBeInTheDocument();
    });

    test('blockEditable is editable when user is authenticated', () => {
        render(<FileCard {...defaultProps} />);
        const blockEditable = screen.getByTestId('blockEditable');
        fireEvent.change(blockEditable, {target: {value: 'changed text'}});
        expect(blockEditable.value).toBe('changed text');
    });

    test('blockEditable is not editable when user is not authenticated', () => {
        const updatedProps = {...defaultProps, isAuthenticated: false}
        render(<FileCard {...updatedProps} />);
        const blockEditable = screen.getByTestId('blockEditable');
        fireEvent.change(blockEditable, {target: {value: 'changed text'}});
        expect(blockEditable.value).toBe(defaultProps.file.content);
    });
})

describe('previewButton', () => {
    test('previewButton is inside the document and visible', () => {
        render(<FileCard {...defaultProps} />);
        const previewButton = screen.getByTestId('previewButton');
        expect(previewButton).toBeInTheDocument();
        expect(previewButton).toBeVisible();
    });
})

describe('previewIcon', () => {
    test('Initially previewIconOutlined is inside the document and visible and previewIcon is not', () => {
        render(<FileCard {...defaultProps} />);
        const previewIconOutlined = screen.queryByTestId('previewIconOutlined');
        expect(previewIconOutlined).toBeInTheDocument();
        expect(previewIconOutlined).toBeVisible();
        const previewIcon = screen.queryByTestId('previewIcon');
        expect(previewIcon).toBeNull();
    });

    test('switch from previewIconOutlined to previewIcon and vice versa', () => {
        render(<FileCard {...defaultProps} />);
        const previewButton = screen.getByTestId('previewButton');
        fireEvent.click(previewButton)
        let previewIconOutlined = screen.queryByTestId('previewIconOutlined');
        expect(previewIconOutlined).toBeNull();
        let previewIcon = screen.queryByTestId('previewIcon');
        expect(previewIcon).toBeInTheDocument();
        expect(previewIcon).toBeVisible();
        fireEvent.click(previewButton)
        previewIconOutlined = screen.queryByTestId('previewIconOutlined');
        expect(previewIconOutlined).toBeInTheDocument();
        expect(previewIconOutlined).toBeVisible();
        previewIcon = screen.queryByTestId('previewIcon');
        expect(previewIcon).toBeNull();
    });
})
