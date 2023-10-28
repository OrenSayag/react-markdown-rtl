import { ComponentPropsWithoutRef, FC } from "react";
import classNames from "classnames";

interface Props extends ComponentPropsWithoutRef<"textarea"> {
  className?: string;
  isRtl: boolean;
}

const Editor: FC<Props> = ({ className, isRtl,  ...props }) => {
  return (
    <div>
      <textarea
        dir={isRtl ? "rtl" : "ltr"}
        className={classNames(className)}
        {...props}
      />
    </div>
  );
};

export default Editor;
