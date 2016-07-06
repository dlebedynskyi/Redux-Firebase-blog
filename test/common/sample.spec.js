import 'babel-polyfill';
import chai from 'chai';
import chaiImutable from 'chai-immutable';
import dirtyChai from 'dirty-chai';

chai.use(chaiImutable);
chai.use(dirtyChai);

describe('sample', () => {
  it('should be true', () => {
    chai.expect(true).to.be.true();
  });
});
