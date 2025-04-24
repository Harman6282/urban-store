import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  if (typeof value !== "number") {
    value = Number(value);
  }
  const stringValue = value.toFixed(2);

  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-lg", className)}>
      <span className=" align-super">$</span>
      <span className=" align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
