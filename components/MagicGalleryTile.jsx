export default function MagicGalleryTile(props) {
  return (
    <>
      <div
        className="relative flex shrink-0 h-full"
        style={{ width: `${(props.width / 4) * 100}%`, aspectRatio: `${props.width} / 1`}}
      >
        { props.children }
      </div>
    </>
  );
}
