import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileCard from '../src/components/file/FileCard';
import { checkProps } from './testUtils';




jest.mock('markdown-translatable/dist/components/block-editable/BlockEditable', () => 
({markdown, onEdit, editable}) => (
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

describe('saveButton', () => {
    test('saveButton is inside the document and visible and disabled initialy', () => {
        render(<FileCard {...defaultProps} />);
        const saveButton = screen.getByTestId('saveButton');
        expect(saveButton).toBeInTheDocument();
        expect(saveButton).toBeVisible();
        expect(saveButton).toBeDisabled();
    });

    test('switch saveButton from enable to disable and vice versa', () => {
        render(<FileCard {...defaultProps} />);
        const blockEditable = screen.getByTestId('blockEditable');
        fireEvent.change(blockEditable, {target: {value: 'changed text'}});
        let saveButton = screen.getByTestId('saveButton');
        expect(saveButton).toBeEnabled();
        fireEvent.change(blockEditable, {target: {value: defaultProps.file.content}});
        saveButton = screen.getByTestId('saveButton');
        expect(saveButton).toBeDisabled();
    });

    test('saveButton is enabled when the text change and the push permission is granted', () => {
        render(<FileCard {...defaultProps} />);
        const blockEditable = screen.getByTestId('blockEditable');
        fireEvent.change(blockEditable, {target: {value: 'changed text'}});
        const saveButton = screen.getByTestId('saveButton');
        expect(saveButton).toBeEnabled();
    });

    test('saveButton is disabled whenpush permission is not granted event it the text change or not', () => {
        const updatedProps = {
            ...defaultProps, 
            repository: {...defaultProps.repository,
                permissions: {
                    ...defaultProps.repository.permissions, push: false
                }
            }
        }
        render(<FileCard {...updatedProps} />);
        const saveButton = screen.getByTestId('saveButton');
        expect(saveButton).toBeDisabled();
        const blockEditable = screen.getByTestId('blockEditable');
        fireEvent.change(blockEditable, {target: {value: 'changed text'}});
        expect(saveButton).toBeDisabled();
    });


})

describe('saveIcon', () => {
    test('Initially saveIconOutlined is inside the document and visible and saveIcon is not', () => {
        render(<FileCard {...defaultProps} />);
        const saveIconOutlined = screen.queryByTestId('saveIconOutlined');
        expect(saveIconOutlined).toBeInTheDocument();
        expect(saveIconOutlined).toBeVisible();
        const saveIcon = screen.queryByTestId('saveIcon');
        expect(saveIcon).toBeNull();
    });

    test('switch from saveIconOutlined to saveIcon and vice versa', () => {
        render(<FileCard {...defaultProps} />);
        const blockEditable = screen.getByTestId('blockEditable');
        fireEvent.change(blockEditable, {target: {value: 'changed text'}});
        let saveIconOutlined = screen.queryByTestId('saveIconOutlined');
        expect(saveIconOutlined).toBeNull();
        let saveIcon = screen.queryByTestId('saveIcon');
        expect(saveIcon).toBeInTheDocument();
        expect(saveIcon).toBeVisible();
        fireEvent.change(blockEditable, {target: {value: defaultProps.file.content}});
        saveIconOutlined = screen.queryByTestId('saveIconOutlined');
        expect(saveIconOutlined).toBeInTheDocument();
        expect(saveIconOutlined).toBeVisible();
        saveIcon = screen.queryByTestId('saveIcon');
        expect(saveIcon).toBeNull();
    });
})


describe('Delete button', () => {
    test('Delete button is inside the document and visible', () => {
        render(<FileCard {...defaultProps} />);
        const deleteButton = screen.queryByTestId('deleteButton');
        expect(deleteButton).toBeInTheDocument();
        expect(deleteButton).toBeVisible();
    });

    test('Delete button is enabled when push permissions is granted', () => {
        render(<FileCard {...defaultProps} />);
        const deleteButton = screen.queryByTestId('deleteButton');
        expect(deleteButton).toBeEnabled();
    });

    test('Delete button is disabled when push permissions is not granted', () => {
        const updatedProps = {
            ...defaultProps, 
            repository: {...defaultProps.repository,
                permissions: {
                    ...defaultProps.repository.permissions, push: false
                }
            }
        }
        render(<FileCard {...updatedProps} />);
        const deleteButton = screen.queryByTestId('deleteButton');
        expect(deleteButton).toBeDisabled();
    });
})