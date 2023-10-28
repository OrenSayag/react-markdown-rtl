import { ComponentPropsWithoutRef, FC } from "react";
import classNames from "classnames";
import EditorTextDirSwitch from "./EditorTextDirSwitch";

interface Props extends ComponentPropsWithoutRef<"textarea"> {
  className?: string;
  onSwitchDir: () => void;
  isRtl: boolean;
}

const Editor: FC<Props> = ({ className, isRtl, onSwitchDir, ...props }) => {
  return (
    <div>
      <EditorTextDirSwitch onSwitchDir={onSwitchDir} isRtl={isRtl} />
      <textarea
        dir={isRtl ? "rtl" : "ltr"}
        className={classNames(className)}
        {...props}
      />
    </div>
  );
};

export default Editor;
