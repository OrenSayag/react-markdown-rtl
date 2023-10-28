import { ComponentPropsWithoutRef, FC } from "react";
import classNames from "classnames";

interface Props extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  value: boolean;
}

const Switch: FC<Props> = ({ className, value, onChange, ...props }) => {
  return (
    <>
      <div className={classNames(className)} {...props}>
        <input type={"checkbox"} checked={value} onChange={onChange} />
      </div>
    </>
  );
};

export default Switch;
