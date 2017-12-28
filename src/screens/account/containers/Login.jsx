import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlexView from 'react-flexview';
import Divider from 'material-ui/Divider';

import { Authenticate } from '../../../actions';
import Request from '../../../services/Request';
import Language from '../../../containers/Language';
import LoginForm from '../components/LoginForm';
import ChooseDeparment from '../components/ChooseDepartment';

const LoginState = {
    LOGIN_FORM: 1,
    CHOOSE_DEPARTMENT: 2
};

const mapDispatchToProps = dispatch => ({
    login: (data, department) => {
        dispatch(Authenticate.Login(data, department));
    }
});

class Login extends Component {
    state = {
        mode: LoginState.LOGIN_FORM
    }

    onLoginFormSubmit = async (data) => {
        try {
            let result = await Request.post('/login', data);
            if(result.departments.length > 1) {
                this.setState({ mode: LoginState.CHOOSE_DEPARTMENT, authInfo: result });
            }
            else {
                this.setState({ authInfo: result }, () => { this.onDepartmentChoosed(result.departments[0]); })
            }
        }
        catch(e) {
            console.log("error", e);
        }
    }

    onDepartmentChoosed = (department) => {
        this.props.login(this.state.authInfo, department);
    }

    render() {
        const { mode } = this.state;

        return (
            <FlexView
                className="full-height"
                vAlignContent="center"
                hAlignContent="center"
                grow
            >
                <FlexView 
                    basis="90%"
                    className="make-it-card no-padding login-container"
                    column
                    style={{
                        maxWidth: 300
                    }}
                    hAlignContent="center"
                >
                    <FlexView 
                        hAlignContent="left" 
                        vAlignContent="center"
                        grow
                    >
                        Login
                        <FlexView grow />
                        <Language />
                    </FlexView>
                    <Divider />
                    {   
                        mode == LoginState.CHOOSE_DEPARTMENT && 
                        <ChooseDeparment 
                            departments={this.state.authInfo.departments} 
                            onChoosed={this.onDepartmentChoosed}
                        />
                    }
                    {mode == LoginState.LOGIN_FORM && <LoginForm onSubmit={this.onLoginFormSubmit} />}
                </FlexView>
            </FlexView>
        );
    }
} 


export default connect(null, mapDispatchToProps)(Login);