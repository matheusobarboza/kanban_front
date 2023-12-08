import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Vehicle } from '@/interfaces/vehicle'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  vehicle: Vehicle
}

export function VehicleModal({ isOpen, onClose, vehicle }: ModalProps) {
  console.log('vehi', vehicle)
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-lg border-transparent">
        <DialogHeader className="flex justify-between items-start">
          <DialogTitle>{vehicle?.plate}</DialogTitle>
        </DialogHeader>

        <div className="mt-5 font-semibold">{vehicle?.clientName}</div>
        <div className="flex items-center justify-between mt-6">
          <div className="bg-gradient-to-r from-orange-300 to-orange-400 p-2 rounded-xl text-white">
            {vehicle?.technology}
          </div>
          <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 p-2 rounded-xl text-white">
            {vehicle?.linkCategory}
          </div>
          <div className="bg-gradient-to-r from-lime-300 to-lime-400 p-2 rounded-xl text-white">
            {vehicle?.status}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
