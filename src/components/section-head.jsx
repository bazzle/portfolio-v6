import propTypes from "prop-types";

function SectionHead({titleString = 'Section title'}){
    return (
        <div className="section-head">
            <h2 className="section-head__title text-section-title">{titleString}</h2>
        </div>
    )
}

SectionHead.propTypes = {
    titleString : propTypes.string
}

export default SectionHead;