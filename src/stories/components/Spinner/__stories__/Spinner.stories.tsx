import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../Spinner';
import { StyledColumnWrapper } from './Story.styles';


const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

const SpinnerSizes = () => {
  return (
    <StyledColumnWrapper>
      <div>
        <p>Regular size</p>
        <Spinner  />
      </div>
    </StyledColumnWrapper>
  );
};

export const Sizes: Story = {
  render: SpinnerSizes,
};
