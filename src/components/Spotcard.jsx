import { Link } from "react-router-dom";
import { FiUsers, FiWifi, FiZap, FiVolumeX, FiVolume2, FiVolume } from "react-icons/fi";

function formatOccupancy(level) {
  if (level === "low") return "Low crowd";
  if (level === "medium") return "Moderate";
  if (level === "high") return "Very busy";
  return "Unknown";
}

function getNoiseIcon(noise) {
  if (noise === "quiet") return <FiVolumeX />;
  if (noise === "moderate") return <FiVolume2 />;
  if (noise === "loud") return <FiVolume />;
  return <FiVolume2 />;
}

function SpotCard({ spot }) {
  const hasWifi = spot.amenities.some((a) =>
    a.toLowerCase().includes("wi-fi")
  );
  const hasOutlets = spot.amenities.some((a) =>
    a.toLowerCase().includes("outlet")
  );

  return (
    <Link to={`/spots/${spot.id}`} className="spot-card">
      <div className="spot-card-main">
        <h2>{spot.name}</h2>
        <p className="spot-address">{spot.address}</p>

        <div className="spot-meta-row">
          {hasWifi && (
            <span className="icon-label">
              <FiWifi /> Wi-Fi
            </span>
          )}
          {hasOutlets && (
            <span className="icon-label">
              <FiZap /> Outlets
            </span>
          )}
          <span className="icon-label">
            {getNoiseIcon(spot.currentNoise)} {spot.currentNoise}
          </span>
        </div>
      </div>

      <div className="spot-card-status">
        <span className={`badge badge-${spot.currentOccupancy}`}>
          <FiUsers style={{ marginRight: "4px" }} />
          {formatOccupancy(spot.currentOccupancy)}
        </span>
        <p className="spot-updated">
          Updated {spot.lastUpdatedMinutesAgo} min ago
        </p>
      </div>
    </Link>
  );
}

export default SpotCard;
