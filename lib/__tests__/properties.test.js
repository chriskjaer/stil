import assert from 'assert';
import { isPropertyUnitless } from '../properties';

describe('#isPropertyUnitless', () => {
  it('font-size isn\'t unitless', () => {
    assert(!isPropertyUnitless('fontSize'))
  });
});
