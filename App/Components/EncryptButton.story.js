import React from 'react'
import { storiesOf } from '@storybook/react-native'

import EncryptButton from './EncryptButton'

storiesOf('EncryptButton')
  .add('Default', () => (
    <EncryptButton
      text='A simple Encrypt button'
    />
  ))
  .add('Text as children', () => (
    <EncryptButton>
        Hello from the children!
    </EncryptButton>
  ))
