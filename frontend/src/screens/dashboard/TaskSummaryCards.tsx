import { ListTodo, Clock, CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const cards = [
  {
    key: 'todo',
    label: 'To Do',
    icon: ListTodo,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    key: 'inProgress',
    label: 'In Progress',
    icon: Clock,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    key: 'done',
    label: 'Done',
    icon: CheckCircle2,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
]

export function TaskSummaryCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.key}>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {card.label}
                </p>
                <p className="mt-1 text-3xl font-bold text-foreground">0</p>
              </div>
              <div className={`rounded-lg p-3 ${card.bg}`}>
                <card.icon className={`h-6 w-6 ${card.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
