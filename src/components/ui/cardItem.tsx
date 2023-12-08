import { Vehicle } from '@/interfaces/vehicle'
import { DotsThreeVertical } from '@phosphor-icons/react'

interface CardItemProps {
  vehicle: Vehicle
}

export function CardItem({ vehicle }: CardItemProps) {
  return (
    <div className="bg-gray-100 p-5 rounded-lg shadow-md flex flex-col relative overflow-hidden">
      <span
        className={`w-full h-1 bg-gradient-to-r absolute inset-x-0 top-0
          ${
            vehicle.status.toLowerCase() === 'agendado' ||
            vehicle.status.toLowerCase() === 'reagendado'
              ? 'from-green-300 to-green-700'
              : vehicle.status.toLowerCase() === 'pendente'
                ? 'from-orange-300 to-orange-500'
                : vehicle.status.toLowerCase() === 'reprovado'
                  ? 'from-pink-700 to-red-700'
                  : ''
          }
        `}
      ></span>
      <h4 className="flex justify-between items-center mt-3">
        <span className="">{vehicle.plate}</span>
        <DotsThreeVertical className="w-5 h-5 text-gray-500" />
      </h4>

      <div>
        <span className="text-gray-500">{vehicle.clientName}</span>
      </div>

      <div className="mt-4 flex text-xs justify-between items-center w-full gap-5">
        <div className="bg-red-600 text-white rounded-lg p-1">00:01</div>
        <div className="flex justify-between items-center rounded-lg p-1 bg-white gap-2">
          <span>TOTAL</span>
          <span>|</span>
          <span>00:01</span>
        </div>
      </div>
    </div>
  )
}
