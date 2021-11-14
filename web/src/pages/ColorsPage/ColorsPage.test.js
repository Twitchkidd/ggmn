import { render } from '@redwoodjs/testing/web';

import ColorsPage from './ColorsPage';

describe('ColorsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ColorsPage />);
    }).not.toThrow();
  });
});
