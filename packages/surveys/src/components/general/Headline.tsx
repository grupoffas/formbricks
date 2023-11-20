interface HeadlineProps {
  headline?: string;
  questionId: string;
  style?: any;
  required?: boolean;
  className?: string;
}
export default function Headline({
  headline,
  questionId,
  style,
  required = true,
  className = "",
}: HeadlineProps) {
  return (
    <label
      htmlFor={questionId}
      className="text-heading mb-1.5 block text-base font-semibold leading-6"
      style={style}>
      <div
        className={`flex items-center  ${className}`}
        style={style}>
        {headline}
        {!required && (
          <span className="text-info-text self-start	text-sm font-normal leading-7" tabIndex={-1}>
            Optional
          </span>
        )}
      </div>
    </label>
  );
}
}
