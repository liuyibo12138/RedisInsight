import { createSlice } from '@reduxjs/toolkit'
import { uniqBy } from 'lodash'
import { apiService } from 'uiSrc/services'
import { ApiEndpoints, ICommand, ICommands } from 'uiSrc/constants'
import { getApiErrorMessage, isStatusSuccessful } from 'uiSrc/utils'
import { GetServerInfoResponse } from 'apiSrc/dto/server.dto'

import { AppDispatch, RootState } from '../store'
import { StateAppRedisCommands } from '../interfaces'

export const initialState: StateAppRedisCommands = {
  loading: false,
  error: '',
  spec: {},
  commandsArray: [],
  commandGroups: [],
}

// A slice for recipes
const appRedisCommandsSlice = createSlice({
  name: 'appRedisCommands',
  initialState,
  reducers: {
    getRedisCommands: (state) => {
      state.loading = true
    },
    getRedisCommandsSuccess: (state, { payload }: { payload: ICommands }) => {
      state.loading = false
      state.spec = payload
      state.commandsArray = Object.keys(state.spec).sort()
      state.commandGroups = uniqBy(Object.values(payload), 'group')
        .map((item: ICommand) => item.group)
    },
    getRedisCommandsFailure: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

// Actions generated from the slice
export const {
  getRedisCommands,
  getRedisCommandsSuccess,
  getRedisCommandsFailure,
} = appRedisCommandsSlice.actions

// A selector
export const appRedisCommandsSelector = (state: RootState) => state.app.redisCommands

// The reducer
export default appRedisCommandsSlice.reducer

// Asynchronous thunk action
export function fetchRedisCommandsInfo(onSuccessAction?: () => void, onFailAction?: () => void) {
  return async (dispatch: AppDispatch) => {
    dispatch(getRedisCommands())

    try {
      const { data, status } = await apiService.get<GetServerInfoResponse>(ApiEndpoints.REDIS_COMMANDS)

      if (isStatusSuccessful(status)) {
        dispatch(getRedisCommandsSuccess(data))
        onSuccessAction?.()
      }
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)
      dispatch(getRedisCommandsFailure(errorMessage))
      onFailAction?.()
    }
  }
}
