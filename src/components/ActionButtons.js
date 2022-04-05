import React from "react";

const NUMBER_OF_PAGES = 3;

function ActionButtons({ currentPageId, setCurrentPageId }) {
  // Helpers and handlers
  const goToPrevPage = () => {
    if (currentPageId > 0) setCurrentPageId(currentPageId - 1);
  };
  const goToNextPage = () => {
    if (currentPageId < NUMBER_OF_PAGES - 1) setCurrentPageId(currentPageId + 1);
  };

  // Component
  return (
    <div className="action-buttons-container">
      <button className="action-button action-button-back" type="button" onClick={goToPrevPage}>
        Späť
      </button>
      <button className="action-button action-button-next" type="button" onClick={goToNextPage}>
        Pokračovať
      </button>
    </div>
  );
}

export default ActionButtons;
