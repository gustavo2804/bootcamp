import { Navigate, Route, Routes } from "react-router-dom"
import { DcPage } from "../pages/DcPage"
import { MarvelPage } from "../pages/MarvelPage"
import { LoginPage } from "../../auth/pages/LoginPage"


export const RouterApp = () => {
  return (
    <>
            <Routes>
            <Route   path="Dc" element={< DcPage />}     />
            <Route   path="Marvel" element={< MarvelPage />} />
            <Route   path="Login" element={<LoginPage />} />
            <Route   path="/" element={<Navigate to="/Dc" />} />
            </Routes>



    </>
  )
}
