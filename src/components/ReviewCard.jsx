import PropTypes from "prop-types";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";

const rating = new Array(5);

rating.fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL"1' },
});

const ReviewCard = ({ content, name, imgSrc, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {rating.map(({ icon, style }, key) => (
          <span key={key} className="text-yellow-300 text-xs" >
            <StarPurple500SharpIcon />
          </span>
        ))}
      </div>

      <p className="text-zinc-400 mb-8">{content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            className="img-cover"
            width={44}
            height={44}
            loading="lazy"
            alt={name}
            srcset=""
          />
        </figure>
        <div>
            <p>{name}</p>
            <p className="text-xs text-zinc-400 tracking-wider">
                {company}
            </p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propType = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string,
};
export default ReviewCard;
