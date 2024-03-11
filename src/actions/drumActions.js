import { POWER_TOGGLE, SET_BANK, SET_INFO, SET_VOLUME } from '../constans/constans.js';

export const togglePower = () => ({
  type: POWER_TOGGLE
});

export const setBank = (bank) => ({
  type: SET_BANK,
  payload: bank
});

export const setInfo = (info) => ({
  type: SET_INFO,
  info
})

export const setVolume = (volume) => ({
  type: SET_VOLUME,
  volume
})