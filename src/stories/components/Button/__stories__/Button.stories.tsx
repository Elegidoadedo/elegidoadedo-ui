import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Props } from '../Button.types';
import { StyledColumnWrapper, StyledRowWrapper } from './Story.styles';

/**
 *  ## Button can have variations, sizes, shapes, icons, states.
 *
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    text: 'I am a button',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: ['primary'],
      control: { type: 'select' },
      category: 'Prop',
    },
    isLoading: {
      options: [true, false],
      control: { type: 'radio' },
      category: 'Prop',
    },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
      category: 'Prop',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const ButtonVariations = (props: Props) => {
  return (
    <div style={{display: 'flex'}}>
        <Button
          {...props}
          variant="primary"
        
        />
    
    </div>
  );
};





const ButtonStates = (props: Props) => {
  return (
    <StyledColumnWrapper>
      <StyledRowWrapper>
        <Button {...props} isLoading text="button loading" />
      </StyledRowWrapper>
      <StyledRowWrapper>
        <Button
          {...props}
          isDisabled
          variant="primary"
          text="primary button disabled"
        />
      </StyledRowWrapper>
    </StyledColumnWrapper>
  );
};


export const Variations: Story = {
  render: ButtonVariations,
};


/**
 *
 * There are 2 states of buttons: loading and disabled.
 */
export const States: Story = {
  render: ButtonStates,
};
