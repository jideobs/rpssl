import React from 'react';


const scoreBoard = ({ scores = [], resetScoreFn }) => {
    let scoreBoardModal = (
        <div className="modal fade" id="scoreBoardModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="scoreBoardModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="scoreBoardModalLabel">Score Board</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Player</th>
                                    <th>Computer</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scores.map((result, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{result.player}</td>
                                            <td>{result.computer}</td>
                                            <td>{result.results}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" disabled={scores.length === 0} onClick={resetScoreFn}>Reset</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#scoreBoardModal">Score Board</button>
            {scoreBoardModal}
        </div>
    );
}

export default scoreBoard;
