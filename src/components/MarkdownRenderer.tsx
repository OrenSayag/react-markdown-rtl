import { ComponentPropsWithoutRef, FC } from "react";
import classNames from "classnames";
import { mdToHtml } from "../services/markdown.service";

interface Props extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  dir: "rtl" | "ltr";
  content: string;
}

const MarkdownRenderer: FC<Props> = ({ className, content, dir, ...props }) => {
  return (
    <>
      <div
        className={classNames(
          className,
        )}
        style={{textAlign: dir === "rtl" ? "right" : "left"}}
        dir={dir}
        dangerouslySetInnerHTML={{ __html: mdToHtml(content) }}
        {...props}
      />
    </>
  );
};

export default MarkdownRenderer;
