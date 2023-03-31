import "~/styles/globals.css";

const Page: React.FC = () => {
  return (
    <div className="grid min-h-full place-items-center">
      <span
        className="block animate-spin text-9xl"
        style={{
          animationDuration: "2s",
        }}
      >
        💩
      </span>
    </div>
  );
};

export default Page;
