import Image, { StaticImageData } from 'next/image';
import { FaChevronLeft } from 'react-icons/fa';
import { ActionIcon, Button, Text, Tooltip } from 'rizzui';

export interface ReservationDrawerProps {
  onClose: () => void;
  onSubmit: () => void;
  children?: React.ReactNode;
  title?: string;
  image: StaticImageData;
  onEdit: () => void;
  onConfirmEdit?: () => void;
  onCancelReservation?: () => void;
  isEditing?: boolean;
  isEditMode?: boolean;
}

export const ReservationDrawer: React.FC<ReservationDrawerProps> = ({
  onClose,
  onSubmit,
  onEdit,
  children,
  title,
  image,
  isEditing = false,
  isEditMode,
  onConfirmEdit,
  onCancelReservation,
}) => {
  return (
    <div className="m-auto w-full p-4 md:px-6 md:py-6">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row">
          <Tooltip
            size="sm"
            content="Voltar para a listagem"
            placement="top"
            color="invert"
          >
            <button
              type="button"
              onClick={onClose}
              className="flex items-center"
            >
              <FaChevronLeft />
              <Text className="ml-2 text-sm"> {title}</Text>{' '}
            </button>
          </Tooltip>
        </div>
        {isEditMode && (
          <Tooltip
            size="sm"
            content="Liberar edição na reserva"
            placement="top"
            color="invert"
          >
            <button onClick={onEdit} type="button">
              <Text color="primary" className="ml-2 text-sm">
                Editar
              </Text>
            </button>
          </Tooltip>
        )}
      </div>
      <div className="col-span-full pb-4 pt-4">
        <Image src={image} alt="work-station-img" className="w-full" />
      </div>

      {children}
      <div className="w-full">
        <div className="col-span-full grid grid-cols-2 gap-4 pt-5">
          {!isEditing && !isEditMode && (
            <Button
              variant="outline"
              className="w-full @xl:w-auto dark:hover:border-gray-400"
              onClick={onClose}
            >
              Cancelar
            </Button>
          )}
          {isEditing && isEditMode && (
            <Button
              variant="outline"
              className="w-full @xl:w-auto dark:hover:border-gray-400"
              onClick={onClose}
            >
              Cancelar
            </Button>
          )}
          {isEditMode && !isEditing && (
            <Button
              variant="outline"
              className="w-full @xl:w-auto dark:hover:border-gray-400"
              onClick={onCancelReservation}
            >
              Cancelar Reserva
            </Button>
          )}
          {isEditing && (
            <Button
              className="mt-0 w-full @lg:w-auto"
              onClick={onConfirmEdit}
              type="submit"
            >
              Salvar
            </Button>
          )}
          {!isEditing && !isEditMode && (
            <Button className="mt-0 w-full @lg:w-auto" onClick={onSubmit}>
              Reservar
            </Button>
          )}

          {!isEditing && isEditMode && (
            <Button className="mt-0 w-full @lg:w-auto" onClick={onSubmit}>
              Check-in
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
