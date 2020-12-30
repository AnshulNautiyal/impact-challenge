import React from 'react';

const Buttons = ({
    shortList="",
    reject="",
    handleShortlist,
    handleReject
}) => {
    return (
        <div className="buttons">
            <button type="button" onClick={handleShortlist}>{shortList}</button>
            <button type="button" onClick={handleReject}>{reject}</button>
        </div>
    )
}

export default Buttons;