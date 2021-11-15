import { render } from '@redwoodjs/testing/web';

import AnimationToggle from './AnimationToggle';

describe('AnimationToggle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnimationToggle />);
    }).not.toThrow();
  });
});
