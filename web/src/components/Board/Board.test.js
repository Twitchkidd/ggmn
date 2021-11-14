import { render } from '@redwoodjs/testing/web';

import Board from './Board';

describe('Board', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Board />);
    }).not.toThrow();
  });
});
