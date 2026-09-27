export function Card({ children, className = '', as: Component = 'article', ...props }) {
  return (
    <Component className={`card ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
