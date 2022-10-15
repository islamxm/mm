import './AuthPage.scss';
import InputB from '../../components/InputB/InputB';
import Button from '../../components/Button/Button';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import authService from '../../service/authService';


const as = new authService();

const initForm = {
    email: '',
    password: ''
}


const AuthPage = () => {

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

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
                                console.log(values)
                                
                            }}
                            >
                            {
                                ({values, errors, handleBlur, handleChange, isSubmitting}) => (
                                    <Form className='AuthPage__body_form'>
                                        <div className="AuthPage__body_row">
                                            <InputB 
                                                name={'email'}
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder={'Логин'}/>
                                        </div>
                                        <div className="AuthPage__body_row">
                                            <InputB 
                                                name={'password'}
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder={'Пароль'}/>
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