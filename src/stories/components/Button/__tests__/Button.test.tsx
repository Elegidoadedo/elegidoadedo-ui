import React from 'react';
import { render, screen} from '@testing-library/react';
import { composeStories } from '@storybook/react';
// import stories file as a module
import * as stories from '../__stories__/Button.stories';


const { Variations, States } =
  composeStories(stories);

describe('Button variations', () => {
  // //primary
  it('renders primary button correctly', () => {
    render(<Variations />);
    const primaryButton = screen
      .getByText('Primary button primary color')
      .closest('button');
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton).toHaveStyle('background-color: black');
    expect(primaryButton).toHaveStyle('color: white');
    expect(primaryButton).toHaveStyle('border-color: black');
  });
  
});





describe('Button with loading', () => {

  it('renders end icon loading correctly', async () => {
    render(<States />);
    
    const loadingIcon = screen.findByTitle('loader-icon');
    expect(loadingIcon).toBeInTheDocument();
    ;
  });
});
