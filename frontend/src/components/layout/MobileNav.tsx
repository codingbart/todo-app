import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'
import { Sidebar } from './Sidebar'
import { Button } from '@/components/ui/button'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-y-0 left-0 z-50 lg:hidden"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <Sidebar />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute right-2 top-4"
            >
              <X className="h-5 w-5" />
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
