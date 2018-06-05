import React from 'react';
import {mount} from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(()=>{
    wrapped = mount(
        <Root>
            <CommentBox/>
        </Root>
    );
});

afterEach(()=>{
    wrapped.unmount();
});

it('has a textarea and button', ()=>{

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

});

describe('textarea', ()=>{

    beforeEach(()=>{
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment'}
        });
        wrapped.update();
    })

    it('has textarea, user can type in', ()=>{
     
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    
    it('when form submit, textarea is emptied', ()=>{
    
        wrapped.find('form').simulate('submit');
        wrapped.update(); //we need to call update since the setState is an asynchronous event
    
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    
    });

});

