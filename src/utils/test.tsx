import type { RunOptions } from 'axe-core'
import { axe, toHaveNoViolations } from 'jest-axe'
import { isValidElement, type ReactElement } from 'react'

import type { RenderOptions, RenderResult } from '@testing-library/react'
import { fireEvent, render as rtlRender } from '@testing-library/react'

expect.extend(toHaveNoViolations)

export const ChildrenPasstrough = ({ children }: { children: ReactElement }) =>
  children

export type TTestOptions = Omit<RenderOptions, 'wrapper'> & {
  wrapper?: typeof ChildrenPasstrough
}

export type TTestA11YOptions = TTestOptions & { axeOptions?: RunOptions }

export const render = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ui: any,
  { wrapper: Wrapper = ChildrenPasstrough, ...options }: TTestOptions = {},
): RenderResult =>
  rtlRender(
    <>
      <Wrapper>{ui}</Wrapper>
    </>,
    options,
  )

export const testA11y = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ui: any,
  { axeOptions, ...options }: TTestA11YOptions = {},
) => {
  const container = isValidElement(ui) ? render(ui, options).container : ui

  const results = await axe(container, axeOptions)

  expect(results).toHaveNoViolations()
}

export { axe, rtlRender }
export * from '@testing-library/react'
export type {
  RenderHookOptions,
  RenderHookResult,
} from '@testing-library/react-hooks'
export { act as invoke, renderHook } from '@testing-library/react-hooks'
export { default as userEvent } from '@testing-library/user-event'

export const escape = (ui: HTMLElement) =>
  fireEvent.keyDown(ui, { key: 'Escape', keyCode: 27 })
