import { Link } from 'react-router'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TaskSummaryCards } from './TaskSummaryCards'

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Overview of your tasks
          </p>
        </div>
        <Link to="/tasks/new">
          <Button>
            <Plus className="h-4 w-4" />
            New Task
          </Button>
        </Link>
      </div>

      <TaskSummaryCards />

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">
            Recent Tasks
          </h2>
          <Link
            to="/tasks"
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            View all
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          No tasks yet. Connect a backend to see data.
        </p>
      </div>
    </div>
  )
}
