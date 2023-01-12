import React, {useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import UserService from "./services/UserService";
import {IUser} from "./models/IUser";

function App() {

    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        if (localStorage.getItem('token')){
            store.checkAuth();
        }
    }, [])

    async function getUsers(){
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        }catch (err) {
            console.error(err);
        }
    }

    if (store.isLoading){
        return <h2>Загрузка...</h2>
    }

    if (!store.isAuth){
        return (
            <LoginForm/>
        )
    }

    return (
        <div style={{display: 'flex', margin:'0 auto', width:600, flexDirection:'column'}}>
            <h1 style={{textAlign: 'center'}}>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : `Авторизуйтесь`}</h1>
            <h2>{store.user.isActivated ? 'Аккаунт подтвержден по почте' : 'Аккаунт не активирован!!!'}</h2>
            <button onClick={() => store.logout()}>Выйти</button>
            <div>
                <button onClick={getUsers}>Получить пользователей</button>
            </div>
            {users.map(user =>
                <div key={user.email} >{user.email}</div>
            )}
        </div>
    );
}

export default observer(App);
