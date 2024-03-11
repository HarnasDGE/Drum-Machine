import { ON, OFF, HEATER, POWER_TOGGLE, SET_BANK, SET_INFO, SET_VOLUME } from '../constans/constans.js';

const defaultPowerState = {
  power: ON
};

const defaultBankState = {
  bank: HEATER
}

const defaultInfoState = {
  info: "Hello"
}

const defaultVolumeState = {
  volume: 30
}

export const powerReducer = (state = defaultPowerState, action) => {
  switch (action.type) {
    case POWER_TOGGLE:
      return { ...state, power: state.power === ON ? OFF : ON };
    default:
      return state;
  }
};

export const bankReducer = (state = defaultBankState, action) => {
  switch (action.type) {
    case SET_BANK:
      return { ...state, bank: action.payload };
    default:
      return state;
  }
};

export const infoReducer = (state = defaultInfoState, action) => {
  switch(action.type) {
    case SET_INFO:
      return {...state, info: action.info};
      default: 
      return state;
  }
};

export const volumeReducer = (state = defaultVolumeState, action) => {
  switch(action.type) {
    case SET_VOLUME:
      return {...state, volume: action.volume};
      default:
        return state;
  }
};