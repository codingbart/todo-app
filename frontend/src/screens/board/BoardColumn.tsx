import { Badge } from '@/components/ui/badge'
import type { TaskStatus } from '@/lib/constants'

interface BoardColumnProps {
  status: TaskStatus
  label: string
}

const statusConfig: Record<
  TaskStatus,
  {
    variant: 'default' | 'warning' | 'success'
    color: string
  }
> = {
  TODO: { variant: 'default', color: 'border-t-primary' },
  IN_PROGRESS: { variant: 'warning', color: 'border-t-amber-500' },
  DONE: { variant: 'success', color: 'border-t-emerald-500' },
}

export function BoardColumn({ status, label }: BoardColumnProps) {
  const config = statusConfig[status]

  return (
    <div
      className={`flex min-h-[200px] flex-col rounded-lg border border-border border-t-4 bg-card/50 ${config.color}`}
    >
      <div className="flex items-center justify-between p-4 pb-2">
        <h3 className="text-sm font-semibold text-foreground">{label}</h3>
        <Badge variant={config.variant}>0</Badge>
      </div>

      <div className="flex-1 p-3">
        <p className="text-center text-xs text-muted-foreground">No tasks</p>
      </div>
    </div>
  )
}
