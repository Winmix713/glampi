import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        // Itt add meg a reducert
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;