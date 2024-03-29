import { lazy } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import RouteLoading from '@/components/loading'

const CustomerService = lazy(() => import("@/page/customerService/customerService"))
const ChatWindow = lazy(() => import("@/page/customerService/views/chatWindow/chatWindow"))
const Index = lazy(() => import("@/page/index"))
const Home = lazy(() => import("@/page/home/home"))

export function RouterContent() {
    return (
        <Routes>
            <Route path={import.meta.env.BASE_URL} element={<Index />}>
                <Route path={import.meta.env.BASE_URL + '*'} element={RouteLoading(<Home />)} />
                <Route path={import.meta.env.BASE_URL} element={<Navigate to={"/customerService"} replace />} />{/* 默认路由 */}
                <Route path="customerService" element={RouteLoading(<CustomerService />)}>
                    <Route path="user/:id" element={<ChatWindow />} />
                </Route>
            </Route>
        </Routes>
    )
}
