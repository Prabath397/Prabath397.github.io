export function Button({
  children,
  variant = 'primary',
  href,
  download,
  target,
  rel,
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  const variantClass = `button-${variant}`;
  const combinedClasses = `button ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
