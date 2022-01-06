import checkPropTypes from 'check-prop-types';

export const findByAttribute = (wrapper, attribute) => wrapper.find(`[data-test='${attribute}']`)

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined();
}