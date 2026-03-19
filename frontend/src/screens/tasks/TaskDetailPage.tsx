import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { EmptyState } from '@/components/ui/EmptyState'

export function TaskDetailPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <Link
          to="/tasks"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to tasks
        </Link>
      </div>

      <EmptyState
        icon={<ArrowLeft className="h-12 w-12" />}
        title="Task not found"
        description="Connect a backend to view task details"
      />
    </div>
  )
}
