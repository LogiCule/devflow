import Image from "next/image";
import Link from "next/link";

interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  imgStyles?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  imgStyles = "",
  isAuthor,
}: Props) => {
  const commonStyle = "flex-center gap-1";
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`rounded-full object-contain ${imgStyles}`}
      />

      <p className={`${textStyles} flex items-center gap-1`}>{value}</p>
      <span
        className={`small-regular line-clamp-1 ${
          isAuthor ? "max-sm:hidden" : ""
        }`}
      >
        {title}
      </span>
    </>
  );
  return href ? (
    <Link className={commonStyle} href={href}>
      {metricContent}
    </Link>
  ) : (
    <div className={commonStyle}>{metricContent}</div>
  );
};

export default Metric;
