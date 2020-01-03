import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';
import Button from '../Button';
import RadioButton from '../../RadioButton';
import Checkbox from '../../Checkbox';
import VisuallyHidden from '../VisuallyHidden';
import { Flex, Text } from '../Base';

function Choice({
  children,
  isSelected = false,
  isEliminated = false,
  isDisabled = false,
  variant = 'radio',
  value,
  onEliminate,
  onChange,
  ...props
}) {
  function handleEliminate(event, value) {
    onEliminate(value);
    // prevent onChange event from firing on the
    // parent container component
    event.stopPropagation();
  }

  function handleClick(event, value) {
    if (!isDisabled) {
      onChange(value);
      event.stopPropagation();
    }
  }

  const EliminateIcon = isEliminated
    ? MdAddCircleOutline
    : MdRemoveCircleOutline;
  const InputControl = variant === 'radio' ? RadioButton : Checkbox;

  return (
    <Flex
      {...props}
      data-testid="option-element"
      border="2"
      borderRadius="lg"
      borderColor="n.300"
      disabled={isEliminated}
      onClick={e => handleClick(e, value)}
      sx={{
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'opacity .2s, border .2s, color .2s',
        ':hover': {
          borderColor: isEliminated ? null : 'blue.300'
        }
      }}
    >
      <Flex flexGrow="1" opacity={isEliminated ? '50%' : '100%'}>
        <Flex bg="blue.100" px="3" py="3" alignItems="center">
          <InputControl
            checked={isSelected}
            disabled={isDisabled}
            onChange={onChange}
          />
        </Flex>
        <Flex px="3" py="3" flexGrow="1" alignItems="center">
          <Text fontSize={3}>{children}</Text>
        </Flex>
      </Flex>

      {/* ELIMINATE BUTTON */}
      <Flex px="3" py="3" alignContent="center" alignItems="center">
        <Button
          variant="bare"
          color="n.700"
          onClick={e => handleEliminate(e, value)}
        >
          <VisuallyHidden>
            {isEliminated ? 'Enable' : 'Eliminate'} Option
          </VisuallyHidden>
          <EliminateIcon size="28" />
        </Button>
      </Flex>
    </Flex>
  );
}

export default Choice;