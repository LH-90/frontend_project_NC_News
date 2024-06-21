import { useState, useEffect } from "react";

const SortByOrder = ({ sort_by, order, setSortOrder }) => {

  const [selectedSortBy, setSelectedSortBy] = useState(sort_by || "created_at");
  const [selectedOrder, setSelectedOrder] = useState(order || "desc");

  useEffect(() => {
    setSelectedSortBy(sort_by || "created_at");
    setSelectedOrder(order || "desc");
  }, [sort_by, order]);

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSelectedSortBy(selectedSortBy);
    setSortOrder(selectedSortBy, selectedOrder);
  };

  const handleOrderChange = () => {
    const newOrder = selectedOrder === "asc" ? "desc" : "asc";
    setSelectedOrder(newOrder);
    setSortOrder(selectedSortBy, newOrder);
  };

  return (
    <section>
      <div className="sortBy-dropdown">
        <label htmlFor="sort">sort by</label>
        <select id="sort" value={selectedSortBy} onChange={handleSortChange}>
          <option value="created_at">date</option>
          <option value="comment_count">comments</option>
          <option value="votes">votes</option>
        </select>
      </div>

      <div className="order-dropdown">
        <label htmlFor="order"></label>
        <button id="order" onClick={handleOrderChange}>
        {selectedOrder === "asc" ? "▼" : "▲"}
        </button>
      </div>
    </section>
  );
};

export default SortByOrder;
