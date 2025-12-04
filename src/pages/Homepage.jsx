import { useEffect, useState } from "react";
import FilterBar from "../components/Filterbar.jsx";
import SpotCard from "../components/Spotcard.jsx";
import { mockSpots } from "../data/spots.js";

function HomePage() {
  const [spots, setSpots] = useState([]);
  const [filters, setFilters] = useState({
    quietOnly: false,
    hasOutlets: false,
    lowCrowd: false,
  });

  // Simulate fetch (in future: replace with Firestore call)
  useEffect(() => {
    const timeout = setTimeout(() => setSpots(mockSpots), 300);
    return () => clearTimeout(timeout);
  }, []);

  const handleToggleFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredSpots = spots.filter((spot) => {
    if (filters.quietOnly && spot.currentNoise !== "quiet") return false;
    if (filters.lowCrowd && spot.currentOccupancy !== "low") return false;
    if (
      filters.hasOutlets &&
      !spot.amenities.some((a) => a.toLowerCase().includes("outlet"))
    )
      return false;
    return true;
  });

  return (
    <section className="page home-page">
      <h1>Find a quiet place to study</h1>

      <FilterBar filters={filters} onToggle={handleToggleFilter} />

      {filteredSpots.length === 0 ? (
        <p className="empty-state">
          No spots match your filters yet. Try turning a few off.
        </p>
      ) : (
        <div className="spot-list">
          {filteredSpots.map((spot) => (
            <SpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;
