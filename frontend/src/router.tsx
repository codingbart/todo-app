import { createBrowserRouter, Navigate } from 'react-router'
import { AppLayout } from '@/components/layout/AppLayout'
import { DashboardPage } from '@/screens/dashboard/DashboardPage'
import { TasksPage } from '@/screens/tasks/TasksPage'
import { TaskForm } from '@/screens/tasks/TaskForm'
import { TaskDetailPage } from '@/screens/tasks/TaskDetailPage'
import { BoardPage } from '@/screens/board/BoardPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/tasks',
        element: <TasksPage />,
      },
      {
        path: '/tasks/new',
        element: <TaskForm />,
      },
      {
        path: '/tasks/:id',
        element: <TaskDetailPage />,
      },
      {
        path: '/tasks/:id/edit',
        element: <TaskForm />,
      },
      {
        path: '/board',
        element: <BoardPage />,
      },
    ],
  },
])
