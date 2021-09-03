import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FileForm from '../src/components/file/FileForm';
FileForm

Enzyme.configure({
    adapter: new Adapter(),
})

test('render without error', () => {
    const wrapper = shallow(<FileForm 
        submitText="submitText"
        onSubmit={()=>{}}
    />);
});