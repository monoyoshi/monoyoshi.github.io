export function HR({ position = "left", width = "100%", pTop = "11px", pBottom = pTop, bThick = "2px", bColor = "var(--black)" }) {
    let jc;
    if (position == "left") jc = "flex-start";
    else if (position == "right") jc = "flex-end";
    else jc = "center";

    return (
        <div className="hrbreak" style={{justifyContent: jc, paddingTop: pTop, paddingBottom: pBottom}}>
            <div className="hr" style={{width: width, borderTop: `${bThick} solid ${bColor}`}} />
        </div>
    );
};

export function VR({ height = "64px", pLeft = "0", pRight = pLeft, bThick = "2px", bColor = "var(--black)" }) {
    return (
        <div className="vr" style={{height: height, paddingLeft: pLeft, paddingRight: pRight, borderRight: `${bThick} solid ${bColor}`}} />
    );
};