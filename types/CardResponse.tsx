import VariantType from "./VariantType";
type CardResponse = {
  name: string;
  link: string;
  image: string;
  variants: VariantType[];
};
export default CardResponse;
