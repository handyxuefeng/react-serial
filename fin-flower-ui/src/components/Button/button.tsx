import React, { HtmlHTMLAttributes } from "react";
import classNames from "classnames";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

//定义按钮的属性的接口约束
interface BaseButtonProps {
  className?: string;

  /**设置 Button 的禁用 */
  disabled?: boolean;

  /**设置 Button 的尺寸 */
  size?: ButtonSize;

  /**设置 Button 的类型 */
  btnType?: ButtonType;

  children: React.ReactNode;
  href?: string;
}

//增加按钮的事件和原生属性,利用 & 计算符，把多个类型合并为一个新的类型
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;

//获取链接标签上的原生属性，,利用 & 计算符，把多个类型合并为一个新的类型
type NativeAnchorProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

//通过Partial<T> 运算符把 NativeButtonProps & NativeAnchorProps 结合只有的属性变成可选的
export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;

//定义一个Button的函数式组件
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className, //用户自定义的属性
    disabled,
    size,
    btnType,
    children,
    href,
    ...restProps //展开所有的原生属性
  } = props;

  /**
   * btn, btn-lg, btn-primary
   * className 表示用户自定义的属性
   */
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;
