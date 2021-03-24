import { render, screen } from '@testing-library/react';

import Test from './';

describe('<Test />', () => {
  it('should render the heading on test component', () => {
    const { container } = render(<Test />);

    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
