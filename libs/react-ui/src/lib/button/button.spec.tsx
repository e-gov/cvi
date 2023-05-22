import React from 'react';
import { render } from '@testing-library/react';
import ButtonComponent from './button';

describe('ButtonComponent', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<ButtonComponent/>);
    expect(getByRole('button')).not.toBeNull();
  });

  it('renders with custom text', () => {
    const { getByRole } = render(<ButtonComponent>Test Button</ButtonComponent>);
    expect(getByRole('button').textContent).toBe('Test Button');
  });
});
