import { toggleEscalator } from '../actions';
import { connect } from 'react-redux';
import EscalatorList from '../components/EscalatorList';

const mapStateToProps = (state) => {
  return {
    escalators: state.escalators
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEscalatorClick: (id, direction) => {
      dispatch(toggleEscalator(id, direction));
      return true;
    }
  };
};

const VisibleEscalatorList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EscalatorList);

export default VisibleEscalatorList;
