import { configureStore } from "@reduxjs/toolkit";
// import { FilmReducer } from "./pages/filmPage/film.reducer";
import productAPI from "./services/product.service";

export const store = configureStore({
  reducer: {
    products: productAPI.reducer,
  },
  middleware: (defaultmiddleware) =>
    defaultmiddleware().concat(productAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
