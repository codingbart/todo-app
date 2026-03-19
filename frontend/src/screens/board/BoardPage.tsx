import { BoardColumn } from './BoardColumn'
import {
  TASK_STATUS,
  TASK_STATUS_LABELS,
  type TaskStatus,
} from '@/lib/constants'

const columns: TaskStatus[] = [
  TASK_STATUS.TODO,
  TASK_STATUS.IN_PROGRESS,
  TASK_STATUS.DONE,
]

export function BoardPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-foreground">Board</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {columns.map((status) => (
          <BoardColumn
            key={status}
            status={status}
            label={TASK_STATUS_LABELS[status]}
          />
        ))}
      </div>
    </div>
  )
}
