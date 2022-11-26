import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/auth-operations';

import { useAuth } from 'hooks';
import { Container } from './App.styled';

import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Footer } from './Footer/Footer';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <>
          <Suspense fallback={<p>Download...</p>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                  path="/register"
                  element={
                    <RestrictedRoute
                      redirectTo="/contacts"
                      component={<RegisterPage />}
                    />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <RestrictedRoute
                      redirectTo="/contacts"
                      component={<LoginPage />}
                    />
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute
                      redirectTo="/login"
                      component={<ContactsPage />}
                    />
                  }
                />
              </Route>
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </Container>
  );
}
