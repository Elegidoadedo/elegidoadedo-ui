import { render, screen, waitFor, within } from '@testing-library/react';
import { composeStories } from '@storybook/react';
// import stories file as a module
import * as stories from '../__stories__/Button.stories';


const { Variations, Sizes, Shapes, WithIconAndLoading, States } =
  composeStories(stories);

describe('Button variations', () => {
  // //primary
  it('renders primary button correctly', () => {
    render(<Variations />);
    const primaryButton = screen
      .getByText('Primary button primary color')
      .closest('button');
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton).toHaveStyle('background-color: blue');
    expect(primaryButton).toHaveStyle('color: white');
    expect(primaryButton).toHaveStyle('border-color: transparent');
  });
  
});





describe('Button with loading', () => {

  it('renders end icon loading correctly', async () => {
    render(<WithIconAndLoading />);
    const endIconButton = screen
      .getByText('start icon loading')
      .closest('button') as HTMLButtonElement;
    const loadingIcon = await within(endIconButton).findByTitle('loader-icon');
    expect(loadingIcon).toBeInTheDocument();
    const icon = within(endIconButton).queryByTitle('calendar');
    expect(icon).not.toBeInTheDocument();
  });
});
