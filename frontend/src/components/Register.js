import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div id='overall-informations'>
            <div className='container'>
                <div className='margin-v-4'>
                    <h2 className='navy'>
                        Swisscom Sales Performance App{' '}
                        <span role='img' aria-label='rocket'>
                            🚀
                        </span>
                    </h2>
                </div>
                <br />
                <div className='login-box register'>
                    <div className='login-title'>Registrieren</div>
                    <div className='input-field input-field--fixed' data-init='auto'>
                        <input
                            type='text'
                            name='first-name'
                            placeholder='Vorname'
                            autoCorrect='off'
                            autoCapitalize='off'
                            data-sso-auto-focus='true'
                            className='validate'
                        />
                        <label htmlFor='first-name'>Vorname</label>
                    </div>
                    <div className='input-field input-field--fixed' data-init='auto'>
                        <input
                            type='text'
                            name='last-name'
                            placeholder='Nachname'
                            autoCorrect='off'
                            autoCapitalize='off'
                            data-sso-auto-focus='true'
                            className='validate'
                        />
                        <label htmlFor='last-name'>Nachname</label>
                    </div>
                    <div className='input-field input-field--fixed' data-init='auto'>
                        <input
                            type='text'
                            name='username'
                            placeholder='Benutzername'
                            autoCorrect='off'
                            autoCapitalize='off'
                            data-sso-auto-focus='true'
                            className='validate'
                        />
                        <label htmlFor='username'>Benutzername</label>
                    </div>
                    <div className='input-field input-field--fixed' data-init='auto'>
                        <i
                            data-sso-show-password='true'
                            className='icon icon--s2 sso-form__show-password'
                            aria-hidden='true'
                        />
                        <input
                            type='password'
                            className='password'
                            name='password-register'
                            placeholder='Passwort'
                            data-sso-auto-focus='true'
                        />
                        <label htmlFor='password-register'>Passwort</label>
                    </div>
                    <div className='input-field input-field--fixed' data-init='auto'>
                        <i
                            data-sso-show-password='true'
                            className='icon icon--s2 sso-form__show-password'
                            aria-hidden='true'
                        />
                        <input
                            type='password'
                            className='password'
                            name='password-register-confirm'
                            placeholder='Passwort bestätigen'
                            data-sso-auto-focus='true'
                        />
                        <label htmlFor='password-register-confirm'>Passwort bestätigen</label>
                    </div>
                    <div id='profile-picture-cont'>
                        <div className='crud-title'>Dein Profilbild</div>
                        <img
                            id='profile-pic'
                            style={{ height: '130px', width: '130px', borderRadius: '50%', objectFit: 'cover' }}
                            src='blob:null/eb21e4f1-5f7f-42d7-ac02-eb76fdc48798'
                            alt='Profile'
                        />
                        <input
                            style={{ display: 'none' }}
                            id='input-image-hidden'
                            type='file'
                            accept='image/jpeg, image/png'
                        />
                        <br />
                        <button className='button button--primary' style={{ minWidth: '77px' }}>
                            Browse
                        </button>
                    </div>
                    <sdx-select
                        placeholder='Beispiel: SAS-SRC-RE-SA3-SIH'
                        label='OE Bezeichnung'
                        keyboard-behavior='autocomplete'
                        className='hydrated closed'
                        aria-expanded='false'>
                        <sdx-select-option value='actionscript' className='hydrated top'>
                            SAS-SRC-RE-SA1-NEU
                        </sdx-select-option>
                        <sdx-select-option value='applescript' className='hydrated top'>
                            SAS-SRC-RE-SA1-CH
                        </sdx-select-option>
                        <sdx-select-option value='asp' className='hydrated top'>
                            SAS-SRC-RE-SA1-SMO
                        </sdx-select-option>
                        <sdx-select-option value='assembly' className='hydrated top'>
                            SAS-SRC-RE-SA1-NEG
                        </sdx-select-option>
                        <sdx-select-option value='basic' className='hydrated top'>
                            SAS-SRC-RE-SA1-KRL
                        </sdx-select-option>
                        <sdx-select-option value='batch' className='hydrated top'>
                            SAS-SRC-RE-SA1-SAR
                        </sdx-select-option>
                        <sdx-select-option value='batch' className='hydrated top'>
                            SAS-SRC-RE-SA1-WIL
                        </sdx-select-option>
                        <sdx-select-option value='batch' className='hydrated top'>
                            Lernende/r
                        </sdx-select-option>
                    </sdx-select>
                    <br />
                    <div className='login-register-buttons'>
                        <button className='button button--confirm' style={{ minWidth: '77px' }}>
                            Registrierung bestätigen
                        </button>
                        <Link to='/login' id='backToLogin' className='button button--secondary' type='submit'>
                            Zurück
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
