import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function SubmitUpdatePage() {
  const { spotId } = useParams();
  const navigate = useNavigate();

  const [occupancy, setOccupancy] = useState("medium");
  const [noise, setNoise] = useState("moderate");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later: add Firestore write here
    console.log("Submitting update", {
      spotId,
      occupancy,
      noise,
      notes,
      createdAt: new Date().toISOString(),
    });

    navigate(`/spots/${spotId}`);
  };

  return (
    <section className="page">
      <Link to={`/spots/${spotId}`}>← Back to spot</Link>
      <h1>Submit an Update</h1>

      <form className="update-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>How busy is it right now?</legend>
          <label>
            <input
              type="radio"
              name="occupancy"
              value="low"
              checked={occupancy === "low"}
              onChange={(e) => setOccupancy(e.target.value)}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              name="occupancy"
              value="medium"
              checked={occupancy === "medium"}
              onChange={(e) => setOccupancy(e.target.value)}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="occupancy"
              value="high"
              checked={occupancy === "high"}
              onChange={(e) => setOccupancy(e.target.value)}
            />
            High
          </label>
        </fieldset>

        <fieldset>
          <legend>How loud is it?</legend>
          <label>
            <input
              type="radio"
              name="noise"
              value="quiet"
              checked={noise === "quiet"}
              onChange={(e) => setNoise(e.target.value)}
            />
            Quiet
          </label>
          <label>
            <input
              type="radio"
              name="noise"
              value="moderate"
              checked={noise === "moderate"}
              onChange={(e) => setNoise(e.target.value)}
            />
            Moderate
          </label>
          <label>
            <input
              type="radio"
              name="noise"
              value="loud"
              checked={noise === "loud"}
              onChange={(e) => setNoise(e.target.value)}
            />
            Loud
          </label>
        </fieldset>

        <label className="notes-label">
          Any details? (optional)
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g., only bar seats left, lots of group talking."
          />
        </label>

        <button type="submit" className="primary-button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default SubmitUpdatePage;
