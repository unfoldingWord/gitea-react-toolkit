import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import FileForm from '../src/components/file/FileForm';

Enzyme.configure({
    adapter: new Adapter(),
});

const defaultProps = { onSubmit: () => {} }

const setupWrapper = (props = {}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<FileForm {...setupProps}/>)
}

const findByAttribute = (wrapper, attribute) => wrapper.find(`[data-test='${attribute}']`)

// render tests
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

// PropTypes tests
test('PropTypes', () => {
    const expectedProps = {
        submitText: "text",
        onSubmit: () => {},
        branch: 'branch',
        filepath: 'filepath',
        defaultContent: 'defaultContent',
    }
    let propError = checkPropTypes(FileForm.propTypes, expectedProps, 'prop', FileForm.name);
    expect(propError).toBeUndefined();
});