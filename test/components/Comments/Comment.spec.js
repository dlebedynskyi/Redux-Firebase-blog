import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import {Comment} from '../../../src/app/components/Comments/Comment';
import {fromJS} from 'immutable';
import {IconButton} from 'react-toolbox/lib/button';
import sinon from 'sinon';

test('Comment: should display delete button if comment uid is user uid', (t) => {
	const uid = 'test';
	const comment = fromJS({uid});
 const onDelete = sinon.spy();
	const wrapper = shallow(<Comment
		comment={comment}
		uid={uid}
		onDelete={onDelete}
		/>);
	const icon = wrapper.find(IconButton);
	t.is(icon.length, 1);
	icon.simulate('click');
	t.truthy(onDelete.calledOnce);
});


test('Comment: should  not display delete button if comment uid is not user uid', (t) => {
	const uid = 'test';
	const comment = fromJS({uid});
 const onDelete = sinon.spy();
	const wrapper = shallow(<Comment
		comment={comment}
		uid={null}
		onDelete={onDelete}
		/>);
	const icon = wrapper.find(IconButton);
	t.is(icon.length, 0);
});
