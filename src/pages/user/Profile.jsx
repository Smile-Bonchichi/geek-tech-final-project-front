import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Text } from '../../ui/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteUserProfile, getUserInfo, setUserImage
} from './slice/UserSlice.js';
import { EImageType } from '../../types/image.js';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { user } = useSelector(state => state.userReducer);
    const [image, setImage] = useState(null);
    
    useEffect(() => {
        dispatch(
            getUserInfo()
        );
    }, [dispatch]);
    
    const addImage = () => {
        dispatch(
            setUserImage(
                {
                    id: user.id,
                    type: EImageType.AVATAR,
                    image: image
                }
            )
        );
    };
    
    const deleteUser = () => {
        dispatch(
            deleteUserProfile()
        );
    
        navigate('/sign-in')
    }
    
    return (
        <Container style={ {
            display: 'flex'
        } }>
            <Container style={ {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            } }>
                <Text text={ user.pin }/>
                <Text text={ user.email }/>
                <Text text={ user.fullName }/>
                <Text text={ user.phoneNumber }/>
                
                <div>
                    <img
                        style={ {
                            width: 500,
                            height: 500
                        } }
                        src={ user.imageDto?.url } alt='Аватарка'
                    />
                </div>
            </Container>
            <Container style={ {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            } }>
                <Container>
                    <input
                        type='file'
                        onChange={ (e) => {
                            setImage(e.target.files[0]);
                        } }
                    />
                    <button onClick={ addImage }>Загрузить</button>
                </Container>
                <Container style={ {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 50
                } }>
                    <button onClick={ deleteUser }>Удалить профиль</button>
                </Container>
            </Container>
        </Container>
    );
};
