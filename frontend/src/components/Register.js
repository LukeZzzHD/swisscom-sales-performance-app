import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { REGISTER, REGISTER_REQUESTED } from '../actions/actionCreators';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            password2: '',
            oeDescription: '',
            errors: [],
        };

        this.sdxSelectEl = React.createRef();
    }

    componentDidMount() {
        this.sdxSelectEl.selectCallback = selection => console.log(selection);
    }

    render() {
        console.log(this.props);
        return (
            <div id="overall-informations">
                <div className="container">
                    <div className="margin-v-4">
                        <h2 className="navy">
                            Swisscom Sales Performance App{' '}
                            <span role="img" aria-label="rocket">
                                🚀
                            </span>
                        </h2>
                    </div>
                    <br />
                    <div className="login-box register">
                        <div className="login-title">Registrieren</div>
                        <div
                            className="input-field input-field--fixed"
                            data-init="auto"
                        >
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Vorname"
                                autoCorrect="off"
                                autoCapitalize="off"
                                data-sso-auto-focus="true"
                                className="validate"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="first-name">Vorname</label>
                        </div>
                        <div
                            className="input-field input-field--fixed"
                            data-init="auto"
                        >
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Nachname"
                                autoCorrect="off"
                                autoCapitalize="off"
                                data-sso-auto-focus="true"
                                className="validate"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="last-name">Nachname</label>
                        </div>
                        <div
                            className="input-field input-field--fixed"
                            data-init="auto"
                        >
                            <input
                                type="text"
                                name="username"
                                placeholder="Benutzername"
                                autoCorrect="off"
                                autoCapitalize="off"
                                data-sso-auto-focus="true"
                                className="validate"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="username">Benutzername</label>
                        </div>
                        <div
                            className="input-field input-field--fixed"
                            data-init="auto"
                        >
                            <i
                                data-sso-show-password="true"
                                className="icon icon--s2 sso-form__show-password"
                                aria-hidden="true"
                            />
                            <input
                                type="password"
                                className="password"
                                name="password"
                                placeholder="Passwort"
                                data-sso-auto-focus="true"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="password-register">Passwort</label>
                        </div>
                        <div
                            className="input-field input-field--fixed"
                            data-init="auto"
                        >
                            <i
                                data-sso-show-password="true"
                                className="icon icon--s2 sso-form__show-password"
                                aria-hidden="true"
                            />
                            <input
                                type="password"
                                className="password"
                                name="password2"
                                placeholder="Passwort bestätigen"
                                data-sso-auto-focus="true"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="password-register-confirm">
                                Passwort bestätigen
                            </label>
                        </div>
                        <div id="profile-picture-cont">
                            <div className="crud-title">Dein Profilbild</div>
                            <img
                                id="profile-pic"
                                style={{
                                    height: '130px',
                                    width: '130px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                                src="#"
                                alt="Profile"
                            />
                            <input
                                name="image"
                                style={{ display: 'none' }}
                                id="input-image-hidden"
                                type="file"
                                accept="image/jpeg, image/png"
                            />
                            <br />
                            <button
                                className="button button--primary"
                                style={{ minWidth: '77px' }}
                            >
                                Browse
                            </button>
                        </div>
                        <sdx-select
                            placeholder="Beispiel: SAS-SRC-RE-SA3-SIH"
                            label="OE Bezeichnung"
                            keyboard-behavior="autocomplete"
                            className="hydrated closed"
                            aria-expanded="false"
                            name="oeDescription"
                            ref={el => (this.sdxSelectEl = el)}
                        >
                            <sdx-select-option
                                value="SAS-SRC-RE-SA1-NEU"
                                className="hydrated top"
                            >
                                SAS-SRC-RE-SA1-NEU
                            </sdx-select-option>
                            <sdx-select-option
                                value="SAS-SRC-RE-SA1-CH"
                                className="hydrated top"
                            >
                                SAS-SRC-RE-SA1-CH
                            </sdx-select-option>
                            <sdx-select-option
                                value="SAS-SRC-RE-SA1-SMO"
                                className="hydrated top"
                            >
                                SAS-SRC-RE-SA1-SMO
                            </sdx-select-option>
                            <sdx-select-option
                                value="SAS-SRC-RE-SA1-NEG"
                                className="hydrated top"
                            >
                                SAS-SRC-RE-SA1-NEG
                            </sdx-select-option>
                            <sdx-select-option
                                value="SAS-SRC-RE-SA1-KRL"
                                className="hydrated top"
                            >
                                SAS-SRC-RE-SA1-KRL
                            </sdx-select-option>
                            <sdx-select-option
                                value="SAS-SRC-RE-SA1-SAR"
                                className="hydrated top"
                            >
                                SAS-SRC-RE-SA1-SAR
                            </sdx-select-option>
                            <sdx-select-option
                                value="SAS-SRC-RE-SA1-WIL"
                                className="hydrated top"
                            >
                                SAS-SRC-RE-SA1-WIL
                            </sdx-select-option>
                            <sdx-select-option
                                value="Lernende/r"
                                className="hydrated top"
                            >
                                Lernende/r
                            </sdx-select-option>
                        </sdx-select>
                        <br />
                        <div className="login-register-buttons">
                            <button
                                className="button button--confirm"
                                style={{ minWidth: '77px' }}
                                onClick={this.confirmRegistration}
                            >
                                Registrierung bestätigen
                            </button>
                            <Link
                                to="/login"
                                id="backToLogin"
                                className="button button--secondary"
                                type="submit"
                            >
                                Zurück
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    setOeDescription = () => {
        let value = 1;
        console.log(`Setting oeDescription to ${value}`);
        this.setState({
            oeDescription: value,
        });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    confirmRegistration = () => {
        let {
            username,
            firstName,
            lastName,
            password,
            password2,
            oeDescription,
        } = this.state;
        this.props.register(
            username,
            firstName,
            lastName,
            password,
            password2,
            oeDescription,
        );
    };
}

const mapDispatchToProps = dispatch => ({
    register: (
        username,
        firstName,
        lastName,
        password,
        password2,
        oeDescription,
    ) =>
        dispatch(
            REGISTER_REQUESTED(
                username,
                firstName,
                lastName,
                password,
                password2,
                oeDescription,
            ),
        ),
});

export default connect(
    null,
    mapDispatchToProps,
)(Register);
