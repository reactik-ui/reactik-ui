import * as React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Components/Button',
};

export const button: React.FC = () => <Button bg="blue.500">Button</Button>;

export const buttonWithStyles: React.FC = () => (
  <>
    <Button bg="blue.900"> </Button>
    <Button bg="blue.800"> </Button>
    <Button bg="blue.700"> </Button>
    <Button bg="blue.600"> </Button>
    <Button bg="blue.500"> </Button>
    <Button bg="blue.400"> </Button>
    <Button bg="blue.300"> </Button>
    <Button bg="blue.200"> </Button>
    <Button bg="blue.100"> </Button>
    <Button bg="blue.50"> </Button>
  </>
);
