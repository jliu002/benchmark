import React from 'react';
import { storiesOf } from '@storybook/react';
import { useToggle } from '../../../util/hooks';
import Global from '../Global';
import ThemeProvider from '../ThemeProvider';
import Stack from '../Stack';
import Switch from './Switch.js';

storiesOf('Styled System', module).add('Switch', () => {
  const [checked, setChecked] = useToggle();
  return (
    <Global>
      <ThemeProvider>
        <Stack spacing="4">
          <Stack direction="row">
            <Switch checked={true} />
            <Switch checked={false} />
            <Switch checked={false} disabled />
          </Stack>
          <Stack direction="row">
            <Switch checked={checked} onClick={setChecked} />
          </Stack>
        </Stack>
      </ThemeProvider>
    </Global>
  );
});