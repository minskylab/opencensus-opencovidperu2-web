import { format } from "date-fns";
import { es } from "date-fns/locale";

interface IDatePlaceInformation {}

const DatePlaceInformation: React.FC<IDatePlaceInformation> = () => {
  return (
    <div>
      <p>{format(new Date(), "EEEE dd-MM-yyyy", { locale: es })}</p>
      lima, lima, Perú
    </div>
  );
};

export default DatePlaceInformation;
