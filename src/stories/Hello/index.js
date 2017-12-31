import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Hello from '../../components/Hello'

storiesOf('Hello', module).add('with text', () => <Hello />)
