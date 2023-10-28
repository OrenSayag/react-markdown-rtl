import { ComponentPropsWithoutRef, FC } from "react";
import classNames from "classnames";
import Switch from "./ui/Switch.jsx";

interface Props extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  isRtl: boolean;
  onSwitchDir: () => void;
}

const EditorTextDirSwitch: FC<Props> = ({
  className,
  isRtl,
  onSwitchDir,
  ...props
}) => {
  return (
    <>
      <div style={{display: 'flex', gap: 2}} className={classNames(className)} {...props}>
        <Switch value={isRtl} onChange={onSwitchDir} />
        <h5>RTL</h5>
      </div>
    </>
  );
};

export default EditorTextDirSwitch;
