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
          <DialogTitle className="flex items-center gap-3">
            <span className="text-zinc-400">{vehicle?.plate}</span>
            <span>|</span>
            <div
              className={`p-2 rounded-xl text-white bg-gradient-to-r ${
                vehicle?.status.toLowerCase() === 'agendado' ||
                vehicle?.status.toLowerCase() === 'reagendado' ||
                vehicle?.status.toLowerCase() === 'aprovado'
                  ? 'from-green-300 to-green-700'
                  : vehicle?.status.toLowerCase() === 'pendente'
                    ? 'from-orange-300 to-orange-500'
                    : vehicle?.status.toLowerCase() === 'reprovado'
                      ? 'from-pink-700 to-red-700'
                      : ''
              }`}
            >
              {vehicle?.status}
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-5 font-semibold">{vehicle?.clientName}</div>
        <div className="flex items-center justify-start gap-5 mt-6">
          <div className="border border-zinc-600 p-2 rounded-xl text-zinc-600">
            {vehicle?.technology}
          </div>
          <div className="border border-zinc-600 p-2 rounded-xl text-zinc-600">
            {vehicle?.linkCategory}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
