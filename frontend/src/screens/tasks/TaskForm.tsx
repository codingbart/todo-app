import { useNavigate, useParams } from 'react-router'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { TASK_STATUS_LABELS, TASK_PRIORITY_LABELS } from '@/lib/constants'

const statusOptions = Object.entries(TASK_STATUS_LABELS).map(
  ([value, label]) => ({
    value,
    label,
  }),
)

const priorityOptions = Object.entries(TASK_PRIORITY_LABELS).map(
  ([value, label]) => ({
    value,
    label,
  }),
)

export function TaskForm() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const isEdit = !!id

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold text-foreground">
        {isEdit ? 'Edit Task' : 'New Task'}
      </h1>

      <Card>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              navigate('/tasks')
            }}
            className="space-y-5"
          >
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter task title" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                rows={4}
                placeholder="Enter task description (optional)"
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label>Status</Label>
                <Select defaultValue="TODO">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Priority</Label>
                <Select defaultValue="MEDIUM">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priorityOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input id="dueDate" type="date" />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {isEdit ? 'Update Task' : 'Create Task'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
