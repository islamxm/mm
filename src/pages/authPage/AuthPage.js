import './AuthPage.scss';
import InputB from '../../components/InputB/InputB';
import Button from '../../components/Button/Button';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../service/authService';
import { useDispatch } from 'react-redux';
import {tokenUpdate} from '../../store/actions';


const LOCAL_STORAGE = window.localStorage;
const as = new authService();
const initForm = {
    login: '',
    password: ''
}


const AuthPage = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [error, setError] = useState('');

    return (
        <div className="AuthPage page">
            <div className="container">
                <div className="AuthPage__in">
                    <div className="AuthPage__body">
                        <div className="AuthPage__body_head">
                            <h2 className="AuthPage__body_head_title">Авторизация</h2>
                            <div className="AuthPage__body_head_subtitle">Введите логин и пароль </div>
                        </div>
                        <Formik
                            initialValues={initForm}
                            onSubmit={(values, {setSubmitting}) => {
                                setSubmitting(true)
                                as.auth(values).then(res => {
                                    if(res.error) {
                                        setError(res.message)
                                    } else {
                                        setError('')
                                        dispatch(tokenUpdate(res.data.token))
                                        LOCAL_STORAGE.setItem('token-memories-manager', res.data.token)
                                        nav('/orders', {replace: true})
                                    }
                                }).finally(_ => {
                                    setSubmitting(false)
                                })
                            }}
                            >
                            {
                                ({values, errors, handleBlur, handleChange, isSubmitting}) => (
                                    <Form className='AuthPage__body_form'>
                                        {
                                            error ? (
                                                <div className="AuthPage__body_form_error" style={{color: 'var(--red)', marginBottom: 10}}>
                                                    {error}
                                                </div>
                                            ) : null
                                        }
                                        <div className="AuthPage__body_row">
                                            <InputB 
                                                name={'login'}
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder={'Логин'}
                                                error={error}
                                                type={'text'}
                                                />
                                        </div>
                                        <div className="AuthPage__body_row">
                                            <InputB 
                                                name={'password'}
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder={'Пароль'}
                                                error={error}
                                                type={'password'}
                                                />
                                        </div>
                                        <div className="AuthPage__body_action">
                                            <Button load={isSubmitting} style={{paddingLeft: 130, paddingRight: 130}} text={'Войти'} type={'submit'} variant={'primary'}/>
                                        </div>
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;