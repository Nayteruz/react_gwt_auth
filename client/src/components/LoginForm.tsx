import React, {FC, useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const LoginForm: FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

    return (
        <div style={{display: 'flex', flexDirection:'column', gap: 10, margin:'0 auto', width:600}}>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
            <div>
                <button
                    onClick={() => store.login(email, password)}
                >
                    Логин
                </button>
                <button
                    onClick={() => store.registration(email, password)}
                >
                    Регистрация
                </button>
            </div>

        </div>
    );
};

export default observer(LoginForm);