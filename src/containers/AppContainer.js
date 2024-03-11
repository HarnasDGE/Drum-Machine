import { togglePower, setBank, setInfo, setVolume} from '../actions/drumActions';

export const mapStateToProps = (state) => {
  return {
    power: state.powerState.power,
    bank: state.bankState.bank,
    info: state.infoState.info,
    volume: state.volumeState.volume
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    togglePowerStatus: () => dispatch(togglePower()),
    toggleBankStatus: (bank) => dispatch(setBank(bank)),
    setNewInfo: (info) => dispatch(setInfo(info)),
    setNewVolume: (volume) => dispatch(setVolume(volume))
  }
};
