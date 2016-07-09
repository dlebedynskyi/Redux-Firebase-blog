import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import {Full} from '../../../src/app/components/Post/Full';
import {fromJS} from 'immutable';
// import {IconButton} from 'react-toolbox/lib/button';
import sinon from 'sinon';

test('Full post: should display delete and edit button if post uid is user uid', (t) => {
	const uid = 'test';
	const post = fromJS({uid});
 const onDelete = sinon.spy();
 const onEdit = sinon.spy();
	const wrapper = shallow(<Full
		post={post}
		uid={uid}
		onDelete={onDelete}
		onEdit={onEdit}
		/>);

	const deleteBtn = wrapper.find('[icon="delete_forever"]');
	t.is(deleteBtn.length, 1);
	deleteBtn.simulate('click');
	t.truthy(onDelete.calledOnce);

	const editBtn = wrapper.find('[icon="edit"]');
	t.is(editBtn.length, 1);
	editBtn.simulate('click');
	t.truthy(onEdit.calledOnce);
});



test('Full post: should  not display delete and edit button if post uid is not user uid', (t) => {
	const uid = 'test';
	const post = fromJS({uid});
 const onDelete = sinon.spy();
 const onEdit = sinon.spy();
	const wrapper = shallow(<Full
		post={post}
		uid={'OTHER'}
		onDelete={onDelete}
		onEdit={onEdit}
		/>);

	const deleteBtn = wrapper.find('[icon="delete_forever"]');
	t.is(deleteBtn.length, 0);

	const editBtn = wrapper.find('[icon="edit"]');
	t.is(editBtn.length, 0);
});
