import { useSearchParams } from 'react-router'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { TASK_STATUS_LABELS, TASK_PRIORITY_LABELS } from '@/lib/constants'

const statusOptions = [
  { value: '_all', label: 'All statuses' },
  ...Object.entries(TASK_STATUS_LABELS).map(([value, label]) => ({
    value,
    label,
  })),
]

const priorityOptions = [
  { value: '_all', label: 'All priorities' },
  ...Object.entries(TASK_PRIORITY_LABELS).map(([value, label]) => ({
    value,
    label,
  })),
]

export function TaskFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get('search') ?? ''
  const status = searchParams.get('status') ?? '_all'
  const priority = searchParams.get('priority') ?? '_all'

  const updateParam = (key: string, value: string) => {
    setSearchParams((prev) => {
      if (value && value !== '_all') {
        prev.set(key, value)
      } else {
        prev.delete(key)
      }
      prev.delete('page')
      return prev
    })
  }

  const clearFilters = () => setSearchParams({})
  const hasFilters =
    search || (status && status !== '_all') || (priority && priority !== '_all')

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => updateParam('search', e.target.value)}
          className="pl-9"
        />
      </div>
      <Select value={status} onValueChange={(v) => updateParam('status', v)}>
        <SelectTrigger className="w-full sm:w-40">
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
      <Select
        value={priority}
        onValueChange={(v) => updateParam('priority', v)}
      >
        <SelectTrigger className="w-full sm:w-40">
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
      {hasFilters && (
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          <X className="h-4 w-4" />
          Clear
        </Button>
      )}
    </div>
  )
}
