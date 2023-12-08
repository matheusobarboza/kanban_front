import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Vehicle } from '@/interfaces/vehicle'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  vehicle: Vehicle
}

export function VehicleModal({ isOpen, onClose, vehicle }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-lg border-transparent">
        <DialogHeader className="flex justify-between items-start">
          <DialogTitle className="flex gap-3">
            <span>{vehicle?.plate}</span>
            <span>|</span>
            <span>{vehicle?.status}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-5 font-semibold">{vehicle?.clientName}</div>
        <div className="flex items-center justify-start gap-5 mt-6">
          <div className="bg-gradient-to-r from-orange-300 to-orange-400 p-2 rounded-xl text-white">
            {vehicle?.technology}
          </div>
          <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 p-2 rounded-xl text-white">
            {vehicle?.linkCategory}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
