import { Link, useParams } from "react-router-dom";
import { mockSpots } from "../data/spots.js";
import {
  FiUsers,
  FiWifi,
  FiZap,
  FiMapPin,
  FiClock,
  FiVolumeX,
  FiVolume2,
  FiVolume,
} from "react-icons/fi";

function getNoiseLabel(noise) {
  if (noise === "quiet") return "Quiet, good for focus";
  if (noise === "moderate") return "Moderate, light chatter";
  if (noise === "loud") return "Loud, café buzz";
  return noise;
}

function getNoiseIcon(noise) {
  if (noise === "quiet") return <FiVolumeX />;
  if (noise === "moderate") return <FiVolume2 />;
  if (noise === "loud") return <FiVolume />;
  return <FiVolume2 />;
}

function SpotDetailPage() {
  const { spotId } = useParams();
  const spot = mockSpots.find((s) => s.id === spotId);

  if (!spot) {
    return (
      <section className="page">
        <p>Spot not found.</p>
        <Link to="/">← Back to home</Link>
      </section>
    );
  }

  const hasWifi = spot.amenities.some((a) =>
    a.toLowerCase().includes("wi-fi")
  );
  const hasOutlets = spot.amenities.some((a) =>
    a.toLowerCase().includes("outlet")
  );

  return (
    <section className="page">
      <Link to="/">← Back</Link>

      <header className="spot-header">
        <h1>{spot.name}</h1>
        <p className="spot-address">
          <FiMapPin style={{ marginRight: "4px" }} />
          {spot.address}
        </p>
      </header>

      <section className="spot-status">
        <h2>
          <FiUsers style={{ marginRight: "6px" }} />
          Crowd: {spot.currentOccupancy}
        </h2>
        <p className="status-line">
          {getNoiseIcon(spot.currentNoise)} {getNoiseLabel(spot.currentNoise)}
        </p>
        <p className="status-line">
          <FiClock style={{ marginRight: "6px" }} />
          Updated {spot.lastUpdatedMinutesAgo} min ago
        </p>
      </section>

      <section className="spot-amenities">
        <h3>Vibes & Amenities</h3>
        <div className="spot-meta-row">
          {hasWifi && (
            <span className="icon-label">
              <FiWifi /> Reliable Wi-Fi
            </span>
          )}
          {hasOutlets && (
            <span className="icon-label">
              <FiZap /> Plenty of outlets
            </span>
          )}
        </div>
        <ul>
          {spot.amenities.map((a) => (
            <li key={a}>• {a}</li>
          ))}
        </ul>
      </section>

      <section className="spot-updates-placeholder">
        <h3>Latest User Updates</h3>
        <p>Coming soon: real-time updates from other students ☕</p>
      </section>

      <Link to={`/spots/${spot.id}/update`} className="primary-button">
        + Submit an Update
      </Link>
    </section>
  );
}

export default SpotDetailPage;
