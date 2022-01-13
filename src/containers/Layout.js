import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import routes from '../routes'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import StepperForm from '../components/StepperForm';
import Container from '@mui/material/Container';
import Home from '../pages/Home';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Layout() {
  
//   let location = useLocation()

  

  return (
    <div
      className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
     

      <div className="flex flex-col flex-1 w-full z-40">
        <Header/>
        {/* we can use this part for dynamic routing */}
        {/* <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Routes>
              {routes.map((route, i) => {
                return route.element ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => <route.element {...props} />}
                  />
                ) : null
              })}
            
              <Route element={<Page404/>} />
            </Routes> */}
            {/* <Navigate exact from="/app" to="/app/home" /> */}
          {/* </Suspense> */}
        {/* </Main> */}

        
        {/*  here goes all the components for now  */}

        <Container fixed className="item-center justify-center">        
 
          <Grid container spacing={2}>
          
            <Grid item xs={4}>
               {/* stepper form  */}
              <StepperForm/>
            </Grid>
            <Grid item xs={8}>
               {/* home cards */}
              <Home/>
            </Grid>
          </Grid>
        </Container>
       

      </div>
    </div>

    


  )
}

export default Layout
