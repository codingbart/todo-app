import { Link } from 'react-router'
import { Plus, ClipboardList } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EmptyState } from '@/components/ui/EmptyState'
import { TaskFilters } from './TaskFilters'

export function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Tasks</h1>
          <p className="text-sm text-muted-foreground">Manage your tasks</p>
        </div>
        <Link to="/tasks/new">
          <Button>
            <Plus className="h-4 w-4" />
            New Task
          </Button>
        </Link>
      </div>

      <TaskFilters />

      <EmptyState
        icon={<ClipboardList className="h-12 w-12" />}
        title="No tasks found"
        description="Create your first task to get started"
        action={
          <Link to="/tasks/new">
            <Button>
              <Plus className="h-4 w-4" />
              New Task
            </Button>
          </Link>
        }
      />
    </div>
  )
}
