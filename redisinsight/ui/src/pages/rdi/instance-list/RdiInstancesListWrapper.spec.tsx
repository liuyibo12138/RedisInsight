import { EuiInMemoryTable } from '@elastic/eui'
import { first } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { instance, mock } from 'ts-mockito'

import ItemList, { Props as ItemListProps } from 'uiSrc/components/item-list/ItemList'
import { RdiInstance } from 'uiSrc/slices/interfaces'
import { RootState, store } from 'uiSrc/slices/store'
import { TelemetryEvent, sendEventTelemetry } from 'uiSrc/telemetry'
import { act, fireEvent, render, screen } from 'uiSrc/utils/test-utils'

import RdiInstancesListWrapper, { Props } from './RdiInstancesListWrapper'

const mockedProps = mock<Props>()

jest.mock('uiSrc/components/item-list/ItemList', () => ({
  __esModule: true,
  namedExport: jest.fn(),
  default: jest.fn()
}))

jest.mock('uiSrc/telemetry', () => ({
  ...jest.requireActual('uiSrc/telemetry'),
  sendEventTelemetry: jest.fn()
}))

jest.mock('file-saver', () => ({
  saveAs: jest.fn()
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}))

const mockInstances: RdiInstance[] = [
  {
    id: '1',
    name: 'My first integration',
    url: 'redis-12345.c253.us-central1-1.gce.cloud.redislabs.com:12345',
    lastConnection: new Date(),
    version: '1.2'
  },
  {
    id: '2',
    name: 'My second integration',
    url: 'redis-67890.c253.us-central1-1.gce.cloud.redislabs.com:67890',
    lastConnection: new Date(),
    version: '1.3'
  }
]

jest.mock('uiSrc/slices/instances/instances', () => ({
  ...jest.requireActual('uiSrc/slices/instances/instances'),
  instancesSelector: jest.fn().mockReturnValue({
    loading: false,
    error: '',
    data: mockInstances
  })
}))

const mockRdiInstancesList = (props: ItemListProps<RdiInstance>) => {
  const columns = first(props.columnVariations)

  if (!columns) {
    return null
  }

  return (
    <div>
      <button type="button" onClick={() => props.onDelete([mockInstances[1]])} data-testid="onDelete-btn">
        onDelete
      </button>
      <button type="button" onClick={() => props.onExport([mockInstances[0]], true)} data-testid="onExport-btn">
        onExport
      </button>
      <button
        type="button"
        onClick={() =>
          props.onTableChange({
            sort: {
              field: 'name',
              direction: 'asc'
            }
          })}
        data-testid="onTableChange-btn"
      >
        onTableChange
      </button>
      <div className="itemList">
        <EuiInMemoryTable
          isSelectable
          items={mockInstances}
          itemId="id"
          loading={false}
          columns={columns}
          data-testid="table"
        />
      </div>
    </div>
  )
}

describe('RdiInstancesListWrapper', () => {
  beforeAll(() => {
    (ItemList as jest.Mock).mockImplementation(mockRdiInstancesList)
  })

  beforeEach(() => {
    const state: RootState = store.getState();
    (useSelector as jest.Mock).mockImplementation((callback: (arg0: RootState) => RootState) =>
      callback({
        ...state,
        analytics: {
          ...state.analytics
        },
        rdi: {
          ...state.rdi,
          instances: {
            ...state.rdi.instances,
            data: mockInstances
          }
        }
      }))
  })

  it('should render', () => {
    expect(render(<RdiInstancesListWrapper {...instance(mockedProps)} />)).toBeTruthy()
  })

  it('should call proper telemetry on export', async () => {
    const sendEventTelemetryMock = jest.fn();
    (sendEventTelemetry as jest.Mock).mockImplementation(() => sendEventTelemetryMock)
    render(<RdiInstancesListWrapper {...instance(mockedProps)} />)

    await act(() => {
      fireEvent.click(screen.getByTestId('onExport-btn'))
    })

    expect(sendEventTelemetry).toBeCalledWith({
      event: TelemetryEvent.CONFIG_RDI_INSTANCES_EXPORT_CLICKED,
    });
    (sendEventTelemetry as jest.Mock).mockRestore()
  })

  it('should call proper telemetry on delete multiple instances', async () => {
    const sendEventTelemetryMock = jest.fn();
    (sendEventTelemetry as jest.Mock).mockImplementation(() => sendEventTelemetryMock)
    render(<RdiInstancesListWrapper {...instance(mockedProps)} />)

    await act(() => {
      fireEvent.click(screen.getByTestId('onDelete-btn'))
    })

    expect(sendEventTelemetry).toBeCalledWith({
      event: TelemetryEvent.CONFIG_RDI_INSTANCES_MULTIPLE_DELETE_CLICKED,
      eventData: {
        ids: ['2']
      }
    });
    (sendEventTelemetry as jest.Mock).mockRestore()
  })

  it('should call proper telemetry on copy url', async () => {
    const sendEventTelemetryMock = jest.fn();
    (sendEventTelemetry as jest.Mock).mockImplementation(() => sendEventTelemetryMock)
    render(<RdiInstancesListWrapper {...instance(mockedProps)} />)

    await act(() => {
      const copyHostPortButtons = screen.getAllByLabelText(/Copy url/i)
      fireEvent.click(copyHostPortButtons[0])
    })

    expect(sendEventTelemetry).toBeCalledWith({
      event: TelemetryEvent.CONFIG_RDI_INSTANCES_URL_COPIED,
      eventData: {
        id: '1'
      }
    });
    (sendEventTelemetry as jest.Mock).mockRestore()
  })

  it('should call proper telemetry on delete instance', async () => {
    const sendEventTelemetryMock = jest.fn();
    (sendEventTelemetry as jest.Mock).mockImplementation(() => sendEventTelemetryMock)
    render(<RdiInstancesListWrapper {...instance(mockedProps)} />)

    await act(() => {
      fireEvent.click(screen.getByTestId('delete-instance-2-icon'))
    })

    expect(sendEventTelemetry).toBeCalledWith({
      event: TelemetryEvent.CONFIG_RDI_INSTANCES_SINGLE_DELETE_CLICKED,
      eventData: {
        id: '2'
      }
    });
    (sendEventTelemetry as jest.Mock).mockRestore()
  })

  it('should call proper telemetry on list sort', async () => {
    const sendEventTelemetryMock = jest.fn();
    (sendEventTelemetry as jest.Mock).mockImplementation(() => sendEventTelemetryMock)
    render(<RdiInstancesListWrapper {...instance(mockedProps)} onEditInstance={() => {}} />)

    await act(() => {
      fireEvent.click(screen.getByTestId('onTableChange-btn'))
    })

    expect(sendEventTelemetry).toBeCalledWith({
      event: TelemetryEvent.CONFIG_RDI_INSTANCES_LIST_SORTED,
      eventData: { field: 'name', direction: 'asc' }
    });
    (sendEventTelemetry as jest.Mock).mockRestore()
  })
})
