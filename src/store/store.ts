import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

interface AuthState {
    role: 'user' | 'admin' | null;
}

const initialState: AuthState = {
    role: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<'user' | 'admin'>) {
            state.role = action.payload;
        },
        logout(state) {
            state.role = null;
        }
    }
});

export const { login, logout } = authSlice.actions;


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);


const store = configureStore({
    reducer: {
        auth: persistedReducer,
    }
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
