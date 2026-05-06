export default function Button({
  buttonText,
  onClick,Plus
}: {
  buttonText: string;
  onClick?: () => void;
  Plus?: React.ReactNode;
}) {
  return (
    <>
      <style>{`
                @keyframes shine {
                    0% {
                        background-position: 0% 50%;
                    }
            
                    50% {
                        background-position: 100% 50%;
                    }
            
                    100% {
                        background-position: 0% 50%;
                    }
                }
            
                .button-bg {
                    background: conic-gradient(from 0deg, #00F5FF, #FF00C7, #FFD700, #00FF85, #8A2BE2, #00F5FF);
                    background-size: 300% 300%;
                    animation: shine 4s ease-out infinite;
                }
            `}</style>
      <div className="button-bg rounded-xl p-1 hover:scale-105 transition duration-300 active:scale-100 ">
        <button
          className="cursor-pointer w-full flex justify-center items-center gap-2 text-sm py-2.5 text-white rounded-xl font-medium bg-gray-800"
          onClick={onClick}
        >
          {buttonText} {Plus}
        </button>
      </div>
    </>
  );
}
