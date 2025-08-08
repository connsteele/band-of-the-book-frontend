import style from "../styles/RatingMeter.module.css"

const RatingMeter = ({ score }) => {
    const maxRating = 5.0;
    const emptyPercent = 100 - (score / maxRating) * 100;

    return (
        <div className={style["meter-bg"]}>
            <div className={style["meter-empty"]} style={{ "--empty-percent": `${emptyPercent}%` }}>
            </div>
            <span className={style.score}>{score.toFixed(2)}</span>
        </div>
    )
};

export default RatingMeter;