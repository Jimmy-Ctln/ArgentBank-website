import "./feature-item.css";

export function FeatureItem({ picture, pictureName, title, paragraph }) {
  return (
    <div className="feature-item">
      <img src={picture} alt={pictureName} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
}
