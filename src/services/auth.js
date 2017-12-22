import { connect } from 'react-redux';

const withAuth = () => {
    const mapStateToProps = state => {
        [state.auth]
    };

    return (target) => {
        
        return connect(mapStateToProps, {})(target);
    };
};

export { withAuth };