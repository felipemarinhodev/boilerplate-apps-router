import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o component
    // const { container } = render(<Main />);
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();

    // gerar snapshot
    // expect(container.firstChild).toMatchSnapshot();
  });
});
