/* eslint-env jest */
export const mockIntl = {
  formatDate: jest.fn(),
  formatTime: jest.fn(),
  formatRelative: jest.fn(),
  formatNumber: jest.fn(),
  formatPlural: jest.fn(),
  formatMessage: jest.fn(),
  formatHTMLMessage: jest.fn(),
  now: jest.fn()
}
